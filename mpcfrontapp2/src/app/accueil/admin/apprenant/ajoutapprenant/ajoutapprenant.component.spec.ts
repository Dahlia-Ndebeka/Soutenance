import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutapprenantComponent } from './ajoutapprenant.component';

describe('AjoutapprenantComponent', () => {
  let component: AjoutapprenantComponent;
  let fixture: ComponentFixture<AjoutapprenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutapprenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutapprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
