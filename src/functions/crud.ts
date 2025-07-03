import { db } from './firebase';
import { collection, addDoc, Timestamp, getDocs, query, orderBy, deleteDoc, doc } from 'firebase/firestore';

/**
 * Adds a document to a Firestore collection.
 * @param collectionName The name of the Firestore collection
 * @param data The data object to add
 * @returns The added document reference
 */
export async function addDocument(collectionName: string, data: any) {
  const docRef = await addDoc(collection(db, collectionName), {
    ...data,
    createdAt: Timestamp.now(),
  });
  return docRef;
}

/**
 * Fetches all documents from a Firestore collection, ordered by createdAt descending.
 * @param collectionName The name of the Firestore collection
 * @returns Array of documents with id and data
 */
export async function fetchDocuments(collectionName: string) {
  const q = query(collection(db, collectionName), orderBy('createdAt', 'desc'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

/**
 * Deletes a document from a Firestore collection by id.
 * @param collectionName The name of the Firestore collection
 * @param id The document id
 */
export async function deleteDocument(collectionName: string, id: string) {
  await deleteDoc(doc(db, collectionName, id));
}
