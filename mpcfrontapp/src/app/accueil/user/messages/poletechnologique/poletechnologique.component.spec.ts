import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoletechnologiqueComponent } from './poletechnologique.component';

describe('PoletechnologiqueComponent', () => {
  let component: PoletechnologiqueComponent;
  let fixture: ComponentFixture<PoletechnologiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoletechnologiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoletechnologiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
