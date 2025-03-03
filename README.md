# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

---

Worst case situation for merge operation: $\Theta(n^2)$, because of n swaps, n times
Worst case situation for mergesort: $\Theta(n^2log(n))$

(The log(n) comes from doubling of subarrays, which should happen log<sub>2</sub>(n) times)

I would assume that the average number of swaps for the merge operation is $\frac{n}{2}$, leading to the same complexity for the average case for merging, which was $\Theta(n^2)$. The number of subarray size doubling is the same for all cases, so the average case for that is also $\Theta(log(n))$.

**Answer**: Putting those together gives me an average time complexity of $\Theta(n^2log(n))$ for my implementation of an iterative Merge Sort algorithm, which is _n_ times worse than that of the normal recursive version.

---

**I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.**
