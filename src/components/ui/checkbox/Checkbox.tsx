import styles from "./Checkbox.module.scss";
import { ChangeEventHandler, FC } from "react";

const Checkbox: FC<{
  selected: boolean;
  handleOnChange: ChangeEventHandler;
  value: string;
  text: string;
}> = ({ selected, handleOnChange, text, value }) => {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        value={value}
        checked={selected}
        onChange={handleOnChange}
      />
      <label htmlFor="">{text}</label>
    </div>
  );
};

export default Checkbox;
