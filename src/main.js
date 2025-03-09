import { Header } from './components'
import { Loader } from './components/Loader'
import './styles/style.scss'

document.addEventListener('DOMContentLoaded', () => {
	const render = () => {
		const loader = new Loader()
		new Header()
		setTimeout(() => {
			loader.handlerClear()
		}, 2000)
	}

	/* BOOTSTRAP APP */
	render()
})
