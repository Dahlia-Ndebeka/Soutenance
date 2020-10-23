import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoleadmincomComponent } from './poleadmincom.component';

describe('PoleadmincomComponent', () => {
  let component: PoleadmincomComponent;
  let fixture: ComponentFixture<PoleadmincomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoleadmincomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoleadmincomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
