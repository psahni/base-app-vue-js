<template>
   <div class="q-pa-md">
     <h5>Profiles</h5>
      <q-list bordered class="rounded-borders profiles">
        <q-item
          v-for="item in profiles"
          :key="item.message"
        >
          <q-avatar>
            <img
              class='pointer'
              v-on:click='show(item._id)'
              :src="item.image_url"
              style='width:60px;height:60px;'
            />
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
import axios from 'axios';

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
      // eslint-disable-next-line no-underscore-dangle
      this.profiles = this.profiles.filter((profile) => profile._id !== id);
      axios.delete(`${API_URL}/profiles/${id}`).then((res) => {
        console.log('response: - ', res);
      });
    },
    show(id) {
      this.$router.push(`/profiles/${id}`);
    },
  },
};
</script>
