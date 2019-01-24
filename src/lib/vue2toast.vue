<template>
  <section class="toast-container">
    <div class="toast" v-bind:class="[visible ? 'fade-in' : 'fade-out']">
      <span class="message">{{message}}</span>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      message: ""
    };
  }
};
</script>

<style lang='scss'>
.toast-container {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 9999 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  .toast {
    width: 180px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.61);
    border-radius: 10px;
    color: white;
  }
  .fade-in {
    animation-name: fade-in;
    animation-duration: 0.3s;
    animation-fill-mode: both;
  }
  .fade-out {
    animation-name: fade-out;
    animation-duration: 0.3s;
    animation-fill-mode: both;
  }
  .message {
    font-size: 14px;
    color: #fff;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fade-out {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.7);
  }
}
</style>