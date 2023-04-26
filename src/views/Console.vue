<template>
  <div class="container">
    <div>
      <p>console</p>
      <div>
        <router-link :to="{name: 'dashboard'}">dashboard</router-link><br>
        <router-link :to="{name: 'user-query-list'}">user query list</router-link>
      </div>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>
