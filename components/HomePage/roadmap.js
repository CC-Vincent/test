import { useEffect, useState } from "react";
import { faArrowRight, faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper";
import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/free-mode";
import classes from "./roadmap.module.css";

function Milestone(props) {
  const { item } = props;
  return (
    <>
      <div>
        <h3>
          <span style={{ fontSize: "200%" }}>{item.percent}%</span> Milestone
        </h3>
        <span>(Phase {item.phase})</span>
      </div>
      <div>
        <p>{item.description}</p>
      </div>
    </>
  );
}

export default function Roadmap() {
  const [catImageState, setCatImageState] = useState(0);

  const progressChange_Handler = (swiper, progress) => {
    var max = 100;
    var divider = 8;
    progress = Math.abs(parseInt(progress * max));
    setCatImageState(progress % divider);
  };

  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 200,
    });
  }, []);

  const roadmapDetails = [
    {
      phase: 1,
      percent: 25,
      title: "Giveaway!",
      description:
        "We will be giving out 10 CherryCats to our discord members, and a total amount of 5 ETH for 5 random OG CherryCat owners with 1 ETH each.",
    },
    {
      phase: 2,
      percent: 50,
      title: "CherryCat App!",
      description:
        "We will be launching CherryCat App where it will allow CherryCat owners to see and interact with their own cat/cats (based on their NFT properties) by giving them custom clothes, hats, accessories, as well as feeding them to keep them happy and healthy.",
    },
    {
      phase: 3,
      percent: 75,
      title: "CherryCat Token!",
      description:
        "We will have the biggest update for CherryCat App where we will be introducing CherryCat Token as our main currency. Owners can earn or spend them in-game for rarer items.",
    },
    {
      phase: 4,
      percent: 100,
      title: "CherryCat Foundation!",
      description:
        "We will be launching a foundation around the world to ensure that most of the stray cats have nice and warm shelters and delicious meals.",
    },
  ];

  var catImage_classes = "";
  switch (catImageState) {
    case 0:
      catImage_classes = classes.catImage_0;
      break;
    case 1:
      catImage_classes = classes.catImage_1;
      break;
    case 2:
      catImage_classes = classes.catImage_2;
      break;
    case 3:
      catImage_classes = classes.catImage_3;
      break;
    case 4:
      catImage_classes = classes.catImage_4;
      break;
    case 5:
      catImage_classes = classes.catImage_5;
      break;
    case 6:
      catImage_classes = classes.catImage_6;
      break;
    case 7:
      catImage_classes = classes.catImage_7;
      break;
  }
  catImage_classes += ` ${classes.catImage}`;

  return (
    <div id="roadmap" className={classes.roadmap}>
      <h1 data-aos={"fade-right"}>Roadmap</h1>
      <div id="roadmapContainer" className={classes.container}>
        <div className={catImage_classes}></div>
        <Swiper
          freeMode={{
            enabled: true,
            momentum: false,
          }}
          mousewheel={false}
          grabCursor={true}
          onProgress={progressChange_Handler}
          modules={[FreeMode, Mousewheel]}
        >
          {roadmapDetails.map((milestone, i, arr) => {
            if (arr.length - 1 === i) {
              return (
                <SwiperSlide key={milestone.phase}>
                  <div className={classes.sliderContainer}>
                    <div className={classes.road}></div>
                    <div className={classes.milestoneContainer}>
                      <div className={classes.milestone}>
                        <Milestone item={milestone} />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            } else {
              return (
                <SwiperSlide key={milestone.phase}>
                  <div className={classes.sliderContainer}>
                    <div className={classes.road}></div>
                    <div className={classes.milestoneContainer}>
                      <div className={classes.milestone}>
                        <Milestone item={milestone} />
                      </div>
                      <div className={classes.rightArrow}>
                        <FontAwesomeIcon icon={faArrowRight} size={"2x"} />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </div>
    </div>
  );
}
