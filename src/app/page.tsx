import { Navbar } from "../components/layout/navbar";
import { Hero } from "../components/sections/hero";
import { About } from "../components/sections/about";
import { Services } from "../components/sections/services";
import { Instructors } from "../components/sections/instructors";
import { Plans } from "../components/sections/plans";
import { Local } from "../components/sections/local";
import { TrialForm } from "@/components/sections/trialForm";
import { Footer } from "../components/sections/footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Instructors />
      <Plans />
      <Local />
      <TrialForm />
      <Footer />
    </>
  );
}
