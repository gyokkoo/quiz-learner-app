import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCardModule } from '@angular/material/card';
import { AppInfoComponent } from './app-info.component';

describe('AppInfoComponent', () => {
   let component: AppInfoComponent;
   let fixture: ComponentFixture<AppInfoComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [
            AppInfoComponent
         ],
         imports: [
            MatCardModule
         ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(AppInfoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
