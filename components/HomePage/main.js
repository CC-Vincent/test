import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import classes from "./main.module.css";

export default function Main() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      delay: 100,
    });
  }, []);

  return (
    <div id="main" className={classes.main}>
      <Image
        src={"/backgrounds/bg01.jpg"}
        alt={"BG01"}
        width={1920}
        height={1080}
      />
      <div className={classes.container}>
        <h1 className={classes.title} data-aos={"fade-down"}>
          CherryCat NFT
        </h1>
        <p data-aos={"fade-up"}>Get your own Cherry Cat right now!</p>
        <button type="button" className={classes.mintBtn} data-aos={"fade-up"}>
          Mint
        </button>
      </div>
    </div>
  );
}
