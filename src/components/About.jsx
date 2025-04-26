import React, { useEffect } from "react";
import Cake from "../assets/icons/birthday-cake-celebration-svgrepo-com.svg";
import Suitcase from "../assets/icons/suitcase-svgrepo-com.svg";
import Graduation from "../assets/icons/graduation-cap-svgrepo-com.svg";
import Memoji from "../assets/icons/memoji-wave.png";
import Sunnova from "../assets/icons/sunnova-icon.png";
import TLlogo from "../assets/icons/tl-logo.png";
import Memoji2 from "../assets/icons/memoji.png";
import { useMediaQuery } from "react-responsive";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const HISTORY = [
	{
		year: "2023 - Present",
		events: [
			{
				title: "Joined Sunnova as a Full-Stack Mobile Developer",
				details:
					"Full-stack mobile developer working across React Native, serverless backend, and infrastructure. Contributed to app performance, payment integrations, notification systems, and CI/CD pipelines to improve user experience and operational efficiency",
				date: "June 12, 2023",
				icon: Sunnova,
				bg: "#e3e3e3",
				logo: true,
			},
		],
	},
	{
		year: "2022",
		events: [
			{
				title: "Officially a Software Developer!",
				details:
					"Owned a full-stack data presentation app, building advanced frontend features like filtering, grid customization, and data import/export. Cached historical and daily calculated data using Redis to improve performance of our Rails API",
				date: "Jan 1, 2022",
				icon: TLlogo,
				bg: "#e3e3e3",
				logo: true,
			},
		],
	},
	{
		year: "2021",
		events: [
			{
				title: "Intership as a Software Developer",
				details:
					"Joined Tradelegs as an intern where I familiarized myself with server side programming with Ruby using Ruby on Rails ",
				date: "Nov 1, 2021",
				icon: TLlogo,
				bg: "#e3e3e3",
				logo: true,
			},
			{
				title: "First generation college graduate!",
				details: "Magna Cum Laude graduate from Hunter College with a B.A in Computer Science and minor in Mathematics",
				date: "May 25, 2021",
				icon: Graduation,
				bg: "#daebfb",
			},
		],
	},
];

const About = () => {
	return (
		<section data-scroll-id="about" className="bg-bg_color">
			<div className="container mx-auto pt-[1.5rem] pb-[4.5rem] font-normal text-white text-[clamp(.9375rem,_2.4vw,_1.09375rem)] md:text-[clamp(1rem,_1.5vw,_1.075rem)] md:leading-[1.45rem]">
				<div id="sticky" className="relative md:flex md:justify-between md:gap-[5em] lg:gap-[10em] md:items-start">
					<AboutMeList>
						<div className="">
							<h3 className="mt-[1em] mb-[.5em] text-[1.75em] md:text-[clamp(1.75rem,_2.5vw,_2rem)] font-medium tracking-tight md:mt-[2rem] md:mb-[.9rem]">
								About me 👨‍💻
							</h3>
							<ul className="flex flex-col gap-[.7em] list-disc list-inside text-gray-200 ">
								<li>
									I'm a passionate engineer who thrives across the whole stack, driven by solving complex business
									problems and building impactful solutions
								</li>
								<li>
									I view challenges as growth opportunities, aiming to become a solutions architect who builds as much
									as they design.
								</li>
								<li>Current hobby outside of programming: 🏋️</li>
							</ul>
						</div>
					</AboutMeList>
					<Timeline />
				</div>
			</div>
		</section>
	);
};

const AboutMeList = (props) => {
	const isMd = useMediaQuery({ query: "(min-width: 803px)" });
	const { scroll } = useLocomotiveScroll();

	useEffect(() => {
		scroll?.update();
	}, [isMd]);
	return isMd ? (
		<div
			data-scroll
			data-scroll-sticky
			data-scroll-target="#sticky"
			className="sticky mb-[3em] md:basis-[25%] md:max-w-[17rem]">
			<img
				className="mt-[clamp(4rem,_11vw,_4em)] lg:mt-[clamp(4rem,_10vw,_5.5rem)] max-w-[90%] mx-auto"
				src={Memoji}
				alt=""
			/>
			{props.children}
		</div>
	) : (
		<div className="sticky mb-[3em]">{props.children}</div>
	);
};

const Timeline = () => {
	return (
		<div className="md:basis-[70%]">
			<h4 className="mb-[.25em] text-[1.75em] text-right font-medium tracking-tight md:text-[clamp(1.75rem,_2.5vw,_2rem)] md:pt-[.6em] md:pb-[.2em] lg:pt-[1em] lg:pb-[.4em]">
				Timeline ⏳
			</h4>
			<div>
				{HISTORY.map((year, i) => (
					<YearCard {...year} key={i} />
				))}
			</div>
		</div>
	);
};

const YearCard = ({ year, events }) => {
	return (
		<div className="[&:not(:first-child)]:mt-[2em]">
			<div className="grid grid-cols-[auto,1fr] gap-x-[.85em] grid-flow-row">
				{/* empty gap */}
				<div></div>
				{/* year */}
				<div className="flex items-center gap-[1em] mb-[1.25em]">
					<h3 className="text-[1.5em] font-bold">{year}</h3>
					<div className="grow h-[1px] bg-gray-100"></div>
				</div>
				{events.map((event, i) => (
					<React.Fragment key={i}>
						{/* pinpoint */}
						{/* <div className="flex flex-col gap-[.5rem] items-center"> */}
						<div className="flex flex-col items-center">
							<div
								style={{ backgroundColor: event.bg }}
								className="relative shrink-0 w-[46px] h-[46px] rounded-full grid place-items-center overflow-hidden">
								<img className={`absolute ${event.logo ? "" : "max-w-[34px]"}`} src={event.icon} alt="" />
							</div>
							<div className="w-[1px] h-full bg-gray-300"></div>
						</div>

						{/* event details */}
						<div className="flex flex-col mb-[1.5em]">
							<b className="block text-[1.125em]">{event.title}</b>
							<span className="inline-block mt-[.1em] text-[.925em] text-gray-400">{event.date}</span>
							<p className="mt-[.5em] tracking-wide text-[.95em] text-gray-200">{event.details}</p>
						</div>
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default About;
