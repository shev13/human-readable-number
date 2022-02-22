module.exports = function toReadable(number) {
  const firstTwenty = [
    "zero", //      0
    "one", //       1
    "two", //       2
    "three", //     3
    "four", //      4
    "five", //      5
    "six", //       6
    "seven", //     7
    "eight", //     8
    "nine", //      9
    "ten", //       10
    "eleven", //    11
    "twelve", //    12
    "thirteen", //  13
    "fourteen", //  14
    "fifteen", //   15
    "sixteen", //   16
    "seventeen", // 17
    "eighteen", //  18
    "nineteen", //  19
  ];
  const tens = [
    ,
    ,
    "twenty", //    20
    "thirty", //    30
    "forty", //     40
    "fifty", //     50
    "sixty", //     60
    "seventy", //   70
    "eighty", //    80
    "ninety", //    90
  ];

  // 0 <= number <= 19
  if (number <= 19) return firstTwenty[number];

  // 20 <= number <= 99
  const str = "" + number;
  let result = "";
  if (number <= 99) {
    result += tens[str[0]];
    if (str[1] != "0") result += " " + firstTwenty[str[1]];
    return result;
  }

  // 100 <= number <= 999
  const low2Digit = +str.slice(str.length - 2, str.length);
  result += `${firstTwenty[str[0]]} hundred`;
  if (low2Digit > 19) {
    result += " " + tens[str[1]];
    if (str[2] != "0") result += " " + firstTwenty[str[2]];
  } else if (low2Digit != 0) result += " " + firstTwenty[low2Digit];
  return result;
};
