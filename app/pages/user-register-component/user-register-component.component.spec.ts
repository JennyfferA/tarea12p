import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegisterComponentComponent } from './user-register-component.component';

describe('UserRegisterComponentComponent', () => {
  let component: UserRegisterComponentComponent;
  let fixture: ComponentFixture<UserRegisterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegisterComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegisterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
