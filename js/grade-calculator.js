// User-defined function: returns a letter grade from an average.
function getGrade(average) {
  if (average >= 90) {
    return 'A+';
  }

  if (average >= 80) {
    return 'A';
  }

  if (average >= 70) {
    return 'B';
  }

  if (average >= 60) {
    return 'C';
  }

  if (average >= 50) {
    return 'D';
  }

  return 'F';
}

// User-defined function: reads five subject values and calculates the result.
function calculateGrade() {
  const marks = Array
    .from(document.querySelectorAll('.mark'))
    .map((input) => Number(input.value));

  const result = document.getElementById('gradeResult');

  if (
    marks.length !== 5 ||
    marks.some((mark) => !Number.isFinite(mark) || mark < 0 || mark > 100)
  ) {
    result.innerHTML =
      '<span class="error">Please enter valid marks from 0 to 100 for all five subjects.</span>';
    return;
  }

  let total = 0;

  for (const mark of marks) {
    total += mark;
  }

  const average = total / marks.length;
  const grade = getGrade(average);
  const passed =
    average >= 50 && marks.every((mark) => mark >= 40);

  result.innerHTML = `
    <h3>Result</h3>
    <p><b>Total:</b> ${total}/500</p>
    <p><b>Average:</b> ${average.toFixed(2)}%</p>
    <p><b>Grade:</b> ${grade}</p>
    <p>
      <b>Status:</b>
      <span class="${passed ? 'success' : 'error'}">
        ${passed ? 'PASS' : 'FAIL'}
      </span>
    </p>
  `;
}

document
  .getElementById('calculate')
  .addEventListener('click', calculateGrade);

calculateGrade();
