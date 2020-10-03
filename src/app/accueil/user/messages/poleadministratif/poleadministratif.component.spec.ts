import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoleadministratifComponent } from './poleadministratif.component';

describe('PoleadministratifComponent', () => {
  let component: PoleadministratifComponent;
  let fixture: ComponentFixture<PoleadministratifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoleadministratifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoleadministratifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
