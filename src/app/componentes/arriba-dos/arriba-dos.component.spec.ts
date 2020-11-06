import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArribaDosComponent } from './arriba-dos.component';

describe('ArribaDosComponent', () => {
  let component: ArribaDosComponent;
  let fixture: ComponentFixture<ArribaDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArribaDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArribaDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
