<template>
  <!-- 关于我 -->
  <section class="py-16 md:py-24 bg-white" id="about">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark mb-4">
          关于我
        </h2>
        <div class="w-20 h-1 bg-primary mx-auto rounded-full">
        </div>
      </div>
      <div class="flex flex-col md:flex-row items-center gap-12">
        <div class="md:w-2/5">
          <div class="relative">
            <img alt="关于我" class="w-full h-auto rounded-xl shadow-lg"
              src="https://design.gemcoder.com/staticResource/echoAiSystemImages/4020648ce8abf944d6e6d19950d30d56.png" />
            <div class="absolute -bottom-6 -left-6 bg-primary text-white p-4 rounded-lg shadow-lg">
              <p class="text-2xl font-bold">
                5+
              </p>
              <p class="text-sm opacity-80">
                年工作经验
              </p>
            </div>
          </div>
        </div>
        <div class="md:w-3/5">
          <h3 class="text-2xl font-bold text-dark mb-4">
            我是一名充满热情的前端开发者
          </h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            我拥有5年以上的前端开发经验，专注于创建响应式、用户友好的网站和应用程序。我热衷于学习新技术，并将其应用到实际项目中，以提供最佳的用户体验。
          </p>
          <p class="text-gray-600 mb-8 leading-relaxed">
            我的开发理念是结合美学设计和功能性，打造既美观又实用的数字产品。我相信良好的代码结构和用户体验是成功项目的关键。
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div class="flex items-start">
              <div
                class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary mr-4 mt-1 flex-shrink-0">
                <i class="fas fa-code">
                </i>
              </div>
              <div>
                <h4 class="font-bold text-dark mb-1">
                  前端开发
                </h4>
                <p class="text-gray-600 text-sm">
                  创建响应式、高性能的用户界面
                </p>
              </div>
            </div>
            <div class="flex items-start">
              <div
                class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-secondary mr-4 mt-1 flex-shrink-0">
                <i class="fas fa-paint-brush">
                </i>
              </div>
              <div>
                <h4 class="font-bold text-dark mb-1">
                  UI/UX设计
                </h4>
                <p class="text-gray-600 text-sm">
                  设计直观且吸引人的用户体验
                </p>
              </div>
            </div>
            <div class="flex items-start">
              <div
                class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-accent mr-4 mt-1 flex-shrink-0">
                <i class="fas fa-mobile-alt">
                </i>
              </div>
              <div>
                <h4 class="font-bold text-dark mb-1">
                  移动优先
                </h4>
                <p class="text-gray-600 text-sm">
                  确保在所有设备上的最佳体验
                </p>
              </div>
            </div>
            <div class="flex items-start">
              <div
                class="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 mr-4 mt-1 flex-shrink-0">
                <i class="fas fa-rocket">
                </i>
              </div>
              <div>
                <h4 class="font-bold text-dark mb-1">
                  性能优化
                </h4>
                <p class="text-gray-600 text-sm">
                  提升网站速度和性能
                </p>
              </div>
            </div>
          </div>
          <a class="inline-flex items-center text-primary font-medium hover:underline" href="javascript:void(0);">
            <span>
              下载我的简历
            </span>
            <i class="fas fa-download ml-2">
            </i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>