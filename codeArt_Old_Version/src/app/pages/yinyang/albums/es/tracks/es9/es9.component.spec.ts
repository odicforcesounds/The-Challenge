/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Es9Component } from './es9.component';

describe('Es9Component', () => {
  let component: Es9Component;
  let fixture: ComponentFixture<Es9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Es9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Es9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
