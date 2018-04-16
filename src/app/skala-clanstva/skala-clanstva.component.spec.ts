import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkalaClanstvaComponent } from './skala-clanstva.component';

describe('SkalaClanstvaComponent', () => {
  let component: SkalaClanstvaComponent;
  let fixture: ComponentFixture<SkalaClanstvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkalaClanstvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkalaClanstvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
