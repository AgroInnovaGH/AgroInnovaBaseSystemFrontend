<script setup lang="ts">
import { reactive } from 'vue';
import '../requests.css';
import SubmitRequestBtn from './SubmitRequestBtn.vue';
import { useRequestStore } from '@/stores/request_store';
import { toast } from 'vue3-toastify';

const form = reactive({
  client_name: '',
  client_phone: '',
  product_name: '',
  category_name: '',
  client_location: '',
  client_quantity: '',
  acre_size: '',
  region: '',
  created_at: '',
  source: '',
  sms_status: '',
  confirmed: '',
  delivered: '',
  comment: '',
});

const requestStore = useRequestStore();

const resetForm = () => {
  Object.keys(form).forEach((key) => {
    form[key as keyof typeof form] = '';
  });
};

const handleSubmit = () => {
  const hasEmpty = Object.values(form).some((value) => String(value).trim() === '');
  if (hasEmpty) {
    toast.error('Please fill all fields before submitting.');
    return;
  }

  requestStore.addToInputsData({
    client_name: form.client_name,
    client_phone: form.client_phone,
    product_name: form.product_name,
    client_quantity: Number(form.client_quantity),
    client_location: form.client_location,
    region: form.region,
    transaction: 'Pending',
    created_at: form.created_at,
    source: form.source,
    confirmed: form.confirmed as 'Yes' | 'No',
    delivered: form.delivered as 'Yes' | 'No',
    category_name: form.category_name,
    comment: form.comment,
    acre_size: Number(form.acre_size),
    sms_status: form.sms_status as 'Yes' | 'No',
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
      <label for="category_name">Input</label>
      <input
        id="category_name"
        v-model="form.category_name"
        type="text"
        placeholder="Input category"
      />
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
      <label for="client_quantity">Quantity</label>
      <input id="client_quantity" v-model="form.client_quantity" type="number" min="0" />
    </div>
    <div class="input_group">
      <label for="acre_size">Acre Size</label>
      <input id="acre_size" v-model="form.acre_size" type="number" min="0" />
    </div>
    <div class="input_group">
      <label for="region">Region</label>
      <input id="region" v-model="form.region" type="text" placeholder="Region" />
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
      <label for="sms_status">SMS Status</label>
      <select id="sms_status" v-model="form.sms_status">
        <option value="" disabled>Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
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
