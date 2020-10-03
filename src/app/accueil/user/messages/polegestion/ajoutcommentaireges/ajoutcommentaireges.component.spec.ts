import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutcommentairegesComponent } from './ajoutcommentaireges.component';

describe('AjoutcommentairegesComponent', () => {
  let component: AjoutcommentairegesComponent;
  let fixture: ComponentFixture<AjoutcommentairegesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutcommentairegesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutcommentairegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
