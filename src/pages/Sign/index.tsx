import { Button, Input, NavBar } from '@/components';
import classNames from 'classnames';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';

const Sign: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={classNames(styles.wrapper, 'flex flex-col h-full')}>
      <NavBar back="返回" backArrow={false} onBack={() => navigate(-1)}>
        注册
      </NavBar>
      <main
        className={classNames('flex-grow flex justify-center items-center')}
      >
        <div
          className={classNames(
            styles.box,
            'flex flex-col justify-center items-center',
          )}
        >
          <Input label="账号" placeholder="请输入账号" />
          <Input label="用户名" className="mt-3" placeholder="请输入用户名" />
          <Input label="密码" className="mt-3" placeholder="请输入密码" />
          <Input
            label="确认密码"
            className="mt-3"
            placeholder="请再次输入密码"
          />
          <Button style={{ margin: '50px 0 14px 0' }}>注册</Button>
          <Button>忘记密码</Button>
        </div>
      </main>
    </div>
  );
};

export default Sign;
