let rows = Number(prompt("How many rows do you want?"))
let columns = Number(prompt("How many columns do you want?"))

let i,j,grid;
for (i = 1; i <= rows; i++) {
  grid=""
    for (j = 1; j <= columns; j++) {
      grid=grid+('*')
      }
    document.write(grid)
    document.write("<br />")
      grid= ""
  }