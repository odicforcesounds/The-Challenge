import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CagaRazaoComponent } from './caga-razao.component';

describe('CagaRazaoComponent', () => {
  let component: CagaRazaoComponent;
  let fixture: ComponentFixture<CagaRazaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CagaRazaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CagaRazaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
