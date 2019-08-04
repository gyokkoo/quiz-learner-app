import {
  ChangeDetectionStrategy,
  Component, EventEmitter,
  Input,
  OnInit, Output
} from '@angular/core';

@Component({
  selector: 'app-toolbar-nav-items',
  templateUrl: './nav-toolbar-items.component.html',
  styleUrls: ['./nav-toolbar-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavToolbarItemsComponent implements OnInit {

  @Input() isLoggedIn: boolean;

  @Output() logoutClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  logOut(): void {
    this.logoutClick.emit();
  }
}
