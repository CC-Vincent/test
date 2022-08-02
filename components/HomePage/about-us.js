import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import classes from "./about-us.module.css";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div id="about-us" className={classes.aboutUs}>
      <h1 data-aos={"fade-left"}>What is Cherry Cat?</h1>
      <p data-aos={"fade-right"}>
        {`Cherry Cat is not just a normal NFT collection, we're aiming to be the
        first changeable NFT with customizable clothing and accessories. There
        are 10.000 Cherry Cats available for you to mint right now. Cats that
        have been minted can be traded on OpenSea.`}
      </p>
    </div>
  );
}
