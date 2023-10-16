import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { DataService } from "../services/data.service";
import { BicepsInterceptor } from "../interceptors/biceps.interceptor";

@NgModule({
    declarations: [],
    imports: [HttpClientModule],
    exports: [],
    providers: [
        DataService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: BicepsInterceptor,
            multi: true
        }
    ],
})

export class Exercice_physique{}