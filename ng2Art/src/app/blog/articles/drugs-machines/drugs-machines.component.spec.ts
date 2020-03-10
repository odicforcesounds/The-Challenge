import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugsMachinesComponent } from './drugs-machines.component';

describe('DrugsMachinesComponent', () => {
  let component: DrugsMachinesComponent;
  let fixture: ComponentFixture<DrugsMachinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugsMachinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugsMachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
