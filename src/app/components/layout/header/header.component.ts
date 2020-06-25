import { Component, OnInit } from '@angular/core';
import { NavLink } from 'src/models/NavLink';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  toolbarLinks: NavLink[] = [
    {
      title: 'home',
      dropdown: false,
    },
    {
      title: 'faqs',
      dropdown: false,
    },
    {
      title: 'contacts',
      dropdown: false,
    },
    {
      title: 'usd',
      dropdown: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  setClasses(link) {
    let classes = {
      link: true,
      dropdown: link.dropdown,
    };
    return classes;
  }
}
