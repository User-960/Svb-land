export function toggleBlackout() {
	if (document.body.classList.contains('blackout')) {
		document.body.classList.remove('blackout')
	} else {
		document.body.classList.add('blackout')
	}
}
