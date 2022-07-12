import { PhotoFrameModule } from './photo-frame.module';
import { ComponentFixture, discardPeriodicTasks, fakeAsync, flush, TestBed, tick } from "@angular/core/testing";
import { PhotoFrameComponent } from "./photo-frame.component";

describe( PhotoFrameComponent.name, () => {

    let fixture: ComponentFixture<PhotoFrameComponent>;
    let component: PhotoFrameComponent;

    beforeEach( async() => {

        await TestBed.configureTestingModule({
            imports: [PhotoFrameModule]
        }).compileComponents();

        fixture = TestBed.createComponent(PhotoFrameComponent)
        component = fixture.componentInstance;

    })

    it( 'Should create component',() => {
        expect(component).toBeTruthy();
    })

    it(`#${PhotoFrameComponent.prototype.like.name}
    should trigger (@Output liked) once when called 
    multiple times within debouce time`, fakeAsync(() => {
        fixture.detectChanges();
        let times = 0;
        component.liked.subscribe(() => times++);
        component.like();
        component.like();
        
        tick(500);
        expect(times).toBe(1);

        discardPeriodicTasks();
    }));

    it(`#${PhotoFrameComponent.prototype.like.name}
    should trigger (@Output liked) two times when
    called outside debouce time`, fakeAsync(()=>{
        fixture.detectChanges();
        let times = 0;
        component.liked.subscribe(() => times++);
        component.like();
        tick(500);
        component.like();
        tick(500);
        expect(times).toBe(2)
    }));

    it(`Should display number of likes when (@Input likes) is incremented`, () => {
        fixture.detectChanges();
        component.likes++;
        fixture.detectChanges();
        // const element: HTMLElement - typagem
        const element = fixture.nativeElement.querySelector('.like-conter');
        expect(element.textContent.trim()).toBe('1');
    })

});