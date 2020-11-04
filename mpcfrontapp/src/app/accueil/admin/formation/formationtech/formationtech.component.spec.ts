import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationtechComponent } from './formationtech.component';

describe('FormationtechComponent', () => {
  let component: FormationtechComponent;
  let fixture: ComponentFixture<FormationtechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationtechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
