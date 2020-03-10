import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamificaDireitosComponent } from './gamifica-direitos.component';

describe('GamificaDireitosComponent', () => {
  let component: GamificaDireitosComponent;
  let fixture: ComponentFixture<GamificaDireitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamificaDireitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamificaDireitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
