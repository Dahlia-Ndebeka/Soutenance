import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoletechcomComponent } from './poletechcom.component';

describe('PoletechcomComponent', () => {
  let component: PoletechcomComponent;
  let fixture: ComponentFixture<PoletechcomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoletechcomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoletechcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
