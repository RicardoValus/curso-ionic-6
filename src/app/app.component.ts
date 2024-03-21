import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menuCollection = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Alert', url: 'alert', icon: 'alert' },
    { title: 'Ion-Accordion', url: 'accordion', icon: 'trending-up' },
    { title: 'Ion-Button', url: 'button', icon: 'radio-button-on' },
    { title: 'Ion-Card', url: 'card', icon: 'card' },
  ];

  constructor() { }
}
