import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificate";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [showProjects, setShowProjects] = useState(false);

  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };
  const cvData = {
    name: "Ahsan Nazir",
    dob: "02/02/2000",
    nationality: "Pakistani",
    sex: "Male",
    phone: "(+372) 55543624",
    email: "ahsan.nazir0202@gmail.com",
    address: "Karu Street 17, 10120, Tallinn, Estonia",
    about:
      "I'm Ahsan, a software engineer. As an IT person, I love to keep learning new things and can easily adapt to changes. I'm always on the lookout for chances to grow professionally and stay up-to-date with what's new in the industry.",
    workExperience: {
      position: "Web Application Developer",
      company: "Freelancing on Fiverr",
      duration: "22/01/2022 – CURRENT",
      responsibilities: [
        "Developed many web applications for foreign clients on Fiverr.",
        "Maintenance and responsiveness are also my main responsibilities.",
        "Skilled in HTML5, CSS5, and JavaScript.",
      ],
      sector: "Information and communication",
      website: "https://www.fiverr.com/users/ahsan33331",
    },
    education: {
      degree: "MSc Human Computer Interaction (HCI)",
      university: "Tallinn University",
      duration: "25/08/2024 – CURRENT",
      field: "Computer use, Software and applications development and analysis",
    },
    skills: [
      "Web Development",
      "HTML, Java, CSS",
      "API Integrations",
      "Git, GitHub",
      "Bootstrap, JavaScript, JSON",
      "Object-Oriented Programming",
      "Microsoft Office (Outlook, Excel, Word, PowerPoint)",
    ],
    projects: [
      "Developed various projects/tasks for foreign clients on Fiverr.",
      "Check my portfolio on Fiverr: https://www.fiverr.com/users/ahsan33331",
    ],
    certificates: [
      {
        title: "Front-end Libraries",
        issuer: "Free Code Camp",
        description:
          "Learned how to build websites with attractive user interfaces using HTML5, CSS3, JavaScript, and Bootstrap.",
        link: "https://www.freecodecamp.org/certification/AhsanNazir/front-end-development-libraries",
      },
    ],
  };

  return (
    <>
      <div className="App">
        <Header
          name={cvData.name}
          dob={cvData.dob}
          nationality={cvData.nationality}
          sex={cvData.sex}
          phone={cvData.phone}
          email={cvData.email}
          address={cvData.address}
        />
        <About about={cvData.about} />
        <WorkExperience workExperience={cvData.workExperience} />
        <Education education={cvData.education} />
        <Skills skills={cvData.skills} />
        <button onClick={toggleProjects} className="toggle-button">
          {showProjects ? "Hide Projects" : "Show Projects"}
        </button>
        <Projects projects={cvData.projects} />
        <Certificates certificates={cvData.certificates} />
        <Footer />
      </div>
    </>
  );
}

export default App;
