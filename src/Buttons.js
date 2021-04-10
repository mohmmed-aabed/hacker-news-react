import React from 'react';
import { useGlobalContext } from './context';

const Buttons = () => {
  const { handlePage, page, isLoading, numberOfPages } = useGlobalContext();

  return (
    <div className='btn-container'>
      <button
        disabled={isLoading}
        onClick={() => {
          handlePage('dec');
        }}
      >
        prev
      </button>
      <p>
        {page + 1} of {numberOfPages}
      </p>
      <button
        disabled={isLoading}
        onClick={() => {
          handlePage('inc');
        }}
      >
        prev
      </button>
    </div>
  );
};

export default Buttons;
