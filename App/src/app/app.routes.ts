import { Routes} from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component'; 
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';


 const routes: Routes = [
    { path: 'menu', component: MenuComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'user', component: UserProfileComponent },
    { path: '', redirectTo: '/user', pathMatch: 'full' }
];

export {Routes};

