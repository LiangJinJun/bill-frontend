import { FC, RefObject } from 'react';
import styles from './ShareCanvas.module.scss';

interface ShareCanvasProps {
  canvasRef: RefObject<HTMLDivElement>;
}

const ShareCanvas: FC<ShareCanvasProps> = ({ canvasRef }) => {
  return (
    <div
      className="flex-grow flex justify-center items-center"
      style={{ background: '#f5f5f5' }}
    >
      <div className={styles.canvas} ref={canvasRef}>
        <main>
          <div className={styles.qccode}>
            <img
              src="data:image/jpeg;base64,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"
              alt="美女"
            />
            <span>蓝鲸记账</span>
          </div>
          <div>2021年08月26日</div>
          <div className={styles.type}>餐饮</div>
          <div className={styles.desc}>中午饭</div>
          <div className={styles.money}>
            支出
            <div>
              <span>12</span>.00
            </div>
          </div>
        </main>
        <footer>
          <img
            className={styles.img}
            src="data:image/jpeg;base64,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"
            alt="美女"
          />
        </footer>
      </div>
    </div>
  );
};
export default ShareCanvas;
