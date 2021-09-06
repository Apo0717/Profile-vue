<template>
  <div>
    <nav-bar> </nav-bar>
    <router-view />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";
export default {
  name: "MyProfile",
  components: {
    NavBar,
  },
};
</script>
