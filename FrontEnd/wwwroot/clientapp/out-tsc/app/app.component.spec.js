import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('AppComponent', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [
                AppComponent,
                NavMenuComponent
            ]
        }).compileComponents();
    }));
    //it('should create the app', async(() => {
    //  const fixture = TestBed.createComponent(AppComponent);
    //  const app = fixture.debugElement.componentInstance;
    //  expect(app).toBeTruthy();
    //}));
    //  it(`should have as title 'Welcome to Angular'`, async(() => {
    //  const fixture = TestBed.createComponent(AppComponent);
    //  const app = fixture.debugElement.componentInstance;
    //    expect(app.title).toEqual('Welcome to Angular');
    //}));
    //it('should render title in a h1 tag', async(() => {
    //  const fixture = TestBed.createComponent(AppComponent);
    //  fixture.detectChanges();
    //  const compiled = fixture.debugElement.nativeElement;
    //    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Angular');
    //}));
});
//# sourceMappingURL=app.component.spec.js.map