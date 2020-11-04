import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecomgesComponent } from './listecomges.component';

describe('ListecomgesComponent', () => {
  let component: ListecomgesComponent;
  let fixture: ComponentFixture<ListecomgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListecomgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListecomgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
