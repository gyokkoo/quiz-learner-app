import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { WelcomePageComponent } from './welcome-page.component';
import { AppInfoComponent } from './app-info/app-info.component';

// tslint:disable-next-line:component-selector
@Component({ selector: 'router-outlet', template: '' })
class RouterOutletStubComponent {}

describe('WelcomePageComponent', () => {
  let component: WelcomePageComponent;
  let fixture: ComponentFixture<WelcomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WelcomePageComponent,
        AppInfoComponent,
        RouterOutletStubComponent,
      ],
      imports: [RouterTestingModule, MatCardModule, HttpClientModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
