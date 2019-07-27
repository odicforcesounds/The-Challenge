import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacoesAstrologicasComponent } from './relacoes-astrologicas.component';

describe('RelacoesAstrologicasComponent', () => {
  let component: RelacoesAstrologicasComponent;
  let fixture: ComponentFixture<RelacoesAstrologicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelacoesAstrologicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelacoesAstrologicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
