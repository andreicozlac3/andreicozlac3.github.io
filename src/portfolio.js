/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Andrei Cozlac",
  description:
    "Is a dedicated and accomplished ballet teacher with over two decades of experience in dance and education. Trained at the prestigious Dance Academy Zürich, Andrei performed with several renowned ballet companies, including Opera House Zürich and the Grand Theatre Geneva, before transitioning into teaching. In present, he is finishing his Master's degree in Teaching and Coaching Dance Professionals at the University of Arts in Zürich.",
  og: {
    title: "Andrei Cozlac Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "",
  logo_name: "AndreiCozlac",
  nickname: "",
  subTitle:
    "Is a dedicated and accomplished ballet teacher with over two decades of experience in dance and education. Trained at the prestigious Dance Academy Zürich, Andrei performed with several renowned ballet companies, including Opera House Zürich and the Grand Theatre Geneva, before transitioning into teaching. In present, he is finishing his Master's degree in Teaching and Coaching Dance Professionals at the University of Arts in Zürich.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
};

const socialMediaLinks = [
  // {
  //   name: "Github",
  //   link: "",
  //   imageUrl: "/https://www.tanzwerk101.ch/themes/custom/design/logo.png",
  //   fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
  //   backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  // },
  {
    name: "LinkedIn",
    link: "",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/urbanvinyasa.ch",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Vinyasa Yoga",
      fileName: "VinyasaYogaImg",
      skills: ["⚡ text", "⚡ text", "⚡ text"],
    },
    {
      title: "Hatha Yoga",
      fileName: "FullStackImg",
      skills: ["⚡ text", "⚡ text", "⚡ text"],
    },
    {
      title: "Yin Yoga",
      fileName: "CloudInfraImg",
      skills: ["⚡ text", "⚡ text", "⚡ text"],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Zurich University of the Arts ZHdK",
      subtitle: "Master in something",
      logo_path: "zhdk.jpg",
      alt_name: "zhdk name",
      duration: "2022 - 2024",
      descriptions: ["⚡ text", "⚡ text", "⚡ text"],
      website_link: "https://www.zhdk.ch/",
    },
    {
      title: "Other",
      subtitle: "Degree",
      logo_path: "iu_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "Duration",
      descriptions: ["⚡ text", "⚡ text", "⚡ text"],
      website_link: "https://www.indiana.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Yoga Teacher",
      subtitle: "Subtitle",
      logo_path: "stanford_logo.png",
      certificate_link: "",
      alt_name: "Yoga Teacher",
      color_code: "#8C151599",
    },
  ],
};
// Experience Page
const experience = {
  title: "Background",
  subtitle: "Subtitle",
  description: "Description",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Ballet Dancer",
          company: "Opera Zurich",
          company_url: "https://www.opernhaus.ch/en/",
          logo_path: "opera.jpg",
          duration: "Duration",
          location: "Zurich, Switzerland",
          description: "Description",
          color: "#000000",
        },
      ],
    },
    {
      title: "Projects",
      experiences: [
        {
          title: "My upcoming Book",
          company: "",
          company_url: "url",
          logo_path: "google_logo.png",
          duration: "2022 - 2025",
          location: "",
          description: "Handbook for becoming ballet guest teacher.",
          color: "#4285F4",
        },
        {
          title: "Cooperation Project Romania and Switzerland",
          company: "ZHdK and ...",
          company_url: "url",
          logo_path: "google_logo.png",
          duration: "Duration",
          location: "Bucarest, Switzerland",
          description:
            "I brought two schools together for a future cooperation.",
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Education",
      experiences: [
        {
          title: "Master in something",
          company: "Zurich University of the Arts",
          company_url: "url",
          logo_path: "zhdk.jpg",
          duration: "2022 - 2024",
          location: "Zurich, Switzerland",
          description: "I focused on ...",
          color: "#000000",
        },
      ],
    },
    {
      title: "Certificates",
      experiences: [
        {
          title: "Yoga Teacher Level 1",
          company: "Company",
          company_url: "url",
          logo_path: "google_logo.png",
          duration: "2022",
          location: "Location",
          description: "During my yoga teacher training I learned ...",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "Description",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "pub-id-1",
      name: "Cooperation Romania and Switzerland",
      createdAt: "Duration",
      description: "Description",
      url: "",
    },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "andrei.jpg",
    description: "Availability",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
