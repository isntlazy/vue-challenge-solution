<script setup lang="ts">
import type ProductData from "@/ProductData.interface";
import { computed, ref } from "vue";
import { useCartStore } from "@/stores/cart";

const props = defineProps<{
  productData: ProductData;
}>();

const { addToCart } = useCartStore();
const availableProperties = props.productData.properties.reduce(
  (acc: any, currentVal: any) => {
    acc[currentVal.slug] = "";
    return acc;
  },
  {}
);
const selectedOptions = ref({ ...availableProperties });
const allowAddToCart = computed(() => {
  for (const selectedOptionsKey in selectedOptions.value) {
    if (!selectedOptions.value[selectedOptionsKey]) {
      return false;
    }
  }
  return true;
});

const addProductToCart = () => {
  console.log({ ...selectedOptions.value });
  addToCart({ ...selectedOptions.value });
  selectedOptions.value = { ...availableProperties };
};
</script>

<template>
  <h1>{{ productData.titlePlural }}</h1>
  <div :key="property.slug" v-for="property in productData.properties">
    <h2>Please select {{ property.title }}:</h2>
    <div>
      <select v-model="selectedOptions[property.slug]">
        <option
          :key="option.slug"
          v-for="option in property.options"
          :value="option.slug"
        >
          {{ option.name || option.slug }}
        </option>
      </select>
    </div>
  </div>
  <button
    class="add-to-cart"
    :disabled="!allowAddToCart"
    type="button"
    @click="addProductToCart"
  >
    Add to Cart
  </button>
</template>

<style>
.add-to-cart {
  padding: 1rem;
  margin: 2rem 0;
}
</style>
