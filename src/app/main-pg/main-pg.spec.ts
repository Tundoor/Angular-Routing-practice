import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPg } from './main-pg';

describe('MainPg', () => {
  let component: MainPg;
  let fixture: ComponentFixture<MainPg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
