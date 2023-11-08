import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAccountsListComponent } from './users-accounts-list.component';

describe('UsersAccountsListComponent', () => {
  let component: UsersAccountsListComponent;
  let fixture: ComponentFixture<UsersAccountsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersAccountsListComponent]
    });
    fixture = TestBed.createComponent(UsersAccountsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
