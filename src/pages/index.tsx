import {GetStaticProps} from 'next';
import {getAllContent} from '../services/content.service';
import {ContentObject} from '../typings/content';
import Card from '../components/Card';
import styles from './App.module.css';

interface HomePageProps {
  contents: Array<ContentObject>;
}

export default function Home({contents}: HomePageProps) {
  return (
    <main className={styles.main}>
      <div className={styles.layout}>
        {contents.slice(0, 6).map((element, index) => {
          const cardSizeLarge = index < 2;
          return (
            <Card
              key={index}
              contentInfo={element}
              className={cardSizeLarge ? styles.bigger : undefined}
              cardSizeLarge={cardSizeLarge}
            />
          );
        })}
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const contents = await getAllContent();
  return {props: {contents}};
};
