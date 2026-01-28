import { Routes } from '@angular/router';
import { MainPg } from './main-pg/main-pg';
import { ProfilePg } from './profile-pg/profile-pg';

export const routes: Routes = [
    { path: "home", component: MainPg, title: "Home"},
    { path: "profile", component: ProfilePg, title: "Profile"}
];
