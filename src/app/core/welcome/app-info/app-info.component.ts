import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { AppInfo } from '../welcome-page.component';

@Component({
  selector: 'app-info',
  templateUrl: 'app-info.component.html',
  styleUrls: ['app-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppInfoComponent implements OnInit {
  @Input() appInfo: AppInfo;

  constructor() {}

  ngOnInit() {}
}
