import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-abajo',
  templateUrl: './abajo.component.html',
  styleUrls: ['./abajo.component.css'],
})
export class AbajoComponent implements OnInit {
  public cosa = [6];
  public cosa$ = new Subject<Array<number>>();
  constructor() {}

  ngOnInit(): void {}
  incrementa() {
    this.cosa.push(6);
    this.cosa$.next(this.cosa);
  }
}
