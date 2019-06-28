import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsglistPage } from './msglist.page';

describe('MsglistPage', () => {
  let component: MsglistPage;
  let fixture: ComponentFixture<MsglistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsglistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsglistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
