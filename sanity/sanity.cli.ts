import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '2d4t0ipa',
    dataset: 'production',
  },
  deployment: {
    appId: 'rqe53t8y8p20vyntqk80oith',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  },
})
