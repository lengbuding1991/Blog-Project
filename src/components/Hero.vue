<template>
  <section class="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-50" id="home">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-10 md:mb-0">
          <h1 class="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-dark mb-4">
            你好，我是
            <span class="text-primary">
              开发者
            </span>
          </h1>
          <p class="text-[clamp(1rem,2vw,1.25rem)] text-gray-600 mb-8 max-w-lg">
            专注于前端开发和用户体验设计，热衷于创造美观且实用的数字产品。
          </p>
          <div class="flex flex-wrap gap-4">
            <a class="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition-custom flex items-center"
              href="#contact">
              <span>
                联系我
              </span>
              <i class="fas fa-arrow-right ml-2">
              </i>
            </a>
            <a class="px-6 py-3 bg-white text-primary border border-primary rounded-lg hover:bg-gray-50 transition-custom flex items-center"
              href="#projects">
              <i class="fas fa-briefcase mr-2">
              </i>
              <span>
                查看项目
              </span>
            </a>
          </div>
          <div class="mt-12 flex space-x-6">
            <a class="text-gray-400 hover:text-primary transition-custom" href="javascript:void(0);">
              <i class="fab fa-github text-2xl">
              </i>
            </a>
            <a class="text-gray-400 hover:text-primary transition-custom" href="javascript:void(0);">
              <i class="fab fa-linkedin text-2xl">
              </i>
            </a>
            <a class="text-gray-400 hover:text-primary transition-custom" href="javascript:void(0);">
              <i class="fab fa-twitter text-2xl">
              </i>
            </a>
            <a class="text-gray-400 hover:text-primary transition-custom" href="javascript:void(0);">
              <i class="fab fa-dribbble text-2xl">
              </i>
            </a>
          </div>
        </div>
        <div class="md:w-1/2 flex justify-center">
          <div class="relative">
            <div class="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-accent p-1 shadow-xl">
              <img alt="个人头像" class="w-full h-full rounded-full object-cover"
                src="https://design.gemcoder.com/staticResource/echoAiSystemImages/8e44d93d24a1dcb21520290d45f5e206.png" />
            </div>
            <div class="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg card-hover">
              <div class="flex items-center space-x-2">
                <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-secondary">
                  <i class="fas fa-check">
                  </i>
                </div>
                <span class="font-medium">
                  可用状态
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>