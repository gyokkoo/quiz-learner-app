import { Component } from "@angular/core";
import { AuthService } from "../user/auth.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-nav-header',
  styleUrls: ['./navbar.component.scss'],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  brandName = 'Quiz Learner Project';

  get isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  get userName(): string {
    if (this.authService.getUser()) {
      return this.authService.getUser().name;
    }

    return '';
  }

  constructor(private authService: AuthService,
              private toastr: ToastrService) {
  }

  logOut(): void {
    this.authService.logOut()
    this.toastr.success("You have successfully logged out");
  }
}
