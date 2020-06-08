<template>
    <div class="q-pa-md d-flex">
      <div class='flex-col'>
        <img :src='profile.image_url' />
      </div>
      <div class='flex-col profile-section-2 af'>
        <div class='d-flex-c'>
          <span class='name attr'>{{ profile.name }}</span>
          <span class='attr'>{{ profile.age }}</span>
          <span class='attr'>{{ profile.location }}</span>
        </div>
      </div>
    </div>
</template>

<script>
import APP_CONFIG from 'boot/config.js';

export default {
  created() {
    const { id } = this.$route.params;
    fetch(`${APP_CONFIG.api_url}/profiles/${id}`).then((response) => response.json())
      .then((response) => {
        this.profile = response;
      });
  },
  data() {
    return {
      profile: null,
    };
  },
};
</script>
