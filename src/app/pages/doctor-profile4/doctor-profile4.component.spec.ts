import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorProfile4Component } from './doctor-profile4.component';

describe('DoctorProfile4Component', () => {
  let component: DoctorProfile4Component;
  let fixture: ComponentFixture<DoctorProfile4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorProfile4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorProfile4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
