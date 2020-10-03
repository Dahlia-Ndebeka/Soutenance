import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolegestionComponent } from './polegestion.component';

describe('PolegestionComponent', () => {
  let component: PolegestionComponent;
  let fixture: ComponentFixture<PolegestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolegestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolegestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
