import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoleadminComponent } from './poleadmin.component';

describe('PoleadminComponent', () => {
  let component: PoleadminComponent;
  let fixture: ComponentFixture<PoleadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoleadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoleadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
