import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Decrement, Increment } from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.scss']
})
export class CounterControlsComponent {

	constructor(private store: Store) {}

  increment() {
		this.store.dispatch(new Increment(1));
  }

  decrement() {
		this.store.dispatch(new Decrement(1));
  }

}
