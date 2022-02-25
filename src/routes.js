import React from 'react';

/*new routes */
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Appusers = React.lazy(() => import('./views/management/appusers/Appusers'));
const Managementcompanies = React.lazy(() => import('./views/management/managementcompanies/Managementcompanies'));
const Properties = React.lazy(() => import('./views/management/properties/Properties'));
const Staffrules = React.lazy(() => import('./views/management/staffrules/Staffrules'));
const Abcapartments = React.lazy(() => import('./views/management/abcapartments/Abcapartments'));
const Stationmanagements = React.lazy(() => import('./views/management/stationmanagements/Stationmanagements'));
const Pricesettings = React.lazy(() => import('./views/management/pricesettings/Pricesettings'));
const Managerole = React.lazy(() => import('./views/management/managerole/Managerole'));
const Newinstallation = React.lazy(() => import('./views/management/newinstallation/Newinstallation'));
const Stationinstallation = React.lazy(() => import('./views/management/stationinstallation/Stationinstallation'));
const Stationinventory = React.lazy(() => import('./views/management/stationinventory/Stationinventory'));
const Chargingrevenue = React.lazy(() => import('./views/statistics-reports/chargingrevenue/Chargingrevenue'));
const Chargingsessions = React.lazy(() => import('./views/statistics-reports/chargingsessions/Chargingsessions'));
const Chargingstations = React.lazy(() => import('./views/statistics-reports/chargingstations/Chargingstations'));
const Summary = React.lazy(() => import('./views/statistics-reports/summary/Summary'));
const Energyconsumption = React.lazy(() => import('./views/statistics-reports/energyconsumption/Energyconsumption'));
const Tickets = React.lazy(() => import('./views/tickets/Tickets'));
const Login = React.lazy(() => import('./views/login/Login'));
const Forgot = React.lazy(() => import('./views/forgot/Forgot'));
const Createnew = React.lazy(() => import('./views/create-new/Createnew'));
const Profile = React.lazy(() => import('./views/profile/Profile'));


/*end routes */
const Frankcompany = React.lazy(() => import('./views/management-company/frankcompany/Frankcompany'));
const Usercredentails = React.lazy(() => import('./views/management-company/usercredentails/Usercredentails'));
const Addcompany = React.lazy(() => import('./views/addcompany/Addcompany'));
const Addproperty = React.lazy(() => import('./views/addproperty/Addproperty'));
const Managecompany = React.lazy(() => import('./views/management-company/managecompany/Managecompany'));
const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));




const routes = [
  /*new routes */
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/management/appusers', name: 'appusers', component: Appusers },
  { path: '/management/managementcompanies', name: 'managementcompanies', component: Managementcompanies },
  { path: '/management/properties', name: 'properties', component: Properties },
  { path: '/management/staffrules', name: 'staffrules', component: Staffrules },
  { path: '/management/abcapartments', name: 'staffrules', component: Abcapartments },
  { path: '/management/stationmanagements', name: 'stationmanagements', component: Stationmanagements },
  { path: '/management/pricesettings', name: 'pricesettings', component: Pricesettings },
  { path: '/management/newinstallation', name: 'newinstallation', component: Newinstallation },
  { path: '/management/managerole', name: 'managerole', component: Managerole },
  { path: '/management/stationinstallation', name: 'stationinstallation', component: Stationinstallation },
  { path: '/management/stationinventory', name: 'stationinventory', component: Stationinventory },
  { path: '/statistics-reports/chargingrevenue', name: 'chargingrevenue', component: Chargingrevenue },
  { path: '/statistics-reports/chargingsessions', name: 'chargingsessions', component: Chargingsessions },
  { path: '/statistics-reports/chargingstations', name: 'chargingstations', component: Chargingstations },
  { path: '/statistics-reports/energyconsumption', name: 'energyconsumption', component: Energyconsumption },
  { path: '/tickets/tickets', name: 'tickets', component: Tickets },
  { path: '/statistics-reports/summary', name: 'summary', component: Summary },
  { path: '/login', name: 'login', component: Login },
  { path: '/forgot', name: 'forgot', component: Forgot },
  { path: '/create-new', name: 'Createnew', component: Createnew },
  { path: '/profile', name: 'profile', component: Profile },



  /*end routes */
  { path: '/management-company/frankcompany', name: 'Frankcompany', component: Frankcompany },
  { path: '/management-company/usercredentails', name: 'Usercredentails', component: Usercredentails },
  { path: '/addcompany', name: 'add company', component: Addcompany },
  { path: '/addproperty', name: 'Addproperty', component: Addproperty },
  { path: '/management-company/managecompany', name: 'managecompany', component: Managecompany },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },

];

export default routes;
