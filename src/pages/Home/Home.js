import React, { useEffect } from 'react';
import HomeCarousel from '../../Components/HomeCarousel/HomeCarousel';
import { useDispatch } from 'react-redux';
import { getAllMovieApi } from '../../redux/slices/phimSlice';
import { quanLyPhimServ } from '../../services/quanLyPhim';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // bắn phương thức được tạo bởi thunk
    dispatch(getAllMovieApi());
    // quanLyPhimServ
    //   .getAllMovie()
    //   .then((res) => {
    //     console.log(res);
    //     dispatch()
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);
  return (
    <div>
      <HomeCarousel />
    </div>
  );
};

export default Home;
