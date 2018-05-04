import { NewsService } from "../../shared/news-service";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "story",
  templateUrl: "story.html"
})
export class Story implements OnInit {
  @Input() id: number;
  public story: any;

  constructor(private newsService: NewsService) {
    this.story = {
      title: ""
    };
  }

  public ngOnInit(): void {
    this.newsService.getStory(this.id).then((s) => (this.story = s));
  }

  public readStory(): void {
    window.open(this.story.url);
  }
}
