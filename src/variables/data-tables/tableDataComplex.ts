type RowObj = {
  name: string;
  status: string;
  date: string;
  progress: number;
};

const tableDataComplex: RowObj[] = [
  {
    name: 'Sistema de Gestión Hospitalaria',
    status: 'Aprobado',
    date: '02 Dic 2025',
    progress: 85,
  },
  {
    name: 'Plataforma E-learning Universidad',
    status: 'En Revisión',
    date: '01 Dic 2025',
    progress: 45,
  },
  {
    name: 'Aplicación de Control de Inventario',
    status: 'Aprobado',
    date: '30 Nov 2025',
    progress: 65,
  },
  {
    name: 'Plataforma de Recursos Humanos',
    status: 'Pausado',
    date: '29 Nov 2025',
    progress: 30,
  },
  {
    name: 'Sistema de Facturación Electrónica',
    status: 'Aprobado',
    date: '28 Nov 2025',
    progress: 90,
  },
];

export default tableDataComplex;
