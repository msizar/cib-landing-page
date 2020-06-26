import { Component, OnInit } from '@angular/core';
import {
  faHome,
  faPlaneDeparture,
  faHotel,
  faGift,
  faBlog,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navLinks = [
    { title: 'home', icon: faHome, active: true },
    { title: 'flight', icon: faPlaneDeparture },
    { title: 'hotels', icon: faHotel },
    { title: 'holidays', icon: faGift },
    { title: 'blog', icon: faBlog },
    { title: '021 354 23', icon: faPhone },
  ];
  constructor() {}

  ngOnInit(): void {}

  setClass(link) {
    return {
      active: link.active,
    };
  }
}
