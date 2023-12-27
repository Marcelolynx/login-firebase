// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAREq7IIMPWWOmm1vISHROfXD6kxHOa4No",
  authDomain: "shopcasas-fd734.firebaseapp.com",
  databaseURL: "https://shopcasas-fd734.firebaseio.com",
  projectId: "shopcasas-fd734",
  storageBucket: "shopcasas-fd734.appspot.com",
  messagingSenderId: "40273432778",
  appId: "1:40273432778:web:261d506ce1e031337e2433"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var provider = new firebaseConfig.authDomain.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export function login() {
    firebase.auth().signInWithPopup(provider)
    .then(result => {
        var token = result.credential.accessToken;
        var user = result.user;
        // Você pode adicionar mais lógica aqui, como redirecionar o usuário ou exibir informações
    }).catch(error => {
        // Tratamento de erros
        console.error("Erro ao fazer login: ", error);
    });
}