import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecommentairetechComponent } from './listecommentairetech.component';

describe('ListecommentairetechComponent', () => {
  let component: ListecommentairetechComponent;
  let fixture: ComponentFixture<ListecommentairetechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListecommentairetechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListecommentairetechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
