import firebase from 'firebase/app';

export const GetCurrentUser = () =>{
    var name;
    const user = firebase.auth().currentUser;
    if(!user) return null;
    return {
        name = user.name
    };
}