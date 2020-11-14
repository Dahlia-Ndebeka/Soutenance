import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolegestComponent } from './polegest.component';

describe('PolegestComponent', () => {
  let component: PolegestComponent;
  let fixture: ComponentFixture<PolegestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolegestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolegestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
