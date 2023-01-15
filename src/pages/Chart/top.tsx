import { FC, useState } from 'react';
import style from './top.module.scss';
import './top.module.scss';
// import { Icon } from 'bw-mobile';
import '../../components/tab-bar/tab-bar.scss';
import classNames from 'classnames';
import { Dropdown } from 'antd-mobile';
import { DemoBlock } from '../../components/demos/demo-block';

const Top: FC = () => {
  const [list] = useState(['周', '月', '年']);
  const [AmountType] = useState('支出');
  const [activeIndex, setActiveIndex] = useState(0);

  const itemListFn = (index: number) => {
    console.log(index, 'index');
    setActiveIndex(index);
  };

  return (
    <div className={style.topContent}>
      <div className={style.top}>
        {/*<div>{AmountType}</div>*/}
        {/*<Icon name="xialaxuanze"></Icon>*/}
        <DemoBlock title="" padding={'0'}>
          <Dropdown
            closeOnClickAway={false}
            className={classNames(style.admDropdown)}
          >
            <Dropdown.Item
              key="sorter"
              title={AmountType}
              className={style.admDropdownItemActive}
            >
              <div style={{ padding: 12 }}>
                内容
                <br />
                内容
                <br />
                内容
                <br />
                内容
                <br />
              </div>
            </Dropdown.Item>
          </Dropdown>
        </DemoBlock>
      </div>
      <div className={style.dateDay}>
        {list.map((item, i) => (
          <div
            className={classNames(
              style.itemList,
              activeIndex === i ? style.active : '',
            )}
            key={item}
            onClick={() => itemListFn(i)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Top;
