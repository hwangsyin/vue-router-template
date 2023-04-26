<template>
  <div class="container">
    <p>home</p>
    <router-link :to="{name: 'about'}">about</router-link><br>
    <router-link :to="{name: 'login'}">login</router-link><br>
    <router-link :to="{name: 'console'}">console</router-link>
  </div>
</template>
