import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTabBarPage } from './app-tab-bar.page';

describe('AppTabBarPage', () => {
  let component: AppTabBarPage;
  let fixture: ComponentFixture<AppTabBarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTabBarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTabBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
