import { PhotoBoardService } from 'src/app/shared/components/photo-board/service/photo-board.service';
import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PhotoListComponent } from "./photo-list.component";
import { PhotoListModule } from "./photo-list.module";

describe(PhotoListComponent.name, ()=>{
    
    let fixture: ComponentFixture<PhotoListComponent>;
    let component: PhotoListComponent;
    let service: PhotoBoardService

    beforeEach( async ()=> {

        await TestBed.configureTestingModule({
            imports: [
                PhotoListModule,
                HttpClientModule
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(PhotoListComponent);
        component = fixture.componentInstance;
        service = TestBed.inject(PhotoBoardService);
    });

    it('Should create component',()=>{
        expect(component).toBeTruthy();
    });

    it('(D)hould  display board when data arrives',()=>{
        fixture.detectChanges();
    });
})