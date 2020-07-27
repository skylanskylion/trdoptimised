import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApplicationTruncatePipe} from '../application-truncate.pipe';
import {RoundPipe} from '../application-truncate.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ApplicationTruncatePipe,RoundPipe],
  exports: [ApplicationTruncatePipe,RoundPipe]
})
export class SharedModule {
}
