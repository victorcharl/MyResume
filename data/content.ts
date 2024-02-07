export const contentData = [
  {
    title: "Work Experience",
    items: [
      {
        title: "Junior Freelancer",
        subTitle: "Self Employed",
        date: "Aug 2020 - Present",
        description: 
          "Developing global websites with tailored solutions for diverse needs. Utilizing expertise in HTML, CSS, JavaScript, and more to prioritize user experience and responsive design. Providing comprehensive support and maintenance, consistently exceeding client expectations."
      }
    ],
  },
  {
    title: "Education",
    items: [
      {
        title: "Post Diploma Software Developement",
        subTitle: "Bow Valley College", 
        location:  "Calgary, AB Canada",
        date: "Aug 2019 - Apr 2020",
        description: "Completed program in software development. Specialized in web development, gaining skills in HTML, CSS, JavaScript, React, Node.js, and more.",
      },
      {
        title: "Bachelor's Degree in Information Technology",
        subTitle: "STI College Dagupan",
        location:  "Dagupan City, Pangasinan Philippines",
        date: "Jun 2015 - May 2017",
        description: "Earned Bachelor's Degree in IT, focusing on mobile and desktop development. Studied Java, C#, and Swift, and completed projects in mobile app development.",
      },
      {
        title: "Associate's Degree in Computer Technology",
        subTitle: "STI College Dagupan",
        location:  "Dagupan City, Pangasinan Philippines",
        date: "Jun 2013 - May 2015",
        description: "Obtained Associate's Degree in desktop development. Explored software engineering principles, database management, and user interface design.",
      },
    ],
  },
  {
    title: "Projects",
    items: [
      {
        title: "Hypermax Store",
        subTitle: "Online shopping website",
        date: "2023 - 2024",
        description: "Hypermax Store showcases my skills as a developer. Built from conception to execution, it aims to redefine online shopping with a cutting-edge e-commerce platform.",
      },
    ],
  },
];

export const skillsData: string[] = [
  "Proficient in building responsive and user-friendly websites using HTML, CSS and Javascript to insure optimal user experience across devices.",
  "Competent in utilizing Visual Studio Code for effecient web development.",
  "Advance undestanding in creating Android App Development using Android Studio and Java.",
  "Experienced with version control systems particularly  Git for code collaboration and tracking changes.",
  "Possess a foundational understanding of C++, C# and mySQL acquired through college coursework.",
  "Expertise in using Microsoft Suite such as Outlook, Excel, Word, Powerpoint etc.",
  "Proficient in fast and accurate typing, allowing for swift data entry and efficient communication."
];

export type Content = {
  title: string;
  items: {
    title: string;
    subTitle: string;
    date: string;
    description: string;
  }[];
};


export type ContentData = Content[];
