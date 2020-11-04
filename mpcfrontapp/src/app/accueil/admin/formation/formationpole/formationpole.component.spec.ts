import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationpoleComponent } from './formationpole.component';

describe('FormationpoleComponent', () => {
  let component: FormationpoleComponent;
  let fixture: ComponentFixture<FormationpoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationpoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationpoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
