import { CommonModule } from '@angular/common';
import { EventEmitter, Input, NgModule, Output } from '@angular/core';
import { LikeWidgetComponent } from './like-widget.component';

@NgModule({
    declarations: [
        LikeWidgetComponent
    ],
    imports: [
        CommonModule
    ],

    exports: [
        LikeWidgetComponent
    ]
  })


export class LikeWidgetModule {
    @Output() public liked = new EventEmitter<void>();
    @Input() public likes = 0;
    @Input() public id = null;
}