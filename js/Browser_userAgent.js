function detectBrowser(userAgent){
	if (userAgent.includes('Firefox')) {
		return "Mozilla Firefox";
	} else if (userAgent.includes('Chrome')){
		return "Google Chrome";
	} else {
		return "Internet Explorer";
	}

}



//
const detectBrowser = (userAgent) => {
	return [
		{
			rgx: /(MSIE)|(Explorer)/g,
			name: 'Internet Explorer'
		},
		{
			rgx: /Firefox/g,
			name: 'Mozilla Firefox'
		},
		{
			rgx: /Chrome/g,
			name: 'Google Chrome'
		}
	].find(e => e.rgx.test(userAgent)).name;
}
