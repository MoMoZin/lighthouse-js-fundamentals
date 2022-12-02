for (let i = 100; i <= 200; i++){
  let output = "";

  if (i % 3 === 0)
    output += "Loopy";
  if (i % 4 === 0)
    output += "Lighthouse";
  
  if (output.length === 0)
    output = i;
  
  console.log(output);
}