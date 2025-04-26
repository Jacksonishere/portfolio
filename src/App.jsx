import { useEffect, useRef } from "react";
import { Analytics } from "@vercel/analytics/react";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import IntroSection from "./components/IntroSection";
import ToolSection from "./components/ToolSection";
import MyWork from "./components/MyWork";
import About from "./components/About";

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
				</main>
			</LocomotiveScrollProvider>
			<Analytics />
		</>
	);
};

export default App;
