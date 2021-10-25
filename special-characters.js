

function unique_char(string) {
  return String.prototype.concat(...new Set(string))
}
console.log(unique_char("angels baseball!"))