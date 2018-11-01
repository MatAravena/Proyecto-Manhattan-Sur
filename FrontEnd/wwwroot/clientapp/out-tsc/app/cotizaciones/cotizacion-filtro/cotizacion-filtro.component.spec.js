import { async, TestBed } from '@angular/core/testing';
import { CotizacionFiltroComponent } from './cotizacion-filtro.component';
describe('CotizacionFiltroComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CotizacionFiltroComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CotizacionFiltroComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=cotizacion-filtro.component.spec.js.map