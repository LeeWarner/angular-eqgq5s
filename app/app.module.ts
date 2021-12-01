import { TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { CheckBoxModule, ButtonAllModule } from '@syncfusion/ej2-angular-buttons';

import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { ProgressBarAllModule } from '@syncfusion/ej2-angular-progressbar';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';

@NgModule({ declarations: [ AppComponent ], imports: [ ProgressBarAllModule, DropDownListModule, CheckBoxModule, TextBoxAllModule, BrowserModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
