import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import classes from "./team.module.css";

function MemberMedia(props) {
  const { isVideo, filename, name, index } = props.member;

  const filepath = `/team/${filename}`;

  if (isVideo) {
    return (
      <div className={classes.memberMedia} data-aos={"fade-up"} data-aos-delay={`${(index + 1) * 2}00`}>
        <video autoPlay muted loop>
          <source src={filepath} type="video/mp4" />
        </video>
      </div>
    );
  } else {
    return (
      <div className={classes.memberMedia} data-aos={"fade-up"} data-aos-delay={`${(index + 1) * 2}00`}>
        <Image src={filepath} alt={name} width={200} height={200} />
      </div>
    );
  }
}

export default function Team() {
  const teamMembers = [
    {
      name: "Iron Cat",
      description: "Goes pew pew",
      isVideo: true,
      filename: "Iron_Cat.mp4",
    },
    {
      name: "Advertising Cat",
      description: "",
      isVideo: false,
      filename: "Advertising_Cat.jpg",
    },
    {
      name: "Tech Cat",
      description: "Tired of bugs",
      isVideo: true,
      filename: "Tech_Cat.mp4",
    },
    {
      name: "SCIO",
      description: "",
      isVideo: false,
      filename: "Sachio.jpg",
    },
    {
      name: "Janitor Cat",
      description: "",
      isVideo: false,
      filename: "Janitor_Cat.jpg",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div id="team" className={classes.team}>
      <h1 data-aos={"fade-right"}>Team</h1>
      <div className={classes.container}>
        {teamMembers.map((member, index) => {
          member.index = index;
          return (
            <div className={classes.member} key={member.name}>
              <MemberMedia member={member} />
              <p className={classes.memberName}>{member.name}</p>
              <p className={classes.memberDescription}>{member.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
