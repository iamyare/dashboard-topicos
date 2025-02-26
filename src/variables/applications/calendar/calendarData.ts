type RowObj = {
  title: string;
  borderColor: string;
  start: string;
  end: string;
  backgroundColor: string;
  className: string;
};

export const calendarData: RowObj[] = [
  {
    title: 'Meeting with a client',
    borderColor: 'transparent',
    start: '2025-02-28',
    end: '2025-03-02',
    backgroundColor: '#7551FF',
    className: 'info',
  },

  {
    title: 'Webinar - Marketing for Developers',
    borderColor: 'transparent',
    start: '2025-03-04',
    end: '2025-03-06',
    backgroundColor: '#01B574',
    className: 'success',
  },

  {
    title: 'Design UI and check sales on PayPal',
    borderColor: 'transparent',
    start: '2025-03-08',
    end: '2025-03-10',
    backgroundColor: '#FFB547',
    className: 'warning',
  },

  {
    title: 'Configure table for Daily tasks on Notion',
    borderColor: 'transparent',
    start: '2025-03-12',
    end: '2025-03-14',
    backgroundColor: '#7551FF',
    className: 'error',
  },
];
