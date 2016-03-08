<template>
  <div>
    <div id="ptr">
      <span class="genericon">↓</span>
      <div class="loading">
        {{{refreshingContent}}}
      </div>
    </div>
  </div>
</template>

<style>
@import './style.css';
</style>

<script>
import { init } from './pull2refresh.js'

export default {
  props: {
    refreshFunction: {
      type: Function,
      require: true
    },
    refreshingContent: {
      type: String,
      default: 'fetching data'
    }
  },
  ready () {
    init({
      loadingFunction: this.refreshFunction
    })
  }
}
</script>
