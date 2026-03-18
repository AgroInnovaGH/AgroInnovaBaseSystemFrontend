import { tableRows as buyingRows, type BuyingRow } from '@/views/Requests/Data/buying_data';
import { tableRows as sellingRows, type SellingRow } from '@/views/Requests/Data/selling_data';
import { tableRows as inputsRows, type InputRow } from '@/views/Requests/Data/inputs_data';
import {
  tableRows as akokoSikaRow,
  type AkokoSikaRow,
} from '@/views/Requests/Data/akoko_sika_data';
import { defineStore } from 'pinia';
import { toast } from 'vue3-toastify';

export const useRequestStore = defineStore('request_store', {
  state: () => ({
    buyingData: buyingRows,
    sellingData: sellingRows,
    inputsData: inputsRows,
    akokoSikaData: akokoSikaRow,
  }),

  actions: {
    addToAkokoSikaData(payload: AkokoSikaRow) {
      this.akokoSikaData.push(payload);
      toast.success('Akoko Sika Requests has been updated');
    },
    addToInputsData(payload: InputRow) {
      this.inputsData.push(payload);
      toast.success('Inputs Requests  has been updated');
    },
    addToSellingData(payload: SellingRow) {
      this.sellingData.push(payload);
      toast.success('Selling Request has been updated');
    },
    addToBuyingData(payload: BuyingRow) {
      this.buyingData.push(payload);
      toast.success('Buying Requests has been updated');
    },

    removeFromAkokoSikaData(index: number) {
      this.akokoSikaData.splice(index, 1);
      toast.success('Akoko Sika Request has been updated');
    },
    removeFromInputsData(index: number) {
      this.inputsData.splice(index, 1);
      toast.success('Inputs Requests  has been updated');
    },
    removeFromSellingData(index: number) {
      this.sellingData.slice(index, 1);
      toast.success('Selling Request has been updated');
    },
    removeFromBuyingData(index: number) {
      this.buyingData.splice(index, 1);
      toast.success('Buying Requests has been updated');
    },
  },
});
