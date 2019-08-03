import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavListItemsComponent } from './nav-list-items.component';

describe('NavListItemsComponent', () => {
  let component: NavListItemsComponent;
  let fixture: ComponentFixture<NavListItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavListItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
