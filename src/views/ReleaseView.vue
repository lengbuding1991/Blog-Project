<template>
  <main class="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
    <div class="max-w-4xl mx-auto">
      <div class="mb-8">
        <h1 class="text-[clamp(1.8rem,4vw,2.5rem)] font-bold text-gray-800 mb-2">发布新文章</h1>
        <p class="text-gray-600">创建并分享您的知识和见解</p>
      </div>
      
      <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
        <form @submit.prevent="handleSubmit">
          <div class="mb-6">
            <label for="title" class="block text-sm font-medium text-gray-700 mb-1">
              文章标题 <span class="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              id="title"
              name="title"
              autocomplete="article-title"
              v-model="article.title"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="输入吸引人的文章标题..."
            >
          </div>
          
          <div class="mb-6">
            <label for="excerpt" class="block text-sm font-medium text-gray-700 mb-1">
              文章摘要 <span class="text-red-500">*</span>
            </label>
            <textarea 
              id="excerpt"
              name="excerpt"
              autocomplete="article-summary"
              v-model="article.excerpt"
              rows="3"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="简要描述文章内容，将显示在文章列表中..."
            ></textarea>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label for="category" class="block text-sm font-medium text-gray-700 mb-1">
                文章分类 <span class="text-red-500">*</span>
              </label>
              <select 
                id="category"
                name="category"
                autocomplete="article-section"
                v-model="article.category"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              >
                <option value="">选择分类</option>
                <option value="technology">技术</option>
                <option value="design">设计</option>
                <option value="development">开发</option>
                <option value="tutorial">教程</option>
                <option value="other">其他</option>
              </select>
            </div>
            <div>
              <label for="tags" class="block text-sm font-medium text-gray-700 mb-1">标签</label>
              <input 
                type="text"
                id="tags"
                name="tags"
                autocomplete="tags"
                v-model="article.tags"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="输入标签，用逗号分隔..."
              >
            </div>
          </div>
          
          <div class="mb-6">
            <label for="imageUrl" class="block text-sm font-medium text-gray-700 mb-1">
              特色图片链接
            </label>
            <input 
              type="url" 
              id="imageUrl"
              name="imageUrl"
              v-model="article.imageUrl"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="输入图片URL地址..."
            >
            <p class="text-xs text-gray-400 mt-1">输入有效的图片URL（支持JPG, PNG, GIF格式）</p>
          </div>
          
          <div class="mb-6">
            <label for="content" class="block text-sm font-medium text-gray-700 mb-2">
              文章内容 <span class="text-red-500">*</span>
            </label>
            
            <div class="border border-gray-300 rounded-lg overflow-hidden">
              <div ref="editorToolbar" class="bg-gray-50 p-2 border-b border-gray-300"></div>
              <div ref="editorContent" class="min-h-[400px] px-4 py-3"></div>
            </div>
            <div class="text-xs text-gray-500 mt-2">
              提示：输入内容后可使用工具栏按钮进行格式化
            </div>
          </div>
          
          <div class="mb-8 bg-gray-50 p-4 rounded-lg">
            <h3 class="font-medium text-gray-800 mb-3 flex items-center">
              <i class="fas fa-cog text-blue-500 mr-2"></i> 发布设置
            </h3>
            <div class="space-y-4">
              <div class="flex items-center">
                <input 
                  type="checkbox" 
                  id="publish-immediately" 
                  v-model="article.publishImmediately"
                  class="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                >
                <label for="publish-immediately" class="ml-2 block text-sm text-gray-700">立即发布</label>
              </div>
              <div v-if="!article.publishImmediately">
                <label for="publish-date" class="block text-sm font-medium text-gray-700 mb-1">预定发布日期</label>
                <input 
                  type="datetime-local"
                  id="publish-date"
                  name="publish-date"
                  autocomplete="bday"
                  v-model="article.publishDate"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                >
              </div>
              <div class="flex items-center">
                <input 
                  type="checkbox" 
                  id="allow-comments" 
                  v-model="article.allowComments"
                  class="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                >
                <label for="allow-comments" class="ml-2 block text-sm text-gray-700">允许评论</label>
              </div>
              <div class="flex items-center">
                <input 
                  type="checkbox" 
                  id="featured-post" 
                  v-model="article.featuredPost"
                  class="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                >
                <label for="featured-post" class="ml-2 block text-sm text-gray-700">设为精选文章</label>
              </div>
            </div>
          </div>
          
          <div v-if="successMessage" class="mb-4 p-3 bg-green-50 text-green-600 rounded-lg text-sm">
  <i class="fas fa-check-circle mr-1"></i> {{ successMessage }}
</div>
<div v-if="errorMessage" class="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
              <i class="fas fa-exclamation-circle mr-1"></i> {{ errorMessage }}
            </div>

            <div class="flex flex-col sm:flex-row justify-end gap-4">
              <button 
                type="button" 
                class="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all flex items-center justify-center"
                @click="saveDraft"
                :disabled="isSubmitting"
              >
                <i class="fas fa-save mr-2"></i> 保存草稿
              </button>
              <button 
                type="submit"
                class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all flex items-center justify-center"
                :disabled="isSubmitting"
              >
                <i v-if="!isSubmitting" class="fas fa-paper-plane mr-2"></i>
                <i v-if="isSubmitting" class="fas fa-spinner fa-spin mr-2"></i>
                {{ isSubmitting ? '发布中...' : '发布文章' }}
              </button>
            </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import axios from 'axios';

// 配置 Quill 模块
const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{'header': 1}, {'header': 2}],
  [{'list': 'ordered'}, {'list': 'bullet'}],
  [{'script': 'sub'}, {'script': 'super'}],
  [{'indent': '-1'}, {'indent': '+1'}],
  [{'direction': 'rtl'}],
  [{'size': ['small', false, 'large', 'huge']}],
  [{'header': [1, 2, 3, 4, 5, 6, false]}],
  [{'color': []}, {'background': []}],
  [{'font': []}],
  [{'align': []}],
  ['clean'],
  ['link', 'image', 'video']
];

// 路由实例
const router = useRouter();

// 文章数据
const article = ref({
  title: '',
  excerpt: '',
  category: '',
  tags: '',
  imageUrl: '',
  content: '',
  publishImmediately: true,
  publishDate: '',
  allowComments: true,
  featuredPost: false
});

// 错误信息
const errorMessage = ref('');
const successMessage = ref('');
// 加载状态
const isSubmitting = ref(false);

// API基础URL
const API_BASE_URL = 'http://localhost:3000'; // 确保与后端端口一致
const TIMEOUT = 10000; // 10秒超时

// DOM引用
const editorToolbar = ref(null);
const editorContent = ref(null);
const featuredImageInput = ref(null);
let quillEditor = null;

// 初始化
onMounted(() => {
  const now = new Date();
  const formattedDate = now.toISOString().slice(0, 16);
  article.value.publishDate = formattedDate;
  
  // 初始化Quill编辑器
  quillEditor = new Quill(editorContent.value, {
    modules: {
      toolbar: {
        container: toolbarOptions,
        handlers: {
          image: handleImageUpload
        }
      }
    },
    theme: 'snow',
    placeholder: '开始撰写您的文章内容...'
  });
  
  // 监听编辑器内容变化
  quillEditor.on('text-change', () => {
    article.value.content = quillEditor.root.innerHTML;
  });
  
  // 添加自定义样式
  const style = document.createElement('style');
  style.innerHTML = `
    .ql-editor {
      min-height: 400px;
      padding: 1rem;
      font-size: 16px;
    }
    .ql-toolbar.ql-snow {
      border-bottom: 1px solid #e5e7eb;
    }
  `;
  document.head.appendChild(style);
});

// 组件卸载时销毁编辑器
onUnmounted(() => {
  if (quillEditor) {
    quillEditor.off('text-change');
    quillEditor = null;
  }
});

// 处理图片上传
const handleImageUpload = () => {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';
  fileInput.onchange = () => {
    const file = fileInput.files[0];
    if (file) {
      handleImageFile(file, (url) => {
        const range = quillEditor.getSelection();
        quillEditor.insertEmbed(range.index, 'image', url);
        quillEditor.setSelection(range.index + 1);
      });
    }
  };
  fileInput.click();
};

// 处理图片加载错误
  const handleImageError = () => {
    article.value.imageUrl = '';
    errorMessage.value = '图片链接无效，请输入有效的图片URL';
  };

// 保存草稿
const saveDraft = () => {
  if (!article.value.title.trim()) {
    alert('请输入文章标题');
    return;
  }
  
  if (!article.value.excerpt.trim()) {
    alert('请输入文章摘要');
    return;
  }
  
  if (!article.value.category) {
    alert('请选择文章分类');
    return;
  }
  
  const plainText = article.value.content.replace(/<[^>]*>?/gm, '').trim();
  if (!plainText) {
    alert('请输入文章内容');
    return;
  }
  
  console.log('保存草稿:', { ...article.value });
  alert('草稿保存成功！');
};

// 处理提交
const handleSubmit = async () => {
  // 确保捕获最新的编辑器内容
  // 确保捕获编辑器内容
    if (quillEditor) {
      const editorContent = quillEditor.root.innerHTML.trim();
      article.value.content = editorContent || '<p></p>';
      console.log('捕获的编辑器内容:', article.value.content);
    } else {
      console.error('Quill编辑器未初始化');
      article.value.content = '';
    }

  errorMessage.value = '';

  if (!article.value.title.trim()) {
    errorMessage.value = '请输入文章标题';
    return;
  }

  if (!article.value.excerpt.trim()) {
    errorMessage.value = '请输入文章摘要';
    return;
  }

  if (!article.value.category) {
    errorMessage.value = '请选择文章分类';
    return;
  }

  const plainText = article.value.content.replace(/<[^>]*>?/gm, '').trim();
  if (!plainText) {
    errorMessage.value = '请输入文章内容';
    return;
  }

  try {
  isSubmitting.value = true;

    // 格式化标签为数组
    const tagsArray = article.value.tags
      ? article.value.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
      : [];

    // 创建JSON数据对象
    const postData = {
      title: article.value.title,
      content: article.value.content,
      excerpt: article.value.excerpt,
      category: article.value.category,
      tags: tagsArray,
      publishImmediately: article.value.publishImmediately,
      allowComments: article.value.allowComments,
      featuredPost: article.value.featuredPost,
      coverImageUrl: article.value.imageUrl || undefined
    };

    // 条件性添加publishDate
    if (!article.value.publishImmediately && article.value.publishDate) {
      postData.publishDate = article.value.publishDate;
    }

    // 验证所有必填字段
if (!article.value.title.trim()) {
  errorMessage.value = '请输入文章标题';
  isSubmitting.value = false;
  return;
}
if (!article.value.content.trim()) {
  errorMessage.value = '请输入文章内容';
  isSubmitting.value = false;
  return;
}
if (!article.value.excerpt.trim()) {
  errorMessage.value = '请输入文章摘要';
  isSubmitting.value = false;
  return;
}
if (!article.value.category) {
  errorMessage.value = '请选择文章分类';
  isSubmitting.value = false;
  return;
}

// 调试日志
console.log('提交的文章数据:', {
  title: article.value.title,
  content: article.value.content,
  excerpt: article.value.excerpt,
  category: article.value.category,
  hasImage: !!article.value.featuredImage
});

// 发送请求前验证关键数据
    console.log('Title value before send:', article.value.title);
    console.log('Content value before send:', article.value.content);
    // 发送请求到后端
    console.log('Sending post data:', postData);
    const response = await axios.post(`${API_BASE_URL}/articles`, postData, {
      headers: { 'Content-Type': 'application/json' },
      timeout: TIMEOUT
    });

    // 验证响应数据与提交数据匹配
// 适配MongoDB的_id字段
const responseId = response.data?._id;
const responseTitle = response.data?.title?.trim() || '';
const submittedTitle = article.value.title.trim();
const isTitleMatch = responseTitle.toLowerCase() === submittedTitle.toLowerCase();

if (response && (response.status === 201 || response.status === 200) && 
    responseId && typeof responseId === 'string' && responseId.length > 0 && 
    responseTitle && isTitleMatch) {
  // 详细日志确认成功状态
console.log('文章发布成功，后端响应:', response.data);
successMessage.value = '文章发布成功！正在跳转到首页...';
setTimeout(() => {
  router.push('/');
}, 2000);
} else {
  // 详细日志记录失败原因
console.log('文章发布失败，后端响应:', response);
errorMessage.value = `发布失败: ${response?.data?.message || '服务器返回异常，请稍后重试'}`;
}
  } catch (error) {
    // 详细错误日志
console.error('发布请求错误详情:', {
  message: error.message,
  status: error.response?.status,
  statusText: error.response?.statusText,
  data: error.response?.data,
  config: { url: error.config?.url, method: error.config?.method }
});
    if (error.response) {
      // 服务器响应错误
      errorMessage.value = `发布失败 [${error.response.status}]: ${JSON.stringify(error.response.data) || '服务器错误'}`;
    } else if (error.request) {
      // 无响应错误
      errorMessage.value = '发布失败: 无法连接到服务器，请检查后端服务是否运行在 http://localhost:3000';
    } else {
      // 请求配置错误
      errorMessage.value = `发布失败: ${error.message}`;
    }
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.ql-editor img {
  max-width: 100%;
  height: auto;
  margin: 1rem 0;
  border-radius: 0.5rem;
}

@media (max-width: 768px) {
  .ql-toolbar.ql-snow .ql-formats {
    margin-bottom: 0.5rem;
  }
}
</style>