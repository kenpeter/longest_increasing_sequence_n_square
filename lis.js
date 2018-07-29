
var arr = [3, 4, -1, 0, 6, 2, 3];


lis(arr);


function lis(a) {
	// clone
	var num = a.length;

	// init
	var dp = Array(num).fill(1);

	//
	for(var i=1; i<=num; i++) {
	
		for(var j=0; j<i; j++) {
			if(a[j] < a[i]) {
				var item = dp[j] + 1;
				if(item > dp[i]) {
					dp[i] = item;	
				} else {
					// nothing 
				}	
			}
			else {
				// nothing
			}	

		}	

	}

	console.log(dp);
}
