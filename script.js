const accessButton = document.getElementById('access-button');
const rentalIdInput = document.getElementById('rental-id');

accessButton.addEventListener('click', () => {
  const rentalId = rentalIdInput.value;
  if (rentalId.length === 7) {
    window.location.href = `https://amovens.com/accounts/rentals/${rentalId}`;
  } else {
    alert('7');
  }
});

