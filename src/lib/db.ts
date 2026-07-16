import { doc, getDoc, setDoc, updateDoc, collection, addDoc, query, orderBy, getDocs, limit, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import { User as FirebaseUser } from "firebase/auth";

export interface UserProfile {
  name: string;
  email: string;
  avatarUrl: string;
  xp: number;
  createdAt: any;
}

export interface Order {
  id?: string;
  items: any[];
  totalPrice: number;
  totalPoints: number;
  createdAt: any;
}

export const createUserProfile = async (user: FirebaseUser) => {
  const userRef = doc(db, "users", user.uid);
  const snap = await getDoc(userRef);

  if (!snap.exists()) {
    await setDoc(userRef, {
      name: user.displayName || "Sem Nome",
      email: user.email || "",
      avatarUrl: user.photoURL || "",
      xp: 0,
      createdAt: serverTimestamp()
    });
  }
};

export const getUserProfile = async (userId: string): Promise<UserProfile | null> => {
  const userRef = doc(db, "users", userId);
  const snap = await getDoc(userRef);
  if (snap.exists()) {
    return snap.data() as UserProfile;
  }
  return null;
};

export const addXpToUser = async (userId: string, xpToAdd: number) => {
  const userRef = doc(db, "users", userId);
  const snap = await getDoc(userRef);
  if (snap.exists()) {
    const currentXp = snap.data().xp || 0;
    await updateDoc(userRef, {
      xp: currentXp + xpToAdd
    });
  }
};

export const saveOrder = async (userId: string, orderData: Omit<Order, 'createdAt' | 'id'>) => {
  const ordersRef = collection(db, "users", userId, "orders");
  await addDoc(ordersRef, {
    ...orderData,
    createdAt: serverTimestamp()
  });
};

export const getLatestOrders = async (userId: string): Promise<Order[]> => {
  const ordersRef = collection(db, "users", userId, "orders");
  const q = query(ordersRef, orderBy("createdAt", "desc"), limit(5));
  const snap = await getDocs(q);
  
  return snap.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Order[];
};

export const getTopUsers = async (): Promise<(UserProfile & { id: string })[]> => {
  const usersRef = collection(db, "users");
  const q = query(usersRef, orderBy("xp", "desc"), limit(10));
  const snap = await getDocs(q);
  
  return snap.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as (UserProfile & { id: string })[];
};

export interface Feedback {
  id?: string;
  userId: string;
  userName: string;
  userAvatar: string;
  text: string;
  location: string;
  rating: number;
  foodPhoto?: string;
  createdAt: any;
}

export const addFeedback = async (feedbackData: Omit<Feedback, 'createdAt' | 'id'>) => {
  const feedbacksRef = collection(db, "feedbacks");
  await addDoc(feedbacksRef, {
    ...feedbackData,
    createdAt: serverTimestamp()
  });
};

export const getFeedbacks = async (): Promise<Feedback[]> => {
  const feedbacksRef = collection(db, "feedbacks");
  const q = query(feedbacksRef, orderBy("createdAt", "desc"), limit(20));
  const snap = await getDocs(q);
  
  return snap.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Feedback[];
};

