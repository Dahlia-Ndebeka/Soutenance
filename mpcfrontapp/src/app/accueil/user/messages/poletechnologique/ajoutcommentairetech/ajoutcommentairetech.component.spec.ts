import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutcommentairetechComponent } from './ajoutcommentairetech.component';

describe('AjoutcommentairetechComponent', () => {
  let component: AjoutcommentairetechComponent;
  let fixture: ComponentFixture<AjoutcommentairetechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutcommentairetechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutcommentairetechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
