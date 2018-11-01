import { TestBed, async } from '@angular/core/testing';
import { bandejaEntradaComponent } from './bandejaEntrada.component';

describe('bandejaEntradaComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        bandejaEntradaComponent
      ],
    }).compileComponents();
  }));
  //it('should create the app', async(() => {
  //  const fixture = TestBed.createComponent(bandejaEntradaComponent);
  //  const app = fixture.debugElement.componentInstance;
  //  expect(app).toBeTruthy();
  //}));
  //it(`should have as title 'bandejaEntrada'`, async(() => {
  //  const fixture = TestBed.createComponent(bandejaEntradaComponent);
  //  const app = fixture.debugElement.componentInstance;
  //  expect(app.title).toEqual('bandejaEntrada');
  //}));
  //it('should render title in a h1 tag', async(() => {
  //  const fixture = TestBed.createComponent(bandejaEntradaComponent);
  //  fixture.detectChanges();
  //  const compiled = fixture.debugElement.nativeElement;
  //  expect(compiled.querySelector('h1').textContent).toContain('bandejaEntrada');
  //}));

});
