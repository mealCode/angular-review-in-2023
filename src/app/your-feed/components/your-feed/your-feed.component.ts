import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-your-feed',
  templateUrl: './your-feed.component.html',
})
export class YourFeedComponent implements OnInit {
  apiUrl = 'articles/feed'
  constructor() {}

  ngOnInit(): void {}
}
