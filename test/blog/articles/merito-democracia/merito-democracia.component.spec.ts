import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeritoDemocraciaComponent } from './merito-democracia.component';

describe('MeritoDemocraciaComponent', () => {
  let component: MeritoDemocraciaComponent;
  let fixture: ComponentFixture<MeritoDemocraciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeritoDemocraciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeritoDemocraciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
