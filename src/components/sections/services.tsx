"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  BarbellIcon,
  HeartbeatIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

const services = [
  {
    title: "Pilates em Aparelhos",
    description:
      "Pilates com foco em correção postural, alívio nas dores da coluna e flexibilidade.",
    difference:
      "Turmas reduzidas de no máximo 4 alunos por horário, garantindo correção postural minuciosa em aparelhos completos (Cadillac, Reformer, Wunda Chair e Barrel).",
    icon: <BarbellIcon />,
    linkText:
      "Olá! Vi no site sobre o Pilates em Aparelhos e gostaria de saber mais!",
  },
  {
    title: "Treinamento Funcional",
    description:
      "Com foco no condicionamento cardiovascular, força dinâmica, agilidade e equilibrio,",
    difference:
      "Treinos planejados e adaptados para o objetivo de cada aluno (emagrecimento, hipertrofia ou condicionamento), integrando exercícios com peso corporal, kettlebells e elásticos.",
    icon: <HeartbeatIcon />,
    linkText:
      "Olá! Vi no site sobre o Treinamento Funcional e gostaria de saber mais!",
  },
];
export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section id="modalities" className="bg-[#F7F6F2] text-black py-16 lg:py-24">
      <div className="container px-4 mx-auto">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#2D5A46] m-6">
          Nossas Modalidades
        </p>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/2)] px-3"
                >
                  <article className="bg-[#DCAA8F] text-black rounded-2xl p-6 space-y-4 h-full flex flex-col ">
                    <div className="flex-1 flex items-start justify-between text-black">
                      <div className="flex gap-4 ">
                        <span className="text-3xl">{item.icon}</span>
                        <div>
                          <h3 className="font-bold text-xl mb-1 my-1 select-none ">
                            {item.title}
                          </h3>
                          <p className="select-none">{item.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-white/50 pt-4 flex items-center justify-between text-black">
                      <div className="flex items-center gap-2 text-sm select-none">
                        <span>{item.difference}</span>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="flex items-center justify-center gap-2 hover:bg-[#C88A68] px-4 py-1 rounded duration-300 w-s% h-100% hover:text-[#2D5A46]"
                    >
                      <WhatsappLogoIcon className="w-5 h-5" />
                      Entrar em contato
                    </a>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className="flex md:hidden bg-white items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-1 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            className="flex md:hidden bg-white items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-5 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollNext}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
