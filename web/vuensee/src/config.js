/*
 * vuensee
 * @author Anders Evenrud <andersevenrud@gmail.com>
 * @link https://github.com/andersevenrud/vuensee
 * @license MIT
 */

import {
  readFeatures,
  readSettings,
  readUrlSettings,
  parseBoolean,
  parseNumber,
  parseString,
  fromEnv,
  localStorageSettings,
  readNavigatorLanguages,
  hasUrlParameter
} from './utils/config'

/**
 * List of available settings and their type parser
 */
const settingsMap = [
  ['language', parseString],
  ['messageTimeout', parseNumber],
  ['autoconnect', parseBoolean],
  ['bell', parseBoolean],
  ['sharedMode', parseBoolean],
  ['viewOnly', parseBoolean],
  ['clipToWindow', parseBoolean],
  ['scalingMode', parseString],
  ['quality', parseNumber],
  ['compression', parseNumber],
  ['reconnect', parseBoolean],
  ['reconnectDelay', parseNumber],
  ['dotCursor', parseBoolean],
  ['hostname', parseString],
  ['path', parseString],
  ['repeaterId', parseString],
  ['port', parseNumber],
  ['ssl', parseBoolean]
]

/**
 * List of available features
 */
const featureMap = [
  'localstorageSettings',
  'urlSettings',
  'viewportDragging',
  'touchKeyboard',
  'settings',
  'clipboard',
  'fullscreen',
  'power',
  'keys',
  'panel'
]

/**
 * A map to make sure variants of a certain language
 * points to the same translations
 */
const languageMap = {
  nb: 'no'
}

/**
 * A set of setting keys that will not be stored in
 * the browser
 */
const localStorageBlacklist = [
  'password'
]

/*
 * Loads the configuration
 */
const languages = readNavigatorLanguages(languageMap)

const features = readFeatures(featureMap)

const dotenvSettings = readSettings(settingsMap)

const localSettings = hasUrlParameter('_clear')
  ? localStorageSettings.clear()
  : localStorageSettings.load()

const urlSettings = features.urlSettings
  ? readUrlSettings(settingsMap)
  : {}

/*
 * Export
 */
export default {
  title: fromEnv('title') || 'vuensee',
  bell: 'sounds/bell',
  localStorageBlacklist,
  features,
  settings: {
    language: languages[0],
    ...dotenvSettings,
    ...localSettings,
    ...urlSettings
  }
}
