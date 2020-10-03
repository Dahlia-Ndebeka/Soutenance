import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeapprenantmoduleformationComponent } from './listeapprenantmoduleformation.component';

describe('ListeapprenantmoduleformationComponent', () => {
  let component: ListeapprenantmoduleformationComponent;
  let fixture: ComponentFixture<ListeapprenantmoduleformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeapprenantmoduleformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeapprenantmoduleformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
