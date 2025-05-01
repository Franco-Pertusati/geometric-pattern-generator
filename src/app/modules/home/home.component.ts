import { Component } from '@angular/core';
import { ThemeBtnComponent } from "../shared/theme-btn/theme-btn.component";
import { ButtonComponent } from "../shared/button/button.component";
import { SliderComponent } from "../shared/slider/slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ThemeBtnComponent, ButtonComponent, SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
