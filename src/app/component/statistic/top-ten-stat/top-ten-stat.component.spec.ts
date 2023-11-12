import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenStatComponent } from './top-ten-stat.component';

describe('TopTenStatComponent', () => {
  let component: TopTenStatComponent;
  let fixture: ComponentFixture<TopTenStatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopTenStatComponent]
    });
    fixture = TestBed.createComponent(TopTenStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
