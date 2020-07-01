import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Encoder} from 'ce-component-datafabric-node2';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello World</h1>
  `
})
export class AppComponent {
  data: any;
  constructor(private http: HttpClient) {
    this.fetchData();
    this.data = {name: 'Ankur'};
  }
  fetchData() {
    const url = 'https://api.dev.az.eagleinvsys.com/svc-query-engine/v1/executeQuery';
    const body = Encoder.getEncodedTable(`@@page(1,5);QueryEngine."System.Audit".QueryAuditEvent().OrderBy(queryDateTime,true)`);
    const headers = {
      // tslint:disable-next-line:max-line-length
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlNzWnNCTmhaY0YzUTlTNHRycFFCVEJ5TlJSSSIsImtpZCI6IlNzWnNCTmhaY0YzUTlTNHRycFFCVEJ5TlJSSSJ9.eyJhdWQiOiJlNWZmMzkyYy1iYjM5LTRjZGItOWM1MC0xODNmOGJhMTVjMWYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC81N2Y3NDA4YS1iMGZmLTQ5MWEtYTc1Ni0zNTdhYjAxN2VmMzMvIiwiaWF0IjoxNTkzNDk1OTA2LCJuYmYiOjE1OTM0OTU5MDYsImV4cCI6MTU5MzQ5OTgwNiwiYWlvIjoiRTJCZ1lKRHU4RzNhSUhUTnBqTnhWZmorakkyVEFBPT0iLCJhcHBpZCI6ImUzMWM1OGI5LTUzOGMtNDE3MS1iODk0LTUyYzAxMjBlZTQ3ZiIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzU3Zjc0MDhhLWIwZmYtNDkxYS1hNzU2LTM1N2FiMDE3ZWYzMy8iLCJvaWQiOiIzNGZmYjFhYy0zMjVmLTRjNzMtYjcyNi05YzUwNDczMTY0MWQiLCJzdWIiOiIzNGZmYjFhYy0zMjVmLTRjNzMtYjcyNi05YzUwNDczMTY0MWQiLCJ0aWQiOiI1N2Y3NDA4YS1iMGZmLTQ5MWEtYTc1Ni0zNTdhYjAxN2VmMzMiLCJ1dGkiOiJtbnJITkhVN3dFZXFtWkZQUEFrT0FnIiwidmVyIjoiMS4wIn0.ZQMIiFLEpmP2gvyqZfSjLw4_TpFQMw0izAAMpKsvN7FBgrqXX10Gp9IXY_Q3hXbdd0a-6qFVlQFoknqxPYP6yVWeB5HYHZ8u_zlkyEjQB0p4nGneaj9KI1EJAWrSWpE7OX-fSEvmZSdN_pmmYBQtl4HxPnzPH0dVwy-_E6JrGNhq6-lS9JCyJ77GjeIH0nOGs1GQZtJA8uEYZ1KzZv1mC1-oqQWdGQPhM75arOxdYvlgj-PFJohCKOEcdTVC33EJna8rqW0SpyOg06uShNkYfXepgRa2OlQN4MKjWaRrdLu5010CawsEZfiNuQxC2tSU2UYdpSKrCQaNnv-eCQ2cbw',
      'Content-Type': 'application/octet-stream',
      'X-Eagle-Spa': 'True',
      'x-eagle-context': 'moffice',
      Accept: 'application/octet-stream',
    };
    console.log(body);
    this.http.post(url, body, {headers}).subscribe(x => {
      this.data = x;
      console.log(x);
    });
  }
}
