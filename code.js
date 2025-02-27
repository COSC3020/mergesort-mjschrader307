function merge(arr, start1, end1, start2, end2) {
  // Parameters:
  //  arr: Whole array
  //  start1, start2: Starting index of first and second subarrays
  //  end1, end2: End index of first and second subarrays

  let size_P2 = end2 - end1;
  let tmp;

  // Need to do (size_P2) insertions into P1; k is offset from original i position
  for (let k = 0; k < size_P2; k++) {
    // Index pointers to moving element and one left of it, respectively
    let i = start2 + k;
    let j = i - 1;

    // While j is in bounds of array (>= 0), and while element being moved is less than the one left of it, keep swapping
    while (j >= start1 && arr[i] < arr[j]) {
      tmp = arr[j];
      arr[j] = arr[i];
      arr[i] = tmp;

      j--;
      i--;
    }
  }
}

function mergesort(array) {
  let return_array = [];

  if (array.length === 0) return return_array;

  for (let size = 1; size < array.length; size *= 2) {
    // Initialize positions
    let start1 = 0;
    let end1 = size - 1;
    let start2 = size;
    let end2 = 2 * size - 1;

    // Until the first start position is out of bounds, merge adjacent subarrays
    while (start1 < array.length - 1) {
      merge(array, start1, end1, start2, end2);

      // Shift start positions by 2 times the subarray size
      start1 += 2 * size;
      end1 += 2 * size;
      start2 += 2 * size;
      end2 += 2 * size;
    }
  }

  return_array = [...array];

  return return_array;
}
