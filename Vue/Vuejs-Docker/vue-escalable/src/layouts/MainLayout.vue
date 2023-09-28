<template>
      <div class="container">
        <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
        <div class="auxbar">
          <AuxBar />
        </div>
        <div class="mai-content-container">
          <div class="menu">
            <MenuSidebar />
          </div>
          <div class="main-content">
            <slot name="main"></slot>
          </div>
          <div class="aux-content">
            <slot name="aux"></slot>
          </div>
        </div>
      </div>
</template>

<script lang="ts" setup>
import MenuSidebar from '@/components/MenuSidebar.vue';
import AuxBar from '@/components/AuxBar.vue';
</script>

<style>
</style>