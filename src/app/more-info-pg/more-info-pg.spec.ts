import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfoPg } from './more-info-pg';

describe('MoreInfoPg', () => {
  let component: MoreInfoPg;
  let fixture: ComponentFixture<MoreInfoPg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreInfoPg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreInfoPg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
