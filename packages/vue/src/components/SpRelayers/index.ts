import { App as Application } from 'react'
import SpRelayers from './SpRelayers.vue'

import { registerComponent } from './../../utils/plugins/index'

export const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpRelayers)
	},
}

export default SpRelayers
