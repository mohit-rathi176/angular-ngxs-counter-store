import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CounterSelectors } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent {

	counter$: Observable<number> = inject(Store).select(CounterSelectors.counter);
	doubleCounter$: Observable<number> = inject(Store).select(CounterSelectors.doubleCounter);

	constructor() { }

}
