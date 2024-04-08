import frontendImg from "../assets/frontend.png"
import backendImg from "../assets/backend.png"
import toolImg from "../assets/tools.png"
import softSkillImg from "../assets/softskill.png"
import androidStudio from "../assets/android-studio.png"
import visualStudio from "../assets/visual-studio.svg"
import github from "../assets/github.png"
import responsive from "../assets/responsive.png"
import flutter from "../assets/flutter_logo.png"
import react from "../assets/react_logo.png"
import html from "../assets/html.png"
import css from "../assets/css-icon.png"
import firebase from "../assets/firebase_logo.png"
import python from "../assets/python.png"
import flutterflow from "../assets/flutterflow.png"
import javaScript from "../assets/java-script.png"



export const SKILLS = [
    {
        title: "Frontend",
        icon: frontendImg,
        skills:[
            {skill: "Flutter", icon:flutter,},
            {skill: "Flutter Flow", icon:flutterflow,},
            {skill: "React", icon:react,},
            {skill: "React Native", icon: react},
            {skill: "Java script", icon: javaScript},
            {skill: "HTML", icon:html,},
            {skill: "CSS", icon:css,},
            
        ]
    },

    {
        title: "Backend",
        icon: backendImg,
        skills:[
            {skill: "Firebase", icon:firebase,},
            {skill: "Python", icon:python,},
            
        ]
    },

    {
        title: "Tools",
        icon: toolImg,
        skills:[
            {skill: "Git & GitHub", icon:github,},
            {skill: "Visual Studio", icon:visualStudio,},
            
            {skill: "AndroidStudio", icon:androidStudio,},
            {skill: "Responsive Design", icon:responsive,},
        ]
    },
    {
        title: "Soft Skills",
        icon: softSkillImg,
        skills:[
            {skill: "Problem Solving", icon:"",},
            {skill: "Collaboration", icon:"",},
            {skill: "Fast Learning", icon:"",},
            {skill: "Attention to detail", icon:"",},
            
        ]
    }

]


export const WORK_EXPERIENCE = [
    {
        title: "Application development at Invenics Services India Private Limited",
        tool: "Flutter",
        date: "August 2022 - March 2024",
        responsibilities: [
            "Developed and maintained client application, ensuring high-quality standards and timely project delivery.",
            "Work closely with the design team to create pixel-perfect.",
            "Conducted code reviews and adopt best practices",
        
        ]
    },
    {
        title: "Web development at Invenics Services India Private Limited",
        tool: "Flutter",
        date: "August 2022 - March 2024",
        responsibilities: [
            "Developed and maintained client web application, ensuring high-quality standards and timely project delivery.",
            "Work closely with the design team to create pixel-perfect.",
            "Conducted code reviews and adopt best practices",
            "Worked on the web application using ReactJs."
        
        ]
    }
]