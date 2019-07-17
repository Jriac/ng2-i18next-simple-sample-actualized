import { Component, Input } from '@angular/core';

@Component({
  selector: 'translation',
  templateUrl: '/translation.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class TranslationComponent  {
  @Input() name: string;
}
