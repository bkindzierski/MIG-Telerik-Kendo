import { Routes } from '@angular/router';
import { Migstepper } from './components/migstepper/migstepper';
import { Accountsgrid } from './components/accountsgrid/accountsgrid';

export const routes: Routes = [

    {
        path: '',        
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
