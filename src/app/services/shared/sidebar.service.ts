import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      title: 'Prinipal',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          title: 'Dashboard',
          url: '/dasboard'
        },
        {
          title: 'Progress',
          url: '/progress'
        },
        {
          title: 'Gráficas',
          url: '/graph1'
        }
      ]
    }
  ];

  constructor() { }
}
