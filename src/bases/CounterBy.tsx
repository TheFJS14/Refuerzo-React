import { useState } from "react";

interface Props {
	initialValue: number;
}

interface CounterState {
	counter: number;
	clicks: number;
}

export const CounterBy = ({ initialValue }: Props) => {
	const [counterState, setCounterState] = useState<CounterState>({
		counter: initialValue,
		clicks: 0,
	});

	const { counter, clicks } = counterState;

	const handleClick = (value: number) => {
		setCounterState(({ clicks, counter }) => {
			return {
				counter: counter + value,
				clicks: clicks + 1,
			};
		});
	};

	return (
		<>
			<h1>Counter by: {counter}</h1>
			<h1>Clicks: {clicks}</h1>
			<button onClick={() => handleClick(1)}>+1</button>
			<button onClick={() => handleClick(5)}>+5</button>
		</>
	);
};
