import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TentativaEscolhaComponent } from './tentativa-escolha.component';

describe('TentativaEscolhaComponent', () => {
  let component: TentativaEscolhaComponent;
  let fixture: ComponentFixture<TentativaEscolhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TentativaEscolhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TentativaEscolhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
