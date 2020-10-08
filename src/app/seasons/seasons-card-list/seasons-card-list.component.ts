import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Season } from '../../../../shared/season';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditSeasonDialogComponent } from '../edit-season-dialog/edit-season-dialog.component';
import { defaultDialogConfig } from '../shared/default-dialog-config';
import { SeasonsHttpService } from '../services/seasons-http.service';

@Component({
  selector: 'seasons-card-list',
  templateUrl: './seasons-card-list.component.html',
  styleUrls: ['./seasons-card-list.component.css'],
})
export class SeasonsCardListComponent implements OnInit {
  @Input()
  seasons: Season[];

  @Output()
  seasonChanged = new EventEmitter();

  constructor(
    private dialog: MatDialog,
    private seasonsService: SeasonsHttpService
  ) {}

  ngOnInit() {}

  editSeason(season: Season) {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Edit Season',
      season,
      mode: 'update',
    };

    this.dialog
      .open(EditSeasonDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.seasonChanged.emit());
  }

  onDeleteSeason(season: Season) {
    this.seasonsService
      .deleteSeason(season._id)
      .subscribe(() => this.seasonChanged.emit());
  }
}
