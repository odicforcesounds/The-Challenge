/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CatComponent } from './cat.component';

describe('CatComponent', () => {
  let component: CatComponent;
  let fixture: ComponentFixture<CatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
