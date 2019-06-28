import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLayoutPage } from './full-layout.page';

describe('FullLayoutPage', () => {
  let component: FullLayoutPage;
  let fixture: ComponentFixture<FullLayoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullLayoutPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
