<script setup lang="ts">
import { reactive } from 'vue';
import '../requests.css';
import SubmitRequestBtn from './SubmitRequestBtn.vue';
import { useRequestStore } from '@/stores/request_store';
import { toast } from 'vue3-toastify';

const form = reactive({
  client_name: '',
  client_phone: '',
  age: '',
  sex: '',
  region: '',
  ghana_card: '',
  district: '',
  community: '',
  farm_type: '',
  product_name: '',
  payment_means: '',
  registered_on: '',
  confirmed: '',
  is_lma: '',
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
  const ghanaCardPattern = /^GHA-\d{9}-\d$/;
  if (!ghanaCardPattern.test(form.ghana_card)) {
    toast.error('Ghana Card must match format: GHA-123456789-0');
    return;
  }

  requestStore.addToAkokoSikaData({
    client_name: form.client_name,
    client_phone: form.client_phone,
    age: form.age,
    sex: form.sex,
    region: form.region,
    ghana_card: form.ghana_card,
    district: form.district,
    community: form.community,
    farm_type: form.farm_type,
    product_name: form.product_name,
    payment_means: form.payment_means,
    registered_on: form.registered_on,
    confirmed: form.confirmed as 'Yes' | 'No',
    is_lma: form.is_lma as 'Yes' | 'No',
    comment: form.comment,
  });

  resetForm();
};

const formatGhanaCard = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  const first = digits.slice(0, 9);
  const last = digits.slice(9, 10);
  if (!digits.length) return '';
  return last ? `GHA-${first}-${last}` : `GHA-${first}`;
};

const handleGhanaCardInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  form.ghana_card = formatGhanaCard(target.value);
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
      <input
        id="client_phone"
        maxlength="10"
        minlength="10"
        v-model="form.client_phone"
        type="tel"
        placeholder="0241234567"
      />
    </div>
    <div class="input_group">
      <label for="region">Region</label>
      <input id="region" v-model="form.region" type="text" placeholder="Region" />
    </div>
    <div class="input_group">
      <label for="age">Age</label>
      <input id="age" v-model="form.age" type="number" min="0" placeholder="Age" />
    </div>
    <div class="input_group">
      <label for="sex">Sex</label>
      <select id="sex" class="sex_select" v-model="form.sex">
        <option value="" disabled>Select Sex</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
    <div class="input_group">
      <label for="ghana_card">Ghana Card</label>
      <input
        id="ghana_card"
        v-model="form.ghana_card"
        type="text"
        placeholder="GHA-000000000-0 , Only numbers required"
        inputmode="numeric"
        maxlength="15"
        @input="handleGhanaCardInput"
      />
    </div>
    <div class="input_group">
      <label for="district">District</label>
      <input id="district" v-model="form.district" type="text" placeholder="District" />
    </div>
    <div class="input_group">
      <label for="community">Community</label>
      <input id="community" v-model="form.community" type="text" placeholder="Community" />
    </div>
    <div class="input_group">
      <label for="farm_type">Farm Type</label>
      <input id="farm_type" v-model="form.farm_type" type="text" placeholder="Farm type" />
    </div>
    <div class="input_group">
      <label for="product_name">Package</label>
      <input id="product_name" v-model="form.product_name" type="text" placeholder="Product name" />
    </div>
    <div class="input_group">
      <label for="payment_means">Payment Means</label>
      <select id="payment_means" v-model="form.payment_means">
        <option value="" disabled>Mode of Payment</option>
        <option value="Cash">Cash</option>
        <option value="Mobile Money">Mobile Money</option>
        <option value="Bank Transfer">Bank Transfer</option>
      </select>
    </div>
    <div class="input_group">
      <label for="registered_on">Registered On</label>
      <input id="registered_on" v-model="form.registered_on" type="date" />
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
      <label for="is_lma">LMA</label>
      <select id="is_lma" v-model="form.is_lma">
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
