async function quickSortPartition(start, end) {
    let pivot = end;
    let i = start-1;
    
    await changeColor("blue", pivot, speed);
    for(let j=start; j<end; ++j) {
        await changeColor("blue", j, speed);

        if(heights[j] <= heights[pivot]) {
            ++i;
            if(i==j) {
                await changeColor(gr, j, speed);
                continue;
            }
            
            await changeColor("yellow", i, 0);
            await changeColor("yellow", j, speed);
            
            swap(i, j);
            
            await changeColor("red", i, 0);
            await changeColor("red", j, speed);
            
            await changeColor(gr, i, 0);
        }
        
        await changeColor(gr, j, speed);
    }
    ++i;
    await changeColor("yellow", pivot, 0);
    await changeColor("yellow", i, speed);

    swap(i, pivot);

    await changeColor("red", i, 0);
    await changeColor("red", pivot, speed);

    await changeColor(gr, i, 0);
    await changeColor(gr, pivot, speed);

    await changeColor("green", i, 0);

    return i;
}

async function quickSortHelp(start, end) {
    if(start<=end) {
        let index = await quickSortPartition(start, end);
        await quickSortHelp(start, index-1);
        await quickSortHelp(index+1, end);
    }
}

async function quickSort() {
    if(arr.length == 0) createBars();
    
    await quickSortHelp(0, arr.length-1);
    
    await backToNormal();
}