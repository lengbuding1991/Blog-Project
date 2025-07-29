<template>
  <header class="fixed w-full bg-white/90 backdrop-blur-sm z-50 transition-custom shadow-sm"
    :class="{ 'navbar-scrolled': isScrolled }">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo区域 -->
        <div class="flex items-center">
          <a class="flex items-center space-x-2" href="javascript:void(0);">
            <div class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
              <i class="fa-solid fa-code text-xl"> </i>
            </div>
            <span class="text-xl font-bold text-gray-800"> 个人网站 </span>
          </a>
        </div>

        <!-- 桌面导航 -->
        <nav class="hidden md:flex items-center space-x-8">
          <a class="text-gray-600 hover:text-blue-600 font-medium transition-custom" href="#home"
            @click="handleAnchorClick('#home')">
            首页
          </a>
          <a class="text-gray-600 hover:text-blue-600 font-medium transition-custom" href="#about"
            @click="handleAnchorClick('#about')">
            关于我
          </a>
          <a class="text-gray-600 hover:text-blue-600 font-medium transition-custom" href="#skills"
            @click="handleAnchorClick('#skills')">
            技能
          </a>
          <a class="text-gray-600 hover:text-blue-600 font-medium transition-custom" href="#projects"
            @click="handleAnchorClick('#projects')">
            项目
          </a>
          <a class="text-gray-600 hover:text-blue-600 font-medium transition-custom" href="#blog"
            @click="handleAnchorClick('#blog')">
            博客
          </a>
          <a class="text-gray-600 hover:text-blue-600 font-medium transition-custom" href="#contact"
            @click="handleAnchorClick('#contact')">
            联系
          </a>

          <!-- 登录状态相关按钮 - 桌面版 -->
          <div class="flex items-center space-x-4 ml-4">
            <!-- 发布文章按钮 - 登录后显示 -->
            <a v-show="isLoggedIn"
              class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-custom"
              href="javascript:void(0);" @click="handlePublish">
              <i class="fas fa-plus mr-2"> </i>
              发布文章
            </a>

            <!-- 登录按钮 - 未登录时显示 -->
            <a v-show="!isLoggedIn"
              class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-custom inline-flex items-center"
              href="javascript:void(0);" @click="handleLogin">
              <i class="fas fa-sign-in-alt mr-2 text-black"> </i>
              登录
            </a>

            <!-- 用户头像 - 登录后显示 -->
            <div v-show="isLoggedIn" class="relative">
              <button class="flex items-center focus:outline-none" @click="toggleUserMenu">
                <img alt="用户头像" class="w-10 h-10 rounded-full object-cover border-2 border-blue-200"
                  src="https://design.gemcoder.com/staticResource/echoAiSystemImages/23b0e17b36d5b64c35b585e18f70caca.png" />
                <i class="fas fa-chevron-down ml-1 text-xs text-gray-500">
                </i>
              </button>

              <!-- 用户下拉菜单 -->
              <div class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-100"
                :class="{ 'hidden': !showUserMenu }">
                <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-custom"
                  href="javascript:void(0);">
                  <i class="fas fa-user mr-2"> </i>
                  个人中心
                </a>
                <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-custom"
                  href="javascript:void(0);">
                  <i class="fas fa-cog mr-2"> </i>
                  设置
                </a>
                <div class="border-t border-gray-100 my-1"></div>
                <a class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-custom"
                  href="javascript:void(0);" @click="handleLogout">
                  <i class="fas fa-sign-out-alt mr-2"> </i>
                  退出登录
                </a>
              </div>
            </div>
          </div>
        </nav>

        <!-- 移动端菜单按钮 -->
        <div class="md:hidden flex items-center">
          <!-- 移动端登录状态相关按钮 -->
          <div class="flex items-center mr-4">
            <a v-show="isLoggedIn" class="bg-blue-100 text-blue-600 p-2 rounded-lg transition-custom"
              href="javascript:void(0);" @click="handlePublish" title="发布文章">
              <i class="fas fa-plus"> </i>
            </a>

            <button v-show="isLoggedIn" class="p-2 rounded-full hover:bg-gray-100 transition-custom"
              @click="toggleMobileMenu">
              <img alt="用户头像" class="w-8 h-8 rounded-full object-cover"
                src="https://design.gemcoder.com/staticResource/echoAiSystemImages/a405e83187b71bb198dc8a4562c63425.png" />
            </button>
          </div>

          <button class="text-gray-600 hover:text-blue-600 focus:outline-none" @click="toggleMobileMenu">
            <i :class="showMobileMenu ? 'fas fa-times text-xl' : 'fas fa-bars text-xl'"> </i>
          </button>
        </div>
      </div>
    </div>

    <!-- 移动端导航菜单 -->
    <div class="md:hidden bg-white border-t" :class="{ 'hidden': !showMobileMenu }">
      <div class="container mx-auto px-4 py-3 space-y-1">
        <a class="block py-2 text-gray-600 hover:text-blue-600 font-medium transition-custom" href="#home"
          @click="handleAnchorClick('#home')">
          首页
        </a>
        <a class="block py-2 text-gray-600 hover:text-blue-600 font-medium transition-custom" href="#about"
          @click="handleAnchorClick('#about')">
          关于我
        </a>
        <a class="block py-2 text-gray-600 hover:text-blue-600 font-medium transition-custom" href="#skills"
          @click="handleAnchorClick('#skills')">
          技能
        </a>
        <a class="block py-2 text-gray-600 hover:text-blue-600 font-medium transition-custom" href="#projects"
          @click="handleAnchorClick('#projects')">
          项目
        </a>
        <a class="block py-2 text-gray-600 hover:text-blue-600 font-medium transition-custom" href="#blog"
          @click="handleAnchorClick('#blog')">
          博客
        </a>
        <a class="block py-2 text-gray-600 hover:text-blue-600 font-medium transition-custom" href="#contact"
          @click="handleAnchorClick('#contact')">
          联系
        </a>

        <!-- 移动端登录状态相关菜单 -->
        <div class="py-2 border-t border-gray-100 mt-2">
          <a v-show="!isLoggedIn" class="block py-2 text-blue-600 font-medium" href="javascript:void(0);"
            @click="handleLogin">
            <i class="fas fa-sign-in-alt mr-2 text-black"> </i>
            登录
          </a>

          <div v-show="isLoggedIn" class="space-y-1">
            <a class="block py-2 text-gray-600 hover:text-blue-600 font-medium" href="javascript:void(0);">
              <i class="fas fa-user mr-2"> </i>
              个人中心
            </a>
            <a class="block py-2 text-gray-600 hover:text-blue-600 font-medium" href="javascript:void(0);"
              @click="handlePublish">
              <i class="fas fa-plus mr-2"> </i>
              发布文章
            </a>
            <a class="block py-2 text-gray-600 hover:text-blue-600 font-medium" href="javascript:void(0);">
              <i class="fas fa-cog mr-2"> </i>
              设置
            </a>
            <a class="block py-2 text-red-600 hover:text-blue-600 font-medium" href="javascript:void(0);"
              @click="handleLogout">
              <i class="fas fa-sign-out-alt mr-2"> </i>
              退出登录
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

// 响应式状态
const isLoggedIn = ref(localStorage.getItem('isLoggedIn') === 'true');
const showMobileMenu = ref(false);
const showUserMenu = ref(false);
const isScrolled = ref(false);

// 处理登录
const handleLogin = () => {
  localStorage.setItem('isLoggedIn', 'true');
  isLoggedIn.value = true;
  alert('登录成功！');
};

// 处理登出
const handleLogout = () => {
  localStorage.setItem('isLoggedIn', 'false');
  isLoggedIn.value = false;
  showUserMenu.value = false;
  alert('已退出登录');
};

// 处理发布文章
const handlePublish = () => {
  alert('跳转到发布文章页面');
};

// 切换移动端菜单
const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};

// 切换用户下拉菜单
const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value;
};

// 处理滚动事件
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

// 处理点击页面其他地方关闭用户菜单
const handleDocumentClick = (e) => {
  const userMenu = document.querySelector('.relative');
  if (userMenu && !userMenu.contains(e.target)) {
    showUserMenu.value = false;
  }
};

// 处理锚点点击 - 平滑滚动
const handleAnchorClick = (targetId) => {
  // 关闭移动端菜单
  showMobileMenu.value = false;

  // 平滑滚动到目标位置
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 80, // 考虑导航栏高度
      behavior: 'smooth'
    });
  }
};

// 生命周期钩子
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('click', handleDocumentClick);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('click', handleDocumentClick);
});

// 监听登录状态变化，更新UI
watch(isLoggedIn, (newVal) => {
  // 登录状态变化时的额外处理
  showUserMenu.value = false;
  showMobileMenu.value = false;
});
</script>

<style></style>