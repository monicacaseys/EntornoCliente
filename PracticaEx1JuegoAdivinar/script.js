document.addEventListener('DOMContentLoaded', function () {
    const totalCards = 8;
    let cards = [];
    let firstCard = null;
    let isProcessing = false;
  
    function generateRandomNumbers() {
      const numbers = Array.from({ length: totalCards / 2 }, (_, index) => index + 1);
      return [...numbers, ...numbers].sort(() => Math.random() - 0.5);
    }
  
    function createCards() {
      const memoryGame = document.getElementById('memoryGame');
      const randomNumbers = generateRandomNumbers();
  
      randomNumbers.forEach((num) => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
  
        const front = document.createElement('div');
        front.setAttribute('class', 'front');
        front.textContent = '?';
  
        const back = document.createElement('div');
        back.setAttribute('class', 'back');
        back.textContent = num;
  
        card.appendChild(front);
        card.appendChild(back);
  
        card.addEventListener('click', handleCardClick);
  
        memoryGame.appendChild(card);
  
        cards.push({ element: card, value: num, flipped: false });
      });
    }
  
    function handleCardClick() {
      if (isProcessing || this.getAttribute('class').includes('flipped')) {
        return;
      }
  
      this.setAttribute('class', this.getAttribute('class') + ' flipped');
  
      if (!firstCard) {
        firstCard = this;
      } else {
        isProcessing = true;
  
        const secondCard = this;
  
        const firstCardObj = cards.find((c) => c.element === firstCard);
        const secondCardObj = cards.find((c) => c.element === secondCard);
  
        if (firstCardObj.value === secondCardObj.value) {
          setTimeout(() => {
            firstCardObj.element.setAttribute('class', firstCardObj.element.getAttribute('class') + ' matched');
            secondCardObj.element.setAttribute('class', secondCardObj.element.getAttribute('class') + ' matched');
            firstCardObj.flipped = true;
            secondCardObj.flipped = true;
            checkGameCompletion();
            isProcessing = false;
          }, 500);
        } else {
          setTimeout(() => {
            firstCard.removeAtribute("class");
            firstCard.setAttribute('class','flipped');
            secondCard.setAttribute('class', secondCard.getAttribute('class').replace(' flipped', ''));
            isProcessing = false;
          }, 500);
        }
  
        firstCard = null;
      }
    }
  
    function checkGameCompletion() {
      const flippedCards = cards.filter((card) => card.flipped);
      if (flippedCards.length === totalCards) {
        alert('¡Has ganado!');
        // Puedes reiniciar el juego o realizar otras acciones aquí
      }
    }
  
    createCards();
  });
  