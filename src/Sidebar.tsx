import React, { PropsWithChildren } from 'react';

const Sidebar = (props: PropsWithChildren) => {
  return (
    <div className="sidebar">
      {props.children}
    </div>
  );
};

export default Sidebar;