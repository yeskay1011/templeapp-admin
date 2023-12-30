import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export const loginUser = async ({ email, password }) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const userDocRef = doc(db, "users", res.user.uid);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();
      if (userData.role === "admin") {
        const { name, email, phoneNumber } = userData;
        // console.log("User Data:", userData);
        return { name, email, phoneNumber };
      } else {
        throw new Error("User is not an admin.");
      }
    } else {
      throw new Error("User data not found in Firestore.");
    }
  } catch (error) {
    console.error("Error logging in: ", error);
    throw new Error("Invalid email or password.");
  }
};

export const storeServiceData = async (serviceData) => {
  try {
    // const servicesCollection = collection(db, "services");
    const newServiceDocRef = await addDoc(
      collection(db, "services"),
      serviceData
    );
    console.log("Submitted Service Data:", serviceData);
    console.log("Service data stored with ID:", newServiceDocRef.id);
    return newServiceDocRef.id;
  } catch (error) {
    console.error("Error storing service data:", error.message);
    throw new Error("Unable to store service data.");
  }
};

export const submitFormData = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, "bookings"), formData);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};
