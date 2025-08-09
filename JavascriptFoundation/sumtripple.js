

let nums = [];

for (let i = 0; i <= 50; i++) {
  nums.push(i);
}


console.log(nums);

let result = nums.filter((num) => (num % 2) === 0).map((num) => num * 3).reduce((accumulator, num) => accumulator + num);

console.log(result);
