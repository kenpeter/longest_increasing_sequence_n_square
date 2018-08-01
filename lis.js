
var arr = [3, 4, -1, 0, 6, 2, 3];


lis(arr);


function lis(a) {
	// clone
	var num = a.length;

	// init
	var dp = Array(num).fill(1);
	// key as values
	var indexArr = [...Array(num).keys()];

	// loop last item
	for(var i=1; i<=num; i++) {

		// start 0, down	
		for(var j=0; j<i; j++) {
			// prev item < later item	
			if(a[j] < a[i]) {
				// prev item + 1 
				var item = dp[j] + 1;
				// prev item, more, replace 
				if(item > dp[i]) {
					dp[i] = item;

					// prev parent
					indexArr[i] = j;	
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
	console.log(indexArr);

	getCombo(a, indexArr);	
}


function combo(i, origArr, indexArr) {
	var index = indexArr[i];

	//
	console.log(origArr[i]);

	if(index == i) {
		return;
	} else {
		combo(index, origArr, indexArr);
	}
}

function getCombo(origArr, indexArr) {
	var n = indexArr.length;
	for(var i=n-1; i>0; i--) {
		console.log('-- start --');
		combo(i, origArr, indexArr);	
	}
}



