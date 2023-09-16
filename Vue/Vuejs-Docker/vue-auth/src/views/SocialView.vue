<template>
    <h1>Auth View with Social login</h1>

    <button class="btn btn-primary" @click="loginGoogle">Login with Google</button>

    <button class="btn btn-primary" @click="loginFacebook">Login with Facebook</button>

    <button class="btn btn-primary"  @click="loginTwitter">Login with Twitter</button>

    <button class="btn btn-primary" @click="loginGithub">Login with Github</button>
</template>

<script lang="ts" setup>
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth();

// Conection with google
const loginGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential?.accessToken
        alert('Succes with Google!' + token)
    }).catch((error) => {
        alert('Failed with Google' + error)
    })
}

// connection with facebook
const loginFacebook = () => {
    signInWithPopup(auth, facebookProvider).then((result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result)
        const token = credential?.accessToken
        alert('Succes with Facebook!' + token)
    }).catch((error) => {
        alert('Failed with Facebook' + error)
    })
}

// connection with twitter
const loginTwitter = () => {
    signInWithPopup(auth, twitterProvider).then((result) => {
        const credential = TwitterAuthProvider.credentialFromResult(result)
        const token = credential?.accessToken
        alert('Succes with Twitter!' + token)
    }).catch((error) => {
        alert('Failed with Twitter' + error)
    })
}

// connection with github
const loginGithub = () => {
    signInWithPopup(auth, githubProvider).then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result)
        const token = credential?.accessToken
        alert('Succes with Github!' + token)
    }).catch((error) => {
        alert('Failed with Github' + error)
    })
}
</script>

<style></style>