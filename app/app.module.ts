import { ProgressBarAllModule } from '@syncfusion/ej2-angular-progressbar';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [ProgressBarAllModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
