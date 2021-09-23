import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Tag = ({ children }: Props) => {
  return (
    <div className="p-2 text-sm font-bold border rounded-md cursor-pointer bg-light-grayish-cyan-bg text-desaturated-dark-cyan">
      {children}
    </div>
  );
};

export default Tag;
