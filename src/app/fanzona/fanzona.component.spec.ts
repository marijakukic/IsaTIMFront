import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanzonaComponent } from './fanzona.component';

describe('FanzonaComponent', () => {
  let component: FanzonaComponent;
  let fixture: ComponentFixture<FanzonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanzonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanzonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
