import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { routerReducer, RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { shellReducer } from '../shell/reducers/shell.reducer';
import { systemReducer } from './reducers/system.reducer';
import { mainMenuReducer } from '../main/reducers/main-menu.reducer';
import { boardReducer } from '../board/reducers/board.reducer';

@NgModule({
  imports: [
    StoreModule.provideStore({
      router: routerReducer,
      shell: shellReducer,
      system: systemReducer,
      main: mainMenuReducer,
      board: boardReducer
    }, {
      router: {
        path: window.location.pathname + window.location.search
      }
    }),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ]
})
export class AppStoreModule { }
