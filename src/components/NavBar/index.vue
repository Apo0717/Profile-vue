<template>
  <div class="list-wrap">
    <router-link to="/">
      <div class="list-items">About</div>
    </router-link>
    <router-link to="/Portfolio">
      <div class="list-items">Portfolio</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "navBar",
};
</script>
