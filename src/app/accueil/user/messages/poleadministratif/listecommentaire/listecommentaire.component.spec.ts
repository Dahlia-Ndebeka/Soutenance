import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecommentaireComponent } from './listecommentaire.component';

describe('ListecommentaireComponent', () => {
  let component: ListecommentaireComponent;
  let fixture: ComponentFixture<ListecommentaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListecommentaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListecommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
