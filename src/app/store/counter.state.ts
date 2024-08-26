import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { Decrement, Increment, Init, Save, Set } from "./counter.actions";

@State<number>({
	name: 'counter',
	defaults: 0
})
@Injectable()
export class CounterState {

	@Action(Init)
	init(ctx: StateContext<number>) {
		const counter = localStorage.getItem('counter');
		if (counter)
			ctx.dispatch(new Set(+counter));
		else
			ctx.dispatch(new Set(0));
	}

	@Action(Set)
	set(ctx: StateContext<number>, action: Set) {
		ctx.setState(action.value);
	}
	
	@Action(Increment)
	increment(ctx: StateContext<number>, action: Increment) {
		const state = ctx.getState();
		ctx.setState(state + action.value);
		ctx.dispatch(new Save());
	}

	@Action(Decrement)
	decrement(ctx: StateContext<number>, action: Decrement) {
		const state = ctx.getState();
		ctx.setState(state - action.value);
		ctx.dispatch(new Save());
	}

	@Action(Save)
	save(ctx: StateContext<number>) {
		const state = ctx.getState();
		localStorage.setItem('counter', state.toString());
	}

}