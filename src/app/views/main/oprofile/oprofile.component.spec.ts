import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OprofilePage } from './oprofile.page';

describe('OprofilePage', () => {
  let component: OprofilePage;
  let fixture: ComponentFixture<OprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OprofilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
