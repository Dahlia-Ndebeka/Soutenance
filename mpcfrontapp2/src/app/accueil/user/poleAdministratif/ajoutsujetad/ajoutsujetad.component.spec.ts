import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutsujetadComponent } from './ajoutsujetad.component';

describe('AjoutsujetadComponent', () => {
  let component: AjoutsujetadComponent;
  let fixture: ComponentFixture<AjoutsujetadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutsujetadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutsujetadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
