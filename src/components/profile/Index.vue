<template>
   <div class="q-pa-md">
     <h5>Profiles</h5>
      <q-list bordered class="rounded-borders profiles">
        <q-item
          v-for="item in profiles"
          :key="item.message"
        >
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
         <q-item-section class='profile-name'>{{ item.name }}</q-item-section>
         <q-item-section
            class='pointer'
            @click.native='remove(item._id)'
          >
            Remove
          </q-item-section>
        </q-item>
      </q-list>
      <div class='q-py-lg'>
        <a href='#/profiles/new'>Create New</a>
      </div>
   </div>
</template>

<script>
const API_URL = 'http://localhost:9000';
export default {
  created() {
    return fetch(`${API_URL}/profiles`)
      .then((response) => response.json())
      .then((response) => {
        this.profiles = response;
      });
  },
  data() {
    return {
      profiles: this.profiles,
    };
  },
  methods: {
    remove(id) {
      this.profiles = this.profiles.filter((profile) => profile._id !== id);
    },
  },
};
</script>
