import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'academyc'
    },
    children: [
      {
        path: '',
        redirectTo: 'newproject',
        pathMatch: 'full'
      },

      {
        path: 'newproject',
        loadComponent: () => import('../academyc/newproject/newproject.component').then(m => m.NewprojectComponent),
        data: {
          title: 'Newproject'
        }
      },
      {
        path: 'redoproject',
        loadComponent: () => import('../academyc/redoproject/redoproject.component').then(m => m.RedoprojectComponent),
        data: {
          title: 'Redoproject'
        }
      },
      {
        path: 'viewproject',
        loadComponent: () => import('../academyc/viewproject/viewproject.component').then(m => m.ViewprojectComponent),
        data: {
          title: 'Viewproject'
        }
      },
      {
        path: 'verifyproject',
        loadComponent: () => import('../academyc/verifyproject/verifyproject.component').then(m => m.VerifyprojectComponent),
        data: {
          title: 'Verifyproject'
        }
      },
      {
        path: 'launchproject',
        loadComponent: () => import('../academyc/launchproject/launchproject.component').then(m => m.LaunchprojectComponent),
        data: {
          title: 'Launchproject'
        }
      },
      { path: '**', redirectTo: 'dashboard' }
    ]
  }
];


