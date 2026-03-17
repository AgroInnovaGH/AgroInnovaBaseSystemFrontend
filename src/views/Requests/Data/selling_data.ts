export interface SellingProduct {
  name: string;
  price: number;
  total_weight: number;
  total: number;
}

export interface SellingRow {
  client_name: string;
  client_phone: string;
  product: SellingProduct;
  client_quantity: number;
  client_location: string;
  region: string;
  created_at: string;
  source: string;
  confirmed: 'Yes' | 'No';
  delivered: 'Yes' | 'No';
  comment: string;
}

export interface SellingColumn {
  label: string;
  field: string;
}

export const sellingHeaderData: SellingColumn[] = [
  { label: 'Name', field: 'client_name' },
  { label: 'Phone', field: 'client_phone' },
  { label: 'ProductName', field: 'product.name' },
  { label: 'ProductPrice', field: 'product.price' },
  { label: 'Quantity', field: 'client_quantity' },
  { label: 'Total(KG)', field: 'product.total_weight' },
  { label: 'Location', field: 'client_location' },
  { label: 'Region', field: 'region' },
  { label: 'Requested At', field: 'created_at' },
  { label: 'Source', field: 'source' },
  { label: 'Confirmed', field: 'confirmed' },
  { label: 'Delivered', field: 'delivered' },
  { label: 'Remarks', field: 'comment' },
];

export const tableRows: SellingRow[] = [
  {
    client_name: 'Ama Mensah',
    client_phone: '0244001122',
    product: { name: 'Rice (25kg)', price: 380, total_weight: 25, total: 760 },
    client_quantity: 2,
    client_location: 'Madina',
    region: 'Greater Accra',
    created_at: '2026-03-15 09:14',
    source: 'WhatsApp',
    confirmed: 'Yes',
    delivered: 'No',
    comment: 'Deliver on Friday',
  },
  {
    client_name: 'Kofi Mensah',
    client_phone: '0207788990',
    product: { name: 'Millet (15kg)', price: 300, total_weight: 15, total: 600 },
    client_quantity: 1,
    client_location: 'Accra New Town',
    region: 'Greater Accra',
    created_at: '2026-03-15 09:14',
    source: 'Facebook',
    confirmed: 'Yes',
    delivered: 'Yes',
    comment: 'Deliver on Saturday',
  },
  {
    client_name: 'Yaw Owusu',
    client_phone: '0207788990',
    product: { name: 'Beans (10kg)', price: 120, total_weight: 10, total: 120 },
    client_quantity: 1,
    client_location: 'Kumasi',
    region: 'Ashanti',
    created_at: '2026-03-14 16:42',
    source: 'Call',
    confirmed: 'No',
    delivered: 'No',
    comment: 'Call back in the evening',
  },
  {
    client_name: 'Efua Boateng',
    client_phone: '0551102233',
    product: { name: 'Maize (50kg)', price: 420, total_weight: 50, total: 420 },
    client_quantity: 1,
    client_location: 'Cape Coast',
    region: 'Central',
    created_at: '2026-03-13 11:05',
    source: 'Web',
    confirmed: 'Yes',
    delivered: 'Yes',
    comment: 'Delivered to shop',
  },
];
