import React, { useEffect, useRef, useState } from 'react';

import styles from './styles.module.scss';
import { classNames } from '@/app/utils';
import { ArrowIcon } from '@/app/assets/icons/arrow-icon';

interface Props {
  text: string;
}

export const CollapsedText: React.FC<Props> = (props) => {
  const { text } = props;
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>();
  const [show, setShow] = useState(false);

  useEffect(() => {
    // @ts-ignore
    if (ref.current.offsetHeight <= 57) {
      setExpanded(true);
    }
    setShow(true);
  }, []);

  return (
    <div
      className={classNames(
        styles.block,
        // @ts-ignore
        expanded && styles.blockExpanded,
        show && styles.blockShow
      )}
    >
      <div
        // @ts-ignore
        ref={ref}
        className={styles.blockDescription}
        dangerouslySetInnerHTML={{ __html: text }}
      />
      {!expanded && (
        <div className={styles.blockMore} onClick={() => setExpanded(true)}>
         <span>Развернуть</span>
         <ArrowIcon/>
        </div>
      )}
    </div>
  );
};
