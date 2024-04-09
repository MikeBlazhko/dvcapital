import React, { useEffect, useRef, useState } from 'react';

import styles from './styles.module.scss';
import { classNames } from '@/utils';
import { ArrowIcon } from '@/assets/icons/arrow-icon';

interface Props {
  text: string;
}

export const CollapsedText: React.FC<Props> = (props) => {
  const { text } = props;
  const [available, setAbailable] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>();
  const [show, setShow] = useState(false);

  useEffect(() => {
    // @ts-ignore
    if (ref.current.offsetHeight <= 57) {
      setExpanded(true);
      setAbailable(false);
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
      {/* {!expanded && ( */}
        <div className={classNames(styles.blockMore, 
          // @ts-ignore
          expanded && styles.expanded)} onClick={() => setExpanded(!expanded)}>
         <span>{expanded ? 'Свернуть' : 'Развернуть'}</span>
         <ArrowIcon/>
        </div>
      {/* )} */}
    </div>
  );
};
