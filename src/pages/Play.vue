<template>
  <div class="q-pa-md">

    <div class="row">
      <div class="col">
        .col
      </div>
      <div class="col">
        .col
      </div>
    </div>

    <div class="row">
      <div class="col">
        .col
      </div>
      <div class="col">
        .col
      </div>
      <div class="col">
        .col
      </div>
    </div>
    <div class="row">
       <div class="col">
        <q-btn color='primary' label='primary' @click='handleCli'></q-btn>
      </div>
      <div class="col">
        <q-input outlined v-model="text" :dense="dense" />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    };
  },
  methods: {
    handleCli() {
      this.text = 'Prashant';
    },
  },
};
</script>
