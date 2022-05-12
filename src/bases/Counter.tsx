import { useState } from "react";

interface Props {
	initialValue: number;
}

export const Counter = (props: Props) => {
	const [counter, setCounter] = useState<number>(props.initialValue);

	const handleClick = () => {
		setCounter((prev) => prev + 1);
	};

	return (
		<>
			<h1>Counter: {counter}</h1>
			<button onClick={handleClick}>+1</button>
		</>
	);
};
