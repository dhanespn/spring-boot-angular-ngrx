import { Todo } from '../dto/todo';
import { Address } from '../dto/address';
import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

export function activeFilter(entities: { active: boolean }[], search: boolean) {
  return entities.filter(e => e.active === search);
}

/**
 * Fonction de comparaison pour trier les entities
 * @param {string} a
 * @param {string} b
 * @returns {number}
 */
export function sortByTitle(
  a: { title: string },
  b: { title: string }
): number {
  return a.title.localeCompare(b.title);
}

const entityMetadata: EntityMetadataMap = {
  Todo: {
    filterFn: activeFilter,
    sortComparer: sortByTitle
  },

  Address: {
    filterFn: activeFilter,
    sortComparer: sortByTitle
  }
};

const pluralNames = {  };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
