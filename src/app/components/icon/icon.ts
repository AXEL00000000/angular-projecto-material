import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-icon',
  templateUrl: './icon.html',
  styleUrl: './icon.css',
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Icon {

}
