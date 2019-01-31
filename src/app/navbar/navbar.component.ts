import { Component } from "@angular/core";

@Component({
  selector: 'app-nav-header',
  styleUrls: ['./navbar.component.scss'],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  brandName = 'Quiz Learner';

  constructor() {
  }
}
