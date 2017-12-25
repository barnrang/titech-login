var element = document.getElementsByName("login")[0]
var table = element.getElementsByTagName("table")[1]
var first = table.rows[4].cells[0].innerText
var second = table.rows[5].cells[0].innerText
var third = table.rows[6].cells[0].innerText


/*

7 x 10 matrix
Same format as the student Id card

*/

var matrix = ['AAAAAAAAAA',
  'AAAAAAAAAA',
  'AAAAAAAAAA',
  'AAAAAAAAAA',
  'AAAAAAAAAA',
  'AAAAAAAAAA',
  'AAAAAAAAAA'
]

var ref = "A".charCodeAt(0)
document.getElementsByName("message3")[0].value = matrix[parseInt(first[3]) - 1][first[1].charCodeAt(0) - ref]
document.getElementsByName("message4")[0].value = matrix[parseInt(second[3]) - 1][second[1].charCodeAt(0) - ref]
document.getElementsByName("message5")[0].value = matrix[parseInt(third[3]) - 1][third[1].charCodeAt(0) - ref]
element.submit()
