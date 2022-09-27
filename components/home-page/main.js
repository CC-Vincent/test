import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import MintPopup from "../mint/popup";

import classes from "./main.module.css";

export default function Main() {
  const [canMint, setCanMint] = useState(false);
  const [isPopup, setIsPopup] = useState(false);

  const mintBtnHandler = () => {
    setIsPopup(true);
    document.body.classList.add("scrollDisabled");
  };

  const closePopup = () => {
    setIsPopup(false);
    console.log("closing popup");
  };

  useEffect(() => {
    AOS.init({
      duration: 1500,
      delay: 100,
    });
  }, []);

  return (
    <Fragment>
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
          {canMint && (
            <button
              type="button"
              className={classes.mintBtn}
              data-aos={"fade-up"}
              onClick={mintBtnHandler}
            >
              Mint
            </button>
          )}
          {!canMint && (
            <button
              type="button"
              className={classes.comingSoonBtn}
              data-aos={"fade-up"}
            >
              Coming Soon
            </button>
          )}
        </div>
      </div>
      {isPopup && <MintPopup closePopup={closePopup} />}
    </Fragment>
  );
}
