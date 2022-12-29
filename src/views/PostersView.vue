<script setup>
import { ref } from "vue";
import posters from "../../data/posters.json";
import ProductSelector from "@/components/ProductSelector.vue";

const postersData = ref(posters);
</script>

<template>
  <main>
    <ProductSelector :product-data="postersData" />
  </main>
</template>

<style></style>
