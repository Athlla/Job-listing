import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Tag = ({ children }: Props) => {
  return (
    <div className="p-2 font-bold rounded-md cursor-pointer select-none lg:text-xs hover:text-light-grayish-cyan bg-light-grayish-cyan-bg text-desaturated-dark-cyan hover:bg-desaturated-dark-cyan">
      {children}
    </div>
  );
};

export default Tag;
