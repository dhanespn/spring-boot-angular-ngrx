import { Injectable } from '@angular/core';

import { Address } from '../dto/address';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
/**
 * Service qui map les Entities NgRx Data avec l'interface Todo
 */
@Injectable({ providedIn: 'root' })
export class AddressService extends EntityCollectionServiceBase<Address> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Address', serviceElementsFactory);
  }
}
