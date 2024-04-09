import React from "react";
import {FaLinkedinIn} from "react-icons/fa";
import {BsGithub} from 'react-icons/bs';
import {SiGmail} from 'react-icons/si';
import profile from "/assets/pic.jpeg";


const socials = [

    {
        id: 1,
        icon: <BsGithub />,
        link: "https://github.com/Anuj9675",
    },
    {
        id: 2,
        icon: <FaLinkedinIn />,
        link: "https://www.linkedin.com/in/anuj-upadhyay-a973b0238/",
    },
    {
        id: 3,
        icon: <SiGmail />,
        link: "mailto: anujupadhyay6265@gmail.com",
    },


];

const Bar = () => {
    return (
        <section className="dark:bg-zinc-900 dark:text-white">
            <div className=" mx-8 mb-8 p-6 dark:shadow-sky-600/50 shadow-2xl rounded-lg">
            <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-5">
                <img src={profile} alt="img" className="w-full" />
            </div>
            <div className="text-center">
                <h1 className="text-xl font-bold mb-1 font-mono">Anuj Updhyay</h1>
                <a
                    href="#0"
                    className="inline-block font-mono font-medium mb-3 rounded bg-sky-500 text-center border-0 py-1 px-6 text-zinc-900 hover:bg-sky-600"
                    download="Resume"
                >
                    Resume
                </a>
                <ul className="flex flex-wrap justify-center">
                    {socials.map((social, id) => (
                        <SocialIcon social={social} key={id} />
                    ))}
                </ul>
            </div>
            <div className="text-start pt-4">
                <h3 className="text-md mb-2 uppercase font-mono font-medium dark:text-white">
                    About Me
                </h3>
                <p className=" text font-light font-mono dark:text-white">
                    I am a web developer with a Bachelor's degree in Computer Science. Despite the skills I've acquired so far, I'm looking forward to learning more and improving them. I dive into coding adventures daily. Seeking to transform ideas into impactful online realities, I'm dedicated to mastering the craft. Let's collaborate and bring visions to life in the digital realm!
                </p>
            </div>
            </div>
        </section>
    );
};

export default Bar;

const SocialIcon = (props) => {
    const { icon, link } = props.social;
    return (
        
        <div className="m-2 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
            <a
                href={link}
                className="text-black dark:text-white text-2xl"
            >
                {icon}
            </a>
        </div>
        
    );
};
