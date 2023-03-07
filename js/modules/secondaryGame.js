export default function secondaryGame() {
	const allowedPaths = ["/html/gamemode2.html", "/#", ""];
	
	for (let i = 0; i < allowedPaths.length; i++) {
		if (window.location.pathname == allowedPaths[i]) {
			console.log('1')
		}
	}
}