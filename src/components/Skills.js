import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import React from "react";

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const skills = [
        { img: meter1, label: "Frontend", sub: "React · Next.js · Tailwind CSS · HTML/CSS" },
        { img: meter2, label: "Backend", sub: "Node.js · Express.js · REST APIs · Flask" },
        { img: meter3, label: "Database", sub: "MongoDB · Mongoose · Prisma · SQL" },
        { img: meter1, label: "AI / ML", sub: "Gemini API · GraphQL · NLP · LangChain" },
        { img: meter2, label: "Problem Solving", sub: "500+ DSA · LeetCode · HackerRank · CodeChef" },
        { img: meter3, label: "DevOps & Tools", sub: "Git · GitHub · Vercel · Postman · NPM" },
    ];

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>
                                Full-stack expertise spanning modern frontend frameworks, scalable
                                backend systems, AI/ML integrations, and 500+ solved DSA problems.
                            </p>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="owl-carousel owl-theme skill-slider"
                            >
                                {skills.map((skill, index) => (
                                    <div className="item" key={index}>
                                        <img src={skill.img} alt={skill.label} />
                                        <h5>{skill.label}</h5>
                                        <p className="skill-sub">{skill.sub}</p>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="background" />
        </section>
    );
};

export default Skills;