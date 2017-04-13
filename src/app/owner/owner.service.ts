import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Owner } from './owner';


@Injectable()
export class OwnerService {
 private usersUrl: string = 'http://reqres.in/api/users';

  constructor(private http: Http) {}

  /**
   * Get all owners
   */
  getOwners(): Observable<Owner[]>{
    return this.http.get(this.usersUrl).map(res => res.json().data)
      .catch(this.handleError);

  }

  private handleError(err) {
    let errMessage: string;

    if (err instanceof Response) {
      let body   = err.json() || '';
      let error  = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText} || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }

    return Observable.throw(errMessage);
  }
}