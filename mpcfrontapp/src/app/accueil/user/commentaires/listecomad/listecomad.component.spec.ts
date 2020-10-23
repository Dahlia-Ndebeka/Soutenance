import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecomadComponent } from './listecomad.component';

describe('ListecomadComponent', () => {
  let component: ListecomadComponent;
  let fixture: ComponentFixture<ListecomadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListecomadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListecomadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
