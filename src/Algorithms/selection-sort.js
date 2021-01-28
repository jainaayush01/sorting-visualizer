async function selectionSort() {
    if(arr.length == 0) createBars();

    for(let i=0; i<n-1; ++i) {
        await changeColor("blue", i, speed);
        let min_idx = i;
        await changeColor("red", i, speed);

        for(let j=i+1; j<n; ++j) {
            await changeColor("yellow", j, speed);

            if(heights[j] <= heights[min_idx]) {
                await changeColor(gr, min_idx, 0);
                if(i == min_idx){
                    await changeColor("blue", min_idx, 0);
                }

                min_idx=j;
                await changeColor("red", min_idx, speed);
            }
            else {
                await changeColor(gr, j, speed);
            }
        }
        await changeColor("yellow", i, 0);
        await changeColor("yellow", min_idx, speed);

        swap(i, min_idx);

        await changeColor("red", i, 0);
        await changeColor("red", min_idx, speed);

        await changeColor(gr, min_idx, 0);
        await changeColor("green", i, speed);
    }
    await changeColor("green", n-1, speed);

    await backToNormal();
}