import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { temperatureReducer } from './store/reducers/temperature.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ temperatureState: temperatureReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
