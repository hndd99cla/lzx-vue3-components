declare module 'vue' {
  export interface GlobalComponents {
    BLocale: typeof import('basic-ui')['_LocaleComponent']
  }
}

export {}
