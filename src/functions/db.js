import app from "gatsby-plugin-firebase-v9.0";

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
  onSnapshot,
  updateDoc, // listens for data changes
} from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";

const db = getFirestore(app);
const auth = getAuth(app);
const gProvider = new GoogleAuthProvider();
const storage = getStorage(app);

// add new data and return id with data
export async function addData(newData) {
  try {
    const testCollection = collection(db, "test");
    const dataDoc = await addDoc(testCollection);
    return { ...newData, id: dataDoc.id };
  } catch {
    return {};
  }
}

// handle google sign popup and return user info
export async function googleSignIn() {
  try {
    // prompt user to sign in with google then get email & username
    const { user } = await signInWithPopup(auth, gProvider);
    const userData = { email: user.email, userName: user.displayName };

    const userCollection = collection(db, "users");
    // check if user exists in db
    const q = query(userCollection, where("email", "==", userData.email));
    const usersSnap = await getDocs(q);
    if (usersSnap.empty) {
      const newUserDoc = await addDoc(userCollection, userData);
      userData.id = newUserDoc.id;
      userData.isNew = true;
    } else {
      const { userName } = usersSnap.docs[0].data();
      userData.userName = userName;
      userData.id = usersSnap.docs[0].id;
    }
    return userData;
  } catch {
    return {};
  }
}

// sing in user with their last user id and return user info
export async function signInWithId(id) {
  const userInfo = {};
  try {
    // check if user exists in db
    const userDoc = await getDoc(doc(db, "users", id));
    if (userDoc.exists()) {
      const { userName, email } = userDoc.data();
      userInfo.id = id;
      userInfo.userName = userName;
      userInfo.email = email;
    }
    return userInfo;
  } catch {
    return userInfo;
  }
}

export async function updateUserInfo(user) {
  const userData = { ...user };
  try {
    await updateDoc(doc(db, "users", userData.id), userData);
  } catch {}
  return userData;
}

export async function retrieveCharacterInfo(user) {
  try {
    const { user } = await signInWithPopup(auth, gProvider);
    const userData = { id: user.id };

    const characterInfo = collection(db, "character");

    const c = query(characterInfo, where("userId", "==", userData.id));
    const charactersSnap = await getDocs(c);

    if (charactersSnap.empty) {
      const newUserCharacter = await addDoc(characterInfo, userData);
      userData.id = newUserCharacter.id;
    }
  } catch {
    return {};
  }
}

// Adding data from the Create Classes page
export async function addClass(newData) {
    try {
        const testCollection = collection(db, 'classes');
        const dataDoc = await addDoc(testCollection, newData);
        return { ...newData, id: dataDoc.id };
    } catch {
        return {};
    }
}

// Get all public classes from db
export async function getClasses() {
    const classes = [];
    try {
        const classesCollection = collection(db, 'classes');
        // const publicClasses = query(
        //     classesCollection,
        //     where('isPrivate', '!=', false)
        // );
        const dataDoc = await getDocs(classesCollection);
        if (dataDoc.empty) return classes;
        for (let doc of dataDoc.docs) {
            const data = doc.data();
            classes.push({ ...data, id: doc.id });
        }
        return classes;
    } catch {
        return classes;
    }
}
