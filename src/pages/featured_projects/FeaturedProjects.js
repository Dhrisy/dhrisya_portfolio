import React, { useRef } from 'react'
import "./FeaturedProjects.css"
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'


const items = [
    {
        id: 1,
        title: "Apna AI",
        img: `https://play-lh.googleusercontent.com/fjTk56_k1pQ_0xPkZggnu1pEPVBeZMx19wLN3K-IWCBoKWu_-Ki5LeLuWdith6V3Ft26=w2560-h1440-rw`,
        description: `A Multilingual chat AI application.\n
        Crafted visually captivating pages using Flutter, ensuring an intuitive and seamless user experience.\n
        Strategized and executed a comprehensive first-time user experience, emphasizing user onboarding and maximizing engagement from the outset.\n
        Implemented a robust permission handler to empower users with greater control over their privacy within the app ecosystem.\n
        Seamlessly integrated Google Sign-In and SignUp functionalities to bolster authentication processes and enhance user convenience.\n
        Leveraged Google Cloud Platform (GCP) functions to optimize app performance and scalability, contributing to a robust backend infrastructure.`
    },
    {
        id: 1,
        title: "Jansakti - Workers/Scout app",
        img: `https://play-lh.googleusercontent.com/tIgohmPUt_ccqW29HdMxOuq9C92GkBbt8mTLWWN6IqYnmlhbXsTjl0hWOpwWNC-ZCMqZ=w240-h480-rw`,
        description: `Orchestrated the design of dynamic pages utilizing Flutter, ensuring a visually appealing and user-friendly interface.\n
        Developed a robust sign-in and sign-up system fortified with phone authentication to bolster user privacy and fortify security measures.\n
        Seamlessly integrated a referral system, fostering user engagement and incentivizing organic growth within the app's user base.\n
        Spearheaded the design and implementation of a comprehensive job search feature, empowering users to effortlessly explore employment opportunities tailored to their preferences, with the added functionality to apply directly within the app interface.\n
        Developed profile creation and editing functionalities, enabling users to showcase their skills and experiences effectively.\n
        Implemented a user-friendly sharing feature to facilitate effortless dissemination of the application among peers and networks.\n
        Leveraged push notifications to enhance user engagement and retention, keeping users informed and connected with the app's latest updates and offerings.\n`
    },
    {
        id: 1,
        title: "Jansakti - Admin web app",
        img: `https://play-lh.googleusercontent.com/tIgohmPUt_ccqW29HdMxOuq9C92GkBbt8mTLWWN6IqYnmlhbXsTjl0hWOpwWNC-ZCMqZ=w240-h480-rw`,
        description: `Orchestrated the UI/UX design of administrative web pages within the Flutter framework, prioritizing both functionality and aesthetic appeal for enhanced user experience.\n
        Engineered a fortified sign-in and sign-up system, incorporating phone authentication to bolster user privacy and fortify overall security measures.\n
        Devised and implemented functionalities for seamlessly adding jobs and organizations, with built-in validation protocols to ensure data integrity and accuracy throughout the creation process.\n
        Enabled smooth integration for adding workers, streamlining the process for administrators to manage workforce dynamics effectively.\n
        Facilitated the addition of scouts with intuitive features, enhancing the administrative capabilities of the platform within the Flutter environment.`
    },

];


const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offSet: ["end end", "start start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

    return <section id='projects-section'
        className='content-container'>
        <div className='content' >
            <img src={item.img} alt='jansakti' />
            <div className='text-container' style={{ y }}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
            </div>
        </div>
    </section>
}
function FeaturedProjects() {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offSet: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

    return (
        <div className='featured-container'>
            <div className='heading-container'>
                <h5>Featured Projects</h5>
                <motion.div style={{ scaleX }} className='progressbar'></motion.div>
            </div>


            <div >
                {items.map((item) => {
                    return <Single item={item} key={item.id} />
                })}

             
            </div>
        </div>
    )
}

export default FeaturedProjects
