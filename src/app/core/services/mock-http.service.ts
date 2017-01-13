import { ShellMock } from './../../shell/mocks/shell.mock';
import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';

@Injectable()
export class MockHttpService extends Http {
  private mockResponse = [];

  constructor(
    private logger: LoggerService, 
    backend: MockBackend, 
    options: BaseRequestOptions,
    private shell: ShellMock
  ) { 
    super(backend, options);
    this.loadMockHandlers();

    backend.connections.subscribe((c: MockConnection) => {
      const responseOptions: ResponseOptions = this.getMockResponse(c.request.url, c.request.getBody());
      return c.mockRespond(new Response(responseOptions));
    });
  }

  private loadMockHandlers() {
    this.mockResponse.push(...this.shell.responses);
  }

  private getMockResponse(url: string, body: {}): ResponseOptions {
    const mock = this.mockResponse.find(response => response.pattern.test(url)) || {};
    return mock.handler(url, body);
  }
}


export const mockHttpFactory = (logger: LoggerService, backend: MockBackend, options: BaseRequestOptions, 
                                shell: ShellMock) => {
  return new MockHttpService(logger, backend, options, shell);
}
