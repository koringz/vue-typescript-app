<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div @click="showPlus(1)">
      link a value {{ value.join(',') }}
    </div>
    <div v-permission="'1'">
      permission
    </div>
  </div>
</template>
<script lang="ts">
import {Component, Vue } from 'vue-property-decorator'
import {PermissionModule} from "@/store/modules/permission"

@Component({
  name: 'about',
})

export default class extends Vue{
  value: any[] = [];

  created() {
    console.log(this.value) 
  }
  mounted() {
    // PermissionModule.getMenu("1")
    // console.log('UserModule',PermissionModule) 
  }

  showPlus(status: any) {
    this.value.push(status) 
    console.log(this.value)
  }
}
</script>