import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComOuSemComponent } from './com-ou-sem.component';

describe('ComOuSemComponent', () => {
  let component: ComOuSemComponent;
  let fixture: ComponentFixture<ComOuSemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComOuSemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComOuSemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
