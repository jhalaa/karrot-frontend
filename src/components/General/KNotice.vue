<template>
  <div class="notice">
    <q-card
      color="secondary"
      class="generic-padding row no-wrap card"
    >
      <div>
        <div class="icon">
          <slot name="icon"/>
        </div>
      </div>
      <div>
        <h5>
          <slot/>
        </h5>
        <slot name="desc"/>
      </div>
    </q-card>
  </div>
</template>

<script>
import { QCard } from 'quasar'

export default {
  components: { QCard },
}
</script>

<style scoped lang="stylus">
@import '~variables'
@keyframes rotateIn
  0%
    transform: translateZ(1px) rotate(0deg)
  100%
    transform: translateZ(1px) rotate(-3deg)

.notice
  animation: .3s ease-out 0s 1 rotateIn;
  .card > div
    margin-bottom 1em
  .icon
    font-size 4.5rem
    margin .1em 0 0 0
    padding-right .3em
  padding 2em 3em
  transform: translateZ(1px) rotate(-3deg);
  h5
    padding 0
</style>
