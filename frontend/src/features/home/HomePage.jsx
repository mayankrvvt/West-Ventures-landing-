import Hero from "./Hero";
import Focus from "./Focus";
import HowItWorks from "./HowItWorks";
import Markets from "./Markets";
import Closing from "./Closing";
import HomeFaq from "./HomeFaq";
import ConsultationForm from "./ConsultationForm";
import "./Landing.css";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Focus />
      <HowItWorks />
      <Markets />
      <Closing />
      <HomeFaq />
      <ConsultationForm />
    </>
  );
}
