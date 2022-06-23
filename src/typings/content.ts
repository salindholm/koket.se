export interface ContentObject {
  id: number;
  name: string;
  type: string;
  url: string;
  sponsored: null | true;
  description: string;
  image: {
    name: string;
    photographer: string;
    url: string;
  };
}
