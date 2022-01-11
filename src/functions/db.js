import app from 'gatsby-plugin-firebase-v9.0';

import {
    addDoc, // adds new doc with random key (dbRef, data);
    collection, // reference to collection (dbRef, 'collectionName')
    doc, // reference to doc (dbRef, 'collection', 'id')
    getFirestore,
    setDoc, // adds new doc with specific id (dbRef, 'docId', data)
    where, // needed for query ('field', '==', 'value')
    getDoc, // get individual doc
    getDocs, // get array of docs
    query, // filters data (dbRef, whereStatement)
    onSnapshot, // listens for data changes
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// add new data and return id with data
export async function addData(newData) {
    try {
        const testCollection = collection(db, 'test');
        const dataDoc = await addDoc(testCollection);
        return { ...newData, id: dataDoc.id };
    } catch {
        return {};
    }
}
