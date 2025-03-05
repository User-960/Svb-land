import { footerComponent, headerComponent } from './components'
import './styles/style.scss'

document.addEventListener('DOMContentLoaded', () => {
	const render = () => {
		headerComponent.render()
		footerComponent.render()
	}
	render()
})
