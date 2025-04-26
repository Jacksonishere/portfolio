import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useMeasure from "react-use-measure";
import { useMediaQuery } from "react-responsive";

import HTML from "../assets/icons/icons8-html-5.svg";
import CSS from "../assets/icons/icons8-css3.svg";
import JS from "../assets/icons/icons8-javascript.svg";
import TS from "../assets/icons/icons8-typescript.svg";
import NodeJS from "../assets/icons/icons8-nodejs.svg";
import Python from "../assets/icons/icons8-python.svg";
import Swift from "../assets/icons/icons8-swift.svg";
import CPP from "../assets/icons/icons8-c++.svg";
import DB from "../assets/icons/icons8-database.png";
import AWS from "../assets/icons/icons8-aws.svg";

import Reactt from "../assets/icons/icons8-react.svg";
import ROR from "../assets/icons/icons8-ruby-on-rails.svg";
import Flask from "../assets/icons/icons8-flask.svg";

import Firebase from "../assets/icons/icons8-firebase.svg";
import Git from "../assets/icons/icons8-git.svg";
import Github from "../assets/icons/icons8-github.svg";

const tools = [
	{
		type: "framework",
		icons: [
			{
				name: "React/React Native",
				Icon: Reactt,
			},
			{
				name: "Ruby On Rails",
				Icon: ROR,
			},
			{
				name: "Flask",
				Icon: Flask,
			},
		],
	},
	{
		type: "language",
		icons: [
			{
				name: "HTML",
				Icon: HTML,
			},
			{
				name: "CSS",
				Icon: CSS,
			},
			{
				name: "Javscript",
				Icon: JS,
			},
			{
				name: "Typescript",
				Icon: TS,
			},
			{
				name: "NodeJS",
				Icon: NodeJS,
			},
			{
				name: "Python",
				Icon: Python,
			},
			{
				name: "SQL",
				Icon: DB,
			},
			{
				name: "C++",
				Icon: CPP,
			},
			{
				name: "Swift",
				Icon: Swift,
			},
		],
	},
	{
		type: "Tools",
		icons: [
			{
				name: "AWS",
				Icon: AWS,
			},
			{
				name: "CI/CD",
				Icon: Github,
			},
			{
				name: "Git",
				Icon: Git,
			},
			{
				name: "PostgreSQL",
				Icon: DB,
			},
			{
				name: "Firebase",
				Icon: Firebase,
			},
		],
	},
];

const SelectedTabVar = {
	animate: (isActive) =>
		isActive
			? {
					// match pill color
					color: "rgb(255,255,255)",
			  }
			: {
					color: "#151f20",
			  },
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
		y: -20,
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

const SkillsVar = {
	enter: {
		opacity: 0,
		y: -10,
	},
	center: {
		x: 0,
		y: 0,
		opacity: 1,
	},
	exit: (direction) => {
		return {
			x: direction < 0 ? 30 : -30,
			opacity: 0,
		};
	},
};
const ToolSection = () => {
	const [[selected, currIndex, newDirection], setSelected] = useState(["framework", 0, 0]);
	const [focused, setFocused] = React.useState(null);
	const [ref, { height }] = useMeasure();
	const isMd = useMediaQuery({ query: "(min-width: 803px)" });

	return (
		<section data-scroll-id="skills" className="relative grid place-items-center ">
			<div className="mx-auto w-full max-w-[1200px] ">
				<motion.div
					initial="offscreen"
					whileInView="onscreen"
					variants={ParentOffscreenVar}
					viewport={{ once: true, amount: 0.9 }}
					className="flex flex-col place-items-center pt-[48px] pb-[46px]">
					<motion.h2 variants={OffScreenVar} className="font-normal text-pill text-[2.20em]">
						Skills
					</motion.h2>

					<motion.div variants={OffScreenVar} layout="size" className="w-full flex flex-col items-center">
						<motion.ul
							onMouseLeave={() => setFocused(null)}
							className="overflow-hidden rounded-full flex mt-[2.5em] mb-[3em] divide-x-[1px] divide-pill border-[1px] border-pill">
							{tools.map(({ type }, i) => {
								let isActive = type === selected;
								return (
									<motion.li
										onClick={() => {
											if (type === selected) return;
											else setSelected([type, i, currIndex > i ? -1 : 1]);
										}}
										onFocus={() => setFocused(type)}
										onMouseEnter={() => setFocused(type)}
										key={type}
										className="relative px-7 py-3 text-center cursor-pointer">
										<motion.span
											custom={isActive}
											variants={SelectedTabVar}
											initial="initial"
											animate="animate"
											transition={{
												duration: 0.2,
											}}
											className="relative z-50 capitalize tracking-wider text-bg_color">
											{type}
										</motion.span>
										{focused === type && isMd ? (
											<motion.div
												transition={{
													layout: {
														duration: 0.2,
														ease: "easeOut",
													},
												}}
												className="absolute z-0 inset-0 bg-[rgba(158,183,183,.5)]"
												layoutId="hover"
											/>
										) : null}
										{isActive ? (
											<motion.div
												className="absolute z-[5] inset-0 bg-pill"
												layoutId={isMd ? "pill" : ""}
												transition={{
													layout: {
														duration: 0.2,
													},
												}}
											/>
										) : null}
									</motion.li>
								);
							})}
						</motion.ul>
						{/* For custom variant, need to supply custom on animatePresence to get latest */}
						<motion.div
							className="w-full"
							animate={{ height }}
							transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}>
							<AnimatePresence custom={newDirection} initial={false} mode={"wait"}>
								<motion.ul
									key={currIndex}
									custom={newDirection}
									variants={SkillsVar}
									initial="enter"
									animate="center"
									exit="exit"
									transition={{
										type: "tween",
										ease: "easeInOut",
									}}
									className="w-full min-h-[84px] grid place-items-center justify-center items-start grid-cols-[repeat(auto-fit,minmax(118px,max-content))] gap-8"
									ref={ref}>
									{tools
										.find(({ type }) => type === selected)
										.icons.map(({ name, Icon }) => (
											<li className="max-w-[118px] min-h-[84px] grid place-items-center gap-3" key={name}>
												<img className="w-[3em] h-[3em]" src={Icon} alt="asds" />
												<div className="font-thin text-[1.15em] lg-text-[1.3em] text-center text-bg_color tracking-wider">
													{name}
												</div>
											</li>
										))}
								</motion.ul>
							</AnimatePresence>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default ToolSection;
