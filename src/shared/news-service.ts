import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";

import "rxjs/add/operator/catch";

@Injectable()
export class NewsService {
  private apiUrl: string;

  constructor(private http: Http) {
    this.apiUrl = "https://hacker-news.firebaseio.com/v0/";
  }

  public getStories(): Promise<number[]> {
    return this.http
      .get(`${this.apiUrl}/topstories.json`)
      .toPromise()
      .then((res: Response) => res.json())
      .catch((error: any) => console.log(error));
  }

  public getStory(id: number): Promise<any> {
    return this.http
      .get(`${this.apiUrl}/item/${id}.json`)
      .toPromise()
      .then((res: Response) => res.json())
      .catch((error: any) => console.log(error));
  }
}
