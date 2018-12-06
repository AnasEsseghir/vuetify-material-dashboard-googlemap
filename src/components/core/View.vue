<template>
  <v-content>
    <div id="core-view">
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </div>
  </v-content>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: 'PLATEFORME DE STAGES 3E'
    }
  }
}
</script>

<style>
#core-view {
  padding-bottom: 100px;
}
</style>
