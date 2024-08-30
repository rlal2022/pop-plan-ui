import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navigation from "./components/Navigation";
import "./styles.css";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <HowItWorks />
    </>
  );
}
