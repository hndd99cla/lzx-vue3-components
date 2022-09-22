declare module 'vue' {
  export interface GlobalComponents {
    BLocale: typeof import('lzx-varlet-components')['_LocaleComponent']
  }
}

export {}
