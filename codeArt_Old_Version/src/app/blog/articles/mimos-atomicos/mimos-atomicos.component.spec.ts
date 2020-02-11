import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MimosAtomicosComponent } from './mimos-atomicos.component';

describe('MimosAtomicosComponent', () => {
  let component: MimosAtomicosComponent;
  let fixture: ComponentFixture<MimosAtomicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MimosAtomicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MimosAtomicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
