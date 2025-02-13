type RowObj = {
  name: string;
  status: string;
  date: string;
  progress: number;
};

const tableDataComplex: RowObj[] = [
  {
    name: 'E-commerce Platform',
    status: 'Aprobado',
    date: '02 Dic 2025',
    progress: 75.5,
  },
  {
    name: 'Sistema de Gestión CRM',
    status: 'En Revisión',
    date: '01 Dic 2025',
    progress: 35.4,
  },
  {
    name: 'Aplicación Móvil',
    status: 'Aprobado',
    date: '30 Nov 2025',
    progress: 25,
  },
  {
    name: 'Portal Educativo',
    status: 'Pausado',
    date: '29 Nov 2025',
    progress: 85.7,
  },
  {
    name: 'Dashboard Analytics',
    status: 'Aprobado',
    date: '28 Nov 2025',
    progress: 90,
  },
];

export default tableDataComplex;
