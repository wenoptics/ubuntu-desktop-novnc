<!--

 @author Grayson Wen <wenoptics@gmail.com>
 @license MIT
-->
<template>
  <div :class="$style.fbcontainer">
    <iframe
      style="height: 100%; width: 100%"
      :src="url"
    />
  </div>
</template>

<style module>
.fbcontainer {
  padding: 10px;
  height: 100vh;
  min-width: 30em;
}
</style>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'Filebrowser',

  props: {
    url: {
      type: String,
      required: true
    }
  },

  setup() {
    const { t } = useI18n()
    return { t }
  }
}
</script>
