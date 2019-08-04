import { Component, OnInit } from '@angular/core';
import {
   BreakpointObserver,
   Breakpoints,
   BreakpointState
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../user/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
   selector: 'app-main-nav',
   templateUrl: './main-nav.component.html',
   styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
   appBrandName = 'Quiz Learner App';

   isCompact$: Observable<boolean> = this.breakpointObserver.observe(
         [Breakpoints.Handset, Breakpoints.Small])
         .pipe(
               map(result => result.matches)
         );

   constructor(private authService: AuthService,
         private toastr: ToastrService,
         private breakpointObserver: BreakpointObserver) {
   }

   ngOnInit(): void {
      // this.breakpointObserver
      //       .observe([Breakpoints.Medium, Breakpoints.HandsetPortrait])
      //       .subscribe((state: BreakpointState) => {
      //          console.log(state);
      //          if (state.matches) {
      //             console.log(
      //                   'Matches small viewport or handset in portrait mode'
      //             );
      //          }
      //       });
   }

   get isLoggedIn(): boolean {
      return this.authService.isAuthenticated();
   }

   onLogOut($event): void {
      this.authService.logOut();
      this.toastr.success('You have successfully logged out');
   }
}
