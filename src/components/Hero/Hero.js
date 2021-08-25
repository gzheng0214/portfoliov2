import React from "react";
import * as styles from "./hero.module.css";
import { StaticImage } from "gatsby-plugin-image";
import LinkButton from "../Button/LinkButton";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <StaticImage
        src="../../images/profile.jpg"
        alt="Gavin's headshot"
        height={150}
        width={150}
        quality={95}
        className={styles.profileImg}
      />
      <div className={styles.heroInfo}>
        <h3>Hi, I'm Gavin.</h3>
        <h1>a web developer</h1>
        <div className={styles.heroButtons}>
          <LinkButton text="view resume" url={"/Gavins_Resume.pdf"} />
          <LinkButton text="view projects" url={"/projects"} link dark arrow />
        </div>
      </div>
    </section>
  );
};

export default Hero;
