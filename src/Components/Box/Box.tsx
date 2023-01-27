import React, { ReactNode } from 'react';
import styles from './Box.module.css';

interface Props {
  children: ReactNode;
  padding: string;
  borderWidth: string;
  invert: boolean;
}

const Box = (props: Props) => {
  const classNames = `
    ${styles.box}
    ${props.invert ? styles.invert : ''}
  `
  const style = {
    padding: props.padding, 
    borderWidth: props.borderWidth
  }

  return (
    <div className={classNames} style={style}>
      {props.children}
    </div>
  );
};

Box.defaultProps = {
  children: null,
  padding: "var(--s1)",
  borderWidth: "var(--border-thin)",
  invert: false
}

export default Box;