import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatAutocomplete } from './components/mat-autocomplete/mat-autocomplete';
import { Badge } from './components/badge/badge';
import { Bottomsheet } from './components/bottomsheet/bottomsheet';
import { Button } from './components/button/button';
import { Buttontoggle } from './components/buttontoggle/buttontoggle';
import { Card } from './components/card/card';
import { Checkbox } from './components/checkbox/checkbox';
import { Chips } from './components/chips/chips';
import { Datepicker } from './components/datepicker/datepicker';
import { Dialog } from './components/dialog/dialog';
import { Divider } from './components/divider/divider';
import { Panel } from './components/panel/panel';
import { Gridlist } from './components/gridlist/gridlist';
import { Icon } from './components/icon/icon';
import { Table } from './components/table/table';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatAutocomplete, Badge, Bottomsheet, Button, Buttontoggle, Card, Checkbox, Chips, Datepicker, Dialog, Divider, Panel, Gridlist, Icon, Table],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('angular-projecto-material');
}
