<template>
  <main class="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
    <!-- 文章头部 -->
    <div class="max-w-4xl mx-auto mb-12">
      <div class="flex items-center text-sm text-gray-500 mb-4">
        <router-link to="/blog" class="hover:text-primary transition-custom">博客</router-link>
        <span class="mx-2">/</span>
        <router-link to="/blog/category/frontend" class="hover:text-primary transition-custom">前端开发</router-link>
      </div>

      <h1 class="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight text-balance">
        深入理解Tailwind CSS：现代实用优先的CSS框架
      </h1>

      <div class="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div class="flex items-center space-x-3">
          <img :src="author.avatar" alt="作者头像" class="w-10 h-10 rounded-full object-cover">
          <div>
            <p class="font-medium">{{ author.name }}</p>
            <p class="text-sm text-gray-500">{{ author.title }}</p>
          </div>
        </div>

        <div class="flex items-center space-x-6 text-sm text-gray-500">
          <div class="flex items-center">
            <i class="far fa-calendar-alt mr-2"></i>
            <span>{{ article.publishDate }}</span>
          </div>
          <div class="flex items-center">
            <i class="far fa-clock mr-2"></i>
            <span>{{ article.readTime }}</span>
          </div>
          <div class="flex items-center">
            <i class="far fa-comment mr-2"></i>
            <span>{{ article.commentCount }}条评论</span>
          </div>
        </div>
      </div>

      <!-- 文章封面图 -->
      <div class="rounded-xl overflow-hidden mb-8 shadow-lg">
        <img :src="article.coverImage" alt="文章封面" class="w-full h-auto object-cover">
      </div>

      <!-- 文章标签 -->
      <div class="flex flex-wrap gap-2 mb-8">
        <span v-for="tag in article.tags" :key="tag.id" class="px-3 py-1 rounded-full text-sm" :class="tag.styleClass">
          {{ tag.name }}
        </span>
      </div>
    </div>

    <!-- 文章内容 -->
    <div class="max-w-3xl mx-auto article-content">
      <p class="text-lg text-gray-700 leading-relaxed">
        在现代前端开发中，CSS的管理一直是一个挑战。随着项目规模的增长，传统的CSS组织方式往往导致样式冲突、代码冗余和维护困难。Tailwind
        CSS作为一个实用优先（utility-first）的CSS框架，提供了一种全新的样式开发方式，正在改变我们编写CSS的方式。
      </p>

      <h2 class="text-2xl font-bold mt-8 mb-4">什么是实用优先的CSS框架？</h2>

      <p class="mb-4">
        实用优先的CSS框架与传统框架（如Bootstrap或Foundation）有本质区别。传统框架提供预定义的组件类（如&lt;button class="btn
        btn-primary"&gt;），而实用优先框架提供低级别的实用类（如class="flex justify-center items-center p-4 bg-blue-500 text-white
        rounded-md"），让你能够直接在HTML中构建自定义设计，而无需编写CSS。
      </p>

      <blockquote class="border-l-4 border-primary pl-4 italic my-6 text-gray-700">
        Tailwind CSS不直接提供UI组件，而是提供构建块，让你能够轻松创建任何设计。这种方法使你的CSS保持最小，同时赋予你完全的设计自由。
      </blockquote>

      <h2 class="text-2xl font-bold mt-8 mb-4">Tailwind CSS的核心优势</h2>

      <h3 class="text-xl font-semibold mt-6 mb-3">1. 开发速度显著提升</h3>

      <p class="mb-4">
        使用Tailwind，你可以直接在HTML中应用类来设计元素，无需在CSS文件和HTML文件之间切换。这种"即时反馈"的开发方式极大地加快了UI开发速度。
      </p>

      <div class="bg-gray-100 p-6 rounded-lg my-6 overflow-x-auto">
        <pre class="text-sm"><code>&lt;!-- 使用Tailwind直接在HTML中设计按钮 --&gt;
&lt;button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"&gt;
  点击我
&lt;/button&gt;</code></pre>
      </div>

      <h3 class="text-xl font-semibold mt-6 mb-3">2. 一致的设计系统</h3>

      <p class="mb-4">
        Tailwind强制你使用预定义的设计标记（颜色、间距、字体大小等），确保整个项目的视觉一致性。你不再需要猜测应该使用哪个像素值的边距或哪种确切的蓝色色调。
      </p>

      <div class="my-8">
        <img src="https://design.gemcoder.com/staticResource/echoAiSystemImages/c1d9fb93f87f8b5bef74ba1a90df3b47.png"
          alt="Tailwind设计系统" class="w-full h-auto rounded-lg shadow-md">
        <p class="text-sm text-gray-500 mt-2 text-center">Tailwind的设计系统确保了整个项目的视觉一致性</p>
      </div>

      <h3 class="text-xl font-semibold mt-6 mb-3">3. 响应式设计变得简单</h3>

      <p class="mb-4">
        Tailwind内置了响应式前缀（sm:, md:, lg:, xl:），使创建响应式界面变得异常简单。无需编写媒体查询，只需在类名前添加相应的前缀即可。
      </p>

      <div class="bg-gray-100 p-6 rounded-lg my-6 overflow-x-auto">
        <pre class="text-sm"><code>&lt;div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"&gt;
  &lt;div class="p-4 bg-white rounded shadow"&gt;卡片1&lt;/div&gt;
  &lt;div class="p-4 bg-white rounded shadow"&gt;卡片2&lt;/div&gt;
  &lt;div class="p-4 bg-white rounded shadow"&gt;卡片3&lt;/div&gt;
  &lt;div class="p-4 bg-white rounded shadow"&gt;卡片4&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>

      <!-- 更多文章内容 -->
      <h2 class="text-2xl font-bold mt-8 mb-4">开始使用Tailwind CSS</h2>

      <p class="mb-4">
        要开始使用Tailwind CSS，你可以通过npm安装它，或者直接在HTML中通过CDN引入：
      </p>

      <div class="bg-gray-100 p-6 rounded-lg my-6 overflow-x-auto">
        <pre class="text-sm"><code>&lt;!-- 通过CDN引入Tailwind CSS --&gt;
&lt;script src="https://cdn.tailwindcss.com"&gt;&lt;/script&gt;</code></pre>
      </div>

      <p class="mb-4">
        对于生产环境，建议使用Tailwind CLI或PostCSS插件来构建和优化CSS，只包含你实际使用的类，从而减小文件大小。
      </p>

      <h2 class="text-2xl font-bold mt-8 mb-4">常见问题与解决方案</h2>

      <h3 class="text-xl font-semibold mt-6 mb-3">HTML变得臃肿？</h3>

      <p class="mb-4">
        一个常见的批评是Tailwind会使HTML变得臃肿，因为元素上会有很多类。解决方案是使用@apply指令将常用组合提取到CSS中，或者使用组件抽象（如在React、Vue或其他框架中创建组件）。
      </p>

      <div class="bg-gray-100 p-6 rounded-lg my-6 overflow-x-auto">
        <pre class="text-sm"><code>&lt;!-- 在CSS中使用@apply提取常用组合 --&gt;
&lt;style type="text/tailwindcss"&gt;
  @layer components {
    .btn-primary {
      @apply bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded;
    }
  }
&lt;/style&gt;
&lt;!-- 在HTML中使用 --&gt;
&lt;button class="btn-primary"&gt;点击我&lt;/button&gt;</code></pre>
      </div>

      <h3 class="text-xl font-semibold mt-6 mb-3">学习曲线陡峭？</h3>

      <p class="mb-4">
        刚开始可能需要频繁查阅文档来记住所有的类名。但一旦熟悉了命名模式（如bg-[color]-[shade]、text-[color]-[shade]、p-[size]等），你会发现编写Tailwind代码变得非常自然。
      </p>

      <h2 class="text-2xl font-bold mt-8 mb-4">结语</h2>

      <p class="mb-4">
        Tailwind
        CSS代表了现代CSS开发的一种趋势，它通过提供低级别的实用类，让开发者能够快速构建独特的界面，同时保持代码的可维护性和一致性。虽然它的方法可能与传统CSS开发有所不同，但一旦克服了初始学习曲线，你会发现它极大地提高了开发效率。
      </p>

      <p>
        无论你是独立开发者还是在大型团队中工作，Tailwind CSS都能帮助你构建美观、一致且响应式的网站，而无需编写大量自定义CSS。
      </p>
    </div>

    <!-- 文章底部 -->
    <div class="max-w-3xl mx-auto mt-16 pt-8 border-t border-gray-200">
      <!-- 分享按钮 -->
      <div class="flex flex-wrap items-center justify-between gap-4 mb-12">
        <h3 class="text-lg font-bold">分享这篇文章</h3>
        <div class="flex space-x-3">
          <button @click="shareArticle('facebook')"
            class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-custom"
            aria-label="分享到Facebook">
            <i class="fab fa-facebook-f"></i>
          </button>
          <button @click="shareArticle('twitter')"
            class="w-10 h-10 rounded-full bg-sky-400 flex items-center justify-center text-white hover:bg-sky-500 transition-custom"
            aria-label="分享到Twitter">
            <i class="fab fa-twitter"></i>
          </button>
          <button @click="shareArticle('whatsapp')"
            class="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition-custom"
            aria-label="分享到Whatsapp">
            <i class="fab fa-whatsapp"></i>
          </button>
          <button @click="shareArticle('github')"
            class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-900 transition-custom"
            aria-label="分享到Github">
            <i class="fab fa-github"></i>
          </button>
          <button @click="shareArticle('linkedin')"
            class="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white hover:bg-blue-800 transition-custom"
            aria-label="分享到Linkedin">
            <i class="fab fa-linkedin-in"></i>
          </button>
        </div>
      </div>

      <!-- 作者信息 -->
      <div class="flex flex-col md:flex-row gap-6 items-center md:items-start p-6 bg-gray-50 rounded-xl mb-12">
        <img src="https://design.gemcoder.com/staticResource/echoAiSystemImages/46c3fceabcaacfa061d1d80ef7d8e4f5.png"
          alt="作者头像" class="w-20 h-20 rounded-full object-cover">
        <div class="flex-1">
          <h3 class="text-xl font-bold mb-2">{{ author.name }}</h3>
          <p class="text-gray-600 mb-4">{{ author.bio }}</p>
          <div class="flex space-x-4">
            <a :href="author.social.github" class="text-gray-500 hover:text-primary transition-custom"
              aria-label="Github">
              <i class="fab fa-github"></i>
            </a>
            <a :href="author.social.linkedin" class="text-gray-500 hover:text-primary transition-custom"
              aria-label="Linkedin">
              <i class="fab fa-linkedin"></i>
            </a>
            <a :href="author.social.twitter" class="text-gray-500 hover:text-primary transition-custom"
              aria-label="Twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a :href="author.social.codepen" class="text-gray-500 hover:text-primary transition-custom"
              aria-label="Codepen">
              <i class="fab fa-codepen"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- 相关文章 -->
      <div class="mb-12">
        <h3 class="text-2xl font-bold mb-6">你可能也喜欢</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <router-link :to="`/article/${relatedArticle.id}`" class="group" v-for="relatedArticle in relatedArticles"
            :key="relatedArticle.id">
            <div class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-custom">
              <img :src="relatedArticle.imageUrl" alt="相关文章图片"
                class="w-full h-48 object-cover group-hover:scale-105 transition-custom duration-500">
              <div class="p-5">
                <h4 class="font-bold text-lg mb-2 group-hover:text-primary transition-custom">
                  {{ relatedArticle.title }}
                </h4>
                <p class="text-gray-600 text-sm mb-3 line-clamp-2">
                  {{ relatedArticle.description }}
                </p>
                <span class="text-sm text-gray-500">
                  {{ relatedArticle.date }} · {{ relatedArticle.readTime }}
                </span>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- 评论区 -->
      <div>
        <h3 class="text-2xl font-bold mb-6">评论 ({{ comments.length }})</h3>

        <!-- 评论输入框 -->
        <div class="bg-white p-6 rounded-xl shadow-sm mb-8">
          <h4 class="text-lg font-semibold mb-4">添加评论</h4>
          <textarea v-model="newComment.content"
            class="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-custom resize-none h-32"
            placeholder="分享你的想法..."></textarea>
          <div class="flex justify-end mt-4">
            <button @click="submitComment"
              class="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-custom font-medium">
              发表评论
            </button>
          </div>
        </div>

        <!-- 评论列表 -->
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-xl shadow-sm" v-for="comment in comments" :key="comment.id">
            <div class="flex items-start gap-4">
              <img :src="comment.authorAvatar" alt="评论者头像" class="w-12 h-12 rounded-full object-cover">
              <div class="flex-1">
                <div class="flex items-center justify-between mb-2">
                  <h4 class="font-semibold">{{ comment.authorName }}</h4>
                  <span class="text-sm text-gray-500">{{ comment.date }}</span>
                </div>
                <p class="text-gray-700 mb-4">{{ comment.content }}</p>
                <div class="flex items-center space-x-4">
                  <button @click="likeComment(comment.id)"
                    class="text-gray-500 hover:text-primary transition-custom text-sm flex items-center">
                    <i class="far fa-thumbs-up mr-1"></i> {{ comment.likes }}
                  </button>
                  <button class="text-gray-500 hover:text-primary transition-custom text-sm">
                    回复
                  </button>
                </div>

                <!-- 评论回复 -->
                <div class="mt-4 pl-6 border-l-2 border-gray-100" v-if="comment.replies && comment.replies.length">
                  <div class="flex items-start gap-3 mt-4" v-for="reply in comment.replies" :key="reply.id">
                    <img :src="reply.authorAvatar" alt="回复者头像" class="w-10 h-10 rounded-full object-cover">
                    <div class="flex-1">
                      <div class="flex items-center justify-between mb-1">
                        <h5 class="font-semibold text-sm">
                          {{ reply.authorName }}
                          <span v-if="reply.isAuthor"
                            class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full ml-2">
                            作者
                          </span>
                        </h5>
                        <span class="text-xs text-gray-500">{{ reply.date }}</span>
                      </div>
                      <p class="text-gray-700 text-sm">{{ reply.content }}</p>
                      <div class="flex items-center space-x-4 mt-2">
                        <button class="text-gray-500 hover:text-primary transition-custom text-xs flex items-center">
                          <i class="far fa-thumbs-up mr-1"></i> {{ reply.likes }}
                        </button>
                        <button class="text-gray-500 hover:text-primary transition-custom text-xs">
                          回复
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 加载更多评论 -->
          <div class="text-center" v-if="hasMoreComments">
            <button @click="loadMoreComments"
              class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-custom font-medium">
              加载更多评论
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// 路由和导航
const route = useRoute();
const router = useRouter();

// 文章数据
const article = ref({
  id: 1,
  title: "深入理解Tailwind CSS：现代实用优先的CSS框架",
  coverImage: "https://design.gemcoder.com/staticResource/echoAiSystemImages/ae4e792210fbeb7827b69238f7a3f0a6.png",
  publishDate: "2023年11月15日",
  readTime: "8分钟阅读",
  commentCount: 24,
  tags: [
    { id: 1, name: "#Tailwind CSS", styleClass: "bg-blue-100 text-blue-800" },
    { id: 2, name: "#前端开发", styleClass: "bg-purple-100 text-purple-800" },
    { id: 3, name: "#CSS框架", styleClass: "bg-green-100 text-green-800" },
    { id: 4, name: "#Web开发", styleClass: "bg-yellow-100 text-yellow-800" },
    { id: 5, name: "#响应式设计", styleClass: "bg-red-100 text-red-800" }
  ]
});

// 作者信息
const author = ref({
  name: "张明",
  title: "前端开发工程师",
  avatar: "https://design.gemcoder.com/staticResource/echoAiSystemImages/afded1a5a20d90aebab32d8b569095c5.png",
  bio: "资深前端开发工程师，拥有8年前端开发经验，热衷于探索现代Web技术和用户界面设计。曾参与多个大型Web应用的开发，专注于前端性能优化和用户体验提升。",
  social: {
    github: "javascript:void(0);",
    linkedin: "javascript:void(0);",
    twitter: "javascript:void(0);",
    codepen: "javascript:void(0);"
  }
});

// 相关文章
const relatedArticles = ref([
  {
    id: 2,
    title: "React Hooks完全指南：提升你的组件逻辑",
    imageUrl: "https://design.gemcoder.com/staticResource/echoAiSystemImages/ca77528e2ed3446d067cfefc0188dee6.png",
    description: "探索React Hooks如何改变组件逻辑的编写方式，提高代码复用性和可读性...",
    date: "2023年10月28日",
    readTime: "10分钟阅读"
  },
  {
    id: 3,
    title: "JavaScript性能优化：10个提升应用速度的技巧",
    imageUrl: "https://design.gemcoder.com/staticResource/echoAiSystemImages/1b2fe26a6c5c668eb79896df16ff466a.png",
    description: "学习如何优化你的JavaScript代码，减少加载时间，提升用户体验...",
    date: "2023年11月2日",
    readTime: "7分钟阅读"
  }
]);

// 评论数据
const comments = ref([
  {
    id: 1,
    authorName: "李小红",
    authorAvatar: "https://design.gemcoder.com/staticResource/echoAiSystemImages/5bc997c1c7922803a5b09792530a3670.png",
    date: "2天前",
    content: "非常棒的文章！我最近刚开始使用Tailwind CSS，这篇文章帮助我更好地理解了它的核心概念和使用技巧。特别是关于@apply指令的部分，解决了我对HTML臃肿的担忧。",
    likes: 28,
    replies: [
      {
        id: 11,
        authorName: "张明",
        authorAvatar: "https://design.gemcoder.com/staticResource/echoAiSystemImages/afded1a5a20d90aebab32d8b569095c5.png",
        date: "1天前",
        content: "谢谢你的反馈！很高兴这篇文章对你有帮助。Tailwind确实有一个学习曲线，但一旦习惯了它的思维方式，开发效率会大大提高。",
        likes: 12,
        isAuthor: true
      }
    ]
  },
  {
    id: 2,
    authorName: "王建国",
    authorAvatar: "https://design.gemcoder.com/staticResource/echoAiSystemImages/36bca55d3ede3fc71062805afff5ffdf.png",
    date: "3天前",
    content: "我一直在使用Styled Components，想尝试一下Tailwind。你觉得在大型项目中，Tailwind和CSS-in-JS方案哪个更有优势？",
    likes: 15,
    replies: []
  },
  {
    id: 3,
    authorName: "刘芳",
    authorAvatar: "https://design.gemcoder.com/staticResource/echoAiSystemImages/56e1809e2b0f64002424b1db08ddfd91.png",
    date: "1周前",
    content: "文章中提到的响应式设计部分非常实用！我一直觉得媒体查询很麻烦，Tailwind的响应式前缀确实简化了这个过程。请问你有没有关于Tailwind与动画结合的技巧可以分享？",
    likes: 21,
    replies: []
  }
]);

// 新评论
const newComment = ref({
  content: ""
});

// 加载更多评论相关
const hasMoreComments = ref(true);

// 方法：提交评论
const submitComment = () => {
  if (!newComment.content.trim()) return;

  // 模拟添加新评论
  const newCommentObj = {
    id: Date.now(),
    authorName: "访客",
    authorAvatar: "https://picsum.photos/200/200?random=1",
    date: "刚刚",
    content: newComment.content,
    likes: 0,
    replies: []
  };

  comments.value.unshift(newCommentObj);
  newComment.value.content = "";

  // 实际应用中这里应该调用API提交评论
  console.log("提交评论:", newCommentObj);
};

// 方法：点赞评论
const likeComment = (commentId) => {
  const comment = comments.value.find(c => c.id === commentId);
  if (comment) {
    comment.likes++;
    // 实际应用中这里应该调用API更新点赞数
  }
};

// 方法：加载更多评论
const loadMoreComments = () => {
  // 模拟加载更多评论
  const moreComments = [
    {
      id: 4,
      authorName: "赵小明",
      authorAvatar: "https://picsum.photos/200/200?random=2",
      date: "2周前",
      content: "我在团队中推广Tailwind花了一些时间，但现在大家都离不开它了。开发速度提升非常明显，尤其是在需要快速迭代的项目中。",
      likes: 17,
      replies: []
    }
  ];

  comments.value.push(...moreComments);
  hasMoreComments.value = false; // 模拟没有更多评论了

  // 实际应用中这里应该调用API加载更多评论
};

// 方法：分享文章
const shareArticle = (platform) => {
  const articleUrl = window.location.href;
  const articleTitle = article.value.title;

  console.log(`分享到${platform}:`, { articleUrl, articleTitle });

  // 实际应用中可以根据不同平台实现具体的分享逻辑
  switch (platform) {
    case 'twitter':
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(articleTitle)}`);
      break;
    case 'facebook':
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`);
      break;
    // 其他平台的分享逻辑...
  }
};

// 组件挂载时加载数据
onMounted(() => {
  // 在实际应用中，这里应该根据路由参数加载对应的文章数据
  console.log("加载文章详情，文章ID:", route.params.id);

  // 可以在这里调用API获取文章详情、评论等数据
});
</script>
