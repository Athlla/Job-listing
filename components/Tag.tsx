import React, { ReactNode, useContext } from 'react';
import { FilterContext } from '../context/FilterContext';

interface Props {
  children: string;
  close?: boolean;
}

const Tag = ({ children, close }: Props) => {
  const { add, remove } = useContext(FilterContext);

  return (
    <div className="flex">
      <div
        className="p-2 font-bold rounded-md rounded-r-none cursor-pointer select-none lg:text-xs hover:text-light-grayish-cyan bg-light-grayish-cyan-bg text-desaturated-dark-cyan hover:bg-desaturated-dark-cyan"
        onClick={() => add(children)}
      >
        {children}
      </div>
      {close && (
        <div
          className="flex items-center justify-center w-8 rounded-r-lg bg-desaturated-dark-cyan hover:bg-very-dark-grayish-cyan"
          onClick={() => remove(children)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 fill-current text-light-grayish-cyan"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Tag;
