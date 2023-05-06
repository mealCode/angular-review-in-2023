import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, map, Observable } from 'rxjs'
import { PopularTagType } from 'src/app/shared/types/popular-tag.type'
import { environment } from 'src/environments/environment'
import { GetPopularTagsInterface } from '../types/get-popular-tags.interface'

@Injectable({ providedIn: 'root' })
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<PopularTagType[]> {
    const url = `${environment.apiUrl}/tags`

    return this.http.get<GetPopularTagsInterface>(url).pipe(map(({ tags }: GetPopularTagsInterface) => tags))
  }
}
