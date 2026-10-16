import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import logoImg from "../../../public/logo_espaco_vital.png";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-[#F7F6F2] text-black py-16 lg:py-24">
      <div className="container mx-auto px-6 relative pt-16 pb-16 md:pb-0">
        <article className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#2D5A46]">
              Movimento que transforma
            </p>

            <h1 className="font-heading  text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D5A46] ">
              Encontre seu equilíbrio.
              <span className="text-[#D9A588]"> Transforme</span> sua vida
            </h1>

            <p>
              No Espaço Vital, o movimento consciente é o caminho para uma vida
              mais saudável. Descubra um ambiente acolhedor e tranquilo, com
              acompanhamento individualizado para respeitar seus limites e
              potencializar seu bem-estar.
            </p>

            <a
              href="#trial_form"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#D9A588] px-5 py-2 font-semibold text-white transition-colors duration-500 ease-in-out hover:bg-[#C88A68]"
            >
              Agende sua Aula Experimental
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>

          <div className="hidden md:block h-full">
            <Image
              src={logoImg}
              alt="Imagem da Logo"
              className="object-contain relative"
              sizes="(max-width: 768px) 0vw 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
