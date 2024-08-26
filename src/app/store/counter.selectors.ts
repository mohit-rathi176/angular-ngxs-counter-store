import { Selector } from "@ngxs/store";
import { CounterState } from "./counter.state";

export class CounterSelectors {

	@Selector([CounterState])
	static counter(state: number) {
		return state;
	}

	@Selector([CounterState])
	static doubleCounter(state: number) {
		return state * 2;
	}

}