import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePg } from './profile-pg';

describe('ProfilePg', () => {
  let component: ProfilePg;
  let fixture: ComponentFixture<ProfilePg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilePg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilePg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
