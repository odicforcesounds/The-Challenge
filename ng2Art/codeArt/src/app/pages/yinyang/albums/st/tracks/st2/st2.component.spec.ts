/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { St2Component } from './st2.component';

describe('St2Component', () => {
  let component: St2Component;
  let fixture: ComponentFixture<St2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ St2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(St2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
