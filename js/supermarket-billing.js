// User-defined function: safely reads one product's input values.
function getProduct(index) {
  return {
    name:
      document.getElementById(`p${index}`).value.trim() ||
      `Product ${index}`,
    quantity: Number(document.getElementById(`q${index}`).value),
    price: Number(document.getElementById(`r${index}`).value),
  };
}

// User-defined function: calculates and displays the complete bill.
function generateBill() {
  const products = [
    getProduct(1),
    getProduct(2),
    getProduct(3),
  ];

  const hasInvalidProduct = products.some(
    (product) =>
      !Number.isFinite(product.quantity) ||
      product.quantity < 1 ||
      !Number.isFinite(product.price) ||
      product.price < 0
  );

  if (hasInvalidProduct) {
    document.getElementById('billResult').innerHTML =
      '<span class="error">Enter valid quantities and prices.</span>';
    return;
  }

  let total = 0;
  let rows = '';

  for (const product of products) {
    const amount = product.quantity * product.price;
    total += amount;

    const safeName = product.name.replace(/[&<>]/g, '');

    rows += `
      <tr>
        <td>${safeName}</td>
        <td>${product.quantity}</td>
        <td>₹${product.price.toFixed(2)}</td>
        <td>₹${amount.toFixed(2)}</td>
      </tr>
    `;
  }

  const discount = total > 2000 ? total * 0.10 : 0;
  const payable = total - discount;

  document.getElementById('billResult').innerHTML = `
    <table class="bill-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Qty</th>
          <th>Unit Price</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>

    <div class="total-box">
      <div class="metric">
        Total
        <strong>₹${total.toFixed(2)}</strong>
      </div>
      <div class="metric">
        Discount
        <strong>₹${discount.toFixed(2)}</strong>
      </div>
      <div class="metric">
        Final Payable
        <strong>₹${payable.toFixed(2)}</strong>
      </div>
    </div>
  `;
}

document
  .getElementById('bill')
  .addEventListener('click', generateBill);

generateBill();
