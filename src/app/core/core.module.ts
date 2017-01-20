import { CharacterEffects } from './../board/effects/character.effect';
import { RoomEffects } from './../board/effects/room.effect';
import { MainEffects } from './../main/effects/main.effect';
import { BoardService } from './../board/services/board.service';
import { RoomService } from './../board/services/room.service';
import { CharacterService } from './../board/services/character.service';
import { BoardEffects } from './../board/effects/board.effect';
import { ArrayExtensionsService } from './services/array-extensions.service';
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
  ArrayExtensionsService,
  BoardService,
  RoomService,
  CharacterService,
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
  EffectsModule.run(MainMenuEffects),
  EffectsModule.run(BoardEffects),
  EffectsModule.run(RoomEffects),
  EffectsModule.run(CharacterEffects),
  EffectsModule.run(MainEffects)
]);

@NgModule({
  imports: imports,
  providers: providers,
  exports: onlyExports
})
export class CoreModule { }
