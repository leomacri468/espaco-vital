import Image from "next/image";
import both from "../../../public/img_both.webp";
import { Check } from "lucide-react";
import {
  ArrowRightIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
export function About() {
  return (
    <section className="bg-[#F7F6F2] py-16" id="about">
      <div className="container px-4 mx-auto">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#2D5A46] m-6">
          Sobre a Espaço Vital
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-100 rounded-3xl overflow-hidden">
            <Image
              src={both}
              alt="Imagem das duas instrutoras."
              fill
              quality={100}
              priority
              className="object-cover hover:scale-110 duration-300"
            />
          </div>
          <div className="space-y-6 mt-10">
            <h2 className="font-heading text-4xl font-bold text-[#2D5A46]">
              Movimento com propósito, cuidado com
              <span className="text-[#D9A588]"> presença</span>
            </h2>
            <p>
              No Espaço Vital, as fisioterapeutas e instrutoras Camila e Mariana
              unem Pilates em Aparelhos e Treinamento Funcional em um ambiente
              acolhedor e humanizado. Com turmas de até 4 alunos, oferecemos
              acompanhamento individualizado, respeitando os limites e objetivos
              de cada pessoa para promover saúde, força e qualidade de vida.
            </p>
            <ul className="flex justify-around flex-wrap gap-4">
              <li className="flex items-center gap-2">
                <Check className="text-green-500" />
                <p className="font-bold">Equipe Especializada;</p>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" />
                <p className="font-bold">Evolução contínua;</p>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" />
                <p className="font-bold">Ambiente acolhedor.</p>
              </li>
            </ul>
            <div className="flex gap-2 justify-around flex-wrap">
              <a
                href="#"
                className="bg-[#DCAA8F] flex items-center justify-center w-fit gap-2 px-4 py-2 font-semibold text-white rounded-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#C88A68]"
              >
                <WhatsappLogoIcon className="h-4 w-4" />
                Fale conosco
              </a>
              <a
                href="#"
                className="bg-[#DCAA8F] flex items-center justify-center w-fit gap-2 px-4 py-2 font-semibold text-white rounded-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#C88A68]"
              >
                Nossas modalidades
              </a>
              <a
                href="#trial_form"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#DCAA8F] px-5 py-2 font-semibold text-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#C88A68]"
              >
                Agende sua Aula Experimental
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
