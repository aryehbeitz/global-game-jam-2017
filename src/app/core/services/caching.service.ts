import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CachingService {
  private cacheObj = {};

  constructor() {}

  get(key: string): Observable<any> {
    let cached: Observable<any> = this.cacheObj[key];
    if (!cached) {
      return Observable.throw(new Error('No cached found by key ' + key));
    }
    return cached;
  }

  store(key: string, value: Observable<any>) {
    let cached = value
      .publishReplay(1)
      .refCount();
    this.cacheObj[key] = cached;
    return cached;
  }

  clearCacheEntry(key: string): any {
    const cached = this.cacheObj[key];
    this.cacheObj[key] = {};
    return cached;
  }

  clearCache() {
    return this.cacheObj = {};
  }


  
}
