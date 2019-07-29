import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CausasCrimeComponent } from './causas-crime.component';

describe('CausasCrimeComponent', () => {
  let component: CausasCrimeComponent;
  let fixture: ComponentFixture<CausasCrimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CausasCrimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CausasCrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
