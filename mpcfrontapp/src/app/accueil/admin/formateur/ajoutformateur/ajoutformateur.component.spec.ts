import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutformateurComponent } from './ajoutformateur.component';

describe('AjoutformateurComponent', () => {
  let component: AjoutformateurComponent;
  let fixture: ComponentFixture<AjoutformateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutformateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
