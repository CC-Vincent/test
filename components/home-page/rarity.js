import { Fragment, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import classes from "./rarity.module.css";

export default function Rarity() {
  const rarity = [
    "Background",
    "Headdress",
    "Eyes",
    "Expression",
    "Body",
    "Costume",
  ];

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div id="rarity" className={classes.rarity}>
      <div className={classes.container}>
        <div className={classes.rarityContainer}>
          {rarity.map((rarity) => {
            var filepath = `/rarity/${rarity}.mp4`;
            return (
              <Fragment key={rarity}>
                <video
                  autoPlay
                  muted
                  loop
                  data-aos={"fade-up"}
                  data-aos-offset={"200"}
                >
                  <source src={filepath} type="video/mp4" />
                </video>
                <h2 data-aos={"fade-up"} data-aos-offset={"200"}>
                  {rarity}
                </h2>
              </Fragment>
            );
          })}
          <Image
            data-aos={"fade-up"}
            data-aos-offset={"200"}
            src={"/rarity/Gender.png"}
            alt={"Gender"}
            width={237}
            height={182}
          />
          <h2 data-aos={"fade-up"} data-aos-offset={"200"}>
            Gender
          </h2>
        </div>
        <div className={classes.imageContainer}>
          <Image
            data-aos={"fade-up"}
            src={"/backgrounds/bg02.png"}
            alt={"BG02"}
            width={675}
            height={540}
          />
        </div>
      </div>
    </div>
  );
}
