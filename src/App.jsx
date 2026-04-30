import { useEffect, useRef, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { motion, AnimatePresence } from "framer-motion";
import { LocomotiveScrollProvider, useLocomotiveScroll } from "react-locomotive-scroll";

import IntroSection from "./components/IntroSection";
import ToolSection from "./components/ToolSection";
import MyWork from "./components/MyWork";
import About from "./components/About";
import Footer from "./components/Footer";

const ScrollToTop = () => {
	const { scroll } = useLocomotiveScroll();
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (!scroll) return;
		const threshold = window.innerHeight * 0.5;
		const handler = ({ scroll: { y } }) => setVisible(y > threshold);
		scroll.on("scroll", handler);
		return () => scroll.off("scroll", handler);
	}, [scroll]);

	return (
		<AnimatePresence>
			{visible && (
				<motion.button
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 10 }}
					transition={{ duration: 0.2 }}
					onClick={() => scroll?.scrollTo(0, { duration: 800 })}
					className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-white text-bg_color grid place-items-center shadow-lg hover:scale-110 transition-transform">
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M8 13V3M8 3L3 8M8 3L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</motion.button>
			)}
		</AnimatePresence>
	);
};

const App = () => {
	const containerRef = useRef(null);

	useEffect(() => {
		window.history.scrollRestoration = "manual";
	}, []);

	return (
		<>
			<LocomotiveScrollProvider
				options={{
					smooth: true,
					multiplier: 0.5,
					tablet: {
						breakpoint: 803,
					},
				}}
				watch={[]}
				containerRef={containerRef}>
				<main data-scroll-container ref={containerRef} className="pt-8">
					<IntroSection />
					<About />
					<ToolSection />
					<MyWork />
					<Footer />
				</main>
				<ScrollToTop />
			</LocomotiveScrollProvider>
			<Analytics />
		</>
	);
};

export default App;
