import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolegesComponent } from './poleges.component';

describe('PolegesComponent', () => {
  let component: PolegesComponent;
  let fixture: ComponentFixture<PolegesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolegesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
