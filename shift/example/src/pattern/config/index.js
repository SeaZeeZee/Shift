import { version } from '../package.json'

// ?? 🤔 ?? --> https://en.freesewing.dev/packages/core/config

export default {
  name: 'shift',
  version,
  design: 'Zee',
  code: 'Zee',
  department: 'womenswear',
  type: 'pattern',
  difficulty: 3,
  tags: [
    'freesewing',
    'design',
    'diy',
    'fashion',
    'made to measure',
    'parametric design',
    'pattern',
    'sewing',
    'sewing pattern'
  ],
  optionGroups: {
    fit: ['bodyEase', 'neckDepthFront', 'neckDepthBack', 'bicepsEase', 'sleeveBonus']
  },
  measurements: ['chest', 'hips', 'hpsToWaistBack','waistToKnee', 'shoulderToShoulder', 'neck', 'biceps', 'shoulderToElbow'],
  dependencies: {},
  inject: {},
  hide: [],
  parts: ['body', 'sleeve', 'gusset'],
  options: {
    bodyEase: {pct: 50, min:50, max: 100 },
    neckDepthFront: {pct: 50, min: 50, max: 70},
    neckDepthBack: {pct: 50, min: 50, max: 60},
    bicepsEase: {pct: 50, min:50, max: 100},
    sleeveBonus: {pct: 80, min:60, max:100},
   
  }
}