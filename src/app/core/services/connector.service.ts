import { Observable } from 'rxjs/Observable';
import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Response, URLSearchParams, Headers } from '@angular/http';
import { ConnectorConfig } from '../core.module';

@Injectable()
export class ConnectorService {
  private prefix: string;

  constructor(
    private logger: LoggerService, 
    private http: Http, 
    private config: ConnectorConfig
  ) {
    this.prefix = `${config['protocol']}://${config['host']}:${config['port']}/api/${config['apiVersion']}`;
  }

  get(url: string, params: Object = null, headerObj: Object = null): Observable<Response> {
    let headers: Headers = new Headers(headerObj),
        getUrl: string = url.startsWith('/') ? this.getFullUrl(url) : url;
    headers.set('Content-Type', 'application/json;charset=UTF-8');
    return this.http.get(getUrl, this.getRequestOptions(params, headers))
      .switchMap((response: Response, index: number) => {
        if ([200, 301].indexOf(response.status) !== -1) {
          return Observable.of(response);
        } else {
          throw Observable.throw(new Error(''));
        }
      });
  }

  post(url: string, params: Object = null, headersObj: Object = null): Observable<Response> {
    let headers: Headers = new Headers(headersObj),
        postUrl: string = url.startsWith('/') ? this.getFullUrl(url) : url;
    headers.set('Content-Type', 'application/json;charset=UTF-8');
    return this.http.post(postUrl, params, this.getRequestOptions(null, headers))
      // .switchMap((response: Response, index: number) => {
      //   if ([200, 301].indexOf(response.status) !== -1) {
      //     return Observable.of(response);
      //   } else {
      //     throw Observable.throw(new Error(''));
      //   }
      // });
  }

  private getFullUrl(url) {
    return this.prefix + url;
  }

  private getRequestOptions(params, headers):RequestOptionsArgs {
    const options: RequestOptionsArgs = {};
    options.headers = headers;
    return options;
  }

}

export function connectorServiceFactory(logger: LoggerService, http: Http, config: ConnectorConfig) {
  return new ConnectorService(logger, http, config);
}
