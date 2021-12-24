import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ParametersComponent } from './components/parameters/parameters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { ChartsComponent } from './components/charts/charts.component';
import { NgChartsModule } from 'ng2-charts';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ParametersComponent,
    ButtonsComponent,
    DatepickerComponent,
    ChartsComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgChartsModule,
    MatDatepickerModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
