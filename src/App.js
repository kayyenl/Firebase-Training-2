import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import db from "./firebase";

function App() {
  const [users, setUsers] = useState([])
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  //establishing a connection to a specific collection
  const usersCollectionRef = collection(db, "users")
  const userCollectionRef = doc(db, "users", "pedoo")

  //works like componentdidmount, so we can make api call to firestore here.
  //good practice for making async calls: define the async function inside useeffect and then make the call. it is bad pratice to make useeffect the async function.
  useEffect(() => {
    async function getUser() {
      const data = await getDoc(userCollectionRef)
      console.log(data.data())
    }

    async function getUsers() {
      const datas = await getDocs(usersCollectionRef)
      setUsers(datas.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    getUsers()
  }, [])

  async function createUser(e) {
    e.preventDefault()
    console.log(name, age)
  }

  return (
    <div className="App">
      <form>
        <input placeholder="add ur name here..." type="text" value={name} onChange={(event) => setName(event.target.value)}></input>
        <input placeholder="add ur age here..." type="number" value={age} onChange={(event) => setAge(event.target.value)}></input>
        <button onClick={createUser}> Create a user! </button>
      </form>
      {users.map((doc) => <>
        <h1> {doc.name} </h1>
        <p> {doc.id} </p>
      </> )}
    </div>
  );
}

export default App;

//notes: for a doc, we can get its info by .data()
//for a collection, we can get its info by .docs, then forEach or map.