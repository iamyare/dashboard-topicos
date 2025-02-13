type RowObj = {
  name: [string, boolean];
  progress: string;
  quantity: number;
  date: string;
  info: boolean;
};

const tableDataCheck: RowObj[] = [
  {
    name: ['Landing Page Restaurante', true],
    quantity: 5,
    progress: 'Diseño UI',
    date: '02 Dic 2025',
    info: true,
  },
  {
    name: ['Sistema de Administración', false],
    quantity: 12,
    progress: 'Desarrollo Frontend',
    date: '01 Dic 2025',
    info: true,
  },
  {
    name: ['API de Pagos', true],
    quantity: 8,
    progress: 'Desarrollo Backend',
    date: '30 Nov 2025',
    info: true,
  },
  {
    name: ['Portal de Noticias', true],
    quantity: 6,
    progress: 'Base de Datos',
    date: '29 Nov 2025',
    info: true,
  },
  {
    name: ['App de Delivery', true],
    quantity: 15,
    progress: 'Testing',
    date: '28 Nov 2025',
    info: false,
  },
];

export default tableDataCheck;
