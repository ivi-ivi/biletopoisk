'use client';

import React, { useCallback, useContext, useState } from 'react';
import styles from './dd.module.css';
import { DropIcon } from '../../icons/DropIcon';
import { UndropIcon } from '../../icons/UndropIcon';


interface MenuContextProps {
  activeGroup: string | undefined;
  switchGroup: (title: string) => void;
}

const MenuContext = React.createContext<MenuContextProps | undefined>(undefined);

interface MenuAccordionProps {
  children: React.ReactNode;
}

const MenuAccordion = ({ children }: MenuAccordionProps) => {
  const [activeGroup, setActiveGroup] = useState<string | undefined>();

  const switchGroup = useCallback((title: string) => {
    setActiveGroup((activeTitle) => (activeTitle === title ? undefined : title));
  }, []);

  return (
    <MenuContext.Provider value={{ activeGroup, switchGroup }}>
      {children}
    </MenuContext.Provider>
  );
};

interface MenuGroupProps {
  children: React.ReactNode;
  title: string;
}

MenuAccordion.Group = function MenuGroup({ children, title }: MenuGroupProps) {
  const { activeGroup, switchGroup } = useContext(MenuContext) as MenuContextProps;
  return (
    <div className={styles.card}>
      <div className={styles.drop}>
        <span className={styles.subtitle}>{title}</span>
        <button className={styles.button} onClick={() => switchGroup(title)}>
          {activeGroup === title ? <UndropIcon /> : <DropIcon />}
        </button>
      </div>
      {activeGroup === title && <div>{children}</div>}
    </div>
  );
};

interface MenuTitleProps {
  title: string;
}

MenuAccordion.Title = function MenuTitle({ title }: MenuTitleProps) {
  return (
    <div className={styles.card}>
      <span className={styles.title}>{title}</span>
    </div>
  );
};

interface MenuItemProps {
  title: string;
}

MenuAccordion.Item = function MenuItem({ title }: MenuItemProps) {
  return (
    <div className={styles.text}>
      <span>{title}</span>
    </div>
  );
};

export default function Dropdown() {
  return (
    <div className={styles.main}>
      <MenuAccordion>
        <MenuAccordion.Title title='Вопросы-ответы' />
        <MenuAccordion.Group title='Что такое Билетопоиск?'>
          <MenuAccordion.Item
            title='Мы — крупнейший сервис о кино в рунете. На нем вы сможете
                    посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и
                    интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.'
          />
        </MenuAccordion.Group>
        <MenuAccordion.Group title='Какой компании принадлежит Билетопоиск?'>
          <MenuAccordion.Item
            title='Сайт был создан 7 ноября 2003 года, его основатели — Виталий Таций и
                    Дмитрий Суханов. Владельцем проекта являлась компания ООО «Билетопоиск», которой принадлежало
                    60 % акций проекта, 40 % акций принадлежало её совладельцу — французской компании ООО AlloCiné.
                    15 октября 2013 года сервис купила компания «Яндекс» (размер сделки — $80 млн, около 2,6 млрд рублей на то время).'
          />
        </MenuAccordion.Group>
        <MenuAccordion.Group title='Как купить билет на Билетопоиск?'>
          <MenuAccordion.Item
            title='Найти в поиске нужное мероприятие. Выбрать места, которые хотите приобрести и нажать
                    Оформить заказ.На следующей странице проверить правильность выбранного события, дату, время начала, выбранные
                    места и заполнить поля контактных данных.'
          />
        </MenuAccordion.Group>
        <MenuAccordion.Group title='Как оставить отзыв на Билетопоиск?'>
          <MenuAccordion.Item
            title='Чтобы написать отзыв, откройте страницу фильма и нажмите
                    кнопку Написать отзыв в блоке Рецензии зрителей.'
          />
        </MenuAccordion.Group>
      </MenuAccordion>
    </div>
  );
}
