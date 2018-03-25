import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstForAdminPageComponent } from './first-for-admin-page.component';

describe('FirstForAdminPageComponent', () => {
  let component: FirstForAdminPageComponent;
  let fixture: ComponentFixture<FirstForAdminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstForAdminPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstForAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
