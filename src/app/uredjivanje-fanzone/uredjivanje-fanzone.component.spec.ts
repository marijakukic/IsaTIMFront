import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UredjivanjeFanzoneComponent } from './uredjivanje-fanzone.component';

describe('UredjivanjeFanzoneComponent', () => {
  let component: UredjivanjeFanzoneComponent;
  let fixture: ComponentFixture<UredjivanjeFanzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UredjivanjeFanzoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UredjivanjeFanzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
