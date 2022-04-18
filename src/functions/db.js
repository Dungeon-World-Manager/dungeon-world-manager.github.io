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

// Adding data from the Create Classes page
export async function addClass(newData) {
  try {
    const testCollection = collection(db, "classes");
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
    const classesCollection = collection(db, "classes");
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

// Update classes tied to a user
export async function updateClasses(eclass) {
  const updateClasses = { ...eclass };
  try {
    const editClasses = doc(db, "classes", updateClasses.id);
    await updateDoc(editClasses, {
      baseDamage: editClasses.baseDamage,
      baseHp: editClasses.baseHp,
      description: editClasses.description,
      name: editClasses.name,
      races: editClasses.races,
      userId: editClasses.userId,
    });
  } catch {
    return updateClasses;
  }
}

// Get all public sessions from db
export async function getSessions() {
  const sessions = [];
  try {
    const sessionsCollection = collection(db, "sessions");
    const dataDoc = await getDocs(sessionsCollection);
    for (let doc of dataDoc.docs) {
      const data = doc.data();
      sessions.push({ ...data, id: doc.id });
    }
    return sessions;
  } catch {
    return sessions;
  }
}

// Get single public sessions from db
export async function getSession(id) {
  try {
    const dataDoc = await getDoc(doc(db, "sessions", id));
    return dataDoc.data();
  } catch {
    return {};
  }
}

export async function getCharacterInfo() {
  //Create an array of characters
  const characters = [];
  try {
    //Get a collection reference
    const charactersCollection = collection(db, "characters");
    //Get the documents from the collection reference
    const dataDoc = await getDocs(charactersCollection);

    //If there are no documents, return the empty array.
    if (dataDoc.empty) return characters;

    //Yes there are documents, loop through each one and get the data.
    for (let doc of dataDoc.docs) {
      const data = doc.data();
      characters.push({ ...data, id: doc.id });
    }

    //Return the array of documents
    return characters;
  } catch {
    //If it fails return the empty array.
    return characters;
  }
}

// Adding data from the Create Sessions page
export async function addSession(addData) {
  try {
    const addCollection = collection(db, "sessions");
    const dataDoc = await addDoc(addCollection, addData);
    return { ...addData, id: dataDoc.id };
  } catch {
    return {};
  }
}
