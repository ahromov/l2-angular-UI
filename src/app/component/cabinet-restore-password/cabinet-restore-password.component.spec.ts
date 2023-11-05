import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetRestorePasswordComponent } from './cabinet-restore-password.component';

describe('CabinetRestorePasswordComponent', () => {
  let component: CabinetRestorePasswordComponent;
  let fixture: ComponentFixture<CabinetRestorePasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabinetRestorePasswordComponent]
    });
    fixture = TestBed.createComponent(CabinetRestorePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
