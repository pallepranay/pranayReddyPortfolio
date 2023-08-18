import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    taipeiTech,
    verzeo,
    iiits,
    technex,
    robotFish,
    hic, 
    hyperion,
    masterdsa,
    easyfoodz,
    codeSearch,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "AI Developer",
      icon: creator,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Robotics",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Flutter Developer",
      company_name: "Technex",
      icon: technex,
      iconBg: "#383E56",
      date: "May 2021 - Jul 2021",
      points: [
        "Worked on Flutter Applications, Implemented state management solutions, such as Provider/Bloc, to efficiently manage app data and maintain a seamless user experience.",
        "Worked together with multi-functional teams including Android Developers, and other developers to create high-quality end-user products.",
        "Along side with flutter also worked on building Android applications with java & xml",
        "Involving in review meetings and providing helpful feedback to other team-mates and manager.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Verzeo EduTech",
      icon: verzeo,
      iconBg: "#E6DEDD",
      date: "May 2022 - Jul 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Machine Learning Intern",
      company_name: "IIIT Sricity",
      icon: iiits,
      iconBg: "#383E56",
      date: "Jan 2022 - May 2022",
      points: [
        "Worked with principal investigators to coordinate qualitative research on GeoSpatial HSI Classification.",
        "Planned, modified and executed research techniques, procedures and tests in the field of Deep Learning.",
        "Gathered, arranged and corrected research data to create representative graphs and charts highlighting results for presentations.",
        "Led projects and analyzed data to identify opportunities for improvement.",
      ],
    },
    {
      title: "AI Robotics Intern",
      company_name: "Taipei Tech",
      icon: taipeiTech,
      iconBg: "#E6DEDD",
      date: "May 2023 - Aug 2023",
      points: [
        "Worked on Building Hand Gesture recognition model using Mediapipe, Google Coral Inference and TensorRT Engine.",
        "Collaborating with cross-functional teams including AI Developers, and other developers to create high-quality products.",
        "Enhanced the Voice Command Control for Bionic Robots by incorporating piAudio.",
        "Participating in review meetings and providing constructive feedback to other team-mates and manager.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Bionic Robotics",
      description:
        "It is a Hand Gesture Recognition model and Voice Control model to control Bionic Robotic Fish, lightest AI model, optimized to perform seamlessly on Jetson Nano with low FPS.",
      tags: [
        {
          name: "AI",
          color: "blue-text-gradient",
        },
        {
          name: "Bionic-Robotics",
          color: "green-text-gradient",
        },
        {
          name: "UnderWater",
          color: "pink-text-gradient",
        },
      ],
      image: robotFish,
      source_code_link: "https://github.com/pallepranay/TaipeiTech_FishRobot_Control",
    },
    {
      name: "Hyperion Blind Assistant",
      description:
        "Hyperion is a smart AI Assistant robot for blind people, Features Include Face Recognition, Obstacle avoidance, Object detection, Text recognition, voice feedback",
      tags: [
        {
          name: "Robotics",
          color: "blue-text-gradient",
        },
        {
          name: "AI",
          color: "green-text-gradient",
        },
        {
          name: "Path_Assistant",
          color: "pink-text-gradient",
        },
      ],
      image: hyperion,
      source_code_link: "https://github.com/pallepranay/Hypervision_BlindPeople_SmartRobot/",
    },
    {
      name: "HSI Classification",
      description:
        "A Hybrid-SN deep neural network, which maps the minerals on the lunar surface with the help of HSI data, which can capture 100s of bands unlike traditional RGB images..",
      tags: [
        {
          name: "DL",
          color: "blue-text-gradient",
        },
        {
          name: "HSI",
          color: "green-text-gradient",
        },
        {
          name: "ChandrayanData",
          color: "pink-text-gradient",
        },
      ],
      image: hic,
      source_code_link: "https://github.com/pallepranay/GeoSpatial_HyperSpectral_ImageClassification/",
    },
    ,
    {
      name: "MasterDsa",
      description:
        "An EduTech end to end website for mastering DSA, users can enroll to courses, hackathons, visualization of algorithms, fostering an engaging learning experience.",
      tags: [
        {
          name: "reactJs",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJs",
          color: "green-text-gradient",
        },
        {
          name: "nextJs",
          color: "pink-text-gradient",
        },
      ],
      image: masterdsa,
      source_code_link: "https://github.com/pallepranay/MasterDsa/",
    },
    ,
    {
      name: "EasyFoodz",
      description:
        "A comprehensive food delivery platform that allows users to book food and restaurants, and offers curated recommendations for popular destination restaurants and hotels.",
      tags: [
        {
          name: "nextJs",
          color: "blue-text-gradient",
        },
        {
          name: "reactJs",
          color: "green-text-gradient",
        },
        {
          name: "3Js",
          color: "pink-text-gradient",
        },
      ],
      image: easyfoodz,
      source_code_link: "https://github.com/pallepranay/EasyFoodz-Food-Delivery-App/",
    },
    ,
    {
      name: "IR Code Search",
      description:
        "A Information Retrival Code Search model, it retrieves top 10 similar codes with top cosine similarities based on input code query by using relavance feedback system.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "dJango",
          color: "green-text-gradient",
        },
        {
          name: "IR",
          color: "pink-text-gradient",
        },
      ],
      image: codeSearch,
      source_code_link: "https://github.com/pallepranay/IR-PROJECT-CODE-SEARCH/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };