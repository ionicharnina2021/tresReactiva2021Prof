import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArribaDosComponent } from './arriba-dos/arriba-dos.component';
import { AbajoComponent } from './abajo/abajo.component';

@NgModule({
  declarations: [ArribaDosComponent, AbajoComponent],
  imports: [CommonModule],
  exports:[ArribaDosComponent],
  providers: [AbajoComponent],
})
export class ComponModule {}
