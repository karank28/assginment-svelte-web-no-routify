import { writable } from "svelte/store";
import { ContactUsStore } from "../Stores/ContactStore";


export const contactUs_countStore = (() => {
  const { subscribe, set, update } = writable(0);

  const count = () => {
    let total = 0;
    ContactUsStore.subscribe((products) => {
      total = products.length;
      set(total);
    });
    return {
      subscribe,
    };
  };

  return count();
})();
