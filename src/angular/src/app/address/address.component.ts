import { Component, OnInit } from '@angular/core';
import { AddressService } from '../services/address.service';
import { Address } from '../dto/address';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  title = 'NgRx Data & SpringBoot together';
  address: Address;
  user = { name: 'Bill' };
  loading$: Observable<boolean>;
  constructor(private addressService: AddressService) {
    this.loading$ = this.addressService.loading$;
  }

  ngOnInit() {
    this.address = { name: 'Appu', address: 'Pallatheri Mana', phone: '9846454865', email: 'dhanes.p@live.com',familyMembers: '' };
    this.loading$.subscribe(isLoading => {
      console.log('loading : ' + isLoading);
    });
  }

  addTodo(event: Event) {
    event.preventDefault();
    this.addressService.add(this.address);
  }

  onClick() {
    this.user = { name: 'Alain' };
  }

  onNewValue(val) {
    console.log(val);
  }
}
