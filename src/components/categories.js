import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();
  const checkinStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <section>
      <p>{status}</p>
      <button type="submit" onClick={checkinStatus}>Check Status</button>
    </section>
  );
};

export default Categories;
