<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Test Title Services
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <!-- <q-banner class="bg-blue-grey-1 text-black">
        Banner Area
      </q-banner> -->
      <div class='container'>
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink';

export default {
  name: 'MainL',

  components: {
    // EssentialLink,
  },

  data() {
    return {
      leftDrawerOpen: false,
    };
  },
};
</script>
