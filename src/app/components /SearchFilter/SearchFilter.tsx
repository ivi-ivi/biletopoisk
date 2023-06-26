import styles from './sf.module.css';
import { Input } from '../Input/Input';
import Select from '../Select/Select';

interface Props {
  name: string;
  setName: (val: string) => void;
  setGenre: (val: string) => void;
}

export const SearchFilter = ({ name, setName, setGenre }: Props) => {
  return (
    <div className={styles.main}>
      <div className={styles.sticky}>
        <span className={styles.title}>Фильтр поиска</span>
        <div className={styles.search}>
          <span className={styles.text}>Название</span>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={'Введите название'}
          />
        </div>
        <div className={styles.search}>
          <span className={styles.text}>Жанр</span>
          <Select
            setItem={setGenre}
            options={[
              { label: '-', value: '-' },
              { label: 'ужасы', value: 'horror' },
              {
                label: 'комедия',
                value: 'comedy',
              },
              { label: 'фэнтези', value: 'fantasy' },
              { label: 'боевик', value: 'action' },
            ]}
            placeholder={'Выберите жанр'}
          />
        </div>
      </div>
    </div>
  );
};
