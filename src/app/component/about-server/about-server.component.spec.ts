import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutServerComponent } from './about-server.component';

describe('AboutServerComponent', () => {
  let component: AboutServerComponent;
  let fixture: ComponentFixture<AboutServerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutServerComponent]
    });
    fixture = TestBed.createComponent(AboutServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
