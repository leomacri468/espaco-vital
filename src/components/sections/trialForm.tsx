import { BookingDialog } from "../booking/bookingDialog";
export function TrialForm() {
  return (
    <section id="trial_form" className="py-16 bg-[#2D5A46]">
      <div className="container px-4 mx-auto">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#F7F6F2] m-6">
          Agende sua Aula Experimental
        </p>
        <h2 className="font-heading text-4xl font-bold text-[#F7F6F2] m-10">
          Dê o primeiro passo para uma vida com mais movimento e&nbsp;
          <span className="text-[#D9A588] underline">bem-estar.</span>
        </h2>
        <article className="flex min-h-62.5 w-full flex-col items-center justify-center gap-6 px-6 py-12 text-center">
          <p className="max-w-xl text-base leading-7 text-white sm:text-lg">
            Clique no botão abaixo e agende sua aula experimental e dê o
            primeiro passo para uma vida com mais movimento e bem-estar. Escolha
            a modalidade, a data e o horário que melhor combinam com sua rotina.
            <br />
            <span className="mt-2 block">
              Nossa equipe entrará em contato pelo WhatsApp para confirmar a
              disponibilidade e orientar você sobre os próximos passos.
            </span>
          </p>
        </article>
        <div className="justify-center content-center flex">
          <BookingDialog />
        </div>
      </div>
    </section>
  );
}
