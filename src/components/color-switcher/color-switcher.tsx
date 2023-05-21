import classNames from 'classnames';
import { Color } from 'types/entities';
import styles from './color-switcher.module.scss';

interface ColorSwitcherProps {
  colors: Color[];
  selectedColorId: number;
  onChange: (newId: number) => void;
}

export function ColorSwitcher({ colors, selectedColorId, onChange }: ColorSwitcherProps) {
  return (
    <div className={styles.colors}>
      {colors.map(({ id, color }) => (
        <div
          key={id}
          onClick={() => onChange(id)}
          style={{ backgroundColor: color }}
          className={classNames(styles.color, {
            [styles.colorSelected]: id === selectedColorId,
          })}
        />
      ))}
    </div>
  );
}
