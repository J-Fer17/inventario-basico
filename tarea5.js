let n = 2;

while (n <= 20) {
  let d = 2;
  let primo = true;

  while (d < n) {
    if (n % d == 0) {
      primo = false;
    }
    d = d + 1;
  }

  if (primo) {
    console.log(n);
  }

  n = n + 1;
}