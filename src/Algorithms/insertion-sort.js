async function insertionSort(){
    if(arr.length == 0) createBars();
    
    await changeColor("green", 0, speed);
	for(let i=1; i<n; i++){

		let curr=heights[i];

        await changeColor("yellow", i, speed);

        let j=i-1;
		while(j>=0 && heights[j]>curr){
            await changeColor("yellow", j, 0);
            await changeColor("yellow", j+1, speed);

            swap(j, j+1);
            await changeColor("red", j, 0);
            await changeColor("red", j+1, speed);

            await changeColor("blue", j, 0);
			if(j==i-1){
                await changeColor("yellow", j+1, speed);
			}
			else{
                await changeColor("blue", j+1, speed);
			}
			j--;
		}

        heights[j+1]=curr;
        arr[j+1].style.height = (curr + "px");

		let l=0;
		while(l<i){
            await changeColor("green", l, speed);
			l++;
		}
        await changeColor("blue", i, speed);
	}

    await changeColor("green", n-1, speed);
    await backToNormal();
}