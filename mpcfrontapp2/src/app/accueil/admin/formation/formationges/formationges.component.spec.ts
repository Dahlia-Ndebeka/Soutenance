import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationgesComponent } from './formationges.component';

describe('FormationgesComponent', () => {
  let component: FormationgesComponent;
  let fixture: ComponentFixture<FormationgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
