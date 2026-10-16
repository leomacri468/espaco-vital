"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";

import { Input } from "@/components/ui/input";

import { Label } from "../ui/label";

import { Calendar } from "@/components/ui/calendar";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "../ui/textarea";

import { WhatsappLogoIcon } from "@phosphor-icons/react";
import { finishPrerenderDataTracking } from "next/dist/server/dynamic-rendering-utils";

export function BookingDialog() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [modality, setModality] = useState("");
  const [observation, setObservation] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  function handleBooking() {
    if (!name || !phone || !modality || !selectedDate || !selectedTime) {
      alert("Preencha todos os campos!");
      return;
    }

    const formattedDate = selectedDate.toLocaleDateString("pt-BR");
    const message = `
    Olá! Gostaria de solicitar uma aula experimental no Espaço Vital.
    
    *Nome:* ${name}
    *Telefone:* ${phone}
    *Modalidade:* ${modality}
    *Data desejada:* ${formattedDate}
    *Horário desejado*: ${selectedTime}
    *Observações:* ${observation.trim() || "Nenhuma"}
    `.trim();

    const whatsappNumber = "55119999999";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  const availableTimes = selectedDate
    ? selectedDate.getDay() === 6
      ? ["09:00", "10:00", "11:00", "12:00"]
      : [
          ...Array.from(
            { length: 6 },
            (_, i) => `${String(i + 7).padStart(2, "0")}:00`,
          ),
          ...Array.from(
            { length: 8 },
            (_, i) => `${String(i + 14).padStart(2, "0")}:00`,
          ),
        ]
    : [];
  const [selectedTime, setSelectedTime] = useState("");
  return (
    <Dialog>
      <DialogTrigger className="inline-flex items-center justify-center rounded-md bg-[#163527] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#24493A] cursor-pointer">
        Agendar aula experimental
      </DialogTrigger>

      <DialogContent className="max-h-[90dvh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-[#2D5A46] font-serif text-2xl text-center">
            Agende sua Aula Experimental
          </DialogTitle>
          <DialogDescription>
            Preencha seus dados para solicitar uma aula experimental.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              placeholder="Seu nome completo"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Seu telefone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(11) 99999-9999"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="modality">Modalidade desejada</Label>
            <Select
              value={modality}
              onValueChange={(value) => setModality(value ?? "")}
            >
              <SelectTrigger id="modality">
                <SelectValue placeholder="Selecione a modalidade" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="Pilates em aparelhos">
                  Pilates em aparelhos
                </SelectItem>
                <SelectItem value="Treinamento funcional">
                  Treinamento funcional
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="observation">
              Observações (opcional) - max. de 200 caracteres.
            </Label>
            <Textarea
              id="observation"
              placeholder="Deseja informar algo à equipe?"
              value={observation}
              onChange={(event) => setObservation(event.target.value)}
              maxLength={200}
              className="w-full whitespace-pre-wrap wrap-break-word resize-none"
              rows={4}
            />
          </div>
          <div className="space-y-2">
            <Label>Escolha a data desejada</Label>
            <div className="rounded-md border justify-center content-center flex">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => {
                  setSelectedDate(date);
                  setSelectedTime("");
                }}
                disabled={(date) => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  return date < today || date.getDay() === 0;
                }}
              />
            </div>
            {selectedDate && (
              <p className="text-sm text-muted-foreground">
                Data selecionada: {selectedDate.toLocaleDateString("pt-BR")}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label>Escolha o horário desejado</Label>

            <div className="grid grid-cols-3 gap-2">
              {availableTimes.map((time) => (
                <Button
                  key={time}
                  type="button"
                  variant={selectedTime === time ? "default" : "outline"}
                  onClick={() => setSelectedTime(time)}
                  className={
                    selectedTime === time
                      ? "bg-[#2D5A46] text-white hover:bg-[#24493A]"
                      : ""
                  }
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
          <Button
            type="button"
            onClick={handleBooking}
            className="w-full bg-[#2D5A46] text-white hover:bg-[#24493A] cursor-pointer"
          >
            <WhatsappLogoIcon size={20} className="mr-2" />
            Solicitar aula pelo WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
