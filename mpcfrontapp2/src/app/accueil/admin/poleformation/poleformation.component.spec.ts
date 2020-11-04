import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoleformationComponent } from './poleformation.component';

describe('PoleformationComponent', () => {
  let component: PoleformationComponent;
  let fixture: ComponentFixture<PoleformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoleformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoleformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
