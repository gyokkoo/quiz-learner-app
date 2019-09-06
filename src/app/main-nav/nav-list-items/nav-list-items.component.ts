import {
  ChangeDetectionStrategy,
  Component, EventEmitter,
  Input,
  OnInit, Output
} from '@angular/core';

@Component({
  selector: 'app-nav-list-items',
  templateUrl: './nav-list-items.component.html',
  styleUrls: ['./nav-list-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavListItemsComponent implements OnInit {

  @Input() isLoggedIn: boolean;

  @Output() logoutClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  logOut(): void {
    this.logoutClick.next();
  }
}
