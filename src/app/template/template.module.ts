import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopoComponent} from './topo';
import { AsideComponent } from './aside';
import { HomeComponent } from './home';
import { FooterComponent } from './footer';
import { CadastroClienteComponent } from './corpo/cadastro-cliente';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TopoComponent,
    AsideComponent,
    HomeComponent,
    FooterComponent,
    CadastroClienteComponent
 
  ],exports:[
    TopoComponent,
    AsideComponent,
    HomeComponent,
    FooterComponent,
    CadastroClienteComponent
    
   
  ]
})
export class TemplateModule { }
