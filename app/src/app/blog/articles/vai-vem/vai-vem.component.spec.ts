import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaiVemComponent } from './vai-vem.component';

describe('VaiVemComponent', () => {
  let component: VaiVemComponent;
  let fixture: ComponentFixture<VaiVemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaiVemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaiVemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
