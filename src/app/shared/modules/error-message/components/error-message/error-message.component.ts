import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
})
export class ErrorMessageComponent implements OnInit {
  @Input('message') messageProps: string = 'Unknown Server Error'

  constructor() {}

  ngOnInit(): void {}
}
