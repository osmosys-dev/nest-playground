import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Season } from '../../../../shared/season';
import { Episode } from '../../../../shared/episode';

@Injectable()
export class SeasonsHttpService {
  constructor(private http: HttpClient) {}

  findSeasonByUrl(seasonUrl: string): Observable<Season> {
    return this.http.get<Season>(`/api/courses/${seasonUrl}`);
  }

  findEpisodes(
    seasonId: string,
    pageNumber = 0,
    pageSize = 3
  ): Observable<Episode[]> {
    return this.http.get<Episode[]>('/api/episodes', {
      params: new HttpParams()
        .set('seasonId', seasonId)
        .set('sortOrder', 'asc')
        .set('pageNumber', pageNumber.toString())
        .set('pageSize', pageSize.toString()),
    });
  }

  updateSeason(seasonId: string, changes: Partial<Season>) {
    return this.http.put('/api/seasons/' + seasonId, changes);
  }

  // tslint:disable-next-line: typedef
  deleteSeason(seasonId: string) {
    return this.http.delete('/api/seasons/' + seasonId);
  }

  // tslint:disable-next-line: typedef
  createSeason(changes: Partial<Season>) {
    return this.http.post('/api/seasons', changes);
  }
}
