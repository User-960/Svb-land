import { ROOT_HEADER } from '../../constants'
import './Header.module.scss'
import Logo from '../../assets/logo.svg'
import Phone from '../../assets/phone.svg'

const links = ['Главная', 'Основное меню', 'Наши сервисы', 'Контакты']

class Header {
	render() {
		const html = `
      <div class="container">
        <div class="header__inner">
          <a href="#" target="_blank">
            <img src="${Logo}" class="header__logo" alt="logo" width='46' height='46' />
          </a>

          <ul>
            <li></li>
          </ul>

          <a class='header__phone' href="#">
            <img src="${Phone}" class="phone" alt="phone" width='24' height='24' />
            <span class='header__phone-number'>+1 (321) 222 - 33 -33</span>
          </a>
        </div>
      </div>
    `

		ROOT_HEADER.innerHTML = html
	}
}

export const headerComponent = new Header()
