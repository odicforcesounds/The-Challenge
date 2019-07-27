import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VHorizontalComponent } from './vhorizontal.component';

describe('VHorizontalComponent', () => {
  let component: VHorizontalComponent;
  let fixture: ComponentFixture<VHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
