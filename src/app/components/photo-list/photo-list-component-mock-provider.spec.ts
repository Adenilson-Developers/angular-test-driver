import { PhotoBoardService } from 'src/app/shared/components/photo-board/service/photo-board.service';
import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Observable, of } from "rxjs";
import { PhotoListComponent } from "./photo-list.component";
import { PhotoListModule } from "./photo-list.module";
import { buildPhotoList } from 'src/app/shared/components/photo-board/test/build-photo-list';
import { Photo } from 'src/app/shared/components/photo-board/interfaces/photo';

describe(PhotoListComponent.name + 'Mock provider', ()=>{
    
    let fixture: ComponentFixture<PhotoListComponent>;
    let component: PhotoListComponent;
 

    beforeEach( async ()=> {

        await TestBed.configureTestingModule({
            imports: [
                PhotoListModule,
                HttpClientModule
            ],

            providers: [
                {
                    provide: PhotoBoardService,
                    useValue: {
                        getPhotos(): Observable<Photo[]>{
                            return of(buildPhotoList());
                        }
                    }
                }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(PhotoListComponent);
        component = fixture.componentInstance;
       
    });

    it('Should create component',()=>{
        expect(component).toBeTruthy();
    });

    it('(D)hould  display board when data arrives',()=>{
       
        fixture.detectChanges();
        const board = fixture.nativeElement.querySelector('app-photo-board');
        const loader = fixture.nativeElement.querySelector('.loader');
        expect(board).withContext('Should display board')
        .not.toBeNull();
        expect(loader).withContext('Should not diplay loader')
        .toBeNull();
    });

})