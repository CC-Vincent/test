import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import classes from "./contact-us.module.css";

export default function ContactUs() {
  const email = "cherrycatnft@gmail.com";
  const youtubeLink = "";
  const twitterLink = "";
  const instagramLink = "";

  return (
    <div id="contact-us" className={classes.contactUs}>
      <div className={classes.container}>
        <div className={classes.card}>
          <h1>Contact Us</h1>
          <p>
            Lorem ipsum dolor sit amet, at ultricies sapien consequat et. Morbi
            tempor tellus.
          </p>
          <h5>{email}</h5>
          <div className={classes.iconContainer}>
            <div className={classes.icon}>
              <Link href={`mailto:${email}`} target={"_blank"}>
                <FontAwesomeIcon icon={faEnvelope} size='2x' />
              </Link>
            </div>
            <div className={classes.icon}>
              <Link href={twitterLink} target={"_blank"}>
                <FontAwesomeIcon icon={faTwitter} size='2x' />
              </Link>
            </div>
            <div className={classes.icon}>
              <Link href={instagramLink} target={"_blank"}>
                <FontAwesomeIcon icon={faInstagram} size='2x' />
              </Link>
            </div>
            <div className={classes.icon}>
              <Link href={youtubeLink} target={"_blank"}>
                <FontAwesomeIcon icon={faYoutube} size='2x' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
