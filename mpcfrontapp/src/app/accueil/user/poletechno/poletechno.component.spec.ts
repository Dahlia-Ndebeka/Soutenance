import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoletechnoComponent } from './poletechno.component';

describe('PoletechnoComponent', () => {
  let component: PoletechnoComponent;
  let fixture: ComponentFixture<PoletechnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoletechnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoletechnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
