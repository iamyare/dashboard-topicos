type RowObj = {
  name: [string, boolean];
  progress: string;
  quantity: number;
  date: string;
  info: boolean;
};

const tableDataCheck: RowObj[] = [
  {
    name: ['Sitio Web Corporativo', true],
    quantity: 15,
    progress: 'Frontend',
    date: '02 Dic 2025',
    info: true,
  },
  {
    name: ['Blog Personal', true],
    quantity: 8,
    progress: 'Backend',
    date: '01 Dic 2025',
    info: true,
  },
  {
    name: ['API REST', true],
    quantity: 12,
    progress: 'Testing',
    date: '30 Nov 2025',
    info: true,
  },
  {
    name: ['Plataforma E-learning', false],
    quantity: 20,
    progress: 'Diseño UI',
    date: '29 Nov 2025',
    info: true,
  },
  {
    name: ['Sistema de Reservas', true],
    quantity: 10,
    progress: 'DevOps',
    date: '28 Nov 2025',
    info: false,
  },
];

export default tableDataCheck;
