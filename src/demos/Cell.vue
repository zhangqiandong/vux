<template>
  <div>
    <group>
      <cell title="My Account" value="Protected"></cell>
    </group>
    <group>
      <cell title="Notifications" link="test"></cell>
      <cell title="Privacy" link="test"></cell>
      <cell title="General" link="test"></cell>
    </group>
    <group>
      <cell title="Notifications" value="Enabled"></cell>
    </group>
    <group title="use slot for complexed content">
      <cell title="slot content">
        <div slot="value">
          <span style="color: green">Hi, I'm Vux.</span>
        </div>
      </cell>
    </group>
  </div>
</template>

<script>
import { Cell, Group } from '../components/'

export default {
  components: {
    Group,
    Cell
  }
}
</script>