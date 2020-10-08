import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Season } from '../../../../shared/season';
import { Observable } from 'rxjs';
import { Episode } from '../../../../shared/episode';
import {
  concatMap,
  delay,
  filter,
  first,
  map,
  shareReplay,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { SeasonsHttpService } from '../services/seasons-http.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css'],
})
export class SeasonComponent implements OnInit, AfterViewInit {
  season$: Observable<Season>;

  episodes$: Observable<Episode[]>;

  displayedColumns = ['seqNo', 'description', 'duration'];

  currentPage = 0;

  @ViewChildren(MatPaginator)
  paginators: QueryList<MatPaginator>;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(
    private seasonsService: SeasonsHttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const seasonUrl = this.route.snapshot.paramMap.get('seasonUrl');

    this.season$ = this.seasonsService.findSeasonByUrl(seasonUrl);

    this.loadEpisodesPage();
  }

  ngAfterViewInit() {
    this.paginators.changes
      .pipe(
        filter((paginators) => paginators.length > 0),
        switchMap((paginators) => paginators.first.page)
      )
      .subscribe((page: PageEvent) => {
        this.currentPage = page.pageIndex;
        this.loadEpisodesPage();
      });
  }

  loadEpisodesPage() {
    console.log('current page', this.currentPage);
    this.episodes$ = this.season$.pipe(
      concatMap((season) =>
        this.seasonsService.findEpisodes(season._id, this.currentPage, 3)
      )
    );
  }
}
