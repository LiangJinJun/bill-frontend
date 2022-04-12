import { FC, useState } from 'react';
import styles from './navBar.module.scss';
import { useNavigate } from 'react-router-dom';

type navBarType = {
  change: (type: string) => void;
};

const navBar: FC<navBarType> = ({ change }) => {
  const [active, setActive] = useState(0);
  const navigation = useNavigate();

  const handleChangeTab = (index: number) => {
    const type = index === 0 ? '-' : '+';
    change(type);
    setActive(index);
  };

  const backFn = () => {
    navigation(-1);
  };

  return (
    <div className={styles.top}>
      <span className={styles.cancel} onClick={() => backFn()}>
        取消
      </span>
      <p>
        {['支出', '收入'].map((item, index) => (
          <span
            key={index}
            className={index === active ? styles.active : ''}
            onClick={() => handleChangeTab(index)}
          >
            {item}
          </span>
        ))}
      </p>
    </div>
  );
};

export default navBar;
