import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationTheaterComponent } from './registration-theater.component';

describe('RegistrationTheaterComponent', () => {
  let component: RegistrationTheaterComponent;
  let fixture: ComponentFixture<RegistrationTheaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationTheaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
