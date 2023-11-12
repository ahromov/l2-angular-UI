import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonStatComponent } from './common-stat.component';

describe('CommonStatComponent', () => {
  let component: CommonStatComponent;
  let fixture: ComponentFixture<CommonStatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonStatComponent]
    });
    fixture = TestBed.createComponent(CommonStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
