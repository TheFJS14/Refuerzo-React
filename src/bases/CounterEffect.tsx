import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MAXIMUM_COUNT = 10;

export const CounterEffect = () => {
	const [counterState, setCounterState] = useState<number>(5);
	const counterElement = useRef<HTMLHeadingElement>(null);

	const handleClick = () => {
		setCounterState((prev) => Math.min(prev + 1, MAXIMUM_COUNT));
	};

	useEffect(() => {
		if (counterState < 10) return;

		console.log("%cSe llegó al valor máximo", "color:red; background-color:black");

		const tl = gsap.timeline();
		tl.to(counterElement.current, { y: -10, duration: 0.2, ease: "ease.out" });
		tl.to(counterElement.current, { y: 0, duration: 1, ease: "bounce.out" });
	}, [counterState]);

	return (
		<>
			<h1>Counter effect:</h1>
			<h2 ref={counterElement}>{counterState}</h2>
			<button onClick={handleClick}>+1</button>
		</>
	);
};
