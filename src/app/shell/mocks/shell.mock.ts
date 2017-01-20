import { Injectable } from '@angular/core';
import { MockBackend } from '@angular/http/testing';
import { Response, Http, ResponseOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class ShellMock extends Http {
  private allData = {
    user: [
        {
            name: 'Admin',
            username: 'admin'
        },
        {
            name: 'User1',
            username: 'user1'
        },
        {
            name: 'User2',
            username: 'user2'
        },
        {
            name: 'User3',
            username: 'user3'
        },
        {
            name: 'User4',
            username: 'user4'
        }
    ],
    email: [
      'example1@email.com',
      'example2@email.com',
      'example3@email.com',
      'example4@email.com',
      'example5@email.com',
      'example6@email.com'
    ]
  };

  private generatedUsers: Array<any> = this.generateUsers();
  private perPage = 5;
  private connectedUser;


  private getUserResponse(url: string, body) {
    const username = url.substr(url.lastIndexOf('/') + 1);
    
    if(!this.connectedUser) {
        this.connectedUser = this.generatedUsers.find(user => user.username === username);
    }

    return new ResponseOptions({
        body: this.connectedUser
    })
  }

  private getUserPermissionsResponse(url: string, body) {
    return new ResponseOptions({
        status: 200,
        body: {
            'accesscontrolmenu_update': true,
            'user': true
        }
    });
  }

  private getRandomField(field) {
    let fieldData = this.allData[field];
    return fieldData[Math.floor(Math.random() * fieldData.length)];
  }

  private generateUsers() {
    return this.allData.user
        .map((user, index) => Object.assign(user, {
            'id': index,
            'email': this.getRandomField('email')
        }));
  }

  private sortList(list: Array<any>, filterBy = 'id', desc = true) {
    return list
      .sort((a, b) => {
        let itemA = desc ? a : b,
            itemB = desc ? b : a;
        if (itemA[filterBy] < itemB[filterBy]) {
          return 1;
        } else if (itemA[filterBy] > itemB[filterBy]) {
          return -1;
        }
        return 0;
      });
  }

  get responses() {
    return [
        {
            pattern: /\/system\/getSystemInfo/,
            handler: (url: string, body: {}) => ({
                status: 200,
                body: {}
            })
        }
    ];
  }
}
