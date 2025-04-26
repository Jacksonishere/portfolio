import React, { useState, useContext } from "react";
import { motion, wrap, AnimatePresence } from "framer-motion";

import Meditapp from "../assets/icons/meditapp.png";
import Meditapp2 from "../assets/icons/meditapp-2.png";

import PFA from "../assets/icons/pfa-1.png";
import PFA2 from "../assets/icons/pfa-2.png";
import PFA3 from "../assets/icons/pfa-3.png";
import PFA4 from "../assets/icons/pfa-4.png";
import PFA5 from "../assets/icons/pfa-5.png";

import FEM from "../assets/icons/fem.png";

import VRMaze1 from "../assets/icons/vr-maze-1.png";
import VRMaze2 from "../assets/icons/vr-maze-2.png";
import VRMaze3 from "../assets/icons/vr-maze-3.png";
import VRMaze4 from "../assets/icons/vr-maze-4.png";
import VRMaze5 from "../assets/icons/vr-maze-5.png";
import VRMaze6 from "../assets/icons/vr-maze-6.png";

import Underline from "../assets/icons/underline.svg";
import TitleUnderline from "../assets/icons/TitleUnderline";

import Github from "../assets/icons/Github";
import Internet from "../assets/icons/Internet";
import Youtube from "../assets/icons/Youtube";

import ChevronLeftBtn from "../assets/icons/ChevronLeftBtn";
import ChevronRightBtn from "../assets/icons/ChevronRightBtn";

const MyWorks = [
	[
		{
			title: "Product Feedback App",
			description:
				"Full-stack application that allows users to add/like/comment on feedbacks written by users on the app",
			links: [
				{ to: "https://github.com/Jacksonishere/frontend-product-feedback-app", Icon: Github },
				{ to: "https://frontend-product-feedback-app.vercel.app/", Icon: Internet },
			],
			images: [PFA, PFA2, PFA3, PFA4, PFA5],
			largest: PFA3,
			imgGrandpa: "grow",
			imgParent: "bg-fem",
		},
		{
			title: "Frontend Mentor Challenges",
			description: "20+ components/landing pages/multi-page websites built from designs provided by FrontendMentor",
			links: [{ to: "https://github.com/Jacksonishere/FEM_Challenges", Icon: Github }],
			largest: FEM,
			images: [FEM],
			imgGrandpa: "bg-white",
		},
	],
	[
		{
			title: "MeditApp",
			description: "A meditation social media platform for users to upload and consume meditation recordings",
			links: [{ to: "https://github.com/kionkina/meditapp", Icon: Github }],
			images: [Meditapp, Meditapp2],
			largest: Meditapp2,
			imgGrandpa: "bg-meditapp",
		},
		{
			title: "Mobile VR Escape Room Game",
			description:
				"Escape room for Google VR cardboard that consists of 4 rooms with hidden clues for player to escape",
			links: [
				{ to: "https://github.com/kionkina/meditapp", Icon: Github },
				{ to: "https://www.youtube.com/watch?v=oRGq55i7fRY&ab_channel=JessicaWong", Icon: Youtube },
			],
			images: [VRMaze1, VRMaze2, VRMaze3, VRMaze4, VRMaze5, VRMaze6],
			largest: VRMaze3,
			imgParent: "bg-vr",
		},
	],
];

const dummyVar = {
	offset: {},
	onscreen: {},
};

const ParentOffscreenVar = {
	offscreen: {},
	onscreen: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const OffScreenVar = {
	offscreen: {
		opacity: 0,
		y: 20,
	},
	onscreen: {
		opacity: 1,
		y: 0,
		transition: {
			ease: "easeInOut",
			duration: 0.4,
		},
	},
};

const opacityViewportVar = {
	offscreen: {
		opacity: 0,
	},
	onscreen: ({ duration = 0.4, delay = 0 }) => ({
		opacity: 1,
		transition: {
			duration: duration,
			delay: delay,
		},
	}),
};

const MyWork = () => {
	return (
		<section data-scroll-id="projects" className="bg-bg_color">
			<div className="pt-[1px] pb-[5em] container">
				<h3 className="relative mt-[1.5em] mb-[3em] tracking-normal leading-[1.2] text-[2.25em] md:text-[clamp(2rem,_3vw,_2.3rem)] font-normal">
					<motion.div
						initial="offscreen"
						whileInView="onscreen"
						variants={ParentOffscreenVar}
						viewport={{ once: true, amount: 0.9, margin: "0px 0px -200px 0px" }}>
						<motion.div
							className="relative w-max overflow-hidden"
							transition={{ staggerChildren: 0.2 }}
							variants={dummyVar}>
							<motion.span variants={OffScreenVar} viewport={{ once: true }} className="block">
								<span className="text-white">Selected</span>
							</motion.span>
							<motion.img
								className="absolute top-[calc(100%-.375rem)] max-w-full"
								src={Underline}
								alt=""
								variants={opacityViewportVar}
								custom={{}}
								viewport={{ once: true }}
							/>
						</motion.div>
						<motion.div
							className="absolute top-[calc(100%+.1em)] left-[1.5em] overflow-hidden"
							transition={{ staggerChildren: 0.2 }}
							variants={dummyVar}>
							<motion.span variants={OffScreenVar} viewport={{ once: true }} className="block">
								<span className="text-white">Projects</span>
							</motion.span>
							<motion.img
								className="absolute top-[calc(100%-.375rem)] max-w-full"
								src={Underline}
								alt=""
								variants={opacityViewportVar}
								custom={{}}
								viewport={{ once: true }}
							/>
						</motion.div>
					</motion.div>
				</h3>
				<div className="grid gap-[3em] md:gap-[min(3.5vw,_4em)]">
					{MyWorks.map((myWorkRow, i) => (
						<div
							key={i}
							id={"row-" + i}
							className="grow grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-[3em] md:gap-[min(2.8vw,4em)]">
							{myWorkRow.map((myWork, i) => (
								<MyWorkCard key={i} myWork={myWork} />
							))}
						</div>
					))}
					{/* </div> */}
				</div>
			</div>
		</section>
	);
};

const slidingVar = {
	enter: (direction) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
};

const cardContVar = {
	offscreen: {
		y: "0",
	},
	onscreen: {
		y: "-100%",
		transition: {
			duration: 0.7,
			ease: "easeOut",
		},
	},
};

const MyWorkCard = ({ myWork: { title, description, images, imgGrandpa, imgParent, links, largest } }) => {
	return (
		<>
			<motion.div
				initial="offscreen"
				whileInView="onscreen"
				transition={{ default: { ease: "easeOut" } }}
				viewport={{ once: true, amount: 0.35 }}
				className="flex flex-col h-full relative grow w-[100%] min-w-[300px] overflow-hidden">
				<motion.div
					id={"card-hidder-" + title}
					className="absolute inset-0 z-10 bg-cardhider"
					variants={cardContVar}></motion.div>
				{/* slideshow */}
				<CardSlideshow images={images} imgGrandpa={imgGrandpa} imgParent={imgParent} largest={largest} />
				{/* info area */}
				<div className="mt-[.5em] flex gap-y-2 items-center">
					<div className="leading-[1.5]">
						<div className="relative flex items-center text-[clamp(1.25rem,_3.2vw,_1.675rem)] md:text-[clamp(1.25rem,_2.5vw,_1.5rem)]">
							<p className="relative">
								<TitleUnderline />
								<span className="relative text-white">{title}</span>
							</p>
							<ul className="ml-[.7em] mt-[-2px] md:mt-[-1px] flex items-center gap-1">
								{links?.map(({ to, Icon }) => (
									<li key={to}>
										<a className="block max-w-[1.25em] md:max-w-[1.15em]" href={to}>
											<Icon />
										</a>
									</li>
								))}
							</ul>
							{/* </div> */}
						</div>
						<p
							className="inline-block text-white opacity-80 text-[clamp(.9375rem,_2.4vw,_1.09375rem)]
                  md:text-[clamp(1rem,_1.5vw,_1.15rem)]">
							{description}
						</p>
					</div>
				</div>
			</motion.div>
		</>
	);
};

const imgScaleVar = {
	offscreen: {
		scale: 1.2,
	},
	onscreen: {
		scale: 1,
	},
};
const CardSlideshow = ({ images, imgGrandpa, imgParent, largest }) => {
	const [[page, direction], setPage] = useState([0, 0]);
	const imageIndex = wrap(0, images.length, page);

	const paginate = (newDirection) => {
		setPage([page + newDirection, newDirection]);
	};
	return (
		<>
			<div className={"grow relative grid place-items-center " + imgGrandpa}>
				<motion.div className={"relative p-[5%] w-full h-full " + imgParent}>
					{images.length > 1 && (
						<div className="absolute inset-x-[.5%] top-1/2 -translate-y-1/2 flex justify-between text-gray-600 md:inset-x-[0%] lg:inset-x-[1%]">
							<button className="" onClick={() => paginate(-1)}>
								<ChevronLeftBtn />
							</button>
							<button className="" onClick={() => paginate(1)}>
								<ChevronRightBtn />
							</button>
						</div>
					)}
					<motion.div
						className=" grid place-items-center relative overflow-hidden w-full h-full"
						viewport={{ once: true }}
						transition={{
							ease: "easeOut",
							duration: 0.7,
						}}
						variants={imgScaleVar}>
						<img className="invisible max-w-full max-h-[340px]" src={largest} alt="" />
						<AnimatePresence initial={false} custom={direction}>
							<motion.img
								key={page}
								custom={direction}
								variants={slidingVar}
								initial="enter"
								animate="center"
								exit="exit"
								transition={{
									x: { type: "spring", stiffness: 300, damping: 30 },
									opacity: { duration: 0.2 },
								}}
								className="absolute max-w-full max-h-[340px] rounded-[4px]"
								src={images[imageIndex]}
								alt="work-preview"
							/>
						</AnimatePresence>
					</motion.div>
				</motion.div>
			</div>
		</>
	);
};

export default MyWork;
