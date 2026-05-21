import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page/home-page';
import { StudentsPage } from './features/students/pages/students-page/students-page';
import { StudentsDetailPage } from './features/students/pages/students-detail-page/students-detail-page';
import { LayoutsPage } from './features/layout/pages/layouts-page/layouts-page';
import { SignupPage } from './features/signup/signup-page';
import { ProfilePage } from './features/profile/pages/profile-page/profile-page';
import { ProjectConfigPage } from './features/project/pages/project-config-page/project-config-page';
import { UiComponentsPage } from './features/ui/pages/ui-components-page/ui-components-page';
export const routes: Routes = [

  {
    path: '',
    component: HomePage
  },
  {
    path: 'students',
    component: StudentsPage
  },
  {
    path:'students/:id',
    component:StudentsDetailPage

  },
  {
    path:'layouts',
    component: LayoutsPage
  },
    {
    path:'signup-page',
    component: SignupPage
  },
  { path: 'profile', 
    component: ProfilePage 
  },
  { path: 'project-config', 
    component: ProjectConfigPage 
  },
  {
    path:'ui-components',
    component: UiComponentsPage
  },

  {
    path:'**',
    redirectTo:''
  }
];
