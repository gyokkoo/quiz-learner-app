import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavToolbarItemsComponent } from './nav-toolbar-items.component';

describe('NavToolbarItemsComponent', () => {
  let component: NavToolbarItemsComponent;
  let fixture: ComponentFixture<NavToolbarItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavToolbarItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavToolbarItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
