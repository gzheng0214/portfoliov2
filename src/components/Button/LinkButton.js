import React from "react";
import * as styles from "./button.module.css";
import { Link } from "gatsby";
import { BsArrowRight } from "react-icons/bs";

const LinkButton = ({ dark, arrow, text, url, email, link, hoverDark }) => {
  const style = `${styles.button} ${dark ? styles.dark : styles.primary} ${
    hoverDark ? styles.hoverDark : ""
  }`;
  if (link) {
    return (
      <Link to={url} className={style}>
        {text}
        {arrow ? <BsArrowRight className={styles.arrow} /> : null}
      </Link>
    );
  } else {
    return (
      <a className={style} href={url} target={email ? "" : "_blank"}>
        {text}
        {arrow ? <BsArrowRight className={styles.arrow} /> : null}
      </a>
    );
  }
};

export default LinkButton;
