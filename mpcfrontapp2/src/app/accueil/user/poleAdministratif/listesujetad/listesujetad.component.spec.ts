import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesujetadComponent } from './listesujetad.component';

describe('ListesujetadComponent', () => {
  let component: ListesujetadComponent;
  let fixture: ComponentFixture<ListesujetadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListesujetadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesujetadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
