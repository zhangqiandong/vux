<template>
  <div>
    <br>
    <br>
    <br>
    <br>
    <pull2refresh :refresh-function="refreshFunction" refreshing-content="<span style='color:red'>fetching~</span>"></pull2refresh>
    <div id="content">
      Pull down to refresh!
    </div>
  </div>
</template>

<script>
import Pull2refresh from '../components/pull2refresh/'
export default {
  components: {
    Pull2refresh
  },
  data () {
    return {
      refreshFunction: function () {
        return new Promise(function (resolve, reject) {
          // Run some async loading code here
          if (true/* if the loading worked */) {
            console.log(true)
            resolve()
          } else {
            reject()
          }
        })
      }
    }
  }
}
</script>

<style>
#content {
  background: #fff;
  min-height: 100%;
  z-index: 20;
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  padding: 50px 20px;
  text-align: center;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 24px;
  font-weight: 200;
  color: #555;
  box-sizing: border-box;
}

.ptr-loading #content, .ptr-reset #content,
.ptr-loading #ptr, .ptr-reset #ptr {
  transition: all .25s ease;
}

.ptr-reset #content {
  -webkit-transform: translate3d( 0, 0, 0 );
  transform: translate3d( 0, 0, 0 );
}

.ptr-loading #content {
  -webkit-transform: translate3d( 0, 50px, 0 );
  transform: translate3d( 0, 50px, 0 );
}
</style>