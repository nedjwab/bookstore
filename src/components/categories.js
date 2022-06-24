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
    <section className="status-container">
      <p className="status-text">{status}</p>
      <button type="submit" className="status-button" onClick={checkinStatus}>Check Status</button>
    </section>
  );
};

export default Categories;
