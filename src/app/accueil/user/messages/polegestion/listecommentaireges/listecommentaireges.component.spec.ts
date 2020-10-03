import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecommentairegesComponent } from './listecommentaireges.component';

describe('ListecommentairegesComponent', () => {
  let component: ListecommentairegesComponent;
  let fixture: ComponentFixture<ListecommentairegesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListecommentairegesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListecommentairegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
