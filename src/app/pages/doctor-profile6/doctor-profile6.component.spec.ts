import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorProfile6Component } from './doctor-profile6.component';

describe('DoctorProfile6Component', () => {
  let component: DoctorProfile6Component;
  let fixture: ComponentFixture<DoctorProfile6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorProfile6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorProfile6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
