import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopoComponent} from './topo';
import { AsideComponent } from './aside';
import { HomeComponent } from './home';
import { FooterComponent } from './footer'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TopoComponent,
    AsideComponent,
    HomeComponent,
    FooterComponent
 
  ],exports:[
    TopoComponent,
    AsideComponent,
    HomeComponent,
    FooterComponent
    
   
  ]
})
export class TemplateModule { }
