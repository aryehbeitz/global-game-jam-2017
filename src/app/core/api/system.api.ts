import { ConnectorService } from './../../core/services/connector.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { System } from '../../core/models/system.model';

@Injectable()
export class SystemAPI {

  constructor(
    private connector: ConnectorService
  ) {}

  /**
   * Get system info
   */
  getSystemInfo(): Observable<any> {
    return this.connector.get('/system/getSystemInfo')
      .map(this.deserializeSystem)
  }
  
  private deserializeSystem(res: Response): any {
    let body = res.json();
    return body;
  }

}