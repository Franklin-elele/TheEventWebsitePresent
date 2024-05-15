import { Component } from '@angular/core';
// import { Ticket } from './ticket.ts/Ticket';


@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrl: './buy-ticket.component.css'
})
export class BuyTicketComponent {
  // ticket = [

  //   // Add more tickets as necessary
  // ];
  collection: any[];
  p: number = 1;

  constructor() {
    // Initialize your collection here, for example, fetching data from an API
    this.collection = [
      { type: 'Pro Access', price: 250, features: ['Regular Seating', 'Coffee Break', 'Custom Badge', 'Community Access'] },
      { type: 'Executive Access', price: 450, features: ['VIP Seating', 'Exclusive Lounge', 'All Access', 'Premium Support'] },
      { type: 'Premium Access', price: 250, features: ['Regular Seating', 'Coffee Break', 'Custom Badge', 'Community Access'] },
      { type: 'Ordinary Access', price: 450, features: ['VIP Seating', 'Exclusive Lounge', 'All Access', 'Premium Support'] },
      { type: 'Pro Access', price: 250, features: ['Regular Seating', 'Coffee Break', 'Custom Badge', 'Community Access'] },
      { type: 'Executive Access', price: 450, features: ['VIP Seating', 'Exclusive Lounge', 'All Access', 'Premium Support'] },
      { type: 'Premium Access', price: 250, features: ['Regular Seating', 'Coffee Break', 'Custom Badge', 'Community Access'] },
      { type: 'Ordinary Access', price: 450, features: ['VIP Seating', 'Exclusive Lounge', 'All Access', 'Premium Support'] },
      { type: 'Pro Access', price: 250, features: ['Regular Seating', 'Coffee Break', 'Custom Badge', 'Community Access'] },
      { type: 'Executive Access', price: 450, features: ['VIP Seating', 'Exclusive Lounge', 'All Access', 'Premium Support'] },
      { type: 'Premium Access', price: 250, features: ['Regular Seating', 'Coffee Break', 'Custom Badge', 'Community Access'] },
      { type: 'Ordinary Access', price: 450, features: ['VIP Seating', 'Exclusive Lounge', 'All Access', 'Premium Support'] },
      { type: 'Pro Access', price: 250, features: ['Regular Seating', 'Coffee Break', 'Custom Badge', 'Community Access'] },
      { type: 'Executive Access', price: 450, features: ['VIP Seating', 'Exclusive Lounge', 'All Access', 'Premium Support'] },
      { type: 'Premium Access', price: 250, features: ['Regular Seating', 'Coffee Break', 'Custom Badge', 'Community Access'] },
      { type: 'Ordinary Access', price: 450, features: ['VIP Seating', 'Exclusive Lounge', 'All Access', 'Premium Support'] },
    ];
  }

  // currentPage = 1;
  // itemsPerPage = 2;

  // constructor() { }


  // ngOnInit(): void {
  // }

  // get paginatedItems(): any[] {
  //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //   return this.ticket.slice(startIndex, startIndex + this.itemsPerPage);
  // }

  // get totalPages(): number {
  //   return Math.ceil(this.ticket.length / this.itemsPerPage);
  // }

  // changePage(page: number): void {
  //   this.currentPage = page;
  // }

}

// constructor() { }
// }
// get paginatedTickets(): Ticket[] {
//   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
//   return this.tickets.slice(startIndex, startIndex + this.itemsPerPage);
// }

// nextPage(): void {
//   if (this.currentPage < this.totalPages) {
//     this.currentPage++;
//   }
// }

// prevPage(): void {
//   if (this.currentPage > 1) {
//     this.currentPage--;
//   }
// }

// get totalPages(): number {
//   return Math.ceil(this.tickets.length / this.itemsPerPage);
// }