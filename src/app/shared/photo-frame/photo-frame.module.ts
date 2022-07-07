import { LikeWidgetModule } from './../components/like-widget/like-widget.module';
import { CommonModule } from '@angular/common';
import {NgModule } from '@angular/core';
import { PhotoFrameComponent } from './photo-frame.component';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        LikeWidgetModule,
        PhotoFrameComponent
    ],
    exports: []
})

export class PhotoFlameModule {};