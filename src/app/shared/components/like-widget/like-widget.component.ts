import { Component, OnDestroy, OnInit } from "@angular/core";
import { EventEmitter, Input, Output } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { UniqueIdService } from "../../services/unique-id/unique-id.service";

@Component({
    selector: 'app-leke-widget',
    templateUrl: './like-widget.component.html',
    styleUrls: ['like-widget.component.scss']
})

export class LikeWidgetComponent implements OnInit{
    @Output() public liked = new EventEmitter<void>();
    @Input() public likes = 0;
    @Input() public id = '';
    public fonts = { faThumbsUp };
    // leked: any;

    constructor(private uniqueIdService: UniqueIdService){}
        
    public ngOnInit(): void {
            if(!this.id) {
                this.id = this.uniqueIdService.generatedUniqueIdWithPrefix('like-widget');
            }
        }

    public like(): void {
        this.liked.emit();
    }
    
}