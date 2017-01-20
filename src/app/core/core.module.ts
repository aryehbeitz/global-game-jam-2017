import { MainMenuEffects } from './../main/effects/main-menu.effect';
import { EffectsModule } from '@ngrx/effects';
import { InlineSVGModule } from 'ng-inline-svg';
import { MainMenuAPI } from './../main/api/main-menu.api';
import { MockBackend } from '@angular/http/testing';
import { mockHttpFactory } from './services/mock-http.service';
import { environment } from './../../environments/environment';
import { HttpModule, Http, BaseRequestOptions, ConnectionBackend } from '@angular/http';
import { LoggerService, loggerServiceFactory } from './services/logger.service';
import { ConnectorService, connectorServiceFactory } from './services/connector.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SecurityService } from './services/security.service';
import { CachingService } from './services/caching.service';
import { SessionService } from './services/session.service';
import { AppStoreModule } from './app-store.module';
import { AuthAPI } from './api/auth.api';
import { SystemAPI } from './api/system.api';
import { PermissionGuard } from './guards/permission.guard';

export class ConnectorConfig {};

let providers: Array<any> = [
  MainMenuAPI,
  PermissionGuard,
  AuthAPI,
  SystemAPI,
  CachingService,
  SessionService, 
  SecurityService,
  {
    provide: ConnectorConfig,
    useValue: environment.backend
  },
  {
    provide: LoggerService,
    useFactory: loggerServiceFactory
  },
  {
    provide: ConnectorService,
    useFactory: connectorServiceFactory,
    deps: [LoggerService, Http, ConnectorConfig]
  }
];

const onlyExports: any = [
  BrowserModule,
  HttpModule,
  AppStoreModule,
  InlineSVGModule
];

const imports: any = onlyExports.concat([

]);

@NgModule({
  imports: imports,
  providers: providers,
  exports: onlyExports
})
export class CoreModule { }
