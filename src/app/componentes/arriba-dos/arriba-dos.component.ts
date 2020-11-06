import { Component, OnInit } from '@angular/core';
import { AbajoComponent } from '../abajo/abajo.component';

@Component({
  selector: 'app-arriba-dos',
  templateUrl: './arriba-dos.component.html',
  styleUrls: ['./arriba-dos.component.css'],
})
export class ArribaDosComponent implements OnInit {
  public miCosa;
  constructor(public miabajoComponent: AbajoComponent) {
   
  }

  ngOnInit(): void {
    this.miCosa = this.miabajoComponent.cosa;
  }
}
