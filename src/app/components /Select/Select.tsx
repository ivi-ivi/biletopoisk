import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './select.module.css';
import { useOutsideClick } from '../Modal/Modal';

interface ValueProps {
  value: string;
  label: string;
}

interface Props {
  options: ValueProps[],
  placeholder: string;
  setItem: (val: string) => void
}

export default function Select({ options, placeholder, setItem }: Props) {
  const { ref, isActive, setIsActive } = useOutsideClick(true);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<null | ValueProps>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [isActive]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: ValueProps) => {
    setValue(option);
    setItem(option.value);
    setIsOpen(false);
  };

  return (
    <div>
      <input
        readOnly={true}
        placeholder={placeholder}
        value={value?.label !== '-' ? value?.label : ''}
        className={styles.button}
        onClick={handleToggle}
      />
      {isOpen &&
      ReactDOM.createPortal(
        <div className={styles.dropdown} ref={ref}>
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className={styles.item}
            >
              {option.label}
            </div>
          ))}
        </div>,
        document.getElementById('select-root')!
      )}
    </div>
  );
}
