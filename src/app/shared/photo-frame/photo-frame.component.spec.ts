import { PhotoFrameModule } from './photo-frame.module';
import { ComponentFixture, discardPeriodicTasks, fakeAsync, flush, TestBed, tick } from "@angular/core/testing";
import { PhotoFrameComponent } from "./photo-frame.component";

describe( PhotoFrameComponent.name, () => {

    let fixture: ComponentFixture<PhotoFrameComponent>;
    let component: PhotoFrameComponent;

    var originalTimeout;

    beforeEach( async() => {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;

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

    it(`(D)Should display number of likes when (@Input likes) is incremented`, () => {
        fixture.detectChanges();
        component.likes++;
        fixture.detectChanges();
        // const element: HTMLElement - typagem
        const element = fixture.nativeElement.querySelector('.like-conter');
        expect(element.textContent.trim()).toBe('1');
    });

    it(`(D)Should update aria-label when (@Input likes) is incremented`, ()=> {
        fixture.detectChanges();
        component.likes++;
        fixture.detectChanges();
        const element: HTMLElement = fixture.nativeElement.querySelector('span');
        expect(element.getAttribute('aria-label')).toBe('1: people liked')

    });

    it(`(D)Should have aria-label with 0 (@Input likes )`,()=>{
        fixture.detectChanges()
        component.likes++;
        fixture.detectChanges();
        const element: HTMLElement = fixture.nativeElement.querySelector('span');
        expect(element.getAttribute('aria-label')).toBe('0: people liked');
    });

    it(`(D) Should display image with src and description when bound to properties`,()=> {
        const description = 'some description';
        const src = "http://somesite.com/img.jpg";
        component.src = src;
        component.description = description;
        fixture.detectChanges();
        const img: HTMLElement = fixture.nativeElement.querySelector('img');
        expect(img.getAttribute('src')).toBe(src);
        expect(img.getAttribute('alt')).toBe(description);
    })

    it(`(D) Should display number of likes when clicked`, done => {
        fixture.detectChanges();
        component.liked.subscribe( ()=>{
            component.likes++;
            fixture.detectChanges();
            const counteEL = fixture.nativeElement.querySelector('.like-conter');
            expect(counteEL.textContent.trim()).toBe('1')
            done();
        });
        const likeWidgetContainerEl = fixture.nativeElement.querySelector('.like-widget-container');
        likeWidgetContainerEl.click();
    });

    it(`(D) Should display number of likes when ENTER key is pressed`, done => {
        fixture.detectChanges();
        component.liked.subscribe(() => {
            component.likes++;
            fixture.detectChanges();
            const counterEl: HTMLElement = fixture.nativeElement.querySelector('.like-conter');

            done();
        })
        const likeWidgetContainerEl: HTMLElement = fixture.nativeElement.querySelector('.like-widget-container')
        const event = new KeyboardEvent('keyup', {key: 'Enter'});
        likeWidgetContainerEl.dispatchEvent(event);

    })
});