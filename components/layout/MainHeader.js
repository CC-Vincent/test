import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import classes from "./MainHeader.module.css";

export default function MainHeader() {
  function NavBtn_Handler() {
    document
      .querySelector(`.${classes.navigationBtn}`)
      .classList.toggle(`${classes.hide}`);
    document
      .querySelector(`.${classes.navigationBtnClose}`)
      .classList.toggle(`${classes.show}`);
    document
      .querySelector(`.${classes.header} ul`)
      .classList.toggle(`${classes.show}`);
    document.body.classList.toggle("scrollDisabled");
  }

  function CloseMenu_Handler() {
    var closeBtn = document.querySelector(`.${classes.navigationBtnClose}`);
    if (screen.width <= 425) closeBtn.click();
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo}></div>
      <nav className={classes.navigation}>
        <ul>
          <li onClick={CloseMenu_Handler}>
            <Link href="#about-us">About Us</Link>
          </li>
          <li onClick={CloseMenu_Handler}>
            <Link href="#roadmap">Roadmap</Link>
          </li>
          <li onClick={CloseMenu_Handler}>
            <Link href="#team">Team</Link>
          </li>
          <li onClick={CloseMenu_Handler}>
            <Link href="#faqs">FAQs</Link>
          </li>
          <li onClick={CloseMenu_Handler}>
            <Link href="#contact-us">Contact Us</Link>
          </li>
        </ul>
        <button
          type="button"
          className={classes.navigationBtn}
          onClick={NavBtn_Handler}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <button
          type="button"
          className={classes.navigationBtnClose}
          onClick={NavBtn_Handler}
        >
        <FontAwesomeIcon icon={faXmark} />
        </button>
      </nav>
    </header>
  );
}
