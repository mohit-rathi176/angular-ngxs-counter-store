import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Init } from './store/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	
	constructor(private store: Store) { }

	ngOnInit(): void {
		this.store.dispatch(new Init());
	}

}
