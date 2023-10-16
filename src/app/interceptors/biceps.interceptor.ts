import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class BicepsInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifiedRequest = req.clone({
            setHeaders:{
                'X-Api-Key': 'qr971rUxa4cOPLN6Wnw77w==e2HDP26XwWejuHjy'
            }
        });

        return next.handle(modifiedRequest);
    }
}