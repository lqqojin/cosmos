import { initializeApp } from 'firebase/app';
import { v4 as uuid } from 'uuid';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, get, set, remove } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const database = getDatabase(app);

const adminUser = user => {
  return get(ref(database, 'admins')) //
    .then(snapshot => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
};

export const login = () => {
  signInWithPopup(auth, provider).catch(console.error);
};

export const logout = async () => {
  signOut(auth).catch(console.error);
};

export const onUserStateChange = callback => {
  onAuthStateChanged(auth, async user => {
    const updatedUser = user ? await adminUser(user) : null;
    console.log(updatedUser);
    callback(updatedUser);
  });
};

export const addNewProduct = async (product, image) => {
  const id = uuid();
  return set(ref(database, `products/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    image,
    option: product.option.split(','),
  });
};

export const getProducts = async () => {
  return await get(ref(database, `products`)).then(snapshot => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
};

export const getCart = async userId => {
  return get(ref(database, `carts/${userId}`)) //
    .then(snapshot => {
      const items = snapshot.val() || {};
      return Object.values(items);
    });
};

export const addOrUpdateToCart = async (userId, product) => {
  return set(ref(database, `carts/${userId}/${product.id}}`), product);
};

export const removeFromCart = (userId, productId) => {
  return remove(ref(database, `carts/${userId}/${productId}`));
};
