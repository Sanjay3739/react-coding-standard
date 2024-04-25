import { openDB } from "idb";

const dbName = `my-database`;
const userStoreName = `users`;

export async function saveUserToIndexedDB(user: any, token: string) {
  const db = await openDB(dbName, 1, {
    upgrade(db) {
      db.createObjectStore(userStoreName, { keyPath: "id" });
    },
  });

  const transaction = db.transaction(userStoreName, "readwrite");
  const store = transaction.objectStore(userStoreName);
  await store.put({ ...user, token });
  await transaction.done;
}

export async function deleteUserDataFromIndexedDB(userId: number) {
  const db = await openDB(dbName, 1);
  const transaction = db.transaction(userStoreName, "readwrite");
  const store = transaction.objectStore(userStoreName);
  await store.delete(userId);
  localStorage.clear();
  await transaction.done;
}

export async function fetchUserFromIndexedDB(userId: number) {
  const db = await openDB(dbName, 1);
  const store = db
    .transaction(userStoreName, "readonly")
    .objectStore(userStoreName);
  const userData = await store.get(userId);
  return userData;
}

export const getUserTokenFromLocalStorage = () => {
  return localStorage.getItem("application_data");
};

