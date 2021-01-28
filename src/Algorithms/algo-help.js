function swap(i, j) {
    let temp = heights[j];
    heights[j] = heights[i];
    heights[i] = temp;

    arr[j].style.height = (heights[j] + "px");
    arr[i].style.height = (heights[i] + "px");
}

async function changeColor(color, j, ms) {
    arr[j].style.backgroundColor = color;
    await new Promise(resolve => setTimeout(() => {resolve()}, ms));
}

async function backToNormal() {
    await new Promise(resolve => setTimeout(() => {resolve()}, 1000));
    for(let i=0; i<n; ++i) {
        await changeColor(gr, i, speed);
    }
}