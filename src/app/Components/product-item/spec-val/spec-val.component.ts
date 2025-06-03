import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spec-val',
  standalone: true,
  imports: [],
  templateUrl: './spec-val.component.html',
  styleUrl: './spec-val.component.css'
})
export class SpecValComponent {
@Input({required: true}) spec!:string;
@Input({required: true}) val!:string;

}
