<!--
 vuensee
 @author Anders Evenrud <andersevenrud@gmail.com>
 @link https://github.com/andersevenrud/vuensee
 @license MIT
-->
<template>
  <div
    :class="$style.controls"
  >
    <div :class="{ [$style.togglerClosed]: !panelOpen }">
      <Button
        :title="t('controls.panel')"
        :tabindex="panelOpen ? undefined : -1"
        @click="$emit('toggle-panel', $event)"
      >
        <ChevronIcon :dir="panelOpen ? 'left' : 'right'" />
      </Button>
    </div>

    <div
      v-if="panelOpen"
      :class="$style.inner"
    >
      <Button
        v-if="features.settings"
        :title="t('controls.settings')"
        @click="$emit('settings', $event)"
      >
        <SettingsIcon />
      </Button>

      <Button
        v-if="features.keys && !viewOnly"
        :title="t('controls.keys')"
        :disabled="!connected"
        @click="$emit('toggle-keys', $event)"
      >
        <KeysIcon />
      </Button>

      <Button
        v-if="features.touchKeyboard && !viewOnly"
        name="touchKeyboardToggle"
        :disabled="!connected || !isTouchDevice"
        :title="t('controls.touchKeyboard')"
        :active="touchKeyboard"
        @click="$emit('toggle-touch-keyboard', $event)"
      >
        <TouchKeyboardIcon />
      </Button>

      <Button
        v-if="features.clipboard && !viewOnly"
        :title="t('controls.clipboard')"
        :disabled="!connected"
        @click="$emit('toggle-clipboard', $event)"
      >
        <ClipboardIcon />
      </Button>

      <Button
        v-if="features.power && !viewOnly"
        :title="t('controls.power')"
        :disabled="connecting || !power"
        @click="$emit('power', $event)"
      >
        <PowerIcon />
      </Button>

      <Button
        v-if="features.viewportDragging"
        :title="t('controls.drag')"
        :disabled="!connected || !clipToWindow"
        :active="dragging"
        @click="$emit('drag', $event)"
      >
        <DragIcon />
      </Button>

      <template v-if="features.fullscreen">
        <Button
          v-if="fullscreen"
          :title="t('controls.fullscreen')"
          :disabled="isTouchDevice"
          @click="$emit('minimize', $event)"
        >
          <MinimizeIcon />
        </Button>

        <Button
          v-else
          :title="t('controls.fullscreen')"
          :disabled="isTouchDevice"
          @click="$emit('maximize', $event)"
        >
          <MaximizeIcon />
        </Button>
      </template>

      <Button
        v-if="connecting || reconnecting || connected"
        :title="t('controls.disconnect')"
        @click="$emit('disconnect', $event)"
      >
        <DisconnectIcon />
      </Button>

      <Button
        v-else
        :title="t('controls.connect')"
        @click="$emit('connect', $event)"
      >
        <ConnectIcon />
      </Button>

      <Button
        v-if="features.filebrowser"
        :title="t('controls.filebrowser')"
        :disabled="!connected"
        @click="$emit('toggle-filebrowser', $event)"
      >
        <FilebrowserIcon />
      </Button>
    </div>
  </div>
</template>

<style module>
.controls {
  display: flex;
  position: relative;
  flex: 1 0;
}

.controls button {
  border: 0 none;
  outline: 0 none;
  background: transparent;
}

.inner {
  display: flex;
  flex: 1 0;
  justify-content: flex-end;
}

.togglerClosed button {
  background-color: var(--vuensee-background-color);
  padding: var(--vuensee-margin-quarter) 0;
}
</style>

<script>
import { useI18n } from 'vue-i18n'
import { isTouchDevice } from '../../utils/novnc'

export default {
  name: 'Controls',

  props: {
    connected: {
      type: Boolean,
      required: true
    },
    connecting: {
      type: Boolean,
      required: true
    },
    reconnecting: {
      type: Boolean,
      required: true
    },
    fullscreen: {
      type: Boolean,
      required: true
    },
    power: {
      type: Boolean,
      required: true
    },
    viewOnly: {
      type: Boolean,
      required: true
    },
    features: {
      type: Object,
      required: true
    },
    dragging: {
      type: Boolean,
      required: true
    },
    clipToWindow: {
      type: Boolean,
      required: true
    },
    touchKeyboard: {
      type: Boolean,
      required: true
    },
    panelOpen: {
      type: Boolean,
      required: true
    }
  },

  emits: [
    'settings',
    'minimize',
    'maximize',
    'disconnect',
    'connect',
    'toggle-keys',
    'toggle-clipboard',
    'toggle-filebrowser',
    'toggle-touch-keyboard',
    'toggle-panel',
    'power',
    'drag',
    'power'
  ],

  setup() {
    const { t } = useI18n()
    return { t, isTouchDevice }
  }
}
</script>
