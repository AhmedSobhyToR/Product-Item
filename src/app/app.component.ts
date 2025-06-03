import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductItemComponent } from "./Components/product-item/product-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ProductItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProductTask';
}
