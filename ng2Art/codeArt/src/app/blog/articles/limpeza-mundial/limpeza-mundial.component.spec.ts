import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpezaMundialComponent } from './limpeza-mundial.component';

describe('LimpezaMundialComponent', () => {
  let component: LimpezaMundialComponent;
  let fixture: ComponentFixture<LimpezaMundialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimpezaMundialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimpezaMundialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
