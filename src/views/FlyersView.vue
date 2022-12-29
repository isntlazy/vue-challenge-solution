<script setup>
import { ref } from "vue";
import flyers from "../../data/flyers.json";
import ProductSelector from "@/components/ProductSelector.vue";

const flyersData = ref(flyers);
</script>

<template>
  <main>
    <ProductSelector :product-data="flyersData" />
  </main>
</template>

<style></style>
