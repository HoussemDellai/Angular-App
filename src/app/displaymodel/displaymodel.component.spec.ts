import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaymodelComponent } from './displaymodel.component';

describe('DisplaymodelComponent', () => {
  let component: DisplaymodelComponent;
  let fixture: ComponentFixture<DisplaymodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaymodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaymodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
