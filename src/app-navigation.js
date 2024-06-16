export const navigation = [
  {
    text: 'Inicio',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Secretarias',
    path: '/employee',
    icon: 'product'
  },
  {
    text: 'Universidad',
    icon: 'globe',
    items: [
      {
        text: 'Región',
        path: '/region'
      },
      {
        text: 'Facultad',
        path: '/faculty'
      },
      {
        text: 'Carrera',
        path: '/career'
      }
    ]
  },
  {
    text: 'Estudiantes',
    path: '/students',
    icon: 'group'
  },
  {
    text: 'Trámites',
    path: '/formalities',
    icon: 'textdocument'
  },
  {
    text: 'Historial',
    path: '/history',
    icon: 'clock'
  },
  {
    text: 'Configuraciones',
    icon: 'preferences',
    items: [
      {
        text: 'Perfil',
        path: '/profile'
      }
    ]
  }
];
