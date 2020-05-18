<template>
  <div class="admin">
    <Auth @auth="is_auth = $event"/>
    <div v-if="is_auth" class="form-group">
      Hiii
      <TextCard
        class="card"
        v-for="card in cards"
        v-bind:id="card.id"
        v-bind:date="card.date"
        v-bind:grad="card.grad"
        v-bind:text="card.text"
        v-bind:key="card.id"
      />
    </div>
  </div>
</template>

<script>
import TextCard from "@/components/TextCard.vue";
import Auth from "../components/Auth.vue";

export default {
  name: "Admin",
  components: {
    TextCard,
    Auth
  },
  data: function() {
    return {
      is_auth: false,
      cards: []
    };
  }
};
</script>

<style scoped>
.card {
  margin-bottom: 1rem;
}

.admin {
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
}
</style>
