import { Component, OnInit } from '@angular/core';
import {
  faPlaneDeparture,
  faHotel,
  faGift,
  faSave,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  activeTabIndex: number = 0;
  activeTab = {};

  tabItems = [
    { title: 'flight', icon: faPlaneDeparture },
    { title: 'hotels', icon: faHotel },
    { title: 'Flight + Hotels', icon: faSave },
    { title: 'holidays', icon: faGift },
  ];
  constructor() {}

  ngOnInit(): void {
    this.activeTab = this.tabItems[this.activeTabIndex];
  }

  /**
   * Toogle tabs
   * @param index
   */
  onChangeTab(index) {
    this.activeTabIndex = index;
    this.activeTab = this.tabItems[index];
  }

  /**
   * Set active class
   * @param index
   */
  setClasses(index) {
    let classes = {
      'tab-button': true,
      'tab-active-button': this.activeTabIndex === index,
    };
    return classes;
  }
}
