<template>
  <main class="pt-24 pb-16 px-4">
    <div class="container mx-auto">
      <!-- 页面标题和筛选区 -->
      <div class="mb-10">
        <h1 class="text-3xl font-bold mb-6">博客文章</h1>

        <!-- 搜索和筛选区 -->
        <div class="bg-white rounded-xl shadow-sm p-4 mb-8">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <!-- 搜索框 -->
            <div class="relative flex-grow max-w-md">
              <input v-model="searchQuery"
                class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-custom"
                placeholder="搜索文章..." type="text" @keyup.enter="handleSearch" />
              <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>

            <!-- 分类筛选 -->
            <div class="flex flex-wrap gap-2">
              <select v-model="selectedCategory"
                class="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-custom bg-white"
                @change="handleFilterChange">
                <option value="">所有分类</option>
                <option value="frontend">前端开发</option>
                <option value="backend">后端开发</option>
                <option value="mobile">移动开发</option>
                <option value="design">设计</option>
                <option value="ai">人工智能</option>
                <option value="cloud">云计算</option>
                <option value="other">其他</option>
              </select>

              <select v-model="sortBy"
                class="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-custom bg-white"
                @change="handleSortChange">
                <option value="latest">最新发布</option>
                <option value="popular">最多阅读</option>
                <option value="commented">最多评论</option>
              </select>
            </div>
          </div>
        </div>

        <!-- 分类标签 -->
        <div class="flex flex-wrap gap-1 mb-8 border-b border-gray-200 pb-1">
          <button @click="changeCategory('all')"
            :class="['category-badge px-4 py-2 rounded-t-lg font-medium transition-custom pb-1',
              currentCategory === 'all' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-300']">
            <i class="fas fa-th-large mr-1.5"></i>
            全部
          </button>

          <button @click="changeCategory('frontend')"
            :class="['category-badge px-4 py-2 rounded-t-lg font-medium transition-custom pb-1',
              currentCategory === 'frontend' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-300']">
            <i class="fab fa-html5 mr-1.5 text-orange-500"></i>
            前端开发
          </button>

          <button @click="changeCategory('backend')"
            :class="['category-badge px-4 py-2 rounded-t-lg font-medium transition-custom pb-1',
              currentCategory === 'backend' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-300']">
            <i class="fas fa-server mr-1.5 text-green-500"></i>
            后端开发
          </button>

          <button @click="changeCategory('mobile')"
            :class="['category-badge px-4 py-2 rounded-t-lg font-medium transition-custom pb-1',
              currentCategory === 'mobile' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-300']">
            <i class="fas fa-mobile-alt mr-1.5 text-purple-500"></i>
            移动开发
          </button>

          <button @click="changeCategory('design')"
            :class="['category-badge px-4 py-2 rounded-t-lg font-medium transition-custom pb-1',
              currentCategory === 'design' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-300']">
            <i class="fas fa-palette mr-1.5 text-yellow-500"></i>
            设计
          </button>

          <button @click="changeCategory('ai')"
            :class="['category-badge px-4 py-2 rounded-t-lg font-medium transition-custom pb-1',
              currentCategory === 'ai' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-300']">
            <i class="fas fa-brain mr-1.5 text-pink-500"></i>
            人工智能
          </button>

          <button @click="changeCategory('cloud')"
            :class="['category-badge px-4 py-2 rounded-t-lg font-medium transition-custom pb-1',
              currentCategory === 'cloud' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-300']">
            <i class="fas fa-cloud mr-1.5 text-indigo-500"></i>
            云计算
          </button>
        </div>
      </div>

      <!-- 文章列表 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article class="article-card bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-custom"
          v-for="article in filteredArticles" :key="article.id">
          <div class="relative">
            <img :alt="article.title" class="w-full h-48 object-cover" :src="article.imageUrl" />
            <span class="absolute top-3 left-3 category-badge px-2 py-1 rounded text-xs font-medium"
              :class="getCategoryColor(article.category)">
              {{ getCategoryName(article.category) }}
            </span>
          </div>

          <div class="p-5">
            <h2 class="text-xl font-bold mb-2 hover:text-blue-600 transition-custom">
              <a :href="`/article/${article.id}`" @click.prevent="handleArticleClick(article.id)">
                {{ article.title }}
              </a>
            </h2>

            <p class="text-gray-600 text-sm mb-4 line-clamp-3">
              {{ article.description }}
            </p>

            <div class="flex items-center justify-between text-sm text-gray-500">
              <div class="flex items-center">
                <img :alt="article.author" class="w-6 h-6 rounded-full mr-2 object-cover" :src="article.authorAvatar" />
                <span>{{ article.author }}</span>
              </div>

              <div class="flex items-center space-x-3">
                <span>
                  <i class="far fa-calendar-alt mr-1"></i>
                  {{ article.date }}
                </span>
                <span>
                  <i class="far fa-eye mr-1"></i>
                  {{ article.views }}
                </span>
                <span>
                  <i class="far fa-comment mr-1"></i>
                  {{ article.comments }}
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- 分页 -->
      <div class="mt-12 flex justify-center">
        <nav class="flex items-center space-x-2">
          <a @click="changePage(currentPage - 1)"
            :class="['pagination-item px-3 py-1 rounded', currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-100 hover:text-blue-600']"
            :disabled="currentPage === 1">
            <i class="fas fa-chevron-left"></i>
          </a>

          <template v-for="page in visiblePages" :key="page">
            <a @click="changePage(page)"
              :class="['pagination-item px-3 py-1 rounded', currentPage === page ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600']">
              {{ page }}
            </a>

            <span v-if="page === 3 && totalPages > 5" class="pagination-item text-gray-400">
              ...
            </span>
          </template>

          <a @click="changePage(currentPage + 1)"
            :class="['pagination-item px-3 py-1 rounded', currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-100 hover:text-blue-600']"
            :disabled="currentPage === totalPages">
            <i class="fas fa-chevron-right"></i>
          </a>
        </nav>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

// 状态管理
const searchQuery = ref('');
const selectedCategory = ref('');
const currentCategory = ref('all');
const sortBy = ref('latest');
const currentPage = ref(1);
const totalPages = ref(8);

// 文章数据
const articles = ref([
  {
    id: 1,
    title: '2023年前端开发技术趋势分析',
    description: '本文详细分析了2023年前端开发领域的主要技术趋势，包括框架演进、构建工具优化、性能提升策略以及用户体验设计的新方向。',
    category: 'frontend',
    imageUrl: 'https://design.gemcoder.com/staticResource/echoAiSystemImages/b5395eec8d8c3ac4ac97f7f308b6b564.png',
    author: '张开发',
    authorAvatar: 'https://design.gemcoder.com/staticResource/echoAiSystemImages/df0bb24bc29ae2c9f5d57b6077f44b45.png',
    date: '2023-06-15',
    views: '2.4k',
    comments: 42
  },
  {
    id: 2,
    title: 'Node.js应用性能优化实战指南',
    description: '探索Node.js应用性能优化的实用技巧，从内存管理、异步编程模式到数据库查询优化，帮助你构建高性能的后端服务。',
    category: 'backend',
    imageUrl: 'https://design.gemcoder.com/staticResource/echoAiSystemImages/4ee77fbf6980de7b42f647f0c00c46da.png',
    author: '李后端',
    authorAvatar: 'https://design.gemcoder.com/staticResource/echoAiSystemImages/3b97502c330f5dbe2648be4fb49338e3.png',
    date: '2023-05-28',
    views: '1.8k',
    comments: 36
  },
  {
    id: 3,
    title: 'React Native跨平台应用开发最佳实践',
    description: '总结React Native跨平台应用开发的最佳实践，包括组件设计、状态管理、性能优化以及原生模块集成等关键技术点。',
    category: 'mobile',
    imageUrl: 'https://design.gemcoder.com/staticResource/echoAiSystemImages/26d016258e65f594a612a1977b8234b0.png',
    author: '王移动',
    authorAvatar: 'https://design.gemcoder.com/staticResource/echoAiSystemImages/1de83a64439b785aabcf4a1b4cf2e5d9.png',
    date: '2023-07-02',
    views: '1.5k',
    comments: 28
  },
  {
    id: 4,
    title: '现代UI设计中的微交互设计原则',
    description: '深入探讨微交互在现代UI设计中的重要性，以及如何通过精心设计的微交互提升用户体验和产品品质。',
    category: 'design',
    imageUrl: 'https://design.gemcoder.com/staticResource/echoAiSystemImages/fac1bd15ce083b8e7d458f44eefe8087.png',
    author: '刘设计',
    authorAvatar: 'https://design.gemcoder.com/staticResource/echoAiSystemImages/2fd4b59943fdb007bd8ec15b5ec9a571.png',
    date: '2023-06-20',
    views: '3.1k',
    comments: 57
  },
  {
    id: 5,
    title: '使用TensorFlow.js构建浏览器端AI应用',
    description: '介绍如何利用TensorFlow.js在浏览器环境中构建和部署机器学习模型，实现客户端AI功能，提升应用交互体验。',
    category: 'ai',
    imageUrl: 'https://design.gemcoder.com/staticResource/echoAiSystemImages/99cc53ba7c782c43685885109589837c.png',
    author: '陈智能',
    authorAvatar: 'https://design.gemcoder.com/staticResource/echoAiSystemImages/b0ec1b897fe793927ff2282c19a0f314.png',
    date: '2023-07-10',
    views: '2.7k',
    comments: 49
  },
  {
    id: 6,
    title: '云原生应用架构设计与实践',
    description: '探讨云原生应用的核心架构原则，微服务设计模式，容器化部署策略以及如何利用云平台服务构建弹性可扩展的现代应用。',
    category: 'cloud',
    imageUrl: 'https://design.gemcoder.com/staticResource/echoAiSystemImages/0dded25499f157c9194029b9f4c3151f.png',
    author: '赵架构',
    authorAvatar: 'https://design.gemcoder.com/staticResource/echoAiSystemImages/c900e9ad1fa0acfdb30261431c6b9880.png',
    date: '2023-06-05',
    views: '2.2k',
    comments: 33
  }
]);

// 计算属性：过滤后的文章列表
const filteredArticles = computed(() => {
  return articles.value.filter(article => {
    // 搜索过滤
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.value.toLowerCase());

    // 分类过滤
    const matchesCategory = currentCategory.value === 'all' ||
      (selectedCategory.value ? article.category === selectedCategory.value : true) ||
      (currentCategory.value !== 'all' && article.category === currentCategory.value);

    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    // 排序逻辑
    switch (sortBy.value) {
      case 'popular':
        return parseFloat(b.views) - parseFloat(a.views);
      case 'commented':
        return b.comments - a.comments;
      case 'latest':
      default:
        return new Date(b.date) - new Date(a.date);
    }
  });
});

// 计算属性：可见的页码
const visiblePages = computed(() => {
  const pages = [];

  // 总是显示第一页
  pages.push(1);

  // 显示当前页附近的页码
  if (currentPage.value > 3) {
    pages.push(currentPage.value - 1);
  }

  if (currentPage.value !== 1 && currentPage.value !== totalPages.value) {
    pages.push(currentPage.value);
  }

  if (currentPage.value < totalPages.value - 2) {
    pages.push(currentPage.value + 1);
  }

  // 总是显示最后一页
  if (totalPages.value > 1) {
    pages.push(totalPages.value);
  }

  // 去重并排序
  return [...new Set(pages)].sort((a, b) => a - b);
});

// 方法：获取分类名称
const getCategoryName = (category) => {
  const categoryMap = {
    'frontend': '前端开发',
    'backend': '后端开发',
    'mobile': '移动开发',
    'design': '设计',
    'ai': '人工智能',
    'cloud': '云计算',
    'other': '其他'
  };
  return categoryMap[category] || '其他';
};

// 方法：获取分类颜色
const getCategoryColor = (category) => {
  const colorMap = {
    'frontend': 'bg-blue-500 text-white',
    'backend': 'bg-green-500 text-white',
    'mobile': 'bg-purple-500 text-white',
    'design': 'bg-yellow-500 text-white',
    'ai': 'bg-red-500 text-white',
    'cloud': 'bg-indigo-500 text-white',
    'other': 'bg-gray-500 text-white'
  };
  return colorMap[category] || 'bg-gray-500 text-white';
};

// 方法：切换分类
const changeCategory = (category) => {
  currentCategory.value = category;
  selectedCategory.value = category === 'all' ? '' : category;
  currentPage.value = 1; // 重置到第一页
};

// 方法：切换页码
const changePage = (page) => {
  if (page < 1 || page > totalPages.value) return;
  currentCategory.value = 'all'; // 重置分类
  currentPage.value = page;
  // 滚动到顶部
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// 方法：处理搜索
const handleSearch = () => {
  currentPage.value = 1; // 重置到第一页
};

// 方法：处理筛选变化
const handleFilterChange = () => {
  currentCategory.value = selectedCategory.value || 'all';
  currentPage.value = 1; // 重置到第一页
};

// 方法：处理排序变化
const handleSortChange = () => {
  // 排序变化时不需要重置页码
};

// 方法：处理文章点击
const handleArticleClick = (articleId) => {
  // 实际应用中可以使用路由导航
  console.log('查看文章:', articleId);
  // 例如: router.push(`/article/${articleId}`);
};

// 生命周期钩子
onMounted(() => {
  // 组件挂载时可以加载文章数据
  console.log('博客页面加载完成');
  // 实际应用中可以在这里调用API获取文章列表
});
</script>
