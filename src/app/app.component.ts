import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { title } from '../constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = `${new DecimalPipe('en-gb').transform(1)} ${title}`;
}
