import {Component, inject} from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-bottomsheet',
  imports: [MatButtonModule, MatBottomSheetModule],
  templateUrl: './bottomsheet.html',
  styleUrl: './bottomsheet.css'
})
export class Bottomsheet {

  private _bottomSheet = inject(MatBottomSheet);

  openBottomSheet(): void {
    this._bottomSheet.open(Bottomsheet);
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: './bottom-sheet-overview-example-sheet.html',
  imports: [MatListModule],
})
export class BottomSheetOverviewExampleSheet {
  private _bottomSheetRef =
    inject<MatBottomSheetRef<BottomSheetOverviewExampleSheet>>(MatBottomSheetRef);

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
