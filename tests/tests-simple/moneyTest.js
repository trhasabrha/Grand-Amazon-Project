import { formatCurrency } from "../../scripts/utils/money.js";

console.log("test suite: fromatCurrency.");

console.log("converts cents into dollars");
//basic test case 1
if (formatCurrency(2095) === "20.95") {
  console.log("passed");
} else {
  console.log("failed");
}

console.log("works with 0");
//edge test case 2
if (formatCurrency(0) === "0.00") {
  console.log("passed");
} else {
  console.log("failed");
}

console.log("rounds up to the nearest cent");
//edge test case 3 (tricky)
if (formatCurrency(2000.5) === "20.01") {
  console.log("passed");
} else {
  console.log("failed");
}

console.log("rounds down to the nearest cent");
//edge test case 4
if (formatCurrency(2000.4) === "20.00") {
  console.log("passed");
} else {
  console.log("failed");
}
