import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompulsividadeComponent } from './compulsividade.component';

describe('CompulsividadeComponent', () => {
  let component: CompulsividadeComponent;
  let fixture: ComponentFixture<CompulsividadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompulsividadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompulsividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
