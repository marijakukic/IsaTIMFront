import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarteSaPopustomComponent } from './karte-sa-popustom.component';

describe('KarteSaPopustomComponent', () => {
  let component: KarteSaPopustomComponent;
  let fixture: ComponentFixture<KarteSaPopustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarteSaPopustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarteSaPopustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
