function drawTree(h) {
	
	for ( var i = 0; i < h; i++ ) {
		var star = '';
		for ( var s = 0; s < h - i; s++ ) {
			star += ' ';
		}
		for ( var j = 0; j < ( 2 * i + 1); j++) {
			star += '*';
		}
		console.log(star);
	}
}
drawTree(4);