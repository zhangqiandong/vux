<template>
  <div>
    <divider>A Horizontal Scroller without Scrollbar</divider>
    <scroller lock-y :scrollbar-x=false>
      <div class="box1">
        <div class="box1-item" v-for="i in 7"><span>{{' ' + i + ' '}}</span></div>
      </div>
    </scroller>

    <divider>A Horizontal Scroller with Scrollbar</divider>
    <scroller lock-y scrollbar-x>
      <div class="box1">
        <div class="box1-item" v-for="i in 7"><span>{{' ' + i + ' '}}</span></div>
      </div>
    </scroller>

    <divider>A Horizontal Scroller without bounce effect</divider>
    <scroller lock-y scrollbar-x :bounce=false>
      <div class="box1">
        <div class="box1-item" v-for="i in 7"><span>{{' ' + i + ' '}}</span></div>
      </div>
    </scroller>

    <divider>A Vertical Scroller</divider>
    <scroller lock-x style="height:200px;">
        <div class="box2">
          <p v-for="i in 80">placeholder {{i}}</p>
        </div>
    </scroller>

    <divider>A Vertical Scroller with scrollbar y</divider>
    <scroller lock-x scrollbar-y style="height:200px;">
        <div class="box2">
          <p v-for="i in 80">placeholder {{i}}</p>
        </div>
    </scroller>

    <divider>Pull Down to Refresh</divider>
    <scroller lock-x scrollbar-y use-pulldown style="height:200px;" @pulldown:loading="load">
        <div class="box2">
          <p v-for="i in 80">placeholder {{i}}</p>
        </div>
    </scroller>

    <divider>Chinese: 下拉刷新</divider>
    <scroller lock-x scrollbar-y use-pulldown :pulldown-config={content:'下拉刷新',downContent:'下拉刷新',upContent:'释放刷新',loadingContent:'加载中'} style="height:200px;" @pulldown:loading="load">
        <div class="box2">
          <p v-for="i in 80">占位 {{i}}</p>
        </div>
    </scroller>

    <divider>custom pulldown html template</divider>
    <scroller lock-x scrollbar-y use-pulldown style="height:200px;" :pulldown-status.sync="pulldownStatus" @pulldown:loading="load">
        <!--content slot-->
        <div class="box2">
          <p v-for="i in 80">placeholder {{i}}</p>
        </div>

        <!--pulldown slot-->
        <div slot="pulldown" class="xs-plugin-pulldown-container xs-plugin-pulldown-down" style="position: absolute; width: 100%; height: 60px; line-height: 60px; top: -60px; text-align: center;">
          <span v-show="pulldownStatus === 'default'"></span>
          <span class="pulldown-arrow" v-show="pulldownStatus === 'down' || pulldownStatus === 'up'" :class="{'rotate': pulldownStatus === 'up'}">↓</span>
          <span v-show="pulldownStatus === 'loading'"><spinner type="ios-small"></spinner></span>
        </div>
    </scroller>

    
  </div>
</template>

<script>
import { Scroller, Divider, Spinner } from '../components/'

export default {
  components: {
    Scroller,
    Divider,
    Spinner
  },
  methods: {
    load: function (uuid) {
      const _this = this
      setTimeout(function () {
        _this.$broadcast('pulldown:reset', uuid)
      }, 2000)
    }
  },
  data () {
    return {
      pulldownStatus: 'default'
    }
  }
}
</script>

<style scoped>
.box1 {
  height: 100px;
  position: relative;
  width: 1490px;
}
.box1-item {
  width: 200px;
  height: 100px;
  background-color: #ccc;
  display:inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 100px;
}
.box1-item:first-child {
  margin-left: 0;
}
.box2-wrap {
  height: 300px;
  overflow: hidden;
}
.rotate {
  display: inline-block;
  transform: rotate(-180deg);
}
.pulldown-arrow {
  transition: all linear 0.2s;
  color: #666;
  font-size: 25px;
}
</style>