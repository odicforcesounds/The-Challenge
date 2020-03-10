import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfensaComponent } from './ofensa.component';

describe('OfensaComponent', () => {
  let component: OfensaComponent;
  let fixture: ComponentFixture<OfensaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfensaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
