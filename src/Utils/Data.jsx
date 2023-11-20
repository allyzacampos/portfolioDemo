// Nav
export const headerLinks = [
    { name: "Home", link: "#hero" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Portfolio", link: "#portfolio" },
  ];

//Email Address
export const emailAddress = "allycmps@gmail.com";
  
// Skills and Exp
  import moviesImg from '../../public/Images/Hobbies/movies.svg';
  import socmedImg from '../../public/Images/Hobbies/soc-med.svg';
  import metimeImg from '../../public/Images/Hobbies/me-time.svg';
  import mobilegamesImg from '../../public/Images/Hobbies/mobile-games.svg';

  export const activities = [
    { name: 'Watching Movies', image: moviesImg },
    { name: 'Social Media', image: socmedImg },
    { name: 'Me Time', image: metimeImg },
    { name: 'Mobile Games', image: mobilegamesImg },
  ];

  //ProgressBarLine
  export const skills = [
    { item: "HTML", value: "90%", percentage: "90" },
    { item: "CSS", value: "90%", percentage: "90" },
    { item: "Bootstrap", value: "90%", percentage: "85" },
    { item: "Wordpress", value: "85%", percentage: "85" },
  ];

  //ChipLanguage
  export const devTools = [
    { tool: "HTML" },
    { tool: "CSS" },
    { tool: "Bootstrap" },
    { tool: "Wordpress" },
  ];

  //ChipSkills
  export const designTools = [
    { value: "Figma" },
    { value: "Adobe Photoshop" },
    { value: "Adobe Illustrator" },
    { value: "Canva" },
  ];

  //Skills Background
  import skillBg from '../../public/Images/Background/bg2.svg';

  export const skillBackground = {
    backgroundImage: `url(${skillBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  //Portfolio Background
  import portfolioBg from '../../public/Images/Background/bg1.svg';
  export const portfolioBackground = {
    backgroundImage: `url(${portfolioBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };