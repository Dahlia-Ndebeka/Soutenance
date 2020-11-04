import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeapprenantComponent } from './listeapprenant.component';

describe('ListeapprenantComponent', () => {
  let component: ListeapprenantComponent;
  let fixture: ComponentFixture<ListeapprenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeapprenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeapprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
