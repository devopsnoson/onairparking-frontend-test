import { makeAutoObservable } from 'mobx';

class UIStore {
  searchOverlayOpen = false;
  searchSwitchTerm = 'airport';
  showMenu = false;

  constructor() {
    makeAutoObservable(this);
  }

  setSearchOverlayOpen(value) {
    this.searchOverlayOpen = value;
  }

  setSearchSwitchTerm(term) {
    this.searchSwitchTerm = term;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}

export default UIStore;
