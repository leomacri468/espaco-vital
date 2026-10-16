"use client";

import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FireIcon } from "@phosphor-icons/react";
export function Plans() {
  const plans = [
    {
      name: "Pilates em Aparelho",
      quant: 1,
      value: 190,
      hot: false,
    },
    {
      name: "Pilates em Aparelho",
      quant: 2,
      value: 390,
      hot: true,
    },
    {
      name: "Pilates em Aparelho",
      quant: 3,
      value: 430,
      hot: false,
    },
    {
      name: "Treinamento Funcional",
      quant: 2,
      value: 220,
      hot: false,
    },
    {
      name: "Treinamento Funcional",
      quant: 3,
      value: 290,
      hot: false,
    },
    {
      name: "Combo Pilates + Funcional",
      quant: "2 Pilates + 1 funcional",
      value: 390,
      hot: false,
    },
  ];

  return (
    <section className="bg-[#2D5A46] py-16" id="plans">
      <div className="container px-4 mx-auto">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#F7F6F2] m-6">
          Nossos Planos
        </p>
        <h2 className="font-heading text-4xl font-bold text-[#F7F6F2] m-10">
          Escolha o ritmo que combina com&nbsp;
          <span className="text-[#D9A588] underline">você.</span>
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {plans.map((plan, index) => (
            <Card
              key={`${plan.name}-${plan.quant}`}
              className={cn(
                "h-full items-center text-center transition-colors",
                plan.hot
                  ? "relative z-10 border-[#242424]/50 bg-[#D9A588] text-white shadow-2xl shadow-[#2D5A46]/40 ring-2 ring-[#242424] lg:-translate-y-2 lg:scale-105"
                  : "bg-[#F7F6F2] shadow-sm hover:-translate-y-1 hover:shadow-lg ease-in-out",
              )}
            >
              <CardHeader className="flex w-full flex-col items-center gap-2 text-center">
                {plan.hot && (
                  <CardAction className="self-end">
                    <Badge className="bg-red-400 text-white uppercase">
                      Mais Popular <FireIcon />
                    </Badge>
                  </CardAction>
                )}
                <CardTitle
                  className={plan.hot ? "text-white" : "text-[#2D5A46]"}
                >
                  <h2 className="text-2xl">{plan.name}</h2>
                </CardTitle>
                <CardDescription
                  className={plan.hot ? "text-white/80" : undefined}
                >
                  {typeof plan.quant === "number"
                    ? `${plan.quant}x por semana`
                    : plan.quant}
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto flex w-full flex-col items-center gap-4">
                <span className="text-2xl font-bold">
                  R${plan.value}
                  <span className="text-sm opacity-70">/mês</span>
                </span>
                <Button
                  className={cn(
                    "w-full",
                    plan.hot
                      ? "bg-[#1E4032] text-white hover:bg-[#3B7359]"
                      : "bg-[#2D5A46] text-white hover:bg-[#24493A]",
                  )}
                >
                  <a href="#trial_form" className="w-full">
                    Escolher
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
