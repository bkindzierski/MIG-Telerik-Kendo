import { Routes } from '@angular/router';
import { Migstepper } from './components/migstepper/migstepper';
import { Accountsgrid } from './components/accountsgrid/accountsgrid';
import { Login } from './components/login/login';

export const routes: Routes = [

    {
        path: '',        
        component: Login,
        //canActivate:[isUserAuthenticated]
    },
    {
        path: 'migstepper',        
        component: Migstepper,
        //canActivate:[isUserAuthenticated]
    },
    {
        path: 'accounts',        
        component: Accountsgrid,
        //canActivate:[isUserAuthenticated]
    },
    {
        path: '**',
        redirectTo: '/'
    }

];
