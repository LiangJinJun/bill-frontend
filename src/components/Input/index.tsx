import { ChangeEventHandler, FC } from 'react';
import './index.scss';

type InputProps = {
  label?: string;
  value?: string | number;
  placeholder?: string;
  onChange?: ChangeEventHandler;
};

const Input: FC<InputProps> = ({ label, value, placeholder, onChange }) => {
  return (
    <label className="bw-bill-input-wrapper">
      <span className="bw-bill-input-name">{label ?? '标题'}</span>
      <input
        onChange={onChange}
        className="bw-bill-input"
        type="text"
        placeholder={placeholder}
        value={value}
      />
    </label>
  );
};

export default Input;
