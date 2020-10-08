import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { compareSeasons, Season } from '../../../../shared/season';
import { map } from 'rxjs/operators';
import { Episode } from '../../../../shared/episode';

@Injectable()
export class SeasonsHttpService {
  constructor(private http: HttpClient) {}

  findAllSeasons(): Observable<Season[]> {
    return this.http
      .get<Season[]>('/api/seasons')
      .pipe(map((seasons) => seasons.sort(compareSeasons)));
  }

  findSeasonByUrl(seasonUrl: string): Observable<Season> {
    return this.http.get<Season>(`/api/seasons/${seasonUrl}`);
  }

  findEpisodes(
    seasonId: string,
    pageNumber = 0,
    pageSize = 3
  ): Observable<Episode[]> {
    return this.http.get<Episode[]>('/api/episodes', {
      params: new HttpParams()
        .set('courseId', seasonId)
        .set('sortOrder', 'asc')
        .set('pageNumber', pageNumber.toString())
        .set('pageSize', pageSize.toString()),
    });
  }

  updateSeason(seasonId: string, changes: Partial<Season>) {
    return this.http.put('/api/seasons/' + seasonId, changes);
  }

  deleteSeason(seasonId: string) {
    return this.http.delete('/api/seasons/' + seasonId);
  }

  createSeason(changes: Partial<Season>) {
    return this.http.post('/api/seasons', changes);
  }
}
