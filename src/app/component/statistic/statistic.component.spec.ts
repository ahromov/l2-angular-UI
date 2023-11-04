import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticComponent } from './statistic.component';

describe('StatistixComponent', () => {
  let component: StatisticComponent;
  let fixture: ComponentFixture<StatisticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticComponent]
    });
    fixture = TestBed.createComponent(StatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
