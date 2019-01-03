import { Component } from '@angular/core'

@Component({
  template: `
    <h1 class="errorMessage">404, Not Found!</h1>
  `,
  styles: [`
    .errorMessage { 
      margin-top:150px; 
      font-size: 100px;
      text-align: center; 
    }`]
})
export class Error404Component{
  constructor() {

  }
}
