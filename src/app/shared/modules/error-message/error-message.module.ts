import { CommonModule } from '@angular/common'
import { Input, NgModule } from '@angular/core'

import { ErrorMessageComponent } from './components/error-message/error-message.component'

@NgModule({
  imports: [CommonModule],
  declarations: [ErrorMessageComponent],
  exports: [ErrorMessageComponent],
  providers: [],
})
export class ErrorMessageModule {}
