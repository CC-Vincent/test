import { Fragment } from "react";
import Main from "../components/HomePage/main";
import AboutUs from "../components/HomePage/about-us";
import Rarity from "../components/HomePage/rarity";
import Roadmap from "../components/HomePage/roadmap";
import Team from "../components/HomePage/team";
import FAQ from "../components/HomePage/faq";
import ContactUs from "../components/HomePage/contact-us";

export default function HomePage() {
  return (
    <Fragment>
      <Main />
      <AboutUs />
      <Rarity />
      <Roadmap />
      <Team />
      <FAQ />
      <ContactUs />
    </Fragment>
  );
}
