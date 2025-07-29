<template>
  <!-- 技能 -->
  <section class="py-16 md:py-24 bg-gray-50" id="skills">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark mb-4">
          我的技能
        </h2>
        <div class="w-20 h-1 bg-primary mx-auto rounded-full">
        </div>
        <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
          我掌握多种前端技术和工具，能够独立完成从设计到开发的全流程工作
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 class="text-xl font-bold text-dark mb-6 flex items-center">
            <i class="fas fa-laptop-code text-primary mr-3">
            </i>
            技术技能
          </h3>
          <div class="space-y-6">
            <!-- HTML -->
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-medium text-gray-700">
                  HTML
                </span>
                <span class="text-primary font-medium">
                  95%
                </span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-primary h-2.5 rounded-full" style="width: 95%">
                </div>
              </div>
            </div>
            <!-- CSS -->
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-medium text-gray-700">
                  CSS / TailwindCSS
                </span>
                <span class="text-primary font-medium">
                  90%
                </span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-primary h-2.5 rounded-full" style="width: 90%">
                </div>
              </div>
            </div>
            <!-- JavaScript -->
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-medium text-gray-700">
                  JavaScript
                </span>
                <span class="text-primary font-medium">
                  85%
                </span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-primary h-2.5 rounded-full" style="width: 85%">
                </div>
              </div>
            </div>
            <!-- React -->
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-medium text-gray-700">
                  React
                </span>
                <span class="text-primary font-medium">
                  80%
                </span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-primary h-2.5 rounded-full" style="width: 80%">
                </div>
              </div>
            </div>
            <!-- Vue -->
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-medium text-gray-700">
                  Vue
                </span>
                <span class="text-primary font-medium">
                  75%
                </span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-primary h-2.5 rounded-full" style="width: 75%">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 class="text-xl font-bold text-dark mb-6 flex items-center">
            <i class="fas fa-tools text-secondary mr-3">
            </i>
            工具与框架
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div class="bg-white p-4 rounded-lg shadow-sm text-center card-hover">
              <i class="fab fa-git-alt text-3xl text-gray-700 mb-2">
              </i>
              <p class="font-medium text-gray-700">
                Git
              </p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-sm text-center card-hover">
              <i class="fab fa-webpack text-3xl text-gray-700 mb-2">
              </i>
              <p class="font-medium text-gray-700">
                Webpack
              </p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-sm text-center card-hover">
              <i class="fab fa-npm text-3xl text-gray-700 mb-2">
              </i>
              <p class="font-medium text-gray-700">
                NPM
              </p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-sm text-center card-hover">
              <i class="fab fa-figma text-3xl text-gray-700 mb-2">
              </i>
              <p class="font-medium text-gray-700">
                Figma
              </p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-sm text-center card-hover">
              <i class="fab fa-sass text-3xl text-gray-700 mb-2">
              </i>
              <p class="font-medium text-gray-700">
                Sass
              </p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-sm text-center card-hover">
              <i class="fab fa-docker text-3xl text-gray-700 mb-2">
              </i>
              <p class="font-medium text-gray-700">
                Docker
              </p>
            </div>
          </div>
          <h3 class="text-xl font-bold text-dark mt-10 mb-6 flex items-center">
            <i class="fas fa-lightbulb text-accent mr-3">
            </i>
            专业能力
          </h3>
          <div class="space-y-4">
            <div class="flex items-start">
              <div
                class="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent mr-3 mt-1 flex-shrink-0">
                <i class="fas fa-check text-sm">
                </i>
              </div>
              <p class="text-gray-600">
                响应式网站设计与开发
              </p>
            </div>
            <div class="flex items-start">
              <div
                class="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent mr-3 mt-1 flex-shrink-0">
                <i class="fas fa-check text-sm">
                </i>
              </div>
              <p class="text-gray-600">
                用户界面设计与原型制作
              </p>
            </div>
            <div class="flex items-start">
              <div
                class="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent mr-3 mt-1 flex-shrink-0">
                <i class="fas fa-check text-sm">
                </i>
              </div>
              <p class="text-gray-600">
                前端性能优化与调试
              </p>
            </div>
            <div class="flex items-start">
              <div
                class="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent mr-3 mt-1 flex-shrink-0">
                <i class="fas fa-check text-sm">
                </i>
              </div>
              <p class="text-gray-600">
                跨浏览器兼容性处理
              </p>
            </div>
            <div class="flex items-start">
              <div
                class="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent mr-3 mt-1 flex-shrink-0">
                <i class="fas fa-check text-sm">
                </i>
              </div>
              <p class="text-gray-600">
                团队协作与项目管理
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>