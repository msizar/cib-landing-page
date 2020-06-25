import { Component, OnInit } from '@angular/core';
import { NavLink } from 'src/models/NavLink';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent implements OnInit {
  socials: NavLink[] = [
    {
      title: 'facebook',
      dropdown: false,
    },
    {
      title: 'twitter',
      dropdown: false,
    },
    {
      title: 'linkedin',
      dropdown: false,
    },
    {
      title: 'instagram',
      dropdown: false,
    },
    {
      title: 'phone',
      dropdown: false,
    },
    {
      title: 'email',
      dropdown: false,
    },
  ];

  ngOnInit(): void {}

  setClasses(link) {
    let classes = {
      link: true,
      [`${link.title}-icon`]: link,
    };
    return classes;
  }
}
