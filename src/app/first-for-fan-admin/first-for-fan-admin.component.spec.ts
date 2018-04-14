import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstForFanAdminComponent } from './first-for-fan-admin.component';

describe('FirstForFanAdminComponent', () => {
  let component: FirstForFanAdminComponent;
  let fixture: ComponentFixture<FirstForFanAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstForFanAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstForFanAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
