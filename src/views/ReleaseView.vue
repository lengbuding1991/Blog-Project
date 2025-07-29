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
                v-model="article.tags"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="输入标签，用逗号分隔..."
              >
            </div>
          </div>
          
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-2">特色图片</label>
            <div 
              class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-all cursor-pointer" 
              @click="triggerFeaturedImageUpload"
              @dragover.prevent @dragleave.prevent @drop.prevent="handleImageDrop"
            >
              <input 
                type="file" 
                id="featured-image" 
                ref="featuredImageInput"
                class="hidden" 
                accept="image/*"
                @change="handleFeaturedImageChange"
              >
              <i class="fas fa-cloud-upload-alt text-3xl text-gray-400 mb-2"></i>
              <p class="text-gray-500">点击上传图片或拖放至此处</p>
              <p class="text-xs text-gray-400 mt-1">支持 JPG, PNG, GIF (最大 10MB)</p>
            </div>
            <div v-if="article.featuredImageUrl" class="mt-4">
              <img 
                :src="article.featuredImageUrl" 
                alt="预览图片" 
                class="max-h-64 rounded-lg shadow-sm"
              >
              <button 
                type="button" 
                class="mt-2 text-sm text-red-500 hover:text-red-700 transition-colors"
                @click="removeFeaturedImage"
              >
                <i class="fas fa-times mr-1"></i> 移除图片
              </button>
            </div>
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
          
          <div class="flex flex-col sm:flex-row justify-end gap-4">
            <button 
              type="button" 
              class="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all flex items-center justify-center"
              @click="saveDraft"
            >
              <i class="fas fa-save mr-2"></i> 保存草稿
            </button>
            <button 
              type="submit"
              class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all flex items-center justify-center"
            >
              <i class="fas fa-paper-plane mr-2"></i> 发布文章
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

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
  featuredImage: null,
  featuredImageUrl: '',
  content: '',
  publishImmediately: true,
  publishDate: '',
  allowComments: true,
  featuredPost: false
});

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

// 特色图片上传相关
const triggerFeaturedImageUpload = () => {
  featuredImageInput.value.click();
};

const handleFeaturedImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    handleImageFile(file, (url) => {
      article.value.featuredImage = file;
      article.value.featuredImageUrl = url;
    });
  }
};

const removeFeaturedImage = () => {
  article.value.featuredImage = null;
  article.value.featuredImageUrl = '';
  featuredImageInput.value.value = '';
};

// 处理拖放图片
const handleImageDrop = (e) => {
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) {
    handleImageFile(file, (url) => {
      article.value.featuredImage = file;
      article.value.featuredImageUrl = url;
    });
  }
};

// 处理图片文件
const handleImageFile = (file, callback) => {
  if (file.size > 10 * 1024 * 1024) {
    alert('图片大小不能超过10MB');
    return;
  }
  
  if (!file.type.startsWith('image/')) {
    alert('请上传图片文件');
    return;
  }
  
  const reader = new FileReader();
  reader.onload = (e) => {
    callback(e.target.result);
  };
  reader.readAsDataURL(file);
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
const handleSubmit = () => {
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
  
  console.log('发布文章:', { ...article.value });
  alert('文章发布成功！');
  router.push('/blog');
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