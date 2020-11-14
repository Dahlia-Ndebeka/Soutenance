import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoleadminiComponent } from './poleadmini.component';

describe('PoleadminiComponent', () => {
  let component: PoleadminiComponent;
  let fixture: ComponentFixture<PoleadminiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoleadminiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoleadminiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
