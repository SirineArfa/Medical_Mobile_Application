import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorProfile5Component } from './doctor-profile5.component';

describe('DoctorProfile5Component', () => {
  let component: DoctorProfile5Component;
  let fixture: ComponentFixture<DoctorProfile5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorProfile5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorProfile5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
