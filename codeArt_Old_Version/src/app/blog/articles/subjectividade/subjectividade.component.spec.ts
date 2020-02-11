import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectividadeComponent } from './subjectividade.component';

describe('SubjectividadeComponent', () => {
  let component: SubjectividadeComponent;
  let fixture: ComponentFixture<SubjectividadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectividadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
