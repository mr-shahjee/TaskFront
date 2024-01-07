import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' },
  // { state: 'gad7', type: 'link', name: 'Gad7', icon: 'crop_7_5' },
  // { state: 'grid', type: 'link', name: 'Grid', icon: 'crop_7_5' },
  // { state: 'builder', type: 'link', name: 'Builder', icon: 'crop_7_5' },
  // { state: 'show-schema', type: 'link', name: 'Show Schema', icon: 'crop_7_5' },
  // { state: 'login', type: 'link', name: 'Login', icon: 'crop_7_5' },
 
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
