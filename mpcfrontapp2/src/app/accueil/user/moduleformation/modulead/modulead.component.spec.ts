import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleadComponent } from './modulead.component';

describe('ModuleadComponent', () => {
  let component: ModuleadComponent;
  let fixture: ComponentFixture<ModuleadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
