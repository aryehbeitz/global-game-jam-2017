import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
    private isAuthenticated = false;
    
    constructor() {
    }

    setAuthenticated() {
        this.isAuthenticated = true;
    }

    isUserAuthenticated():boolean {
        return this.isAuthenticated;
    }

    unAuthenticate() {
        this.isAuthenticated = false;
    }
}