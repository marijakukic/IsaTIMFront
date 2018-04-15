import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmeniTeatarComponent } from './izmeni-teatar.component';

describe('IzmeniTeatarComponent', () => {
  let component: IzmeniTeatarComponent;
  let fixture: ComponentFixture<IzmeniTeatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmeniTeatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmeniTeatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
