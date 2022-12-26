import classNames from 'classnames';
import { CSSProperties, useEffect, useState } from 'react';

import css from './Heading.module.scss';

function Heading() {
  const [isReverse, setIsReverse] = useState('normal');
  const [isPause, setIsPause] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsReverse(isReverse === 'normal' ? 'reverse' : 'normal');
      setIsPause(!isPause);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPause, isReverse]);

  return (
    <div className="bg-black">
      <div className="text-white">{isReverse}</div>
      <div className="w-[fit-content] text-white">
        <span> Hi, I'm</span>
        {isReverse === 'normal' ? (
          <h1 className={classNames(css.typing)} style={{ '--isReverse': 'reverse', '--test': 1 } as CSSProperties}>
            Worawut
          </h1>
        ) : (
          <h1 className={classNames(css.typingReverse)} style={{ '--isReverse': 'normal', '--test': 1 } as CSSProperties}>
            Worawut
          </h1>
        )}
      </div>
    </div>
  );
}

export default Heading;
