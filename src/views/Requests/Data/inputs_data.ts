export interface InputRow {
  client_name: string;
  client_phone: string;
  product_name: string;
  client_quantity: number;
  client_location: string;
  region: string;
  transaction: string;
  created_at: string;
  source: string;
  confirmed: 'Yes' | 'No';
  delivered: 'Yes' | 'No';
  category_name: string;
  comment: string;
  acre_size: number;
  sms_status: 'Yes' | 'No';
}

export interface InputColumn {
  label: string;
  field: string;
  align?: string;
}

export const inputsHeaderData: InputColumn[] = [
  { label: 'Name', field: 'client_name' },
  { label: 'Phone', field: 'client_phone' },
  { label: 'ProductName', field: 'product_name' },
  { label: 'Input', field: 'category_name' },
  { label: 'Location', field: 'client_location' },
  { label: 'Quantity', field: 'client_quantity' },
  { label: 'Acre Size', field: 'acre_size' },
  { label: 'Region', field: 'region' },
  { label: 'Requested At', field: 'created_at' },
  { label: 'Source', field: 'source' },
  { label: 'SMS Status', field: 'sms_status' },
  { label: 'Confirmed', field: 'confirmed' },
  { label: 'Delivered', field: 'delivered' },
  { label: 'Remarks', field: 'comment' },
  { label: 'Actions', field: 'actions', align: 'center' },
];

export const tableRows: InputRow[] = [
  {
    client_name: 'Ama Mensah',
    client_phone: '0244001122',
    product_name: 'Rice (25kg)',
    acre_size: 2,
    sms_status: 'Yes',
    category_name: 'Rice',
    client_quantity: 2,
    client_location: 'Madina',
    region: 'Greater Accra',
    transaction: 'Paid',
    created_at: '2026-03-15 09:14',
    source: 'WhatsApp',
    confirmed: 'Yes',
    delivered: 'No',
    comment: 'Deliver on Friday',
  },
  {
    client_name: 'Kofi Mensah',
    client_phone: '0207788990',
    acre_size: 2,
    sms_status: 'Yes',
    product_name: 'Millet (15kg)',
    category_name: 'Millet',
    client_quantity: 1,
    client_location: 'Accra New Town',
    region: 'Greater Accra',
    transaction: 'No',
    created_at: '2026-03-15 09:14',
    source: 'Facebook',
    confirmed: 'Yes',
    delivered: 'Yes',
    comment: 'Deliver on Saturday',
  },
  {
    client_name: 'Yaw Owusu',
    client_phone: '0207788990',
    acre_size: 2,
    sms_status: 'Yes',
    product_name: 'Beans (10kg)',
    category_name: 'Beans',
    client_quantity: 1,
    client_location: 'Kumasi',
    region: 'Ashanti',
    transaction: 'Pending',
    created_at: '2026-03-14 16:42',
    source: 'Call',
    confirmed: 'No',
    delivered: 'No',
    comment: 'Call back in the evening',
  },
  {
    client_name: 'Efua Boateng',
    client_phone: '0551102233',
    acre_size: 2,
    sms_status: 'Yes',
    product_name: 'Maize (50kg)',
    category_name: 'Maize',
    client_quantity: 1,
    client_location: 'Cape Coast',
    region: 'Central',
    transaction: 'Paid',
    created_at: '2026-03-13 11:05',
    source: 'Web',
    confirmed: 'Yes',
    delivered: 'Yes',
    comment: 'Delivered to shop',
  },
];
