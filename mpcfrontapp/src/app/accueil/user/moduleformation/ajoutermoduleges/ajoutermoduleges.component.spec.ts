import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutermodulegesComponent } from './ajoutermoduleges.component';

describe('AjoutermodulegesComponent', () => {
  let component: AjoutermodulegesComponent;
  let fixture: ComponentFixture<AjoutermodulegesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutermodulegesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutermodulegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
