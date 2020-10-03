import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerformateurComponent } from './editerformateur.component';

describe('EditerformateurComponent', () => {
  let component: EditerformateurComponent;
  let fixture: ComponentFixture<EditerformateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerformateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
