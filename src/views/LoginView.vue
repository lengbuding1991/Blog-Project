<template>
  <main class="flex-grow pt-24 pb-16">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <!-- 左侧图片区域 -->
          <div class="hidden lg:block">
            <div class="rounded-2xl overflow-hidden shadow-xl transform transition-custom hover:scale-[1.02]">
              <img
                src="https://design.gemcoder.com/staticResource/echoAiSystemImages/3212bea5fa4eaa5261000c6f945f6628.png"
                alt="登录界面插图" class="w-full h-full object-cover">
            </div>
          </div>

          <!-- 右侧登录表单 -->
          <div class="bg-white rounded-2xl p-8 card-shadow">
            <div class="text-center mb-8">
              <h1 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark mb-2">欢迎回来</h1>
              <p class="text-secondary">请输入您的账号和密码登录</p>
            </div>

            <!-- 全局错误提示 -->
            <div v-if="errorMessage"
              class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-center">
              <i class="fas fa-exclamation-circle mr-2"></i>
              <span>{{ errorMessage }}</span>
            </div>

            <form @submit.prevent="handleLogin" class="space-y-6">
              <!-- 账号输入 -->
              <div class="space-y-2">
                <label for="username" class="block text-sm font-medium text-gray-700">账号</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i class="fas fa-user text-gray-400"></i>
                  </div>
                  <input type="text" id="username" v-model="formData.username"
                    :class="{ 'border-red-500': formErrors.username }"
                    class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-custom outline-none"
                    placeholder="请输入账号" required>
                  <p v-if="formErrors.username" class="text-red-500 text-xs mt-1">
                    <i class="fas fa-exclamation-triangle mr-1"></i>{{ formErrors.username }}
                  </p>
                </div>
              </div>

              <!-- 密码输入 -->
              <div class="space-y-2">
                <label for="password" class="block text-sm font-medium text-gray-700">密码</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i class="fas fa-lock text-gray-400"></i>
                  </div>
                  <input :type="showPassword ? 'text' : 'password'" id="password" v-model="formData.password"
                    :class="{ 'border-red-500': formErrors.password }"
                    class="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-custom outline-none"
                    placeholder="请输入密码" required>
                  <button type="button" @click="togglePassword"
                    class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-custom">
                    <i :class="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
                  </button>
                  <p v-if="formErrors.password" class="text-red-500 text-xs mt-1">
                    <i class="fas fa-exclamation-triangle mr-1"></i>{{ formErrors.password }}
                  </p>
                </div>
              </div>

              <!-- 记住我和忘记密码 -->
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input id="remember" v-model="formData.remember" type="checkbox"
                    class="h-4 w-4 text-primary focus:ring-primary/50 border-gray-300 rounded transition-custom">
                  <label for="remember" class="ml-2 block text-sm text-gray-700">记住我</label>
                </div>
                <div class="text-sm">
                  <a href="/forgot-password"
                    class="font-medium text-primary hover:text-primary/80 transition-custom">忘记密码?</a>
                </div>
              </div>

              <!-- 登录按钮 -->
              <div>
                <button type="submit" :disabled="isLoading || formIsSubmitting"
                  class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-primary hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-custom">
                  <span v-if="!isLoading">登录</span>
                  <span v-if="isLoading">
                    <i class="fas fa-spinner fa-spin mr-2"></i>登录中...
                  </span>
                </button>
              </div>

              <!-- 分隔线 -->
              <div class="relative">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-gray-300"></div>
                </div>
                <div class="relative flex justify-center">
                  <span class="px-3 bg-white text-gray-500 text-sm">其他登录方式</span>
                </div>
              </div>

              <!-- 社交登录 -->
              <div class="grid grid-cols-3 gap-4">
                <button type="button" @click="socialLogin('google')"
                  class="flex justify-center items-center py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-custom">
                  <i class="fab fa-google text-lg"></i>
                </button>
                <button type="button" @click="socialLogin('facebook')"
                  class="flex justify-center items-center py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-custom">
                  <i class="fab fa-facebook-f text-lg"></i>
                </button>
                <button type="button" @click="socialLogin('github')"
                  class="flex justify-center items-center py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-custom">
                  <i class="fab fa-github text-lg"></i>
                </button>
              </div>

              <!-- 注册链接 -->
              <div class="text-center">
                <p class="text-sm text-gray-600">
                  还没有账号? <a href="/regist"
                    class="font-medium text-primary hover:text-primary/80 transition-custom">立即注册</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
interface User {
  id: string;
  username: string;
  avatar: string;
}

interface User {
    id: string;
    username: string;
    email?: string;
    [key: string]: any;
  }

  interface LoginResponse {
    token: string;
    userInfo: User;
  }

interface FormData {
  username: string;
  password: string;
  remember: boolean;
}

interface FormErrors {
  username?: string;
  password?: string;
}
import { onMounted } from 'vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { AxiosError } from 'axios';
import { userService } from '../services/userService';

const users = ref<User[]>([]);

onMounted(async () => {
  try {
    const response = await userService.getAll();
    users.value = response.data;
  } catch (error: unknown) {
    console.error('Error fetching users:', error);
  }
});

// 路由实例
const router = useRouter();

// 表单数据
const formData = ref<FormData>({
  username: '',
  password: '',
  remember: false
});

// 状态管理
const showPassword = ref(false);
const isLoading = ref(false);
const formIsSubmitting = ref(false);
const errorMessage = ref('');
const formErrors = ref<FormErrors>({});
const loginAttempts = ref(0);

// 表单验证规则
const validateForm = () => {
  const errors = {};
  let isValid = true;

  // 验证账号
  if (!formData.value.username.trim()) {
    (errors as FormErrors).username = '请输入账号';
    isValid = false;
  }

  // 验证密码
  if (!formData.value.password) {
    (errors as FormErrors).password = '请输入密码';
    isValid = false;
  } else if (formData.value.password.length < 6) {
    (errors as FormErrors).password = '密码长度不能少于6个字符';
    isValid = false;
  }

  formErrors.value = errors;
  return isValid;
}

// 处理登录表单提交
const handleLogin = async () => {
  // 防止重复提交
  if (formIsSubmitting.value) return;

  // 清除之前的错误信息
  errorMessage.value = '';
  formErrors.value = {};

  // 表单验证
  if (!validateForm()) {
    return;
  }

  try {
    formIsSubmitting.value = true;
    isLoading.value = true;
    loginAttempts.value += 1;

    // 调用API登录请求
    const response = await userService.login(formData.value);
    const { token, userInfo } = response.data as LoginResponse;
    console.log('登录成功:', token, userInfo);

    // 存储认证信息
    const storage = formData.value.remember ? localStorage : sessionStorage;
    storage.setItem('auth_token', token);
    storage.setItem('user_info', JSON.stringify(userInfo));

    // 控制台输出验证 - 关键部分
    console.log('===== 登录状态存储验证 =====');
    console.log('存储方式:', formData.value.remember ? 'localStorage (长期保存)' : 'sessionStorage (会话级保存)');
    console.log('存储的Token:', storage.getItem('auth_token'));
    const storedUserInfo = storage.getItem('user_info');
    const parsedUserInfo = storedUserInfo ? JSON.parse(storedUserInfo) : null;
    console.log('存储的用户信息:', parsedUserInfo);
    console.log('是否登录:', !!storage.getItem('auth_token'));
    console.log('============================');

    // 登录成功，处理跳转
    const redirectPath = localStorage.getItem('redirect_after_login') || '/';
    localStorage.removeItem('redirect_after_login');

    // 重置表单
    formData.value = {
      username: '',
      password: '',
      remember: false
    };

    // 跳转到目标页面
    router.push(redirectPath);

  } catch (error: unknown) {
  
      // 区分不同类型的错误
      if (error instanceof AxiosError) {
          if (error.response) {
            // 服务器返回错误响应
            if (error.response.status === 401) {
              errorMessage.value = '用户名或密码错误，请重试';
            } else if (error.response.status === 403) {
              errorMessage.value = '账号已被禁用，请联系管理员';
            } else if (error.response.data && error.response.data.message) {
              errorMessage.value = error.response.data.message;
            } else {
              errorMessage.value = `服务器错误 (${error.response.status})，请稍后再试`;
            }
          } else if (error.request) {
            // 网络错误，没有收到响应
            errorMessage.value = '无法连接到服务器，请检查网络连接';
          } else {
            errorMessage.value = error.message;
          }
        } else if (error instanceof Error) {
          // 其他错误
          errorMessage.value = error.message;
        } else {
          errorMessage.value = '登录失败，请稍后再试';
        }

      // 多次登录失败的处理
      if (loginAttempts.value >= 3) {
        errorMessage.value = '登录尝试次数过多，请5分钟后再试';
      }
    } finally {
    isLoading.value = false;
    formIsSubmitting.value = false;
  }
};

// 处理社交登录
const socialLogin = (platform: 'wechat' | 'qq' | 'github' | 'google' | 'facebook') => {
  alert(`即将使用${platform}登录（测试环境）`);
};

// 切换密码显示状态
const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
</script>

<style scoped>
/* 样式保持不变 */
.text-dark {
  color: #1f2937;
}

.text-secondary {
  color: #6b7280;
}

.card-shadow {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.bg-gradient-primary {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
}

.transition-custom {
  transition: all 0.2s ease-in-out;
}

.focus:ring-primary {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}

.fa-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 1024px) {
  .lg\:grid-cols-2 {
    grid-template-columns: 1fr;
  }

  .hidden.lg\:block {
    display: block;
    margin-bottom: 2rem;
  }
}
</style>