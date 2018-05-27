import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaylistmodelComponent } from './displaylistmodel.component';

describe('DisplaylistmodelComponent', () => {
  let component: DisplaylistmodelComponent;
  let fixture: ComponentFixture<DisplaylistmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaylistmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaylistmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
