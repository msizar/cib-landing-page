import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  title: 'flight';

  bookingTypes: string[] = ['domestic', 'international'];
  activeBookingType: string = this.bookingTypes[0];
  placeHolders = {
    domestic: {
      from: 'E.g Johannesburg, Capetown',
      to: ' E.g Port Elizabeth, Durban',
    },
    international: { to: 'E.g London, Spain', from: 'E.g Australia, New york' },
  };

  constructor() {}

  ngOnInit(): void {}

  onToggleBookingType(type: string) {
    this.activeBookingType = type;
  }

  /**
   * set button classes
   * @param type
   */
  setClasses(type: string) {
    return {
      'booking-type-active': type === this.activeBookingType,
    };
  }

  /**
   * get place holder based on current booking type
   */
  getPlaceHolder() {
    const holder =
      this.activeBookingType === this.bookingTypes[0]
        ? this.placeHolders.domestic
        : this.placeHolders.international;

    return holder;
  }
}
