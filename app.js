function processing() {
  let get = document.getElementById('input').value;

  // Convert input into array of numbers
  let arr = get.trim().split(/\s+/).map(Number);

  // Sort numbers
  arr.sort((a, b) => a - b);
  console.log("Sorted:", arr);

  let median;

  if (arr.length % 2 !== 0) {
    // Odd → middle element
    let ind = Math.floor(arr.length / 2);
    median = arr[ind];
  } else {
    // Even → average of middle two
    let index1 = arr.length / 2 - 1;
    let index2 = arr.length / 2;
    median = (arr[index1] + arr[index2]) / 2;
  }

  document.getElementById('result').innerHTML = median;
}

