export function cutString(text, long, screen = 0) {
	return text.length > long && window.innerWidth > screen ? `${text.slice(0, long)}…` : text
}
