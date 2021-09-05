import React from "react";
import * as styles from "./about.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { ImQuotesLeft } from "react-icons/im";
import LinkButton from "../Button/LinkButton";
import Social from "../Social/Social";

const About = () => {
  return (
    <section className={styles.about}>
      {" "}
      <StaticImage
        src="../../images/profile.jpg"
        alt="Gavin's headshot"
        height={180}
        width={180}
        quality={95}
        className={styles.profileImg}
      />
      <div className={styles.aboutTitle}>
        <h1>Gavin Zheng</h1>
        <h3>gzheng0214@gmail.com</h3>
        <span>Web Developer</span>
      </div>
      <div className={styles.aboutDescription}>
        <ImQuotesLeft className={styles.quotes} />
        <p>
          Hi, I'm Gavin, an anspiring web developer based in Bayonne, NJ. I'm
          currently a senior studying computer science at Boston University.
        </p>
      </div>
      <LinkButton
        text="view resume"
        url={"/resume.pdf"}
        dark
        arrow={{ maxWidth: "168px" }}
      />
      <div className={styles.aboutContact}>
        <Social />
      </div>
    </section>
  );
};

export default About;
