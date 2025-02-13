type RowObj = {
  name: string;
  status: string;
  date: string;
  progress: number;
};

const tableDataComplex: RowObj[] = [
  {
    name: 'Marketplace de Productos Locales',
    status: 'En Revisión',
    date: '02 Dic 2025',
    progress: 78,
  },
  {
    name: 'Sistema de Gestión de Citas',
    status: 'Aprobado',
    date: '01 Dic 2025',
    progress: 92,
  },
  {
    name: 'Dashboard Análisis de Datos',
    status: 'Pausado',
    date: '30 Nov 2025',
    progress: 45,
  },
  {
    name: 'Aplicación de Seguimiento de Entregas',
    status: 'Aprobado',
    date: '29 Nov 2025',
    progress: 89,
  },
  {
    name: 'Portal de Gestión de Empleados',
    status: 'En Revisión',
    date: '28 Nov 2025',
    progress: 64,
  },
  {
    name: 'Sistema de Reservas Online',
    status: 'Aprobado',
    date: '27 Nov 2025',
    progress: 95,
  },
  {
    name: 'CRM para PyMES',
    status: 'Pausado',
    date: '26 Nov 2025',
    progress: 35,
  },
  {
    name: 'App de Gestión de Tareas',
    status: 'En Revisión',
    date: '25 Nov 2025',
    progress: 72,
  },
];

export default tableDataComplex;
