import React, { useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

function FirestoreTest() {
    useEffect(() => {
        const db = firebase.firestore();

        // Replace "yourCollection" with the name of a collection in your Firestore database
        db.collection("blogs")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(`${doc.id} => ${doc.data()}`);
                });
            })
            .catch((error) => {
                console.error("Error getting documents: ", error);
            });
    }, []);

    return <div>Testing Firestore Connection</div>;
}

export default FirestoreTest;
