import { async, TestBed } from '@angular/core/testing';
import { CotizacionVentanaComponent } from './cotizacion-ventana.component';
describe('CotizacionVentanaComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CotizacionVentanaComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CotizacionVentanaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=cotizacion-ventana.component.spec.js.map