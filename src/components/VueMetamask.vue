<template>
    <div id="demo">
        <vue-metamask
            userMessage="msg"
            @onComplete="onComplete"
        >
        </vue-metamask>
    </div>
</template>

<script>
import VueMetamask from 'vue-metamask';
import axios from 'axios';
import APP_CONFIG from 'boot/config.js';
import { isLoggedIn } from '../helpers/authentication.js';

export default {
  components: {
    VueMetamask,
  },
  data() {
    return {
      msg: 'This is demo net work',
    };
  },
  beforeRouteEnter(to, from, next) {
    if (isLoggedIn()) {
      next({ path: '/' });
    } else {
      next();
    }
  },
  methods: {
    onComplete(data) {
      localStorage.setItem('metaMaskAddress', data.metaMaskAddress);
      localStorage.setItem('netID', data.netID);

      axios.post(`${APP_CONFIG.api_url}/login`, {
        netID: data.netID,
        metaMaskAddress: data.metaMaskAddress,
      }).then((response) => {
        if (response.status === 200) {
          console.log(response.data.message);
          this.$router.push('/');
        }
      });
    },
  },
};
</script>
