import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleformationComponent } from './moduleformation.component';

describe('ModuleformationComponent', () => {
  let component: ModuleformationComponent;
  let fixture: ComponentFixture<ModuleformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
