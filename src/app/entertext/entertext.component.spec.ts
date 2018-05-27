import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertextComponent } from './entertext.component';

describe('EntertextComponent', () => {
  let component: EntertextComponent;
  let fixture: ComponentFixture<EntertextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
