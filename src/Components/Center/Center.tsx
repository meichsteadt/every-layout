import React, { ReactNode } from 'react';
import styles from "./Center.module.css";

interface Props {
  andText: boolean;
  children: ReactNode;
  gutters: string;
  intrinsic: boolean;
  max: string;
}

const Center = (props: Props) => {
  const style = {
      maxInlineSize: props.max, 
      paddingInlineStart: props.gutters, 
      paddingInlineEnd: props.gutters,
      textAlign: (props.andText ? "center" : "") as "center",
    };

  const classNames = `
    ${styles.center}
    ${props.intrinsic ? styles.intrinsic : ""}
  `

  return (
    <div className={classNames} style={style}>
      {props.children}
    </div>
  );
};

Center.defaultProps = {
  andText: false,
  children: null,
  gutters: "0",
  intrinsic: false,
  max: "var(--measure)",
}

export default Center;