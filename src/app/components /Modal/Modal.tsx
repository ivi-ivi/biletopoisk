'use client';

import classNames from 'classnames';
import styles from './modal.module.css';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CrossIcon } from '../../icons/CrossIcon';

export const useOutsideClick = (initialValue) => {
  const [isActive, setIsActive] = useState(initialValue);
  const ref = useRef(null);

  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsActive(!isActive);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  return { ref, isActive, setIsActive };
};

export type ModalProps = {
  title?: string;
  children?: ReactNode;
  confirmAction: () => void;
  cancelAction: () => void;
  open: string | null;
  closeModal: () => void;
};

export const Modal = ({
  title,
  children,
  confirmAction,
  cancelAction,
  open,
  closeModal,
}: ModalProps) => {
  const { ref, isActive, setIsActive } = useOutsideClick(true);
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  useEffect(() => {
    if (!isActive) {
      closeModal();
      setIsActive(true);
    }
  }, [isActive]);

  return (
    <>
      {open && isActive
        ? createPortal(
            <div className={classNames(styles.wrap)}>
              <div
                ref={ref}
                onClick={(e) => e.stopPropagation()}
                className={classNames(styles.modal)}
              >
                {title ? (
                  <div className={styles.titleBlock}>
                    <span className={classNames(styles.title)}>{title}</span>
                    <button className={styles.buttonClose} onClick={closeModal}>
                      <CrossIcon className={styles.icon} />
                    </button>
                  </div>
                ) : null}
                <div className={classNames(styles.content)}>{children}</div>
                <div className={classNames(styles.buttonBlock)}>
                  <button
                    className={styles.buttonYes}
                    onClick={() => {
                      confirmAction();
                      if (closeModal) {
                        closeModal();
                      }
                    }}
                  >
                    Да
                  </button>
                  <button className={styles.buttonNo} onClick={cancelAction}>
                    Нет
                  </button>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
};
