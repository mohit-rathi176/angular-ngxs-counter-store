import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterState } from './store/counter.state';

@NgModule({
  declarations: [
    AppComponent,
    CounterControlsComponent,
    CounterOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([CounterState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
