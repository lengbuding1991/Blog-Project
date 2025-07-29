<template>
  <section class="py-16 md:py-24 bg-gray-50" id="contact">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark mb-4">
          联系我
        </h2>
        <div class="w-20 h-1 bg-primary mx-auto rounded-full">
        </div>
        <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
          有任何问题或合作意向？请随时与我联系，我会尽快回复您
        </p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div class="bg-white p-8 rounded-xl shadow-md h-full">
            <h3 class="text-2xl font-bold text-dark mb-6">
              发送消息
            </h3>
            <form class="space-y-6" id="contact-form" @submit.prevent="handleSubmit">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1" for="name">
                    姓名
                  </label>
                  <input
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-custom"
                    id="name" name="name" placeholder="您的姓名" required type="text" v-model="formData.name" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1" for="email">
                    邮箱
                  </label>
                  <input
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-custom"
                    id="email" name="email" placeholder="您的邮箱" required type="email" v-model="formData.email" />
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1" for="subject">
                  主题
                </label>
                <input
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-custom"
                  id="subject" name="subject" placeholder="消息主题" required type="text" v-model="formData.subject" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1" for="message">
                  消息
                </label>
                <textarea
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-custom"
                  id="message" name="message" placeholder="请输入您的消息内容..." required rows="5"
                  v-model="formData.message"></textarea>
              </div>
              <button
                class="w-full px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition-custom flex items-center justify-center"
                type="submit" :disabled="isSubmitting">
                <span v-if="!isSubmitting">发送消息</span>
                <span v-else><i class="fas fa-spinner fa-spin mr-2"></i> 发送中...</span>
                <i class="fas fa-paper-plane ml-2" v-if="!isSubmitting"></i>
              </button>
            </form>
          </div>
        </div>
        <div class="flex flex-col justify-between">
          <div>
            <h3 class="text-2xl font-bold text-dark mb-6">
              联系方式
            </h3>
            <div class="space-y-6">
              <div class="flex items-start">
                <div
                  class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <i class="fas fa-map-marker-alt">
                  </i>
                </div>
                <div>
                  <h4 class="font-bold text-dark mb-1">
                    地址
                  </h4>
                  <p class="text-gray-600">
                    北京市朝阳区创意园区A座1001室
                  </p>
                </div>
              </div>
              <div class="flex items-start">
                <div
                  class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <i class="fas fa-envelope">
                  </i>
                </div>
                <div>
                  <h4 class="font-bold text-dark mb-1">
                    邮箱
                  </h4>
                  <p class="text-gray-600">
                    contact@example.com
                  </p>
                </div>
              </div>
              <div class="flex items-start">
                <div
                  class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <i class="fas fa-phone">
                  </i>
                </div>
                <div>
                  <h4 class="font-bold text-dark mb-1">
                    电话
                  </h4>
                  <p class="text-gray-600">
                    +86 123 4567 8910
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-12">
              <h3 class="text-2xl font-bold text-dark mb-6">
                关注我
              </h3>
              <div class="flex space-x-4">
                <a class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-custom"
                  href="javascript:void(0);">
                  <i class="fab fa-github">
                  </i>
                </a>
                <a class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-custom"
                  href="javascript:void(0);">
                  <i class="fab fa-linkedin">
                  </i>
                </a>
                <a class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-custom"
                  href="javascript:void(0);">
                  <i class="fab fa-twitter">
                  </i>
                </a>
                <a class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-custom"
                  href="javascript:void(0);">
                  <i class="fab fa-dribbble">
                  </i>
                </a>
                <a class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-custom"
                  href="javascript:void(0);">
                  <i class="fab fa-instagram">
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div class="mt-12">
            <img alt="工作环境" class="w-full h-auto rounded-xl shadow-md"
              src="https://design.gemcoder.com/staticResource/echoAiSystemImages/34872d8241bb396c969a2cab1cba0fed.png" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// 表单数据
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

// 提交状态
const isSubmitting = ref(false);

// 处理表单提交
const handleSubmit = () => {
  // 简单表单验证
  if (!formData.value.name || !formData.value.email || !formData.value.subject || !formData.value.message) {
    alert('请填写所有必填字段');
    return;
  }

  // 模拟表单提交
  isSubmitting.value = true;

  // 模拟API请求延迟
  setTimeout(() => {
    alert('消息发送成功！我会尽快回复您。');
    // 重置表单
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    isSubmitting.value = false;
  }, 1500);
};
</script>
