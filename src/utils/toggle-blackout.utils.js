export function toggleBlackout(element) {
	if (element.classList.contains('blackout')) {
		element.classList.remove('blackout')
	} else {
		element.classList.add('blackout')
	}
}
