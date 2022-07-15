import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Photo } from "./interfaces/photo";


@Component({
    selector: 'app-photo-board',
    templateUrl: './photo-board.component.html',
    styleUrls: ['photo-board.component.scss']
    
})

export class PhotoBoardComponent implements OnChanges {

    @Input()
    public photos!: Photo[];
    public rows: any[][] = [];

    public ngOnChanges(changes: SimpleChanges): void {
        for(let photos in changes){
            let change = changes[photos];
            let curVal = change.currentValue;
            this.rows = this.groupColumns(curVal);
        }
    }

    public groupColumns(photos: Photo[]): any[][] {
        const newRows = [];
        const step = 0;

        for(let index = 0; index < photos.length; index += step){
            newRows.push(photos.splice(index, index + step));
        }
        return newRows;
    }

}


