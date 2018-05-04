import { NewsService } from "./../../shared/news-service";
import { Component, OnInit } from "@angular/core";
import { Platform } from "ionic-angular";
import { InAppBrowser } from "@ionic-native/in-app-browser";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  providers: [NewsService]
})
export class HomePage implements OnInit {
  public showInfoBox: boolean;
  private viewType: string;
  private storyIds: Promise<number[]>;

  constructor(private newsService: NewsService) {
    this.showInfoBox = false;
  }

  public ngOnInit(): void {
    this.storyIds = this.newsService.getStories();
  }

  public toggleInfoBox(): void {
    this.showInfoBox = !this.showInfoBox;
  }

  public openInfo(): void {
    window.open("http://brutalistwebsites.com/");
  }

  public openOnGithub(): void {
    window.open("https://github.com/");
  }
}
