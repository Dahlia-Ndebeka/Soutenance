import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolegescomComponent } from './polegescom.component';

describe('PolegescomComponent', () => {
  let component: PolegescomComponent;
  let fixture: ComponentFixture<PolegescomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolegescomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolegescomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
