/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StComponent } from './st.component';

describe('StComponent', () => {
  let component: StComponent;
  let fixture: ComponentFixture<StComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
