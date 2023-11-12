import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClansStatComponent } from './clans-stat.component';

describe('ClansStatComponent', () => {
  let component: ClansStatComponent;
  let fixture: ComponentFixture<ClansStatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClansStatComponent]
    });
    fixture = TestBed.createComponent(ClansStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
