import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-photo-frame',
    templateUrl: './photo-frame.component.html',
    styleUrls: ['./photo-frame.component.scss']
})

export class PhotoFrameComponent {
    @Output() public liked: EventEmitter<void> = new EventEmitter();
    @Input() description = '';
    @Input() src = '';
    @Input() likes = 0;


    // quando eu chamar esse metódo, eu preciso indicar
    // para quem está usando photo-frame que esse cara foi clicado 
    public like(): void {
        this.liked.emit();
    }
};