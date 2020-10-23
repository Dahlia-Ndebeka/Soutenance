import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoletechComponent } from './poletech.component';

describe('PoletechComponent', () => {
  let component: PoletechComponent;
  let fixture: ComponentFixture<PoletechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoletechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoletechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
