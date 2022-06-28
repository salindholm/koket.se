import React from 'react';
import styles from './Card.module.css';
import {ContentObject} from '../typings/content';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The information of a content to be rendered
   */
  contentInfo: ContentObject;

  /**
   * Which size of the content card to display
   */
  variant: 'large' | 'normal';
}

const Card = ({contentInfo, variant}: CardProps) => {
  const {name, description, sponsored, url, image} = contentInfo;

  const styleOption =
    variant === 'large'
      ? {
          wrapper: `${styles.wrapper} ${styles.largeContentGrid}`,
          imageWrapper: styles.bigImageWrapper,
          gradient: styles.whiteGradient,
          textWrapper: styles.whiteTextWrapper,
          infoWrapper: styles.whiteInfoWrapper,
          title: styles.blackTitle,
        }
      : {
          wrapper: styles.wrapper,
          imageWrapper: styles.smallImageWrapper,
          gradient: styles.blackGradient,
          textWrapper: styles.blackTextWrapper,
          infoWrapper: styles.blackInfoWrapper,
          title: styles.whiteTitle,
        };

  return (
    <div className={styleOption.wrapper}>
      <a className={styles.link} href={`http://www.köket.se${url}`}>
        Läs mer
      </a>
      <div className={styleOption.imageWrapper}>
        <img src={image.url} className={styles.image} alt={image.name} />
        <div className={styleOption.gradient} />
      </div>
      <div className={styleOption.textWrapper}>
        <div className={styleOption.infoWrapper}>
          <h1 className={styleOption.title}>{name}</h1>
          {variant === 'large' && (
            <p className={styles.description}>{description}</p>
          )}
        </div>
      </div>
      {sponsored && <div className={styles.sponsorLabel}>Sponsrat</div>}
    </div>
  );
};

export default Card;
