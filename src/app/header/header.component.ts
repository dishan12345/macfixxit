import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  activeMenu: string | null = null;

  // Show submenu
  showMenu(menu: string) {
    this.activeMenu = menu;
  }

  // Hide submenu
  hideMenu(menu: string) {
    if (this.activeMenu === menu) {
      this.activeMenu = null;
    }
  }
}
