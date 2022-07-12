import list from "./index.js";
const firebaseConfig = {
  apiKey: "AIzaSyCTMJZu1kCkeGj3Ra3yVvZmDwxD47pgqCg",
  authDomain: "form-c7618.firebaseapp.com",
  projectId: "form-c7618",
  databaseURL: "https://form-c7618-default-rtdb.firebaseio.com/",
  storageBucket: "form-c7618.appspot.com",
  messagingSenderId: "524862020102",
  appId: "1:524862020102:web:e56346f6bb9fbe90ce4187",
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const users = database.ref("users");

function baseConnecting(inputName, inputAge) {
    if (inputName.value !== '') {
        const autoId = users.push().key;
        users.child(autoId).set({
            age: inputAge.value,
            name: inputName.value
         })
    };
}

users.on('value', change => GetBase(change));

function GetBase(change) {
  list.innerHTML = "";
  let data = change.val();
  for (let obj in data) {
    let str = document.createElement("div");
    str.innerHTML = "name: " + data[obj].name + ", age: " + data[obj].age;
    list.append(str);
  }
};

export default baseConnecting;


