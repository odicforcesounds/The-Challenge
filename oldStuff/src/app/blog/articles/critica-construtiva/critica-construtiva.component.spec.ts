import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticaConstrutivaComponent } from './critica-construtiva.component';

describe('CriticaConstrutivaComponent', () => {
  let component: CriticaConstrutivaComponent;
  let fixture: ComponentFixture<CriticaConstrutivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticaConstrutivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticaConstrutivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
