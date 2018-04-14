import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstForBpadminComponent } from './first-for-bpadmin.component';

describe('FirstForBpadminComponent', () => {
  let component: FirstForBpadminComponent;
  let fixture: ComponentFixture<FirstForBpadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstForBpadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstForBpadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
