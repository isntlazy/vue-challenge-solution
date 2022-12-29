import { Ref, ref } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  // using any just to save time, not recommended in production app
  const cart: Ref<any[]> = ref([]);
  const addToCart = (productWithOptions: any) => {
    cart.value.push(productWithOptions);
  };

  return { cart, addToCart };
});
