import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisolaytodoComponent } from './disolaytodo.component';

describe('DisolaytodoComponent', () => {
  let component: DisolaytodoComponent;
  let fixture: ComponentFixture<DisolaytodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisolaytodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisolaytodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
