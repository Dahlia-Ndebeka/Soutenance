import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecomtechComponent } from './listecomtech.component';

describe('ListecomtechComponent', () => {
  let component: ListecomtechComponent;
  let fixture: ComponentFixture<ListecomtechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListecomtechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListecomtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
