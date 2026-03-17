<script setup lang="ts">
import BreadCrumbsWrapper from '@/components/breadcrumbs/BreadCrumbsWrapper.vue';
import { useRoute } from 'vue-router';
import AkokoSikaRequestForm from '../components/AkokoSikaRequestForm.vue';
import SellingRequestForm from '../components/SellingRequestForm.vue';
import InputsRequestForm from '../components/InputsRequestForm.vue';
import BuyingRequestForm from '../components/BuyingRequestForm.vue';

const {
  params: { request },
} = useRoute();
console.log(request);
type Request = 'buying' | 'selling' | 'akoko_sika' | 'inputs';
const requestName: Request = request as Request;
</script>
<template>
  <BreadCrumbsWrapper />
  <div class="router_page p-4">
    <h2 class="mb-4 text-[1.2rem] font-bold">Add Request</h2>

    <AkokoSikaRequestForm v-if="requestName == 'akoko_sika'" />
    <SellingRequestForm v-if="requestName == 'selling'" />
    <InputsRequestForm v-if="requestName == 'inputs'" />
    <BuyingRequestForm v-if="requestName == 'buying'" />
  </div>
</template>
