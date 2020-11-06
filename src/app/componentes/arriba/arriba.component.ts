import { AbajoComponent } from './../abajo/abajo.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-arriba',
  templateUrl: './arriba.component.html',
  styleUrls: ['./arriba.component.css'],
})
export class ArribaComponent implements OnInit {
  public miCosa$: Observable<Array<number>>;
  constructor(public abajoComponent: AbajoComponent) {
  
  }
    
  ngOnInit(): void {
    this.miCosa$ = this.abajoComponent.cosa$.asObservable();
    this.miCosa$.subscribe();
  }
}
