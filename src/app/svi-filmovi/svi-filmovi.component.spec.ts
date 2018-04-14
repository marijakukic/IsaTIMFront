import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SviFilmoviComponent } from './svi-filmovi.component';

describe('SviFilmoviComponent', () => {
  let component: SviFilmoviComponent;
  let fixture: ComponentFixture<SviFilmoviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SviFilmoviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SviFilmoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
