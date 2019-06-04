import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugTheBugComponent } from './debug-the-bug.component';

describe('DebugTheBugComponent', () => {
  let component: DebugTheBugComponent;
  let fixture: ComponentFixture<DebugTheBugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebugTheBugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugTheBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
