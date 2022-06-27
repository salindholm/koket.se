import {axiosGet} from '../utils/network';
import {ContentObject} from '../typings/content';

export async function getAllContent(): Promise<Array<ContentObject>> {
  try {
    return await axiosGet<Array<ContentObject>>('/api/exampleData.json');
  } catch (err) {
    // TODO: handle & report server side error
    return [];
  }
}
