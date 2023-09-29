<template>
    <!-- DEMONSTRATION PURPOSES ONLY -->
    <div class="auxBar">
        <span>Need Help?</span>
        <span><a attr.href="tel:+593963291401" title="+593963291401">+593 963 29 14 01</a> (7am to 8pm | Sat 9am-1pm EST)</span>
    </div>
</template>

<script scoped>

</script>

<style scoped>

.auxBar {
  background-color: #000;
  font: 600 14px 'Roboto', Arial, sans-serif;
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  box-sizing: border-box;

  @media (max-width: 454px) {
    height: auto;
    flex-direction: column;
  }

  span {
    mat-icon {
      position: relative;
      top: 2px;
    }
    &:not(:last-child) {
      margin-right: 4px;
    }
    a {
      color: #fff;
    }
  }
}
</style>