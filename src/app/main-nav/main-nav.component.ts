import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../user/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
   selector: 'app-main-nav',
   templateUrl: './main-nav.component.html',
   styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
   brandName = 'Quiz Learner Project';

   isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
         .pipe(
               map(result => result.matches)
         );

   constructor(private authService: AuthService,
         private toastr: ToastrService,
         private breakpointObserver: BreakpointObserver) {
   }


   get isLoggedIn(): boolean {
      return this.authService.isAuthenticated();
   }

   get userName(): string {
      if (this.authService.getUser()) {
         return this.authService.getUser().name;
      }

      return '';
   }

   logOut(): void {
      this.authService.logOut();
      this.toastr.success('You have successfully logged out');
   }
}
