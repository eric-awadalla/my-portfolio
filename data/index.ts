export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Innovating with the latest web technologies",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Todo App",
    des: "This project is a simple todo list application built using HTML, CSS, and JavaScript.",
    img: "/todo-app.png",
    iconLists: [
      "/html-5-logo-svgrepo-com.svg",
      "/css-3-logo-svgrepo-com.svg",
      "/javascript-svgrepo-com.svg",
    ],
    link: "https://github.com/eric-awadalla/todo-app",
    liveLink: "https://eric-awadalla.github.io/todo-app",
  },
  {
    id: 2,
    title: "Trello Clone",
    des: "This project is a clone of the popular productivity tool Trello, built using only HTML and CSS.",
    img: "/trello.png",
    iconLists: ["/html-5-logo-svgrepo-com.svg", "/css-3-logo-svgrepo-com.svg"],
    link: "https://github.com/eric-awadalla/clone-trello-home-page",
    liveLink: "https://clone-trello-home-page.vercel.app",
  },
  {
    id: 3,
    title: "E-commerce product page",
    des: "Built an e-commerce product page using HTML, CSS, and React.js, featuring a dynamic product display, interactive image gallery, and a responsive design.",
    img: "/ecommerce-product-page.png",
    iconLists: [
      "/html-5-logo-svgrepo-com.svg",
      "/css-3-logo-svgrepo-com.svg",
      "/react-svgrepo-com.svg",
    ],
    link: "https://github.com/eric-awadalla/e-commerce-product-page",
    liveLink: "https://ecommerce-product-page-four.vercel.app",
  },
  {
    id: 4,
    title: "Rent Cars Web App",
    des: "Developed a responsive web app using HTML, Tailwind CSS, React.js, Axios, and React Router, enabling users to browse, book rental cars, and navigate seamlessly between pages",
    img: "/rent-cars.png",
    iconLists: [
      "/html-5-logo-svgrepo-com.svg",
      "/tail.svg",
      "/react-svgrepo-com.svg",
      "/react-router-svgrepo-com.svg",
    ],
    link: "https://github.com/eric-awadalla/rent-cars-webapp",
    liveLink: "https://rent-cars-webapp.vercel.app",
  },
  {
    id: 5,
    title: "User Management System",
    des: "Developed a fully functional User Management System using React, Tailwind CSS, Context API, Axios, and TypeScript.",
    img: "/ums.png",
    iconLists: [
      "/html-5-logo-svgrepo-com.svg",
      "/tail.svg",
      "/typescript.svg",
      "/react-svgrepo-com.svg",
      "/react-router-svgrepo-com.svg",
      "/react-hook-form.svg",
    ],
    link: "https://github.com/eric-awadalla/user-management-system",
    liveLink: "https://user-management-system-4.vercel.app",
  },
  // {
  //   id: 6,
  //   title: "E-Commerce Book Store",
  //   des: "Built a modern E-Commerce Book Store using React, Tailwind CSS, and TypeScript. The store features dynamic product listings, a shopping cart, and secure checkout integration.",
  //   img: "/book-store.png",
  //   iconLists: [
  //     "/html-5-logo-svgrepo-com.svg",
  //     "/tail.svg",
  //     "/typescript.svg",
  //     "/mui.svg",
  //     "/react-svgrepo-com.svg",
  //     "/react-router-svgrepo-com.svg",
  //     "/redux.svg",
  //     "/react-hook-form.svg",
  //     "/stripe.svg",
  //   ],
  //   link: "https://github.com/eric-awadalla/online-book-store",
  //   liveLink: "https://online-book-store-teal.vercel.app",
  // },
];

export const testimonials = [
  {
    quote:
      "The level of professionalism and attention to detail was impressive. Our project was completed on time and exceeded our expectations. Highly recommend!",
    name: "Jane Doe",
    title: "Marketing Manager",
    img: "/emily-johnson.jpg",
  },
  {
    quote:
      "Working with this team was a game-changer for our project. Their expertise in the latest technologies and dedication to quality made all the difference.",
    name: "John Smith",
    title: "Software Engineer",
    img: "/profile.svg",
  },
  {
    quote:
      "Creativity and innovation were at the forefront of their work. The final product was not only functional but visually stunning. I couldn’t be happier with the results.",
    name: "Emily Johnson",
    title: "Graphic Designer",
    img: "/emily-johnson.jpg",
  },
  {
    quote:
      "Their ability to understand our needs and deliver a product that fits perfectly with our goals was outstanding. The process was smooth and efficient from start to finish.",
    name: "Michael Brown",
    title: "Product Manager",
    img: "/profile.svg",
  },
  {
    quote:
      "They truly understand the importance of user experience. The insights and improvements they provided have significantly enhanced our product’s usability.",
    name: "Sarah Davis",
    title: "UX Researcher",
    img: "/emily-johnson.jpg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer Intern",
    desc: "developed and honed my skills in software development, working on real-world projects.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  // {
  //   id: 2,
  //   title: "Mobile App Dev - JSM Tech",
  //   desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp2.svg",
  // },
  // {
  //   id: 3,
  //   title: "Freelance Web Dev Project",
  //   desc: "Led the development of a custom website for a small business, delivering a fully responsive and user-friendly design.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp3.svg",
  // },
  {
    id: 4,
    title: "Frontend Developer Intern",
    desc: "Gained practical experience in frontend development with a focus on React.js through hands-on projects.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/eric4477",
  },

  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/eric4477/",
  },
];
