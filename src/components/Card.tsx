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

  const styleOption = cardSizeLarge
    ? {
        wrapper: styles.bigImageWrapper,
        gradient: styles.whiteGradient,
        textWrapper: styles.whiteTextWrapper,
        infoWrapper: styles.whiteInfoWrapper,
        title: styles.blackTitle,
      }
    : {
        wrapper: styles.smallImageWrapper,
        gradient: styles.blackGradient,
        textWrapper: styles.blackTextWrapper,
        infoWrapper: styles.blackInfoWrapper,
        title: styles.whiteTitle,
      };

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <a className={styles.link} href={`http://www.köket.se${url}`}>
        Läs mer
      </a>
      <div className={styleOption.wrapper}>
        <img src={image.url} className={styles.image} alt={image.name} />
        <div className={styleOption.gradient} />
      </div>
      <div className={styleOption.textWrapper}>
        <div className={styleOption.infoWrapper}>
          <h1 className={styleOption.title}>{name}</h1>
          {cardSizeLarge && <p className={styles.description}>{description}</p>}
        </div>
      </div>
      {sponsored && <div className={styles.sponsorLabel}>Sponsrat</div>}
    </div>
  );
};

export default Card;
