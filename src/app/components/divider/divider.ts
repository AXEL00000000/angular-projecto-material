import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.html',
  styleUrl: './divider.css',
   imports: [MatListModule, MatDividerModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Divider {

}
