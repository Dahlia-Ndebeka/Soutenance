import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationadComponent } from './formationad.component';

describe('FormationadComponent', () => {
  let component: FormationadComponent;
  let fixture: ComponentFixture<FormationadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
