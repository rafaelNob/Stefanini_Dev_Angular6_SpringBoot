import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TemplateModule} from './template'



@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    BrowserModule,
    TemplateModule

  ],
  providers: [],
  bootstrap: 
  [
    AppComponent
  ]
})
export class AppModule { }
