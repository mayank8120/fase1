

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',

   
  },
  

  {
    
    _tag: 'CSidebarNavDropdown',
    name: 'Management',
    route: '/management',
    className: 'c-show',
     
   
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Properties',
        to: '/management/properties',
      },
      {
        _tag: 'CSidebarNavItem',
          name: 'Management Companies',
          to: '/management/managementcompanies',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Users',
        to: '/management/appusers',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Staff Roles',
        to: '/management/staffrules',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Station Inventory',
        to: '/management/stationinventory',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Station Installation',
        to: '/management/stationinstallation',
      },       
      

     
      
    ],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Statistics & Reports',
    route: '/statistics-reports',
    
    
    
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Summary',
        to: '/statistics-reports/summary',
    
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Charging Stations',
        to: '/statistics-reports/chargingstations',
    
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Charging Sessions',
        to: '/statistics-reports/chargingsessions',
    
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Charging Revenue',
        to: '/statistics-reports/chargingrevenue',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Energy Consumption',
        to: '/statistics-reports/energyconsumption',
      },
     
     
    ],
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Tickets',
    to: '/tickets/tickets',
  },

  
  
  
]

export default _nav
