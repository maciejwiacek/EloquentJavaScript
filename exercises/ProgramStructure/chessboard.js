function printChessboard(size) {
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j += 2) {
      if (i % 2 === 0) {
        row += " #";
      } else {
        row += "# ";
      }
    }
    console.log(row);
  }
}

printChessboard(8);
