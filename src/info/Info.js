import self from "../img/self.png";
import PhpMotors from "../img/phpmotors.jpeg";
import EShop from "../img/eshop.jpeg";
import Gym from "../img/gym.jpeg";
import Calculator from "../img/calculator.jpeg";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
// export let colors = ["rgb(0,255,0)", "rgb(0,225,255)"];

export const info = {
  firstName: "macdonald",
  lastName: "musimwa",
  initials: "MM", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Software Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🇿🇦 ",
      text: "based in SA",
    },
    {
      emoji: "💻 ",
      text: "Full Stack Developer",
    },
    {
      emoji: "📧",
      text: "mcdonald.musimwa74@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/McDonaldMusimwa",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/mcdonald-musimwa-434589124/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    // {
    //   link: "https://github.com/joshuavanbreda",
    //   icon: "fa fa-github",
    //   label: "github",
    // },
    // {
    //   link: "https://www.linkedin.com/in/joshua-van-breda-a09328209/",
    //   icon: "fa fa-linkedin",
    //   label: "linkedin",
    // },
    // {
    //   link: "https://twitter.com",
    //   icon: "fa fa-twitter",
    //   label: "twitter",
    // },
  ],
  bio: "Hello There! I am McDonald, a Full stack Software developer that shines in web applications and websites that are user driven and friendly. Though i have been working on solo projects my vast diverse backgorund gives me a unqiue edge!",
  skills: {
    proficientWith: [
      "javascript",
      "python",
      "php",
      "sql",
      "html",
      "css",
      "react js",
      "node js",
      "express js",
    ],
    exposedTo: ["github", "mysql", "apache", "mongodb"],
  },
  hobbies: [
    {
      label: "gym",
      emoji: "💪🏽 ",
    },
    {
      label: "learning",
      emoji: "🧠 ",
    },
    {
      label: "coding",
      emoji: "👨🏽‍💻 ",
    },
    {
      label: "music",
      emoji: "🎵 ",
    },
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "PHP Motors",
      live: "https://mcdonaldmusimwa.github.io/WDD130/personalsite/index.html", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/McDonaldMusimwa/phpmotors", // this should be a link to the **repository** of the project, where the code is hosted.
      image: PhpMotors,
    },
    {
      title: "Ecommerce Shop",
      live: "https://willowy-boba-b5e4b3.netlify.app/",
      source: "https://github.com/McDonaldMusimwa/Ecommerce-shop",
      image: EShop,
    },
    {
      title: "Fit Club",
      live: "https://mcdonaldmusimwa.github.io/FitClub/",
      source: "https://github.com/McDonaldMusimwa/FitClub",
      image: Gym,
    },
    {
      title: "Calculator",
      live: "https://mcdonaldmusimwa.github.io/CalculatorWithReact/",
      source: "https://github.com/McDonaldMusimwa/CalculatorWithReact",
      image: Calculator,
    },
  ],
};
