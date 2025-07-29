<template>
  <header class="fixed w-full bg-white/90 backdrop-blur-sm z-50 transition-custom shadow-sm"
    :class="{ 'navbar-scrolled': isScrolled }">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo区域 -->
        <div class="flex items-center">
          <a class="flex items-center space-x-2" href="javascript:void(0);" @click="handleHomeClick">
            <div class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
              <i class="fa-solid fa-code text-xl"> </i>
            </div>
            <span class="text-xl font-bold text-gray-800"> 个人网站 </span>
          </a>
        </div>

        <!-- 桌面导航 -->
        <nav class="hidden md:flex items-center space-x-8">
          <a class="text-gray-600 hover:text-blue-600 font-medium transition-custom" href="/"
            @click="handleAnchorClick('#home')">
            首页
          </a>
          <a class="text-gray-600 hover:text-blue-600 font-medium transition-custom" href="javascript:void(0);"
            @click="handleAnchorClick('#about')">
            关于我
          </a>
          <a class="text-gray-600 hover:text-blue-600 font-medium transition-custom" href="javascript:void(0);"
            @click="handleAnchorClick('#skills')">
            技能
          </a>
          <a class="text-gray-600 hover:text-blue-600 font-medium transition-custom" href="javascript:void(0);"
            @click="handleAnchorClick('#projects')">
            项目
          </a>
          <a class="text-gray-600 hover:text-blue-600 font-medium transition-custom" href="javascript:void(0);"
            @click="handleAnchorClick('#blog')">
            博客
          </a>
          <a class="text-gray-600 hover:text-blue-600 font-medium transition-custom" href="javascript:void(0);"
            @click="handleAnchorClick('#contact')">
            联系
          </a>

          <!-- 登录状态相关按钮 - 桌面版 -->
          <div class="flex items-center space-x-4 ml-4">
            <!-- 发布文章按钮 - 登录后显示 -->
            <a v-show="isLoggedIn"
              class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-custom"
              href="/release" @click="handlePublish">
              <i class="fas fa-plus mr-2"> </i>
              发布文章
            </a>

            <!-- 登录按钮 - 未登录时显示 -->
            <a v-show="!isLoggedIn"
              class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-custom inline-flex items-center"
              href="javascript:void(0);" @click="handleLogin">
              <i class="fas fa-sign-in-alt mr-2"> </i>
              登录
            </a>

            <!-- 用户头像 - 登录后显示 -->
            <div v-show="isLoggedIn" class="relative">
              <button class="flex items-center focus:outline-none" @click="toggleUserMenu">
                <img alt="用户头像" class="w-10 h-10 rounded-full object-cover border-2 border-blue-200"
                  :src="userInfo.avatar || defaultAvatar" />
                <span class="ml-2 text-gray-700 font-medium hidden sm:inline-block">{{ userInfo.username || '用户'
                }}</span>
                <i class="fas fa-chevron-down ml-1 text-xs text-gray-500">
                </i>
              </button>

              <!-- 用户下拉菜单 -->
              <div class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-100"
                :class="{ 'hidden': !showUserMenu }">
                <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-custom"
                  href="javascript:void(0);" @click="handleProfile">
                  <i class="fas fa-user mr-2"> </i>
                  个人中心
                </a>
                <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-custom"
                  href="javascript:void(0);" @click="handleSettings">
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
              <img alt="用户头像" class="w-8 h-8 rounded-full object-cover" :src="userInfo.avatar || defaultAvatar" />
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
        <a class="block py-2 text-gray-600 hover:text-blue-600 font-medium transition-custom" href="/"
          @click="handleAnchorClick('#home')">
          首页
        </a>
        <a class="block py-2 text-gray-600 hover:text-blue-600 font-medium transition-custom" href="javascript:void(0);"
          @click="handleAnchorClick('#about')">
          关于我
        </a>
        <a class="block py-2 text-gray-600 hover:text-blue-600 font-medium transition-custom" href="javascript:void(0);"
          @click="handleAnchorClick('#skills')">
          技能
        </a>
        <a class="block py-2 text-gray-600 hover:text-blue-600 font-medium transition-custom" href="javascript:void(0);"
          @click="handleAnchorClick('#projects')">
          项目
        </a>
        <a class="block py-2 text-gray-600 hover:text-blue-600 font-medium transition-custom" href="javascript:void(0);"
          @click="handleAnchorClick('#blog')">
          博客
        </a>
        <a class="block py-2 text-gray-600 hover:text-blue-600 font-medium transition-custom" href="javascript:void(0);"
          @click="handleAnchorClick('#contact')">
          联系
        </a>

        <!-- 移动端登录状态相关菜单 -->
        <div class="py-2 border-t border-gray-100 mt-2">
          <a v-show="!isLoggedIn" class="block py-2 text-blue-600 font-medium" href="javascript:void(0);"
            @click="handleLogin">
            <i class="fas fa-sign-in-alt mr-2"> </i>
            登录
          </a>

          <div v-show="isLoggedIn" class="space-y-1">
            <a class="block py-2 text-gray-600 hover:text-blue-600 font-medium" href="javascript:void(0);"
              @click="handleProfile">
              <i class="fas fa-user mr-2"> </i>
              个人中心
            </a>
            <a class="block py-2 text-gray-600 hover:text-blue-600 font-medium" href="javascript:void(0);"
              @click="handlePublish">
              <i class="fas fa-plus mr-2"> </i>
              发布文章
            </a>
            <a class="block py-2 text-gray-600 hover:text-blue-600 font-medium" href="javascript:void(0);"
              @click="handleSettings">
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
import { useRouter } from 'vue-router';

// 路由实例
const router = useRouter();

// 常量定义
const TOKEN_KEY = 'auth_token';
const USER_INFO_KEY = 'user_info';
const defaultAvatar = 'https://design.gemcoder.com/staticResource/echoAiSystemImages/23b0e17b36d5b64c35b585e18f70caca.png';

// 响应式状态
const isLoggedIn = ref(false);
const userInfo = ref({});
const showMobileMenu = ref(false);
const showUserMenu = ref(false);
const isScrolled = ref(false);

// 初始化登录状态
const initAuthState = () => {
  // 从本地存储获取Token和用户信息
  const token = localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY);
  const savedUserInfo = localStorage.getItem(USER_INFO_KEY) || sessionStorage.getItem(USER_INFO_KEY);

  if (token && savedUserInfo) {
    isLoggedIn.value = true;
    userInfo.value = JSON.parse(savedUserInfo);

    // 控制台输出验证
    console.log('===== Header组件登录状态验证 =====');
    console.log('是否登录:', isLoggedIn.value);
    console.log('用户信息:', userInfo.value);
    console.log('============================');
  } else {
    isLoggedIn.value = false;
    userInfo.value = {};
  }
};

// 处理登录跳转
const handleLogin = () => {
  // 记录当前页面URL，用于登录后返回
  const currentPath = router.currentRoute.value.fullPath;
  if (currentPath !== '/login') {
    localStorage.setItem('redirect_after_login', currentPath);
  }
  router.push('/login');
};

// 处理登出
const handleLogout = () => {
  // 清除本地存储中的认证信息
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_INFO_KEY);
  sessionStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(USER_INFO_KEY);

  // 更新状态
  isLoggedIn.value = false;
  userInfo.value = {};
  showUserMenu.value = false;

  // 跳转到首页
  router.push('/');
};

// 处理发布文章
const handlePublish = () => {
  // 验证登录状态（双重保险）
  if (!isLoggedIn.value) {
    handleLogin();
    return;
  }
  router.push('/release'); // 假设发布文章页面路由为/release
};

// 处理个人中心
const handleProfile = () => {
  if (isLoggedIn.value) {
    router.push('/profile');
    showMobileMenu.value = false;
    showUserMenu.value = false;
  }
};

// 处理设置页面
const handleSettings = () => {
  if (isLoggedIn.value) {
    router.push('/settings');
    showMobileMenu.value = false;
    showUserMenu.value = false;
  }
};

// 处理首页点击
const handleHomeClick = () => {
  router.push('/');
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
  // 初始化认证状态
  initAuthState();

  // 监听滚动事件
  window.addEventListener('scroll', handleScroll);
  // 监听点击事件
  document.addEventListener('click', handleDocumentClick);

  // 监听路由变化，更新登录状态
  router.afterEach(() => {
    initAuthState();
    showMobileMenu.value = false;
    showUserMenu.value = false;
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('click', handleDocumentClick);
});

// 监听登录状态变化，更新UI
watch(isLoggedIn, (newVal) => {
  showUserMenu.value = false;
  showMobileMenu.value = false;
});
</script>

<style scoped>
.navbar-scrolled {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.transition-custom {
  transition: all 0.2s ease-in-out;
}

/* 修复图标颜色问题 */
.fas.fa-sign-in-alt.mr-2 {
  color: inherit;
}
</style>