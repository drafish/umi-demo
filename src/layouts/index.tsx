import React from 'react';
import classNames from 'classnames';
import styles from './index.less';

export default (props: any) => {
  return (
    <div className={classNames(props.className, styles.layout)}>
      {props.children}
    </div>
  );
};
