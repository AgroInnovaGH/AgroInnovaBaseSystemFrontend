interface Route {
  label: string;
  to: string;
}

export const routes: Route[] = [
  {
    label: 'Home',
    to: '/admin/',
  },

  {
    label: 'Dashboard',
    to: '/admin/dashboard',
  },
];
