function main(input) {
  /**
   * Write JavaScript code from here
   */

  let inputArr = input.split(/\r?\n/);
  let inputNumberArray = inputArr[inputArr.length - 1].split(" ");

  const numArr = inputNumberArray.map((item) => parseInt(item, 10));
  let result = [...new Set(numArr)].sort((a, b) => a - b).join(" ");
  console.log(result);

  // for (let i = 0; i < sotredArr.length; i++) {
  //     if (!map.has(sotredArr[i])) {
  //     map.set(sotredArr[i], 1);
  //     }
  // }
  // console.log([...map.keys()].sort((a, b) => a - b).join(" "));
}

process.stdin.on("data", (data) => {
  main(data.toString().trim());
});
