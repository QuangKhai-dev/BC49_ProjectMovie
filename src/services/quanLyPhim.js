import { https } from './config';

export const quanLyPhimServ = {
  getAllBanner: () => {
    return https.get('/api/QuanLyPhim/LayDanhSachBanner');
  },
};
