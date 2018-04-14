import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SveProjekcijeComponent } from './sve-projekcije.component';

describe('SveProjekcijeComponent', () => {
  let component: SveProjekcijeComponent;
  let fixture: ComponentFixture<SveProjekcijeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SveProjekcijeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SveProjekcijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
