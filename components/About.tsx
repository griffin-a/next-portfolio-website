import React from "react";
import Image from "next/image";
import profile from "../public/website_profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
            Hey there, I'm Jared
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              My name is Jared Bartlett-Wright. I am a final-year Computer Science
              student at the University of Auckland. Welcome to my portfolio
              website. Here you can find out what I have been working on
              recently and how you can contact me!
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
           <Image
            src={profile}
            alt="Profile"
            priority={true}
            className="rounded-full"
            width={250}
            height={450}
            placeholder="blur"
          /> 

          <div className="flex items-center justify-center">
            <a href="https://www.facebook.com/jared.bartlettwright">
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ fontSize: 40, paddingRight: 20 }}
              />
            </a>

            <a href="https://www.linkedin.com/in/jared-bartlett-wright-053446240/">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ fontSize: 40, paddingRight: 20 }}
              />
            </a>

            <a href="https://github.com/Jared-bw">
              <FontAwesomeIcon
                icon={faGithub}
                style={{ fontSize: 40, paddingRight: 20 }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
