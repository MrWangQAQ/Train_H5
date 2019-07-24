<template>
    <div class="scss-rem">
        <div class="header">scss+rem</div>
        <div class="content">content</div>
    </div>
</template>
<script>
export default {
  name: 'ScssAndRem',
  data () {
    return {}
  },
  mounted () {
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
    let htmlDom = document.getElementsByTagName('html')[0]
    htmlDom.style.fontSize = htmlWidth / 20 + 'px'
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
