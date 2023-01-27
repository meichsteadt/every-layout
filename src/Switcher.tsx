import React, { PropsWithChildren } from 'react';

const Switcher = (props: PropsWithChildren) => {
  return (
    <div className="switcher">
      {props.children}
    </div>
  );
};

export default Switcher;