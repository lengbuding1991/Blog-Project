<template>
  <footer class="bg-dark text-white py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div class="flex items-center space-x-2 mb-6">
            <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary">
              <i class="fas fa-code text-xl">
              </i>
            </div>
            <span class="text-xl font-bold">
              个人网站
            </span>
          </div>
          <p class="text-gray-400 mb-6">
            专注于前端开发和用户体验设计，热衷于创造美观且实用的数字产品。
          </p>
          <div class="flex space-x-4">
            <a class="text-gray-400 hover:text-white transition-custom" href="javascript:void(0);">
              <i class="fab fa-github">
              </i>
            </a>
            <a class="text-gray-400 hover:text-white transition-custom" href="javascript:void(0);">
              <i class="fab fa-linkedin">
              </i>
            </a>
            <a class="text-gray-400 hover:text-white transition-custom" href="javascript:void(0);">
              <i class="fab fa-twitter">
              </i>
            </a>
            <a class="text-gray-400 hover:text-white transition-custom" href="javascript:void(0);">
              <i class="fab fa-dribbble">
              </i>
            </a>
          </div>
        </div>
        <div>
          <h4 class="text-lg font-bold mb-6">
            快速链接
          </h4>
          <ul class="space-y-3">
            <li>
              <a class="text-gray-400 hover:text-white transition-custom" href="#home">
                首页
              </a>
            </li>
            <li>
              <a class="text-gray-400 hover:text-white transition-custom" href="#about">
                关于我
              </a>
            </li>
            <li>
              <a class="text-gray-400 hover:text-white transition-custom" href="#skills">
                技能
              </a>
            </li>
            <li>
              <a class="text-gray-400 hover:text-white transition-custom" href="#projects">
                项目
              </a>
            </li>
            <li>
              <a class="text-gray-400 hover:text-white transition-custom" href="#blog">
                博客
              </a>
            </li>
            <li>
              <a class="text-gray-400 hover:text-white transition-custom" href="#contact">
                联系
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-bold mb-6">
            服务
          </h4>
          <ul class="space-y-3">
            <li>
              <a class="text-gray-400 hover:text-white transition-custom" href="javascript:void(0);">
                网站开发
              </a>
            </li>
            <li>
              <a class="text-gray-400 hover:text-white transition-custom" href="javascript:void(0);">
                应用开发
              </a>
            </li>
            <li>
              <a class="text-gray-400 hover:text-white transition-custom" href="javascript:void(0);">
                UI/UX设计
              </a>
            </li>
            <li>
              <a class="text-gray-400 hover:text-white transition-custom" href="javascript:void(0);">
                响应式设计
              </a>
            </li>
            <li>
              <a class="text-gray-400 hover:text-white transition-custom" href="javascript:void(0);">
                性能优化
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-bold mb-6">
            订阅通讯
          </h4>
          <p class="text-gray-400 mb-4">
            订阅我的通讯，获取最新的技术资讯和项目更新
          </p>
          <form class="flex">
            <input class="px-4 py-2 rounded-l-lg w-full focus:outline-none text-gray-800 bg-white" placeholder="您的邮箱地址"
              type="email" />
            <button class="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-r-lg transition-custom"
              type="submit">
              <i class="fas fa-paper-plane">
              </i>
            </button>
          </form>
        </div>
      </div>
      <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm">
          © 2025 冷丶布丁 <a href="">闽ICP备2025103663号</a>
        </p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a class="text-gray-400 hover:text-white text-sm transition-custom" href="javascript:void(0);">
            隐私政策
          </a>
          <a class="text-gray-400 hover:text-white text-sm transition-custom" href="javascript:void(0);">
            服务条款
          </a>
          <a class="text-gray-400 hover:text-white text-sm transition-custom" href="javascript:void(0);">
            Cookie政策
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>