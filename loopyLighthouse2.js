function loopyLighthouse(range, multiples, words) {

  for (let i = range[0]; i <= range[1]; i++) {

    let result = "";

    if (i % multiples[0] === 0)
      result += words[0];
    if (i % multiples[1] === 0)
      result += words[1];
    if (result.length <= 0)
      result = i;

    console.log(result);
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"])
// console.log();