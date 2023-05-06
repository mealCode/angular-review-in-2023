import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { LoadingComponent } from './components/loading.component'

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingComponent],
  exports: [LoadingComponent],
  providers: [],
})
export class LoadingModule {}
