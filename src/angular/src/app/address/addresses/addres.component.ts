import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../services/address.service';
import { Observable } from 'rxjs';
import { Address } from '../../dto/address';
import { Router } from '@angular/router';
import { debug } from 'util';

@Component({
  selector: 'app-address',
  templateUrl: './addres.component.html',
  styleUrls: ['./addres.component.scss']
})
export class AdresComponent implements OnInit {
  title: String;
  description: String;
  address$: Observable<Address[]>;

  constructor(private addressService: AddressService, private router: Router) {
    this.address$ = addressService.entities$;
  }

  testModel() {
    console.log('update');
    return '12';
  }

  getAddress() {
    this.addressService.getAll();
  }

  deleteTodo(todoId: number) {
    this.addressService.delete(todoId);
  }

  updateTodo(address: Address) {
    debug;
    //todo.active = !todo.active;
    this.addressService.update(address);
  }

  ngOnInit() {
    this.getAddress();
  }

  editTodo(id: number) {
    this.router.navigate(['todopage', id]);
  }
}
