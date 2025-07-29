<template>
  <section class="py-16 md:py-24 bg-white" id="projects">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark mb-4">
          我的项目
        </h2>
        <div class="w-20 h-1 bg-primary mx-auto rounded-full">
        </div>
        <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
          展示我参与或独立完成的一些精选项目，每个项目都体现了我的技术能力和设计理念
        </p>
      </div>
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button v-for="filter in filters" :key="filter.value" :class="{
          'active bg-primary text-white': activeFilter === filter.value,
          'bg-gray-100 text-gray-700': activeFilter !== filter.value
        }" @click="handleFilterClick(filter.value)"
          class="project-filter px-5 py-2 rounded-full bg-gray-100 text-gray-700 font-medium transition-custom">
          {{ filter.label }}
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="card in filteredCards" :key="card.id" :data-category="card.category" class="project-card group">
          <div class="relative overflow-hidden rounded-xl shadow-md mb-4">
            <img :src="card.image" :alt="card.title"
              class="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div
              class="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div class="text-center p-4">
                <h4 class="text-white text-xl font-bold mb-2">
                  {{ card.title }}
                </h4>
                <div class="flex justify-center space-x-3 mt-4">
                  <a class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-custom"
                    href="javascript:void(0);">
                    <i class="fas fa-eye">
                    </i>
                  </a>
                  <a class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-custom"
                    href="javascript:void(0);">
                    <i class="fab fa-github">
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <h3 class="text-xl font-bold text-dark mb-2">{{ card.title }}</h3>
          <p class="text-gray-600 mb-3">{{ card.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-blue-100 text-primary text-xs rounded-full">
              {{ card.category }}
            </span>
          </div>
        </div>
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
import { ref, computed, onMounted } from 'vue';

// 定义筛选器数据
const filters = ref([
  { value: 'all', label: '全部' },
  { value: 'web', label: '网站' },
  { value: 'app', label: '应用' },
  { value: 'design', label: '设计' }
]);

// 定义项目卡片数据
const projectCards = ref([
  { id: 1, title: '项目一', category: 'web', description: '这是一个网站项目', image: 'https://picsum.photos/id/237/600/400' },
  { id: 2, title: '项目二', category: 'app', description: '这是一个移动应用项目', image: 'https://picsum.photos/id/238/600/400' },
  { id: 3, title: '项目三', category: 'design', description: '这是一个UI设计项目', image: 'https://picsum.photos/id/239/600/400' },
  { id: 4, title: '项目四', category: 'web', description: '这是一个响应式网站', image: 'https://picsum.photos/id/240/600/400' },
  { id: 5, title: '项目五', category: 'app', description: '这是一个社交应用', image: 'https://picsum.photos/id/241/600/400' },
  { id: 6, title: '项目六', category: 'design', description: '这是一个品牌设计项目', image: 'https://picsum.photos/id/242/600/400' }
]);

// 当前激活的筛选器
const activeFilter = ref('all');

// 计算属性：根据筛选条件过滤项目
const filteredCards = computed(() => {
  if (activeFilter.value === 'all') {
    return projectCards.value;
  }
  return projectCards.value.filter(card => card.category === activeFilter.value);
});

// 处理筛选器点击事件
const handleFilterClick = (filterValue) => {
  activeFilter.value = filterValue;
};

// 组件挂载时的初始化操作
onMounted(() => {
  console.log('项目筛选组件已挂载');
});
</script>
