/*
 * vuensee
 * @author Anders Evenrud <andersevenrud@gmail.com>
 * @link https://github.com/andersevenrud/vuensee
 * @license MIT
 */

export default {
  controls: {
    panel: 'Activar/Desactivar visibilidad',
    settings: 'Activar/Desactivar configuración',
    keys: 'Activar/Desactivar teclas',
    clipboard: 'Activar/Desactivar portapapeles',
    fullscreen: 'Activar/Desactivar pantalla completa',
    power: 'Activar/Desactivar controles de energía',
    connect: 'Conectar',
    disconnect: 'Desconectar',
    drag: 'Arrastrar panel de vista',
    touchKeyboard: 'Teclado del dispositivo táctil'
  },

  keys: {
    esc: 'Esc',
    ctrl: 'Ctrl',
    alt: 'Alt',
    windows: 'Windows',
    tab: 'Tab',
    cad: 'Ctrl+Alt+Del'
  },

  clipboard: {
    clear: 'Vaciar'
  },

  power: {
    shutdown: 'Apagar',
    reboot: 'Rebootear',
    reset: 'Resetear'
  },

  scalingModes: {
    off: 'Ninguno',
    scale: 'Local',
    remote: 'Remoto'
  },

  settings: {
    session: {
      header: 'Sesión',
      sharedMode: 'Modo compartido',
      viewOnly: 'Sólo vista',
      bell: 'Sonido de campana',
      reconnect: 'Reconectar automáticamente',
      reconnectDelay: 'Retardo de conexión (milisegundos)'
    },
    visuals: {
      header: 'Vista',
      clipToWindow: 'Sujetar a la ventana',
      scalingMode: 'Modo de escala',
      dotCursor: 'Mostrar punto cuando no hay cursor'
    },
    connection: {
      header: 'Conexión',
      repeaterId: 'ID de repetidor',
      hostname: 'Nombre de host',
      port: 'Puerto',
      path: 'Ruta',
      password: 'Contraseña',
      ssl: 'Conexión segura'
    },
    stream: {
      header: 'Corriente',
      quality: 'Calidad',
      compression: 'Nivel de compresión'
    }
  },

  login: {
    passwordPlaceholder: 'Introduzca la contraseña de la cuenta',
    submit: 'Enviar',
    cancel: 'Cancelar'
  },

  messages: {
    connected: 'Conectado',
    connecting: 'Conectando',
    disconnected: 'Desconectado',
    reconnecting: 'Reconectando en {delay}ms...',
    connectionLost: 'Conexión perdida',
    connectionFailure: 'No se pudo establecer la conexión',
    securityFailure: 'Error de protocolo de enlace de seguridad ({status}): {reason}',
    credentialsRequired: 'Se requiere autenticación para conectarse'
  }
}
