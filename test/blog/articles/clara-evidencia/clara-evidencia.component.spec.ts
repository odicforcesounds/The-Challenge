import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaraEvidenciaComponent } from './clara-evidencia.component';

describe('ClaraEvidenciaComponent', () => {
  let component: ClaraEvidenciaComponent;
  let fixture: ComponentFixture<ClaraEvidenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaraEvidenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaraEvidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
