function printTree(size) {
  for (let i = 0; i < size; ++i) {
    let output = "";
    while (output.length != i) output += "#";
    console.log(output);
  }
}

printTree(10);
