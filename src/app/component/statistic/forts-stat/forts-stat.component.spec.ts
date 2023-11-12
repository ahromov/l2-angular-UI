import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortsStatComponent } from './forts-stat.component';

describe('FortsStatComponent', () => {
  let component: FortsStatComponent;
  let fixture: ComponentFixture<FortsStatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FortsStatComponent]
    });
    fixture = TestBed.createComponent(FortsStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
