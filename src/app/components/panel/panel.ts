import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.html',
  styleUrl: './panel.css',
  imports: [MatExpansionModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Panel {
   readonly panelOpenState = signal(false);
}
