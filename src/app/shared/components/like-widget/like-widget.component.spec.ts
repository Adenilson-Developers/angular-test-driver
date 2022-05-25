import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';




describe( LikeWidgetComponent.name, () => {
    // let component: LikeWidgetComponent = null
    let fixture: ComponentFixture<LikeWidgetComponent> = null;

    beforeEach( async ()=> {
        // Cria um modolo do component para testar 
        await TestBed.configureTestingModule({
            declarations: [LikeWidgetComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(LikeWidgetComponent);
    })

    it('Should created component',() => {
        const instence = fixture.componentInstance;
    });
})