import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

import classes from "./faq.module.css";

function FAQItem(props) {
  const { q, a } = props.faqItem;

  const [isClicked, setIsClicked] = useState(false);

  const btnClick_Handler = () => {
    setIsClicked(!isClicked);
  };

  var btnClass = classes.faqBtn;
  if (isClicked) btnClass += ` ${classes.active}`;

  var detailsClass = classes.faqDetails
  if (isClicked) detailsClass += ` ${classes.active}`;

  return (
    <div className={classes.faqItem}>
      <button type="button" className={btnClass} onClick={btnClick_Handler}>
        <span>{q}</span>
        <span
          style={{ transition: "all 0.5s" }}
          className={isClicked ? classes.active : undefined}
        >
          <FontAwesomeIcon icon={faAngleDown} size="lg" />
        </span>
      </button>
      <div className={detailsClass}>
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const faqList = [
    {
      q: "What is NFT?",
      a: "NFT stands for Non-Fungible Tokens where each token represents a single and truly unique CherryCat that YOU can buy, own and trade.",
    },
    {
      q: "What is Metamask?",
      a: 'Metamask is a crypto wallet that can store your Ethereum, and is needed to purchase and mint CherryCat. Learn more about what it does and how it works @ metamask.io.',
    },
    {
      q: "How to buy CherryCat (computer)?",
      a: "Make sure Metamask extension is installed in your browser. After connecting your Metamask with our browser, you'll be able to click the “Mint” button to buy a few CherryCats.",
    },
    {
      q: "How to buy CherryCat (mobile)?",
      a: "Make sure the Metamask application is installed on your mobile. Launch the app and use its built in browser, then navigate to cherrycat.io to start minting.",
    },
  ];

  return (
    <div id="faqs" className={classes.faq}>
      <div className={classes.bg}>
        <Image
          src={"/backgrounds/bg03.png"}
          alt={"BG01"}
          width={1920}
          height={1080}
        />
      </div>
      <div className={classes.container}>
        <div className={classes.faqContainer}>
          <p>F.A.Q</p>
          <h1>Frequently Asked Questions</h1>
          <div className={classes.faqItemsContainer}>
            {faqList.map((faq) => {
              return <FAQItem faqItem={faq} key={faq.q} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
