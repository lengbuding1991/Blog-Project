<template>
  <div class="font-inter text-dark">
    <!-- 导航栏 -->
    <nav ref="navbarRef" class="shadow-sm transition-shadow duration-300">
      <!-- 导航栏内容 -->
    </nav>

    <!-- 返回顶部按钮 -->
    <button id="back-to-top"
      class="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-white shadow-lg flex items-center justify-center opacity-0 invisible transition-all duration-300 hover:bg-primary/90"
      :class="{
        'opacity-0 invisible': !showBackToTop,
        'opacity-100 visible': showBackToTop
      }" @click="scrollToTop">
      <i class="fas fa-arrow-up"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const navbarRef = ref(null);
const showBackToTop = ref(false);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  if (window.scrollY > 300) {
    showBackToTop.value = true;
  } else {
    showBackToTop.value = false;
  }

  // 使用 ref 访问导航栏
  if (navbarRef.value) {
    if (window.scrollY > 50) {
      navbarRef.value.classList.add('shadow-md');
      navbarRef.value.classList.remove('shadow-sm');
    } else {
      navbarRef.value.classList.remove('shadow-md');
      navbarRef.value.classList.add('shadow-sm');
    }
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>