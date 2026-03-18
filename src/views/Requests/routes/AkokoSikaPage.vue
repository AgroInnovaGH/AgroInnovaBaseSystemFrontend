<script setup lang="ts">
import { ref } from 'vue';
import BreadCrumbsWrapper from '@/components/breadcrumbs/BreadCrumbsWrapper.vue';
import { akokoSikaHeaderData, type AkokoSikaColumn } from '../Data/akoko_sika_data';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext';
import MultiSelect from 'primevue/multiselect';
import Button from 'primevue/button';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import { FilterMatchMode } from '@primevue/core/api';
import { IconSearch, IconExternalLink, IconEye, IconTrash } from '@tabler/icons-vue';
import AddRequestBtn from '../components/AddRequestBtn.vue';
import '../requests.css';
import { useRequestStore } from '@/stores/request_store';
import { storeToRefs } from 'pinia';
const store = useRequestStore();
const { akokoSikaData } = storeToRefs(store);
const { removeFromAkokoSikaData } = store;

const dt = ref();
const numberOfRowsToShow = 10;
const selectedColumns = ref<AkokoSikaColumn[]>(akokoSikaHeaderData);

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

const onColumnToggle = (val: AkokoSikaColumn[]) => {
  selectedColumns.value = akokoSikaHeaderData.filter((col) => val.includes(col));
};

const exportCSV = () => {
  dt.value.exportCSV();
};

const deleteRequest = (clientPhone: string) => {
  const rowIndex = store.akokoSikaData.findIndex((row) => row.client_phone === clientPhone);
  if (rowIndex === -1) return;
  removeFromAkokoSikaData(rowIndex);
};

const getSeverity = (
  value: string,
): 'success' | 'danger' | 'warn' | 'secondary' | 'info' | undefined => {
  switch (value) {
    case 'Yes':
    case 'Paid':
      return 'success';
    case 'No':
      return 'danger';
    case 'Pending':
      return 'warn';
    default:
      return undefined;
  }
};
</script>

<template>
  <BreadCrumbsWrapper />

  <div class="requests_container">
    <div class="table_card">
      <AddRequestBtn />

      <div
        class="table_header_container pr-4 border-b-gray-300 flex items-center justify-end gap-4"
      >
        <div class="flex flex-wrap items-center gap-3">
          <Button
            type="button"
            @click="exportCSV"
            severity="secondary"
            size="small"
            class="export_btn"
            aria-label="Export to CSV"
          >
            <template #icon>
              <IconExternalLink :size="18" class="mr-2" />
            </template>
            Export
          </Button>

          <MultiSelect
            v-model="selectedColumns"
            :options="akokoSikaHeaderData"
            optionLabel="label"
            placeholder="Select Columns"
            class="column_toggler"
            @change="onColumnToggle($event.value)"
            :maxSelectedLabels="3"
            aria-label="Select Columns"
          />

          <IconField iconPosition="left" class="search_field">
            <InputIcon>
              <IconSearch :size="18" />
            </InputIcon>
            <InputText
              v-model="filters['global'].value"
              placeholder="Search anything"
              size="small"
              class="search_input"
            />
          </IconField>
        </div>
      </div>

      <div class="datatable_wrapper">
        <DataTable
          ref="dt"
          :value="akokoSikaData"
          v-model:filters="filters"
          paginator
          :rows="numberOfRowsToShow"
          :rowsPerPageOptions="[5, 10, 20, 50]"
          removableSort
          stripedRows
          showGridlines
          scrollable
          scrollHeight="calc(100vh - 180px)"
          tableStyle="min-width: 130rem"
          class="p-datatable-sm custom_table"
          dataKey="client_phone"
          :globalFilterFields="
            akokoSikaHeaderData.filter((col) => col.field).map((col) => col.field!)
          "
        >
          <Column
            v-for="col of selectedColumns"
            :key="col.field || col.value"
            :field="col.field"
            :header="col.label"
            sortable
            :headerStyle="{ borderBottom: '2px solid #e5e7eb' }"
          >
            <template #body="{ data, field }">
              <template v-if="field === 'confirmed' || field === 'is_lma'">
                <div class="flex justify-center">
                  <Tag
                    :value="data[field as keyof typeof data]"
                    :severity="getSeverity(data[field as keyof typeof data] as string)"
                    class="status_tag"
                  />
                </div>
              </template>
              <template v-else-if="field === 'payment_means'">
                <div class="flex justify-center">
                  <Tag
                    :value="data[field as keyof typeof data]"
                    :severity="getSeverity(data[field as keyof typeof data] as string)"
                    rounded
                    class="status_tag"
                  />
                </div>
              </template>
              <template v-else-if="field === 'client_phone'">
                <span class="phone_number">{{ data[field as keyof typeof data] }}</span>
              </template>
              <template v-else-if="!field">
                <div class="flex justify-center gap-2">
                  <Button
                    icon="pi pi-eye"
                    severity="secondary"
                    text
                    rounded
                    size="small"
                    aria-label="View Details"
                  >
                    <template #icon>
                      <IconEye :size="18" />
                    </template>
                  </Button>
                  <Button
                    @click="deleteRequest(data.client_phone)"
                    icon="pi pi-trash"
                    severity="danger"
                    text
                    rounded
                    size="small"
                    aria-label="Delete Request"
                  >
                    <template #icon>
                      <IconTrash :size="18" />
                    </template>
                  </Button>
                </div>
              </template>
              <template v-else>
                {{
                  typeof field === 'string' && field.includes('.')
                    ? (field.split('.').reduce((acc: any, part: string) => acc?.[part], data) ?? '')
                    : (data[field as keyof typeof data] ?? '')
                }}
              </template>
            </template>
          </Column>

          <template #empty>
            <div class="py-10 text-center">
              <p class="text-gray-400">No requests found matching your records.</p>
            </div>
          </template>
        </DataTable>
      </div>
    </div>
  </div>
</template>
