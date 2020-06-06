<!--<template>
  <div class="q-pa-md">
    <div class="q-col-gutter-md row items-start">
      <div class="col-4">
        <q-img
          src="https://cdn.quasar.dev/img/parallax2.jpg"
          style="width: 100%"
        >
          <div class="absolute-bottom text-subtitle1 text-center">
            Caption
          </div>
        </q-img>
      </div>

      <div class="col-4">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-top text-center">
            Caption
          </div>
        </q-img>
      </div>

      <div class="col-4">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-top text-center">
            Caption
          </div>
        </q-img>
      </div>
      <div class="col-6">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom-right text-subtitle2">
            Caption
          </div>
        </q-img>
      </div>

      <div class="col-6">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-full text-subtitle2 flex flex-center">
            Caption
          </div>
        </q-img>
      </div>
    </div>
  </div>
</template>
-->
<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
     <q-img v-for="img in images" :key="img"
       :src="img"
       :srcset="img"
       style="height: 280px; max-width: 300px"
       class="pointer"
      >
        <div class="absolute-bottom text-body1 text-center">
            With srcset
        </div>
     </q-img>
    </div>
    <div class='af'>
      <h4>Sample Heading 1</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
    </div>
     <!-- <div>
      <h4>Sample Heading 2</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'PageIndex',

  data() {
    return {
      images: [
        'https://images-na.ssl-images-amazon.com/images/I/81Vv9UvptRL._SY355_.png',
        'https://images-na.ssl-images-amazon.com/images/I/81B8zxdRaRL._SY355_.png',
        'https://images-na.ssl-images-amazon.com/images/I/71zFKb2gQNL._SX425_.png',
        'https://images-na.ssl-images-amazon.com/images/I/41a1syPyhOL.jpg',
        'https://n2.sdlcdn.com/imgs/e/i/7/Ritzkart-Brown-Formal-Hair-Wig-SDL063790351-2-affc0.JPG',
        'https://www.thehindu.com/entertainment/movies/o50yp7/article31455525.ece/alternates/FREE_435/thappad',
        'https://images-eu.ssl-images-amazon.com/images/I/615mQ9fY6bL.jpg',
        'https://mcdn.wallpapersafari.com/medium/23/62/714DV3.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/81B8zxdRaRL._SY355_.png',
        'https://images-na.ssl-images-amazon.com/images/I/41a1syPyhOL.jpg',
        'https://www.thehindu.com/entertainment/movies/o50yp7/article31455525.ece/alternates/FREE_435/thappad',
        'https://n2.sdlcdn.com/imgs/e/i/7/Ritzkart-Brown-Formal-Hair-Wig-SDL063790351-2-affc0.JPG',
      ],
    };
  },
};

</script>
