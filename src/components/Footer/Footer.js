import { ROOT_FOOTER } from '../../constants'

class Footer {
	render() {
		const html = `
      <div class="container">
      </div>
    `

		ROOT_FOOTER.innerHTML = html
	}
}

export const footerComponent = new Footer()
