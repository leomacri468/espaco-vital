import { MapPinIcon, ArrowRightIcon } from "lucide-react";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Local() {
  return (
    <section id="local" className="py-16 bg-[#2D5A46]">
      <div className="container px-4 mx-auto">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#F7F6F2] m-6">
          Onde Estamos
        </p>
        <h2 className="font-heading text-4xl font-bold text-[#F7F6F2] m-10">
          Um espaço pensado para o seu&nbsp;
          <span className="text-[#D9A588] underline">bem-estar.</span>
        </h2>
        <div className="grid justify-center">
          <Card className=" items-center text-center w-screen h-full lg:w-[30vw]">
            <CardHeader className="flex w-full flex-col items-center text-center gap-2">
              <CardAction>
                <div className="flex items-center justify-center text-center bg-[#D9A588] h-15 w-15 rounded-full">
                  <MapPinIcon className="text-[#b86d44]" />
                </div>
              </CardAction>
              <CardTitle>
                <h3 className="font-sans text-green-800 uppercase">
                  Cidade das Águas • SP
                </h3>
              </CardTitle>
              <CardTitle className="font-serif text-3xl text-green-900">
                <p>Vila Serenidade</p>
              </CardTitle>
              <CardDescription>
                <p>Rua das Acácias Douradas, 185</p>
                <p>
                  Seg-Sex • 07h às 12h / 16h às 21h <br /> Sab • 08h às 12h
                  (Turmas especiais pela manhã)
                </p>
                <p className="text-gray-400/50">
                  *ENDEREÇO MERAMENTE ILUSTRATIVO*
                </p>
              </CardDescription>
            </CardHeader>
            <CardFooter className="w-full text-center justify-center text-nowrap">
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="w-100% inline-flex gap-1 text-center justify-center relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#D9A588] after:transition-all after:duration-300 hover:after:w-full text-[#2D5A46]"
              >
                Ver no mapa
                <ArrowRightIcon className="translate-y-0.5" size={16} />
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
