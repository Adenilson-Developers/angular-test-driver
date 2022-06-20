import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';
import { UniqueIdService } from './../../services/unique-id/unique-id.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



describe(LikeWidgetComponent.name, () => {
    //let component: LikeWidgetComponent = null;

    let fixture: ComponentFixture<LikeWidgetComponent>;
    let component: LikeWidgetComponent;


    beforeEach( async ()=> {
        // Cria um modolo do component para testar 
        await TestBed.configureTestingModule({
            declarations: [LikeWidgetComponent],
            providers: [UniqueIdService],
            imports: [FontAwesomeModule]
        }).compileComponents();

        fixture = TestBed.createComponent(LikeWidgetComponent);
        //component = fixture.componentInstance
    })

    it('Should created component',() => {
        const instance = fixture.componentInstance;
        expect(instance).toBeTruthy();
    });

    it('Should auto-generate ID during ngOnInit when (@Input id) is not assigned', () => {
    const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    })

    it('Should Not auto-generate ID during ngOnInit when  (@Input id) is assigned',()=>{
        const component = fixture.componentInstance;
        const someId = 'someId'
        component.id = someId;
        fixture.detectChanges();
        expect(component.id).toBe(someId)
    })

    // it(`#${LikeWidgetComponent.prototype.like.name} should trigger @(Output liked) when called `, () => {
    //     // usando spyOn para espionar o método
    //     spyOn(component.liked, 'emit')
    //     fixture.detectChanges();
    //     component.liked.subscribe(()=>{
    //         expect(component.liked.emit).toHaveBeenCalled()
    //         // verificando se o método foi chamado ou não, usando toHaveBeenCalled 
    //     });
    //     component.like();
    // });
 
})