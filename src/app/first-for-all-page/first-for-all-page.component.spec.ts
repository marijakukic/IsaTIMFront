import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstForAllPageComponent } from './first-for-all-page.component';

describe('FirstForAllPageComponent', () => {
  let component: FirstForAllPageComponent;
  let fixture: ComponentFixture<FirstForAllPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstForAllPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstForAllPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
