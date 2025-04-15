<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useState } from '#app'

const { t } = useI18n()

// Флаг, что страница загружена — сразу true, чтобы не ждать ответа от сервера
const loaded = useState('loaded', () => true)
// Флаг для показа модального окна — оно будет открыто после загрузки данных
const showModal = useState('showModal', () => false)
// Состояние для списка товаров
const products = useState('products', () => [])

onMounted(async () => {
  // Асинхронный запрос в фоне
  try {
    const res = await fetch('https://dummyjson.com/products/search?q=Apple')
    const data = await res.json()
    products.value = data.products
  } catch (error) {
    console.error('Ошибка при загрузке товаров Apple:', error)
  }
  
  // По окончании загрузки данных, показываем модальное окно (если нужно)
  showModal.value = true
})

// Функция закрытия модального окна
const closeModal = () => {
  showModal.value = false
}
</script>

<template>
  <!-- Разметка будет показываться сразу, т.к. loaded всегда true -->
  <div v-if="loaded" class="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style='font-family: "Plus Jakarta Sans", "Noto Sans", sans-serif;'>
    <div class="px-40 flex flex-1 justify-center py-5">
      <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div class="flex flex-wrap gap-2 p-4">
          <a class="text-[#636f88] text-base font-medium leading-normal" href="#">{{ t('products') }}</a>
        </div>
        <div class="flex flex-wrap justify-between gap-3 p-4">
          <p class="text-[#111318] tracking-light text-[32px] font-bold leading-tight min-w-72">{{ t('products') }}</p>
        </div>
        <div class="flex gap-3 p-3 flex-wrap pr-4">
          <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
            <p class="text-[#111318] text-sm font-medium leading-normal">{{ t('new') }}</p>
          </div>
          <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
            <p class="text-[#111318] text-sm font-medium leading-normal">{{ t('priceRange') }}</p>
          </div>
          <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
            <p class="text-[#111318] text-sm font-medium leading-normal">{{ t('macBookAir') }}</p>
          </div>
          <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
            <p class="text-[#111318] text-sm font-medium leading-normal">{{ t('macBookPro') }}</p>
          </div>
          <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
            <p class="text-[#111318] text-sm font-medium leading-normal">{{ t('thirteenInch') }}</p>
          </div>
          <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
            <p class="text-[#111318] text-sm font-medium leading-normal">{{ t('fourteenInch') }}</p>
          </div>
          <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
            <p class="text-[#111318] text-sm font-medium leading-normal">{{ t('sixteenInch') }}</p>
          </div>
        </div>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div class="flex flex-col gap-3 pb-3">
            <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style='background-image: url("https://ineed-apple.ru/upload/iblock/1c7/1c7fe76eaefc4e1ded1f1e4cfffc57df.jpg");'
            ></div>
            <div>
              <p class="text-[#111318] text-base font-medium leading-normal">{{ t('macBookPro13') }}</p>
              <p class="text-[#636f88] text-sm font-normal leading-normal">{{ t('from') }} $1,199</p>
              <p class="text-[#636f88] text-sm font-normal leading-normal">{{ t('priceFor12Months') }} $22.78</p>
            </div>
          </div>
          <div class="flex flex-col gap-3 pb-3">
            <div class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl" style='background-image: url("https://www.macking.co.uk/cdn/shop/files/14-inch_5e10d4aa-0ed4-41a0-8fff-433ef075d676.jpg?v=1718292577");'></div>
            <div>
              <p class="text-[#111318] text-base font-medium leading-normal">{{ t('macBookPro14') }}</p>
              <p class="text-[#636f88] text-sm font-normal leading-normal">{{ t('from') }} $1,999</p>
              <p class="text-[#636f88] text-sm font-normal leading-normal">{{ t('priceFor12Months') }} $37.97</p>
            </div>
          </div>
          <div class="flex flex-col gap-3 pb-3">
            <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style='background-image: url("https://tier1online.com/cdn/shop/files/refurb-mbp13touchbar-performance-space-gallery-2020_GEO_GB_768x_13c3ad1f-f81a-473e-a3da-685f0f76ab82_700x.webp?v=1700144795");'
            ></div>
            <div>
              <p class="text-[#111318] text-base font-medium leading-normal">{{ t('macBookPro16') }}</p>
              <p class="text-[#636f88] text-sm font-normal leading-normal">{{ t('from') }} $2,399</p>
              <p class="text-[#636f88] text-sm font-normal leading-normal">{{ t('priceFor12Months') }} $45.53</p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div v-for="product in products" :key="product.id" class="flex flex-col gap-3 pb-3">
            <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              :style="{ backgroundImage: `url('${product.thumbnail}')` }"
            ></div>
            <div>
              <p class="text-[#111318] text-base font-medium leading-normal">{{ product.title }}</p>
              <p class="text-[#636f88] text-sm font-normal leading-normal">{{ t('from') }} ${{ product.price }}</p>
            </div>
          </div>
        </div>

        <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div class="relative bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full">
            <button 
              @click="closeModal" 
              class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
            
            <h2 class="text-2xl font-semibold mb-4 text-gray-900">Добро пожаловать!</h2>
            <p class="mb-6 text-gray-700">
              Покупайте технику с удовольствием.
            </p>
            <button 
              @click="closeModal" 
              class="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 font-medium"
            >
              За покупками.
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Убираем спиннер, поскольку loaded всегда true -->
</template>
