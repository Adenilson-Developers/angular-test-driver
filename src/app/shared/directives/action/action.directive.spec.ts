import { ActionDirectiveModule } from './action.module';
import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Event } from "@angular/router";
import { ActionDirective } from "./action.directive";
import { By } from '@angular/platform-browser';

describe( ActionDirective.name, () =>{

    let fixture: ComponentFixture<ActionDirectiveTestComponent>;
    let component: ActionDirectiveTestComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ActionDirectiveTestComponent],
            imports: [
                ActionDirectiveModule,
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(ActionDirectiveTestComponent);
        component = fixture.componentInstance;
    });

    it( `(D) ( @Output appAction) should emit event with payload when ENTER key is pressed `,()=> {
        //const divElement: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
        const divElement = fixture.debugElement.query(By.directive(ActionDirective)).nativeElement;
        const event = new KeyboardEvent('keyup');
        divElement.dispatchEvent(event);
        expect(component.hasEvent()).toBe(true);
    });

    it(`(D) (@Output appAction) should emit event with payload when cliked`,()=>{
        const divElement: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
        const event = new Event('click');
        divElement.dispatchEvent(event);
        expect(component.hasEvent()).toBe(true);

    })
});



@Component({
    template: `<div class="dummy-component"(appAction)="actionHandler($event)"></div>`
})

class ActionDirectiveTestComponent {

    private event: any = null;

    public actionHandler(event: Event): void {
        this.event = event;
    }

    public hasEvent(): boolean {
        return !!this.event;
    }
}