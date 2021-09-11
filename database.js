import {firebase} from './config';

export function storeRecords(records,url) {
  firebase
    .database()
    .ref(url)
    .set(records);
}

export function fetchRecords(setRecords, url) {
  firebase
    .database()
    .ref(url)
    .on('value', (snapshot) => {
      const records = snapshot.val();
      (records === null) ? setRecords([]) : setRecords(records);
    });
  }