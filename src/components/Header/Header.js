import { ROOT_HEADER } from '../../constants'

class Header {
	render() {
		const html = `
      <div class="container">
        Header
      </div>
    `

		ROOT_HEADER.innerHTML = html
	}
}

export const headerComponent = new Header()
