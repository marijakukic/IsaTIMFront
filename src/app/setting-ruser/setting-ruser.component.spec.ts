import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingRuserComponent } from './setting-ruser.component';

describe('SettingRuserComponent', () => {
  let component: SettingRuserComponent;
  let fixture: ComponentFixture<SettingRuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingRuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingRuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
