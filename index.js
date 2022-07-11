const firebaseConfig = {
  apiKey: "AIzaSyCTMJZu1kCkeGj3Ra3yVvZmDwxD47pgqCg",
  authDomain: "form-c7618.firebaseapp.com",
  projectId: "form-c7618",
  databaseURL: 'https://form-c7618-default-rtdb.firebaseio.com/',
  storageBucket: "form-c7618.appspot.com",
  messagingSenderId: "524862020102",
  appId: "1:524862020102:web:e56346f6bb9fbe90ce4187",
};
firebase.initializeApp(firebaseConfig);
const container = document.createElement("form");
container.className = "form";
const inputName = document.createElement("input");
inputName.className = "input-name";
const inputAge = document.createElement("input");
inputAge.className = "input-age";
inputName.type = "text";
inputName.placeholder = 'enter your name';
inputName.size = "20";
inputAge.type = "number";
inputAge.size = "15";
inputAge.placeholder = 'enter your age'
const btn = document.createElement("input");
btn.type = "submit";
btn.value = "Save";
btn.className = "save-button";
const list = document.createElement("div");
list.className = "display";
document.body.append(container);
container.append("Name:", inputName, "Age:", inputAge, btn, list);

const database = firebase.database();
const users  = database.ref('users');
btn.addEventListener('click', (event) => {
    if (inputName.value !== '') {
        const autoId = users.push().key;
        users.child(autoId).set({
            age: inputAge.value,
            name: inputName.value
         })
    };
});

users.on('value', change => {
    list.innerHTML = '';
    let data = change.val();
    for (let obj in data)  {
        let str = document.createElement('div');
        str.innerHTML = 'name: ' + data[obj].name + ', age: ' + data[obj].age;
        list.append(str);
    };
});