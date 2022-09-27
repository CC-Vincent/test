import { Fragment } from "react";
import Main from "../components/home-page/main";
import AboutUs from "../components/home-page/about-us";
import Rarity from "../components/home-page/rarity";
import Roadmap from "../components/home-page/roadmap";
import Team from "../components/home-page/team";
import FAQ from "../components/home-page/faq";
import ContactUs from "../components/home-page/contact-us";

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
