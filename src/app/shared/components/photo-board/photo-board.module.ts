import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PhotoFrameComponent } from "../../photo-frame/photo-frame.component";
import { PhotoBoardComponent } from "./photo-board.component";
import { PhotoBoardService } from "./service/photo-board.service";


@NgModule({
    declarations: [PhotoBoardComponent],
    imports: [
        CommonModule,
        PhotoFrameComponent

    ],

    exports: [PhotoBoardComponent],
    providers: [PhotoBoardService]
})

export class PhotoBoardModule {}