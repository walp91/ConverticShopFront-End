import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos/productos.component';
import { RouterModule } from '@angular/router';
import { ComponentesRutas } from './componente.routing';



@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentesRutas)
  ]
})
export class ComponenteModule { }
