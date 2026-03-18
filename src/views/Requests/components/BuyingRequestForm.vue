<script setup lang="ts">
import { computed, reactive } from 'vue';
import '../requests.css';
import SubmitRequestBtn from './SubmitRequestBtn.vue';
import { useRequestStore } from '@/stores/request_store';
import { toast } from 'vue3-toastify';

const form = reactive({
  client_name: '',
  client_phone: '',
  product_name: '',
  product_price: '',
  product_total_weight: '',
  client_quantity: '',
  client_location: '',
  region: '',
  transaction: '',
  created_at: '',
  source: '',
  confirmed: '',
  delivered: '',
  comment: '',
});

const subTotal = computed(() => {
  const price = Number(form.product_price);
  const qty = Number(form.client_quantity);
  if (!price || !qty) return '';
  return String(price * qty);
});

const store = useRequestStore();
const { addToBuyingData } = store;

const resetForm = () => {
  Object.keys(form).forEach((key) => {
    form[key as keyof typeof form] = '';
  });
};

const handleSubmit = () => {
  const requiredFields: (keyof typeof form)[] = [
    'client_name',
    'client_phone',
    'product_name',
    'product_price',
    'product_total_weight',
    'client_quantity',
    'client_location',
    'region',
    'transaction',
    'created_at',
    'source',
    'confirmed',
    'delivered',
    'comment',
  ];
  const hasEmpty = requiredFields.some((key) => String(form[key]).trim() === '');
  if (hasEmpty || subTotal.value === '') {
    toast.error('Please fill all fields before submitting.');
    return;
  }

  addToBuyingData({
    client_name: form.client_name,
    client_phone: form.client_phone,
    product: {
      name: form.product_name,
      price: Number(form.product_price),
      total_weight: Number(form.product_total_weight),
      total: Number(subTotal.value),
    },
    client_quantity: Number(form.client_quantity),
    client_location: form.client_location,
    region: form.region,
    transaction: form.transaction,
    created_at: form.created_at,
    source: form.source,
    confirmed: form.confirmed as 'Yes' | 'No',
    delivered: form.delivered as 'Yes' | 'No',
    comment: form.comment,
  });

  resetForm();
};
</script>

<template>
  <form class="request_form" @submit.prevent="handleSubmit">
    <div class="input_group">
      <label for="client_name">Name</label>
      <input id="client_name" v-model="form.client_name" type="text" placeholder="Client name" />
    </div>
    <div class="input_group">
      <label for="client_phone">Phone</label>
      <input id="client_phone" v-model="form.client_phone" type="tel" placeholder="0241234567" />
    </div>
    <div class="input_group">
      <label for="product_name">Product Name</label>
      <input id="product_name" v-model="form.product_name" type="text" placeholder="Product name" />
    </div>
    <div class="input_group">
      <label for="product_price">Product Price</label>
      <input id="product_price" v-model="form.product_price" type="number" min="0" />
    </div>
    <div class="input_group">
      <label for="client_quantity">Quantity</label>
      <input id="client_quantity" v-model="form.client_quantity" type="number" min="0" />
    </div>
    <div class="input_group">
      <label for="product_total">Sub Total</label>
      <input id="product_total" :value="subTotal" type="number" readonly />
    </div>
    <div class="input_group">
      <label for="product_total_weight">Total (KG)</label>
      <input id="product_total_weight" v-model="form.product_total_weight" type="number" min="0" />
    </div>
    <div class="input_group">
      <label for="client_location">Location</label>
      <input
        id="client_location"
        v-model="form.client_location"
        type="text"
        placeholder="Location"
      />
    </div>
    <div class="input_group">
      <label for="region">Region</label>
      <input id="region" v-model="form.region" type="text" placeholder="Region" />
    </div>
    <div class="input_group">
      <label for="transaction">Payment</label>
      <select id="transaction" v-model="form.transaction">
        <option value="" disabled>Select</option>
        <option value="Cash">Cash</option>
        <option value="Mobile Money">Mobile Money</option>
        <option value="Bank Transfer">Bank Transfer</option>
      </select>
    </div>
    <div class="input_group">
      <label for="created_at">Requested At</label>
      <input id="created_at" v-model="form.created_at" type="datetime-local" />
    </div>
    <div class="input_group">
      <label for="source">Source</label>
      <input id="source" v-model="form.source" type="text" placeholder="Source" />
    </div>
    <div class="input_group">
      <label for="confirmed">Confirmed</label>
      <select id="confirmed" v-model="form.confirmed">
        <option value="" disabled>Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
    <div class="input_group">
      <label for="delivered">Delivered</label>
      <select id="delivered" v-model="form.delivered">
        <option value="" disabled>Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
    <div class="input_group input_group_full">
      <label for="comment">Remarks</label>
      <textarea id="comment" v-model="form.comment" rows="3" placeholder="Add remarks"></textarea>
    </div>
    <SubmitRequestBtn />
  </form>
</template>
