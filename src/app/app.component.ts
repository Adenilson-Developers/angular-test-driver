import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './shared/components/photo-board/interfaces/photo';
import { PhotoBoardService } from './shared/components/photo-board/service/photo-board.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'Angular Testing';


  public photos$: Observable<Photo[]>;


  constructor(private service: PhotoBoardService){}

  public ngOnInit(): void {
    this.photos$ = this.service.getPhotos();

    console.log('Mostrar console',this.photos$)
  }
}
