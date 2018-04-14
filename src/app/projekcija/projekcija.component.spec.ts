import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjekcijaComponent } from './projekcija.component';

describe('ProjekcijaComponent', () => {
  let component: ProjekcijaComponent;
  let fixture: ComponentFixture<ProjekcijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjekcijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjekcijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
