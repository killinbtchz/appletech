<script setup>
    import { useI18n } from 'vue-i18n'
    import { ref } from 'vue'
    import { useRoute } from 'vue-router'

    const route = useRoute()


    const tabs = ['Overview', 'Tech Specs', 'Pricing', 'Software', 'Photo'];
    const activeTab = ref('Overview'); 

    function setActiveTab(tab) {
    activeTab.value = tab;
  }

  const storageOptions = [
    { value: '128GB', label: '128GB' },
    { value: '256GB', label: '256GB' },
    { value: '512GB', label: '512GB' },
    { value: '1TB', label: '1TB' }
  ];

  const selectedStorage = ref('128GB'); 
</script>
 
<template>
<div v-bind:class="{'special-class-13': route.params.id == 13, 'special-class-default': route.params.id != 13}">
  <div class="gap-1 px-6 flex flex-1 justify-center py-5" v-if="route.params.id == 13">
    <div class="layout-content-container flex flex-col max-w-[920px] flex-1">
      <div class="flex flex-wrap gap-2 p-4">
        <a class="text-[#636f88] text-base font-medium leading-normal" href="#">{{ $t('home') }}</a>
        <span class="text-[#636f88] text-base font-medium leading-normal">/</span>
        <a class="text-[#636f88] text-base font-medium leading-normal" href="#">{{ $t('iPhone') }}</a>
        <span class="text-[#636f88] text-base font-medium leading-normal">/</span>
        <span class="text-[#111318] text-base font-medium leading-normal">{{ $t('iPhone') }} {{ route.params.id }} {{ $t('proMax') }}</span>
      </div>
      <div class="flex flex-wrap justify-between gap-3 p-4">
        <div class="flex min-w-72 flex-col gap-3">
          <p class="text-[#111318] tracking-light text-[32px] font-bold leading-tight">{{ $t('iPhone') }} {{ route.params.id }} Pro</p>
          <p class="text-[#636f88] text-sm font-normal leading-normal">{{ $t('price') }}</p>
        </div>
      </div>
      <div class="pb-3">
          <div class="flex border-b border-[#dcdfe5] px-4 gap-8">
            <a v-for="(tab, index) in tabs" :key="index" :class="
              ['flex flex-col items-center justify-center pb-[13px] pt-4 text-sm font-bold leading-normal tracking-[0.015em]'
              , activeTab === tab ? 'border-b-[3px] border-b-[#111318] text-[#111318]' : 'border-b-transparent text-[#636f88]']" 
              href="#"
              @click.prevent="setActiveTab(tab)"
            >
              <p>{{ $t(tab.toLowerCase().replace(' ', '')) }}</p>
            </a>
          </div>
        </div>

        <div class="content-container">
          <div v-if="activeTab === 'Overview'">
            <h3 class="text-[#111318] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">{{ $t('iPhone') }} 13 Pro</h3>
            <p class="text-[#111318] text-base font-normal leading-normal pb-3 pt-1 px-4">
              {{ $t('iphoneDescription') }}
            </p>
          </div>
          <div v-if="activeTab === 'Tech Specs'">
            <h3 class="text-[#111318] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">{{ $t('Tech Specs') }}</h3>
            <div class="p-4 grid grid-cols-2">
                <div class="flex flex-col gap-1 border-t border-solid border-t-[#dcdfe5] py-4 pr-2">
                  <p class="text-[#636f88] text-sm font-normal leading-normal">{{ $t('superRetinaTitle') }}</p>
                  <p class="text-[#111318] text-sm font-normal leading-normal">{{ $t('superRetinaDesc') }}</p>
                </div>
                <div class="flex flex-col gap-1 border-t border-solid border-t-[#dcdfe5] py-4 pl-2">
                  <p class="text-[#636f88] text-sm font-normal leading-normal">{{ $t('ceramicShieldTitle') }}</p>
                  <p class="text-[#111318] text-sm font-normal leading-normal">{{ $t('ceramicShieldDesc') }}</p>
                </div>
                <div class="flex flex-col gap-1 border-t border-solid border-t-[#dcdfe5] py-4 pr-2">
                  <p class="text-[#636f88] text-sm font-normal leading-normal">{{ $t('fiveGTitle') }}</p>
                  <p class="text-[#111318] text-sm font-normal leading-normal">{{ $t('fiveGDesc') }}</p>
                </div>
                <div class="flex flex-col gap-1 border-t border-solid border-t-[#dcdfe5] py-4 pl-2">
                  <p class="text-[#636f88] text-sm font-normal leading-normal">{{ $t('a15Title') }}</p>
                  <p class="text-[#111318] text-sm font-normal leading-normal">{{ $t('a15Desc') }}</p>
                </div>
                <div class="flex flex-col gap-1 border-t border-solid border-t-[#dcdfe5] py-4 pr-2">
                  <p class="text-[#636f88] text-sm font-normal leading-normal">{{ $t('cameraSystemTitle') }}</p>
                  <p class="text-[#111318] text-sm font-normal leading-normal">{{ $t('cameraSystemDesc') }}</p>
                </div>
                <div class="flex flex-col gap-1 border-t border-solid border-t-[#dcdfe5] py-4 pl-2">
                  <p class="text-[#636f88] text-sm font-normal leading-normal">{{ $t('lidarTitle') }}</p>
                  <p class="text-[#111318] text-sm font-normal leading-normal">{{ $t('lidarDesc') }}</p>
                </div>
            </div>
          </div>
          <div v-if="activeTab === 'Pricing'">
            <h3 class="text-[#111318] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">{{ $t('pricingOptions') }}</h3>
            <div class="p-4">
              <ul class="flex flex-col gap-3">
                <li class="flex justify-between items-center border-b border-[#dcdfe5] pb-2">
                  <span class="text-[#111318] text-base font-normal leading-normal">{{ $t('storage128') }}</span>
                  <span class="text-[#636f88] text-base font-normal leading-normal">999$</span>
                </li>
                <li class="flex justify-between items-center border-b border-[#dcdfe5] pb-2">
                  <span class="text-[#111318] text-base font-normal leading-normal">{{ $t('storage256') }}</span>
                  <span class="text-[#636f88] text-base font-normal leading-normal">1099$</span>
                </li>
                <li class="flex justify-between items-center border-b border-[#dcdfe5] pb-2">
                  <span class="text-[#111318] text-base font-normal leading-normal">{{ $t('storage512') }}</span>
                  <span class="text-[#636f88] text-base font-normal leading-normal">1299$</span>
                </li>
                <li class="flex justify-between items-center">
                  <span class="text-[#111318] text-base font-normal leading-normal">{{ $t('storage1tb') }}</span>
                  <span class="text-[#636f88] text-base font-normal leading-normal">1499$</span>
                </li>
              </ul>
            </div>
          </div>

          <div v-if="activeTab === 'Software'">
            <h3 class="text-[#111318] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">{{ $t('softwareFeatures') }}</h3>
            <div class="p-4">
              <ul class="flex flex-col gap-3">
                <li class="flex gap-2">
                  <span class="text-[#636f88] text-sm font-normal leading-normal">{{ $t('operatingSystemTitle') }}</span>
                  <span class="text-[#111318] text-sm font-bold leading-normal">iOS 17</span>
                </li>
                <li class="flex gap-2">
                  <span class="text-[#636f88] text-sm font-normal leading-normal">{{ $t('defaultAppsTitle') }}</span>
                  <span class="text-[#111318] text-sm font-bold leading-normal">{{ $t('defaultAppsDesc') }}</span>
                </li>
                <li class="flex gap-2">
                  <span class="text-[#636f88] text-sm font-normal leading-normal">{{ $t('compatibilityTitle') }}</span>
                  <span class="text-[#111318] text-sm font-bold leading-normal">{{ $t('compatibilityDesc') }}</span>
                </li>
                <li class="flex gap-2">
                  <span class="text-[#636f88] text-sm font-normal leading-normal">{{ $t('exclusiveFeaturesTitle') }}</span>
                  <span class="text-[#111318] text-sm font-bold leading-normal">{{ $t('exclusiveFeaturesDesc') }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div v-if="activeTab === 'Photo'">
            <h3 class="text-[#111318] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">{{ $t('photo') }}</h3>
            <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div class="flex flex-col gap-3">
                <div class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl" style='background-image: url("https://cdn.usegalileo.ai/stability/dc51bab8-a04d-4144-9452-346a96b8a7a3.png");'></div>
              </div>
              <div class="flex flex-col gap-3">
                <div class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl" style='background-image: url("https://cdn.usegalileo.ai/sdxl10/dd520496-c3b7-49d7-aa2f-33ef2a37166d.png");'></div>
              </div>
              <div class="flex flex-col gap-3">
                <div class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl" style='background-image: url("https://cdn.usegalileo.ai/stability/c64a18b9-76dc-4247-938a-29620fad3a5f.png");'></div>
              </div>
              <div class="flex flex-col gap-3">
                <div class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl" style='background-image: url("https://cdn.usegalileo.ai/stability/a17d420d-bf31-4224-8d55-9ee3fe5fba6a.png");'></div>
              </div>
              <div class="flex flex-col gap-3">
                <div class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl" style='background-image: url("https://cdn.usegalileo.ai/stability/48b3dcfd-79f1-4a58-984d-b7b6b03eac9b.png");'></div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex px-4 py-3 justify-start">
          <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#3571e9] text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span class="truncate">{{ $t('addToBag') }}</span>
          </button>
        </div>
      </div>
      <div class="layout-content-container flex flex-col w-[360px]">
        <h3 class="text-[#111318] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">{{ $t('selectIphone') }}</h3>
        <div class="flex flex-wrap gap-5 p-4">
          <label
            class="size-10 rounded-full border border-[#dcdfe5] ring-[color-mix(in_srgb,#111318_50%,_transparent)] has-[:checked]:border-[3px] has-[:checked]:border-white has-[:checked]:ring"
            style="background-color: #000000;"
          >
            <input type="radio" class="invisible" name="7c4caaa2-55e9-419f-a4a3-f9b0087fef62" checked="false" />
          </label>
          <label
            class="size-10 rounded-full border border-[#dcdfe5] ring-[color-mix(in_srgb,#111318_50%,_transparent)] has-[:checked]:border-[3px] has-[:checked]:border-white has-[:checked]:ring"
            style="background-color: #ffffff;"
          >
            <input type="radio" class="invisible" name="7c4caaa2-55e9-419f-a4a3-f9b0087fef62" />
          </label>
          <label
            class="size-10 rounded-full border border-[#dcdfe5] ring-[color-mix(in_srgb,#111318_50%,_transparent)] has-[:checked]:border-[3px] has-[:checked]:border-white has-[:checked]:ring"
            style="background-color: #1500ff;"
          >
            <input type="radio" class="invisible" name="7c4caaa2-55e9-419f-a4a3-f9b0087fef62" />
          </label>
          <label
            class="size-10 rounded-full border border-[#dcdfe5] ring-[color-mix(in_srgb,#111318_50%,_transparent)] has-[:checked]:border-[3px] has-[:checked]:border-white has-[:checked]:ring"
            style="background-color: #ff0000;"
          >
            <input type="radio" class="invisible" name="7c4caaa2-55e9-419f-a4a3-f9b0087fef62" />
          </label>
        </div>
        <div class="flex flex-wrap gap-3 p-4">
        <label v-for="option in storageOptions" :key="option.value"
          class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dcdfe5] px-4 h-11 text-[#111318] relative cursor-pointer"
          :class="{'border-[3px] px-3.5 border-[#3571e9]': selectedStorage === option.value,'hover:border-[#3571e9]': selectedStorage !== option.value}">
          {{ option.label }}
          <input type="radio" class="invisible absolute" :value="option.value" v-model="selectedStorage"/>
        </label>
      </div>
        <p class="text-[#636f88] text-sm font-normal leading-normal pt-3 px-4">
          Selected Storage: <span class="font-bold text-[#111318]">{{ selectedStorage }}</span>
        </p>
        <div class="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
          <div
            class="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
            style='background-image: url("https://cdn.usegalileo.ai/sdxl10/8ff92ef5-7990-4ad5-927c-413a653862c4.png");'
          ></div>
          <div class="flex flex-col justify-center">
            <p class="text-[#111318] text-base font-medium leading-normal line-clamp-1">{{ $t('payOverTime') }}</p>
            <p class="text-[#636f88] text-sm font-normal leading-normal line-clamp-2">{{ $t('from25mo') }}</p>
          </div>
        </div>
        <p class="text-[#636f88] text-sm font-normal leading-normal pb-3 pt-1 px-4">{{ $t('pay999Upfront') }}</p>
        <p class="text-[#636f88] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline">{{ $t('buyDirectly') }}</p>
        <p class="text-[#636f88] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline">{{ $t('learnAboutFinancing') }}</p>
      </div>
    </div>
    <p class="not-exist" v-else>{{ $t('notExist') }}</p>
  </div>
</template>