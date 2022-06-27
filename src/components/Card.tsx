import React from 'react';
import styles from './Card.module.css';
import {ContentObject} from '../typings/content';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The information of a content to be rendered
   */
  contentInfo: ContentObject;

  /**
   * Grid column span on bigger card
   */
  className: string | undefined;

  /**
   * If card is large or small
   */
  cardSizeLarge: boolean;
}

const Card = ({contentInfo, className, cardSizeLarge}: CardProps) => {
  const {name, description, sponsored, url, image} = contentInfo;

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <a className={styles.link} href={`http://www.köket.se${url}`}>
        Läs mer
      </a>
      <div
        className={
          cardSizeLarge ? styles.bigImageWrapper : styles.smallImageWrapper
        }
      >
        <img src={image.url} className={styles.image} alt={image.name} />
        <div
          className={
            cardSizeLarge ? styles.whiteGradient : styles.blackGradient
          }
        />
      </div>
      <div
        className={
          cardSizeLarge ? styles.whiteTextWrapper : styles.blackTextWrapper
        }
      >
        <div
          className={
            cardSizeLarge ? styles.whiteInfoWrapper : styles.blackInfoWrapper
          }
        >
          <h1 className={cardSizeLarge ? styles.blackTitle : styles.whiteTitle}>
            {name}
          </h1>
          {cardSizeLarge && <p className={styles.description}>{description}</p>}
        </div>
      </div>
      {sponsored && <div className={styles.sponsorLabel}>Sponsrat</div>}
    </div>
  );
};

export default Card;
