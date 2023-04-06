import { writable } from "svelte/store";
import { productsStore } from '../Stores/ProductStore';

export const product_countStore = (() => {
  const { subscribe, set, update } = writable(0);

  const count = () => {
    let total = 0;
    productsStore.subscribe((products) => {
      total = products.length;
      set(total);
    });
    return {
      subscribe,
    };
  };

  return count();
})();
