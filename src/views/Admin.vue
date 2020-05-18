<template>
  <div class="admin">
    <Auth @auth="auth = $event" />
    <div v-if="auth" class="form-group">
      <TextCards />
    </div>
  </div>
</template>

<script>
import TextCards from "@/components/TextCards.vue";
import Auth from "../components/Auth.vue";

export default {
  name: "Admin",
  components: {
    TextCards,
    Auth
  },
  data: function() {
    return {
      auth: false
    };
  }
};
</script>

<style scoped>
.admin {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
