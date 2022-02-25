import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorProfile3Component } from './doctor-profile3.component';

describe('DoctorProfile3Component', () => {
  let component: DoctorProfile3Component;
  let fixture: ComponentFixture<DoctorProfile3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorProfile3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorProfile3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
