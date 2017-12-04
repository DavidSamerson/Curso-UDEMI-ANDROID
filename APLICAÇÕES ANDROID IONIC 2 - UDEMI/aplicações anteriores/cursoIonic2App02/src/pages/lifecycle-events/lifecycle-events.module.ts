import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LifecycleEvents } from './lifecycle-events';

@NgModule({
  declarations: [
    LifecycleEvents,
  ],
  imports: [
    IonicPageModule.forChild(LifecycleEvents),
  ],
})
export class LifecycleEventsModule {}
