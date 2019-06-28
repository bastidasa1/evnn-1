import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetticketPage } from './getticket.page';

describe('GetticketPage', () => {
  let component: GetticketPage;
  let fixture: ComponentFixture<GetticketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetticketPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetticketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
