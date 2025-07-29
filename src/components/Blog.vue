<template>
  <section class="py-16 md:py-24 bg-white" id="blog">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark mb-4">
          我的博客
        </h2>
        <div class="w-20 h-1 bg-primary mx-auto rounded-full">
        </div>
        <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
          分享我的技术学习心得、项目经验和前端开发相关的思考
        </p>
      </div>

      <!-- 博客分类筛选 -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button v-for="filter in filters" :key="filter.value" :data-filter="filter.value" :class="{
          'active bg-primary text-white': activeFilter === filter.value,
          'bg-gray-100 text-gray-700': activeFilter !== filter.value,
          'px-5 py-2 rounded-full font-medium transition-custom': true
        }" @click="handleFilterClick(filter.value)">
          {{ filter.label }}
        </button>
      </div>

      <!-- 博客文章列表 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- 博客文章1 -->
        <article v-for="post in filteredPosts" :key="post.id" :data-category="post.category"
          class="blog-post card-hover bg-white rounded-xl shadow-md overflow-hidden">
          <div class="relative">
            <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover" />
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 text-white text-xs rounded-full" :class="getCategoryColor(post.category)">
                {{ post.categoryText }}
              </span>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center text-gray-500 text-sm mb-3">
              <i class="far fa-calendar-alt mr-2"></i>
              <span>{{ post.date }}</span>
              <span class="mx-2">•</span>
              <i class="far fa-clock mr-2"></i>
              <span>{{ post.readTime }} 分钟阅读</span>
            </div>
            <h3 class="text-xl font-bold text-dark mb-3 hover:text-primary transition-custom">
              <a href="javascript:void(0);">{{ post.title }}</a>
            </h3>
            <p class="text-gray-600 mb-4 line-clamp-3">
              {{ post.description }}
            </p>
            <a class="inline-flex items-center text-primary font-medium hover:underline" href="javascript:void(0);">
              <span>阅读更多</span>
              <i class="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </article>
      </div>

      <!-- 加载更多按钮 -->
      <div class="text-center mt-12">
        <a class="inline-flex items-center px-6 py-3 bg-white text-primary border border-primary rounded-lg hover:bg-gray-50 transition-custom"
          href="/list">
          <span>查看更多</span>
          <i class="fas fa-spinner ml-2"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

// 定义筛选器数据
const filters = ref([
  { value: 'all', label: '全部文章' },
  { value: 'frontend', label: '前端开发' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'react', label: 'React' },
  { value: 'ux', label: 'UI/UX设计' }
]);

// 定义博客文章数据
const blogPosts = ref([
  {
    id: 1,
    title: '2023年前端开发最佳实践与性能优化技巧',
    category: 'frontend',
    categoryText: '前端开发',
    date: '2023-10-15',
    readTime: 8,
    description: '本文详细介绍了2023年前端开发的最新趋势和最佳实践，包括性能优化、代码组织和用户体验提升的实用技巧...',
    image: 'https://design.gemcoder.com/staticResource/echoAiSystemImages/a1edbf33d11e38d8a2eedecd19dd8978.png'
  },
  {
    id: 2,
    title: 'JavaScript高级特性详解：从Promise到Async/Await',
    category: 'javascript',
    categoryText: 'JavaScript',
    date: '2023-09-28',
    readTime: 12,
    description: '深入探讨JavaScript中的异步编程模式，从Promise到Async/Await的演进过程，以及如何在实际项目中有效应用这些特性...',
    image: 'https://design.gemcoder.com/staticResource/echoAiSystemImages/3cc0cec63cba651e4f84ad2bf29a50da.png'
  },
  {
    id: 3,
    title: 'React性能优化实战：从理论到实践',
    category: 'react',
    categoryText: 'React',
    date: '2023-09-10',
    readTime: 10,
    description: '分享React应用性能优化的实用方法和工具，包括组件重渲染控制、状态管理优化和代码分割等关键技术点...',
    image: 'https://design.gemcoder.com/staticResource/echoAiSystemImages/84cdc8a62e3d3c436fc8112a24e34f94.png'
  },
  {
    id: 4,
    title: '2023年UI/UX设计趋势：极简主义回归',
    category: 'ux',
    categoryText: 'UI/UX设计',
    date: '2023-08-25',
    readTime: 15,
    description: '分析当前UI/UX设计领域的最新趋势，探讨极简主义设计如何提升用户体验，以及如何在项目中有效应用这些设计理念...',
    image: 'https://design.gemcoder.com/staticResource/echoAiSystemImages/4117ec616a0fc9e0def9773d5023d650.png'
  },
  {
    id: 5,
    title: '响应式设计高级技巧：超越媒体查询',
    category: 'frontend',
    categoryText: '前端开发',
    date: '2023-08-12',
    readTime: 7,
    description: '探索响应式设计的高级技术，包括CSS Grid、Flexbox和CSS变量的结合使用，以及如何实现真正的跨设备一致体验...',
    image: 'https://design.gemcoder.com/staticResource/echoAiSystemImages/c7c6f92c5041a50e7e00bd63baf5af96.png'
  },
  {
    id: 6,
    title: 'TypeScript高级类型与最佳实践指南',
    category: 'javascript',
    categoryText: 'JavaScript',
    date: '2023-07-30',
    readTime: 14,
    description: '深入探讨TypeScript的高级类型特性，包括泛型、条件类型和映射类型，以及如何在大型项目中有效应用TypeScript...',
    image: 'https://design.gemcoder.com/staticResource/echoAiSystemImages/a6afbe7fb8ccdd7708bbcc96091e33ec.png'
  }
]);

// 当前激活的筛选器
const activeFilter = ref('all');

// 计算属性：根据筛选条件过滤博客文章
const filteredPosts = computed(() => {
  if (activeFilter.value === 'all') {
    return blogPosts.value;
  }
  return blogPosts.value.filter(post => post.category === activeFilter.value);
});

// 获取分类标签的颜色类
const getCategoryColor = (category) => {
  const colors = {
    'frontend': 'bg-primary',
    'javascript': 'bg-secondary',
    'react': 'bg-accent',
    'ux': 'bg-yellow-500'
  };
  return colors[category] || 'bg-gray-500';
};

// 处理筛选器点击事件
const handleFilterClick = (filterValue) => {
  activeFilter.value = filterValue;
};
</script>
