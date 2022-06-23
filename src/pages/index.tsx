import {GetStaticProps} from 'next';
import {getAllContent} from '../services/content.service';
import {ContentObject} from '../typings/content';

interface HomePageProps {
  contents: Array<ContentObject>;
}

export default function Home({contents}: HomePageProps) {
  return (
    <>
      <div>
        {contents.map((item) => (
          <div
            key={item.id}
            style={{padding: 20, borderBottom: '1px solid #ccc'}}
          >
            <h2>{item.name}</h2>
            <p>{item.url}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const contents = await getAllContent();
  debugger;
  return {props: {contents}};
};
