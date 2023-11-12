import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastlesStatComponent } from './castles-stat.component';

describe('CastlesComponent', () => {
  let component: CastlesStatComponent;
  let fixture: ComponentFixture<CastlesStatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CastlesStatComponent]
    });
    fixture = TestBed.createComponent(CastlesStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
