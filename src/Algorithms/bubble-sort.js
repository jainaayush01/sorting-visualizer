async function bubbleSort() {
    if(arr.length == 0) createBars();
    let stop = false;
    
    for(let i=0; i<n-1; ++i) {
        if(stop == true) {
            await changeColor("green", n-i-1, speed);
            continue;
        }
        let swapped = false;
        for(let j=0; j<n-i-1; ++j) {
            await changeColor("yellow", j, 0);
            await changeColor("yellow", j+1, speed);

            if(heights[j] > heights[j+1]) {
                swap(j, j+1);
                await changeColor("red", j, 0);
                await changeColor("red", j+1, speed);
                
                swapped = true;
            }

            await changeColor(gr, j, 0);
            await changeColor(gr, j+1, speed);
        }

        await changeColor("green", n-i-1, speed);
        if(swapped == false) {
            stop = true;
        }
    }

    await changeColor("green", 0, speed);

    await backToNormal();
}
