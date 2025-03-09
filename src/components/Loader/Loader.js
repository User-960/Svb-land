import { ROOT_LOADER } from '../../constants'
import iconLogo from '../../assets/logo.svg'

export class Loader {
	constructor() {
		this.render()
	}

	handlerClear() {
		ROOT_LOADER.innerHTML = ''
	}

	render() {
		const html = `
      <div class="loader__inner">
        <img class="loader__img" src="${iconLogo}" width="46" height="46" alt="Loading..."/>
      </div>
    `

		ROOT_LOADER.innerHTML = html
	}
}
