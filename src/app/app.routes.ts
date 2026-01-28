import { Routes } from '@angular/router';
import { MainPg } from './main-pg/main-pg';
import { ProfilePg } from './profile-pg/profile-pg';
import { MoreInfoPg } from './more-info-pg/more-info-pg';
import { PersonalData } from './personal-data/personal-data';
import { Blogs } from './blogs/blogs';

export const routes: Routes = [
    { path: "home", component: MainPg, title: "Home"},
    { path: "profile", component: ProfilePg, title: "Profile", children:[
        { path: "more-info", component:MoreInfoPg},
        { path: "personal", component:PersonalData},
        { path: "blogs", component:Blogs}
    ]}
];
