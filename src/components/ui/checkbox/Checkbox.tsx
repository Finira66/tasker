import styles from "./Checkbox.module.scss";
import { ChangeEventHandler, FC } from "react";

const Checkbox: FC<{
  selected: boolean;
  handleOnChange: ChangeEventHandler;
  value: string;
  text: string;
  className: string;
}> = ({ selected, handleOnChange, text, value, className }) => {
  return (
    <div className={`${styles.checkbox} ${className}`}>
      <input
        type="checkbox"
        value={value}
        checked={selected}
        onChange={handleOnChange}
      />
      <div className={styles.square}></div>
      <label htmlFor="">{text}</label>
    </div>
  );
};

export default Checkbox;
