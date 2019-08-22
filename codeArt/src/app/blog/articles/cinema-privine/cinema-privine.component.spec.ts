import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaPrivineComponent } from './cinema-privine.component';

describe('CinemaPrivineComponent', () => {
  let component: CinemaPrivineComponent;
  let fixture: ComponentFixture<CinemaPrivineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaPrivineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaPrivineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
