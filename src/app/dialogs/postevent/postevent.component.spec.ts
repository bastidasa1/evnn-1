import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteventPage } from './postevent.page';

describe('PosteventPage', () => {
  let component: PosteventPage;
  let fixture: ComponentFixture<PosteventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosteventPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosteventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
