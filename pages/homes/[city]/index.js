import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { stringParser } from "../../../util/utilityFunctions";

// get in firebase
import firebase from "../../../util/firebase";
const Index = () => {
  const [limit, setLimit] = useState(5);
  const [homes, setHomes] = useState(null);
  const [lastDoc, setLastDoc] = useState(null);
  const router = useRouter();
  const firestore = firebase.firestore();
  const { city } = router.query;

  const getNext = (next) => {
    // set limit forward 5
    setLimit((p) => p + 5);
    // refetch data
    getHomes();
  };
  const getPrevious = () => {
    // set limit back 5
    setLimit((p) => p - 5);
    // refetch data
    getHomes("previous");
  };
  const getHomes = async (direction = "next") => {
    let searchCity = stringParser(city);
    let homes = [];
    let homesRef = null;
    if (direction == "next") {
      homesRef = await firestore
        .collection("homes_Medellin")
        .orderBy("updated", "asc")
        .startAfter(lastDoc)
        .limit(2)
        .get();
    } else {
      homesRef = await firestore
        .collection("homes_Medellin")
        .orderBy("updated", "asc")
        .endAt(lastDoc)
        .limit(2)
        .get();
    }

    if (!homesRef.empty) {
      homesRef.forEach((home) =>
        homes.push({ docId: home.id, ...home.data() })
      );

      setLastDoc(homesRef.docs[homesRef.docs.length - 1]);
      setHomes(homes);
    } else {
      console.log("empty!");
    }
  };
  useEffect(() => {
    if (city) {
      getHomes();
    }
  }, [city]);

  return (
    <div>
      <div>Nested City page for {city && stringParser(city)}. Booyah</div>
      {homes && homes.map((home) => <p>{home.title}</p>)}
      {limit > 5 && <button onClick={getPrevious}>back</button>}

      {limit < 300 && <button onClick={getNext}>next</button>}
    </div>
  );
};

export default Index;
