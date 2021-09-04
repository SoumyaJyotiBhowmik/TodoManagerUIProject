import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
export class HelloWorldBean {
  constructor(public message: string) {}
}
@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  createBasicAuthenticationHttpHeader() {
    let username = 'user';
    let password = 'password';
    let basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/welcome');
  }
  executeHelloWorldBeanServiceWithParameter(name) {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    });
    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/welcomeWithName/${name}`,
      { headers: headers }
    );
  }
}
