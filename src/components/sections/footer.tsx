import Image from "next/image";
import logoImg from "../../../public/logo_espaco_vital.png";
export function Footer() {
  return (
    <footer className="bg-[#243b31] py-16">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center text-center items-center py-auto gap-2">
          <div className="">
            <Image
              src={logoImg}
              alt="Imagem da Logo"
              className="object-contain w-screen lg:w-[15vw]"
              quality={100}
              priority
            />
          </div>
          <h2 className="font-serif text-2xl text-mist-100">Espaço Vital</h2>
        </div>
        <p className="text-1xl text-mist-100 flex-wrap text-center">
          Movimento consciente, cuidado com presença e mais qualidade de vida
          para você.
        </p>
        <div className="justify-center">
          <ul className="py-3 flex flex-col gap-2 text-mist-100 w-auto justify-center text-center">
            <h2 className="text-2xl font-bold select-none">Navegação</h2>
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#abou">Sobre</a>
            </li>
            <li>
              <a href="#modalities">Modalidades</a>
            </li>
            <li>
              <a href="#instructors">Instrutoras</a>
            </li>
            <li>
              <a href="#plans">Planos</a>
            </li>
            <li>
              <a href="#local">Endereço</a>
            </li>
            <li>
              <a href="#trial_form">Agende sua Aula Experimental</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
