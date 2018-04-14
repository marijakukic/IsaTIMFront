import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmeniFilmComponent } from './izmeni-film.component';

describe('IzmeniFilmComponent', () => {
  let component: IzmeniFilmComponent;
  let fixture: ComponentFixture<IzmeniFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmeniFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmeniFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
