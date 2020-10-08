import { Component, OnInit } from '@angular/core';
import { compareSeasons, Season } from '../../../../shared/season';
import { Observable } from 'rxjs';
import { defaultDialogConfig } from '../shared/default-dialog-config';
import { EditSeasonDialogComponent } from '../edit-season-dialog/edit-season-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { map, shareReplay } from 'rxjs/operators';
import { SeasonsHttpService } from '../services/seasons-http.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  promoTotal$: Observable<number>;

  loading$: Observable<boolean>;

  actionSeasons$: Observable<Season[]>;

  comedySeasons$: Observable<Season[]>;

  constructor(
    private dialog: MatDialog,
    private seasonsHttpService: SeasonsHttpService
  ) {}

  ngOnInit() {
    this.reload();
  }

  reload() {
    const seasons$ = this.seasonsHttpService.findAllSeasons().pipe(
      map((seasons) => seasons.sort(compareSeasons)),
      shareReplay()
    );

    this.loading$ = seasons$.pipe(map((seasons) => !!seasons));

    this.actionSeasons$ = seasons$.pipe(
      map((seasons) => seasons.filter((season) => season.category === 'ACTION'))
    );

    this.comedySeasons$ = seasons$.pipe(
      map((seasons) => seasons.filter((season) => season.category === 'COMEDY'))
    );

    this.promoTotal$ = seasons$.pipe(
      map((seasons) => seasons.filter((season) => season.promo).length)
    );
  }

  onAddSeason() {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Create Season',
      mode: 'create',
    };

    this.dialog
      .open(EditSeasonDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe((data) => {
        if (data) {
          this.reload();
        }
      });
  }
}
