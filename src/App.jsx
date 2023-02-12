import { useEffect, useRef } from "react";
import NavBar from "./components/NavBar";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import IntroSection from "./components/IntroSection";
import ToolSection from "./components/ToolSection";
import MyWork from "./components/MyWork";

const App = () => {
	const containerRef = useRef(null);

	useEffect(() => {
		window.history.scrollRestoration = "manual";
	}, []);

	return (
		<LocomotiveScrollProvider
			options={{
				smooth: true,
				multiplier: 0.4,
			}}
			watch={[]}
			containerRef={containerRef}>
			<main data-scroll-container ref={containerRef} className="pt-8">
				<IntroSection />
				<ToolSection />
				<MyWork />
			</main>
		</LocomotiveScrollProvider>
	);
};

export default App;
