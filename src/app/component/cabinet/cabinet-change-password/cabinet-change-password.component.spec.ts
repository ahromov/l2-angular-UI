import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetChangePasswordComponent } from './cabinet-change-password.component';

describe('CabinetChangePasswordComponent', () => {
  let component: CabinetChangePasswordComponent;
  let fixture: ComponentFixture<CabinetChangePasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabinetChangePasswordComponent]
    });
    fixture = TestBed.createComponent(CabinetChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
