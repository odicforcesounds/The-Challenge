import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoisasObviasComponent } from './coisas-obvias.component';

describe('CoisasObviasComponent', () => {
  let component: CoisasObviasComponent;
  let fixture: ComponentFixture<CoisasObviasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoisasObviasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoisasObviasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
