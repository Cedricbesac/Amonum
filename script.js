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

#IMG-20240613-WA0010.jpg {
  width: 200px; /* Ajustez la largeur selon vos besoins */
  margin-bottom: 20px; /* Ajustez la marge inférieure selon vos besoins */
}

.content {
  text-align: center; /* Centre le contenu du formulaire */
}
#Primarylogo_Amovens.png {
  width: 150px; /* Ajustez la largeur selon vos besoins */
  margin-top: 20px; /* Ajustez la marge supérieure selon vos besoins */
}
