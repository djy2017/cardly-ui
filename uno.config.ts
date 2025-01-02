import type { Preset, SourceCodeTransformer } from 'unocss'
import { defineConfig } from 'unocss'

import {
  presetApplet,
  presetRemRpx,
  transformerAttributify,
} from 'unocss-applet'

// uni-app
const isApplet = process.env?.UNI_PLATFORM?.startsWith('mp-') ?? false
// taro
// const isApplet = process.env.TARO_ENV !== 'h5' ?? false
const presets: Preset[] = []
const transformers: SourceCodeTransformer[] = []

if (isApplet) {
  presets.push(presetApplet())
  presets.push(
    presetRemRpx({
      mode: 'rem2rpx',
      baseFontSize: 2,
    })
  )
  // transformers.push(transformerAttributify({ ignoreAttributes: ['block'] }))
} else {
  presets.push(presetApplet())
  // presets.push(presetAttributify())
  presets.push(presetRemRpx({ mode: 'rpx2rem' }))
}

export default defineConfig({
  presets: [
    // ...
    ...presets,
  ],
  transformers: [
    // ...
    ...transformers,
  ],
  shortcuts: {
    'reset-button':
      'm-0 p-0 rounded-0 border-none text-[1em] bg-transparent leading-1em after:border-none',
    'cu-button': 'active:scale-99',
    'xy-center': 'flex items-center justify-center',
  },
  rules: [
    [
      'safe-bottom',
      { paddingBottom: 'constant(safe-area-inset-bottom)' },
      'safe-area-inset-bottom',
    ],
    [
      'safe-bottom',
      { paddingBottom: 'env(safe-area-inset-bottom)' },
      'safe-area-inset-bottom-env',
    ],

    [
      /^border-solid-(\d+)$/,
      ([, d]) => {
        return { 'border-width': `${d}rpx`, 'border-style': 'solid' }
      },
    ],
    [
      /^border-(\d+)$/,
      ([, d]) => {
        return { 'border-width': `${d}rpx` }
      },
    ],
    [
      /^bg-black-(\d+)$/,
      ([, d]) => {
        return { 'background-color': `rgba(0, 0, 0, ${d / 100})` }
      },
    ],
    [
      /^text-black-(\d+)$/,
      ([, d]) => {
        return { color: `rgba(0,0,0,${d / 100})` }
      },
    ],
    [
      /^press-scale-(\d+)$/,
      ([, d]) => {
        return { transform: `scale(${d})` }
      },
    ],
    ['container', {}],
    ['list-item', {}],

    [
      'font-family-hsb',
      {
        'font-family': '"HarmonyOS Sans Bold"',
        'font-weight': 'bold',
      },
    ],
    [
      'font-family-pps',
      {
        'font-family': '"PingFangSC, PingFang SC"',
      },
    ],
    [
      'font-family-ali',
      {
        'font-family': '"ali-bold"',
      },
    ],
    [
      'font-family-ali-bold',
      {
        'font-family': '"ali-bold"',
        'font-weight': '900',
      },
    ],
  ],
})
