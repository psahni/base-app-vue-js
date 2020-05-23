<template>
  <div class="q-pa-md" style="max-width: 400px">
    <h4>Add Profile</h4>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Name *"
        hint="Name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="location"
        label="Location *"
        hint="Location"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="number"
        v-model="age"
        label="Age *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please typ age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script>
import axios from 'axios';
import APP_CONFIG from 'boot/config.js';

export default {
  data() {
    return {
      name: null,
      age: null,
      location: null,
    };
  },

  methods: {
    onSubmit() {
      // if (this.accept !== true) {
      //   this.$q.notify({
      //     color: 'red-5',
      //     textColor: 'white',
      //     icon: 'warning',
      //     message: 'You need to accept the license and terms first',
      //   });
      // } else {
      //   this.$q.notify({
      //     color: 'green-4',
      //     textColor: 'white',
      //     icon: 'cloud_done',
      //     message: 'Submitted',
      //   });
      // }

      axios.post(`${APP_CONFIG.api_url}/profiles`, {
        name: this.name,
        age: this.age,
        location: this.location,
      }).then((response) => {
        console.log(response);
      });

      this.$router.push('/profiles');
    },

    onReset() {
      this.name = null;
      this.location = null;
      this.age = null;
    },
  },
};
</script>
