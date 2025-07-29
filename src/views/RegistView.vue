<template>
  <main class="flex-grow pt-24 pb-16">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-[clamp(2rem,5vw,3rem)] font-bold text-dark mb-4">创建您的账户</h1>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">加入我们的社区，开始您的个性化体验之旅。填写以下信息完成注册。</p>
        </div>

        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="md:flex">
            <!-- 左侧图片区域 -->
            <div
              class="md:w-1/2 bg-gradient-to-br from-primary to-blue-700 p-8 flex items-center justify-center hidden md:flex">
              <div class="text-center text-white">
                <img
                  src="https://design.gemcoder.com/staticResource/echoAiSystemImages/9c226227de2a5fc7c217cab558a394f5.png"
                  alt="注册概念图"
                  class="w-full max-w-md mx-auto rounded-lg shadow-2xl mb-8 transform rotate-2 hover:rotate-0 transition-custom duration-500">
                <h3 class="text-2xl font-bold mb-4">欢迎加入</h3>
                <p class="text-blue-100 mb-6">成为我们社区的一员，享受更多专属功能和服务</p>
                <div class="flex justify-center space-x-4">
                  <a href="javascript:void(0);"
                    class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-custom">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="javascript:void(0);"
                    class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-custom">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="javascript:void(0);"
                    class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-custom">
                    <i class="fab fa-google"></i>
                  </a>
                  <a href="javascript:void(0);"
                    class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-custom">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>

            <!-- 右侧表单区域 -->
            <div class="md:w-1/2 p-8 md:p-12">
              <form @submit.prevent="handleRegister" class="space-y-6">
                <div>
                  <label for="username" class="block text-sm font-medium text-gray-700 mb-1">用户名</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <i class="fas fa-user"></i>
                    </div>
                    <input type="text" id="username" v-model="formData.username" :class="{ 'border-red-500': errors.username }"
                      class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg input-focus transition-custom"
                      placeholder="请创建用户名">
                    <p v-if="errors.username" class="text-red-500 text-sm mt-1 font-medium">{{ errors.username }}</p>
                  </div>
                </div>

                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">电子邮箱</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <i class="fas fa-envelope"></i>
                    </div>
                    <input type="email" id="email" v-model="formData.email" :class="{ 'border-red-500': errors.email }"
                      class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg input-focus transition-custom"
                      placeholder="your.email@example.com">
                    <p v-if="errors.email" class="text-red-500 text-sm mt-1 font-medium">{{ errors.email }}</p>
                  </div>
                </div>

                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">手机号码</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <i class="fas fa-phone"></i>
                    </div>
                    <input type="tel" id="phone" v-model="formData.phone" :class="{ 'border-red-500': errors.phone }"
                      class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg input-focus transition-custom"
                      placeholder="请输入您的手机号码">
                    <p v-if="errors.phone" class="text-red-500 text-sm mt-1 font-medium">{{ errors.phone }}</p>
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label for="password" class="block text-sm font-medium text-gray-700 mb-1">设置密码</label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <i class="fas fa-lock"></i>
                      </div>
                      <input :type="showPassword ? 'text' : 'password'" id="password" v-model="formData.password"
                        :class="{ 'border-red-500': errors.password }"
                        class="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg input-focus transition-custom"
                        placeholder="至少8个字符">
                      <button type="button" @click="togglePassword('password')"
                        class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-custom">
                        <i :class="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
                      </button>
                    </div>
                    <p v-if="errors.password" class="text-red-500 text-sm mt-1 font-medium">{{ errors.password }}</p>
                  </div>

                  <div>
                    <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">确认密码</label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <i class="fas fa-lock"></i>
                      </div>
                      <input :type="showConfirmPassword ? 'text' : 'password'" id="confirmPassword"
                        v-model="formData.confirmPassword" :class="{ 'border-red-500': errors.confirmPassword }"
                        class="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg input-focus transition-custom"
                        placeholder="再次输入密码">
                      <button type="button" @click="togglePassword('confirmPassword')"
                        class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-custom">
                        <i :class="showConfirmPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
                      </button>
                    </div>
                    <p v-if="errors.confirmPassword" class="text-red-500 text-sm mt-1 font-medium">{{ errors.confirmPassword }}</p>
                  </div>
                </div>

                <div class="pt-2">
                  <label class="flex items-start">
                    <div class="flex items-center h-5">
                      <input id="terms" v-model="formData.terms" :class="{ 'border-red-500': errors.terms }"
                        type="checkbox"
                        class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded transition-custom">
                    </div>
                    <div class="ml-3 text-sm">
                      <span class="text-gray-600">我同意</span>
                      <a href="javascript:void(0);"
                        class="font-medium text-primary hover:text-primary/80 transition-custom">服务条款</a>
                      <span class="text-gray-600">和</span>
                      <a href="javascript:void(0);"
                        class="font-medium text-primary hover:text-primary/80 transition-custom">隐私政策</a>
                    </div>
                  </label>
                  <p v-if="errors.terms" class="text-red-500 text-sm mt-1 font-medium">{{ errors.terms }}</p>
                </div>

                <div>
                  <div v-if="registrationError" class="mb-4 p-3 bg-red-50 text-red-600 rounded-md text-sm">
                  {{ registrationError }}
                </div>
                <button type="submit" :disabled="isLoading"
                  class="w-full bg-primary text-white font-medium py-3 px-4 rounded-lg btn-hover focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-custom">
                    <span v-if="!isLoading">创建账户</span>
                    <span v-if="isLoading">注册中...</span>
                  </button>
                </div>

                <div class="text-center text-gray-600">
                  <p>已有账户？ <a href="javascript:void(0);"
                      class="font-medium text-primary hover:text-primary/80 transition-custom">立即登录</a></p>
                </div>

                <div class="relative">
                  <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-300"></div>
                  </div>
                  <div class="relative flex justify-center text-sm">
                    <span class="px-2 bg-white text-gray-500">或使用以下方式注册</span>
                  </div>
                </div>

                <div class="grid grid-cols-4 gap-4">
                  <button type="button" @click="socialRegister('facebook')"
                    class="flex items-center justify-center w-full h-12 border border-gray-300 rounded-lg hover:bg-gray-50 transition-custom">
                    <i class="fab fa-facebook-f text-blue-600"></i>
                  </button>
                  <button type="button" @click="socialRegister('twitter')"
                    class="flex items-center justify-center w-full h-12 border border-gray-300 rounded-lg hover:bg-gray-50 transition-custom">
                    <i class="fab fa-twitter text-blue-400"></i>
                  </button>
                  <button type="button" @click="socialRegister('google')"
                    class="flex items-center justify-center w-full h-12 border border-gray-300 rounded-lg hover:bg-gray-50 transition-custom">
                    <i class="fab fa-google text-red-500"></i>
                  </button>
                  <button type="button" @click="socialRegister('github')"
                    class="flex items-center justify-center w-full h-12 border border-gray-300 rounded-lg hover:bg-gray-50 transition-custom">
                    <i class="fab fa-github text-gray-800"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { userService } from '../services/userService';

// 表单数据
const formData = ref({
  username: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  terms: false
});

// 状态管理
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const isLoading = ref(false);
const errors = ref({});

// 路由实例
const router = useRouter();
  const registrationError = ref('');

// 切换密码显示状态
const togglePassword = (type) => {
  if (type === 'password') {
    showPassword.value = !showPassword.value;
  } else {
    showConfirmPassword.value = !showConfirmPassword.value;
  }
};

// 验证表单
const validateForm = () => {
  const newErrors = {};
  let isValid = true;

  // 用户名验证
    if (!formData.value.username) {
      newErrors.username = '请创建用户名';
      isValid = false;
    } else if (formData.value.username.length < 3 || formData.value.username.length > 20) {
      newErrors.username = '用户名长度必须在3-20个字符之间';
      isValid = false;
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.value.username)) {
      newErrors.username = '用户名只能包含字母、数字和下划线';
      isValid = false;
    }

    // 手机号验证（可选）
    if (formData.value.phone && !/^1[3-9]\d{9}$/.test(formData.value.phone)) {
      newErrors.phone = '请输入有效的手机号码';
      isValid = false;
    }

    // 邮箱验证
    if (!formData.value.email) {
    newErrors.email = '请输入电子邮箱';
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    newErrors.email = '请输入有效的电子邮箱';
    isValid = false;
  }

  // 密码验证
  if (!formData.value.password) {
    newErrors.password = '请设置密码';
    isValid = false;
  } else if (formData.value.password.length < 8) {
    newErrors.password = '密码长度至少为8个字符';
    isValid = false;
  }

  // 确认密码验证
  if (!formData.value.confirmPassword) {
    newErrors.confirmPassword = '请确认密码';
    isValid = false;
  } else if (formData.value.confirmPassword !== formData.value.password) {
    newErrors.confirmPassword = '两次输入的密码不一致';
    isValid = false;
  }

  // 条款同意验证
  if (!formData.value.terms) {
    newErrors.terms = '请同意服务条款和隐私政策';
    isValid = false;
  }

  errors.value = newErrors;
  return isValid;
};

// 处理注册表单提交
const handleRegister = async () => {
  // 表单验证
  const isValid = validateForm();
  console.log('表单验证结果:', isValid, '错误信息:', errors.value);
  if (!isValid) return;

  try {
      isLoading.value = true;

      // 准备注册数据（排除确认密码字段）
      const registerData = {
        name: formData.value.username,
        username: formData.value.username,
        email: formData.value.email,
        phone: formData.value.phone,
        password: formData.value.password
      };

      // 调用API提交注册数据
      await userService.create(registerData);

      // 注册成功后的操作
      alert('注册成功！即将跳转到登录页面');
      // 跳转到登录页
      router.push('/login');
  } catch (error) {
    console.error('注册失败:', error);
    registrationError.value = error.message.includes('Network Error') ? '无法连接到服务器，请确保后端已启动' : error.response?.data?.message || '注册失败，请稍后重试';
  } finally {
    isLoading.value = false;
  }
};

// 处理社交注册
const socialRegister = (platform) => {
  alert(`即将使用${platform}注册`);
  // 实际项目中添加对应社交平台的注册逻辑
};
</script>

<style scoped>
/* 补充缺失的样式类 */
.text-dark {
  color: #1f2937;
}

.from-primary {
  --tw-gradient-from: #3b82f6;
  --tw-gradient-to: #2563eb;
}

.bg-primary {
  background-color: #3b82f6;
}

.text-primary {
  color: #3b82f6;
}

.btn-hover:hover {
  background-color: #2563eb;
}

.input-focus:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
}

.transition-custom {
  transition: all 0.2s ease-in-out;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .sm\:grid-cols-2 {
    grid-template-columns: 1fr;
  }

  .pt-24 {
    padding-top: 12rem;
  }
}

@media (max-width: 640px) {
  .grid-cols-4 {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}
</style>