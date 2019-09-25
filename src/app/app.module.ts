import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { temperatureReducer } from './store/reducers/temperature.reducer';
import { InputIndicatorComponent } from './input-indicator/input-indicator.component';
import { TemperatureComponentComponent } from './temperature-component/temperature-component.component';

@NgModule({
  declarations: [
    AppComponent,
    InputIndicatorComponent,
    TemperatureComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    StoreModule.forRoot({ temperatureState: temperatureReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
