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
      <q-img
        src="https://cdn.quasar.dev/img/image-src.png"
        srcset="https://cdn.quasar.dev/img/image-1x.png 300w,
                https://cdn.quasar.dev/img/image-2x.png 2x,
                https://cdn.quasar.dev/img/image-3x.png 3x,
                https://cdn.quasar.dev/img/image-4x.png 4x"
        style="height: 280px; max-width: 300px"
      >
        <div class="absolute-bottom text-body1 text-center">
          With srcset
        </div>
      </q-img>

       <q-img
          src="https://cdn.quasar.dev/img/parallax2.jpg"
          style="height: 280px; max-width: 300px"
        >
          <div class="absolute-full text-subtitle2 flex flex-center">
            Caption
          </div>
        </q-img>

      <q-img
        src="https://cdn.quasar.dev/img/image-src.png"
        srcset="https://cdn.quasar.dev/img/image-1x.png 400w,
                https://cdn.quasar.dev/img/image-2x.png 800w,
                https://cdn.quasar.dev/img/image-3x.png 1200w,
                https://cdn.quasar.dev/img/image-4x.png 1600w"
        sizes="(max-width: 400px) 400w,
              (min-width: 400px) and (max-width: 800px) 800w,
              (min-width: 800px) and (max-width: 1200px) 1200w,
              (min-width: 1200px) 1600w"
        style="height: 280px; max-width: 300px"
      >
        <div class="absolute-bottom text-body1 text-center">
          With srcset & sizes
        </div>
      </q-img>
    </div>
    <div>
      <h4>Sample Heading 1</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
    </div>
     <div>
      <h4>Sample Heading 2</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PageIndex',
};
</script>
