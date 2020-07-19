import { Component } from '@angular/core';
import { slideInAnimation } from './shared/app.animation';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  animations: [slideInAnimation],
})
export class AppComponent {
  title = 'Quiz Learner app';
}
