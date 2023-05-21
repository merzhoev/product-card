import { useState } from 'react';
import { IProductCard } from 'types/entities';
import { ColorSwitcher } from 'components/color-switcher';
import { Button } from 'ui-kit/button';
import styles from './product-card.module.scss';

interface ProductCardProps extends IProductCard {}

export function ProductCard({ images, title, description, price, colors }: ProductCardProps) {
  const [selectedColorId, setSelectedColorId] = useState(colors[0].id);
  const image = images.find(({ colorId }) => colorId === selectedColorId)!.image;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt="product" />
      </div>
      <div className={styles.cardBody}>
        <span className={styles.price}>${price}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.switcher}>
          <h4 className={styles.switcherTitle}>Choose your colour</h4>
          <ColorSwitcher
            colors={colors}
            selectedColorId={selectedColorId}
            onChange={setSelectedColorId}
          />
        </div>

        <div className={styles.actions}>
          <Button>Add to cart</Button>
          <Button variant="outlined" color="secondary">
            Buy now
          </Button>
        </div>

        <a className={styles.link} href="/">
          Read reviews
        </a>
      </div>
    </div>
  );
}
