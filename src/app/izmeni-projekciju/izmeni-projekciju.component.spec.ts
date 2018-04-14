import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmeniProjekcijuComponent } from './izmeni-projekciju.component';

describe('IzmeniProjekcijuComponent', () => {
  let component: IzmeniProjekcijuComponent;
  let fixture: ComponentFixture<IzmeniProjekcijuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmeniProjekcijuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmeniProjekcijuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
