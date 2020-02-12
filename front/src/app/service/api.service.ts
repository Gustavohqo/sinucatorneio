import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { catchError } from "rxjs/operators";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private apiContext = environment.baseURL;

  constructor(private http: HttpClient) {}

  get(path): Observable<any> {
    return this.http.get(`${this.apiContext}${path}`);
  }

  post(path, dados): Observable<any> {
    return this.http.post(`${this.apiContext}${path}`, dados);
  }

  delete(path): Observable<any> {
    return this.http.delete(`${this.apiContext}${path}`);
  }

  put(path, dados): Observable<any> {
    return this.http.put(`${this.apiContext}${path}`, dados);
  }
}
