import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ExamButtonComponent} from "./exam-button/exam-button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExamButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'modal-in-angular';
}
