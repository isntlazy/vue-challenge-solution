<script setup>
import { ref } from "vue";
import businessCards from "../../data/businesscards.json";
import ProductSelector from "@/components/ProductSelector.vue";

const businessCardsData = ref(businessCards);
</script>

<template>
  <main>
    <ProductSelector :product-data="businessCardsData" />
  </main>
</template>

<style></style>
