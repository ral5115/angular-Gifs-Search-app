import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface'
@Component({
  selector: 'gifs-card-list',
  templateUrl: './gifs-list.component.html'
})
export class GifsListComponent {

  @Input()
  public gifs:Gif[]=[];
}
