import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileInformation } from './user-profile-information';

describe('UserProfileInformation', () => {
  let component: UserProfileInformation;
  let fixture: ComponentFixture<UserProfileInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileInformation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileInformation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
