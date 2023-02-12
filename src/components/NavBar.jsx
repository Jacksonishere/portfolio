import React from "react";
import { motion } from "framer-motion";

import GmailIcon from "../assets/icons/gmail.png";
import CvIcon from "../assets/icons/cv.png";
import GithubIcon from "../assets/icons/github.png";
import LinkedInIcon from "../assets/icons/linkedin.png";
import ArrowDown from "../assets/icons/ArrowDown";

const navDropVar = {
	initial: {
		opacity: 0,
		top: -20,
	},
	animate: {
		opacity: 1,
		top: 0,
		transition: {
			duration: 0.7,
			ease: "easeIn",
			type: "tween",
		},
	},
};

const navLinkVar = {
	hover: {
		color: "#9eb7b7",
		transition: {
			duration: 0.2,
		},
	},
};

const placeHolderVar = {
	initial: {
		opacity: 0,
		pointerEvents: "none",
	},
	hover: {
		opacity: 1,
		pointerEvents: "unset",
		transition: {
			duration: 0.2,
		},
	},
};

const floatVar = {
	initial: {
		opacity: 0,
		pointerEvents: "none",
		transition: {
			duration: 0.1,
			type: "tween",
			ease: "easeOut",
		},
	},
	hover: {
		opacity: 1,
		pointerEvents: "unset",
		top: 35,
		transition: {
			duration: 0.2,
			type: "tween",
			ease: "linear",
		},
	},
};

const NavBar = () => {
	return (
		<motion.ul
			initial="initial"
			animate="animate"
			variants={navDropVar}
			className="relative z-10 flex-c text-[.9375rem] md:text-[1rem] ">
			<motion.li whileHover="hover" variants={navLinkVar}>
				<a href="google.com">Home</a>
			</motion.li>
			<motion.li whileHover="hover" variants={navLinkVar} className="ml-auto">
				<a href="google.com">Projects</a>
			</motion.li>
			<motion.li whileHover="hover" variants={navLinkVar} className="ml-8">
				<a href="google.com">About Me</a>
			</motion.li>
			<motion.li whileHover={["hover"]} animate="initial" className="relative ml-8">
				<motion.div variants={navLinkVar} className="flex-c cursor-pointer">
					<span className="mr-3">Connect</span>
					<ArrowDown />
				</motion.div>
				<motion.div
					className="absolute min-w-[120px] h-[12px] abs-c md:min-w-[160px]"
					variants={placeHolderVar}></motion.div>
				<motion.ul
					className="before:content-[''] before:absolute before:top-0 before:w-0 before:h-0 before:border-t-[12px] before:border-r-[12px] border-solid before:border-t-bg-bg before:border-r-transparent before:rotate-45 p-abs-c before:-translate-y-1/2 absolute abs-c flex flex-col border-[2px] border-border gap-4 p-[1rem] min-w-[120px] font-sm bg-bg md:min-w-[160px] md:p-[22px]"
					variants={floatVar}>
					<li>
						<a className="flex-c" href="mailto:lujackson355@gmail.com?" target="_blank" rel="noopener noreferrer">
							<img className="mr-[14px] w-[22px]" src={GmailIcon} alt="gmail-icon" />
							<span className="font-md">Gmail</span>
						</a>
					</li>
					<li>
						<a className="flex-c" href="https://github.com/Jacksonishere" target="_blank" rel="noopener noreferrer">
							<img className="mr-[14px] w-[22px]" src={GithubIcon} alt="github-icon" />
							<span className="font-md">Github</span>
						</a>
					</li>
					<li>
						<a
							className="flex-c"
							href="https://www.linkedin.com/in/jacksonlu-dev/"
							target="_blank"
							rel="noopener noreferrer">
							<img className="mr-[14px] w-[22px]" src={LinkedInIcon} alt="linkedin-icon" />
							<span className="font-md">LinkedIn</span>
						</a>
					</li>
					<li>
						<a className="flex-c" href="src/assets/Resume.pdf" target="_blank" rel="noopener noreferrer">
							<img className="mr-[14px] w-[22px]" src={CvIcon} alt="gmail-icon" />
							<span className="font-md">Resume</span>
						</a>
					</li>
				</motion.ul>
			</motion.li>
		</motion.ul>
	);
};

export default NavBar;
