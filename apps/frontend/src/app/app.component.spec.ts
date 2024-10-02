import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { User, UserControllerService } from './generated/openapi'
import { of } from 'rxjs'

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent],
            providers: [{
                provide: UserControllerService,
                useValue: {
                    getCurrentUser: () => of({ userName: 'Heinz-Jürgen', id: '01' } satisfies User),
                },
            }],
        }).compileComponents()
    })

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent)
        const app = fixture.componentInstance
        expect(app).toBeTruthy()
    })

    it('should greet the user', () => {
        const fixture = TestBed.createComponent(AppComponent)
        fixture.detectChanges()
        const compiled = fixture.nativeElement as HTMLElement
        expect(compiled.innerText).toContain(
            'Welcome, Heinz-Jürgen',
        )
    })
})
