let starPyramid:number = 10;

for(let i = 0; i < starPyramid; i++){
    let row = "";

    for(let y = 0; y < 2 * i + 1; y++){
        row += "*";
    }
    console.log(row);
}

//This Task Needs Explanation for The Best Practice Example