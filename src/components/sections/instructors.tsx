import img_camila from "../../../public/img_camila.webp";
import img_mariana from "../../../public/img_mariana.webp";
import { BarbellIcon, HeartbeatIcon } from "@phosphor-icons/react/dist/ssr";
import {
  Card,
  CardAction,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
export function Instructors() {
  const instructors = [
    {
      name: "Camila Duarte",
      description:
        "especialista em Reabilitação Postural e Método Pilates Clássico e Contemporâneo há mais de 7 anos. Apaixonada por devolver autonomia e bem-estar aos alunos.",
      id: "CREFITO: 3/123456-F",
      icon: <BarbellIcon />,
      image: img_camila,
    },
    {
      name: "Mariana Silveira",
      description:
        "Profissional de Educação Física,pós-graduada em Treinamento Funcional e Biomecânica do Movimento. Focada em condicionamento físico, força funcional e prevenção de lesões..",
      id: "CREF: 098765-G/SP",
      icon: <HeartbeatIcon />,
      image: img_mariana,
    },
  ];
  return (
    <section className="bg-[#2D5A46] py-16" id="instructors">
      <div className="container px-4 mx-auto">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#F7F6F2] m-6">
          Nossas Instrutoras
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {instructors.map((item) => (
            <Card
              key={item.id}
              className="bg-[#DCAA8F] text-[black] border-none rounded-2xl h-full"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <Image
                  src={item.image}
                  alt={`Imagem de ${item.image}`}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full object-cover border-2 border-white shrink-0"
                />
                <div className="space-y-1">
                  <CardTitle className="flex items-center gap-2 text-xl font-bold">
                    <span className="text-2xl font-serif">{item.icon}</span>
                    {item.name}
                  </CardTitle>
                  <CardDescription className="text-white/80 text-sm font-medium">
                    {item.id}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="select-none">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
