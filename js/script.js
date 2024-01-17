document.getElementById('calculate').addEventListener('click', function() {
    const side = document.getElementById('squareside').value;
    if (side === '') {
        alert('Mohon masukkan panjang sisi persegi.');
        return;
    }

    const area = side * side;
    const perimeter = 4 * side;
    
    let resultElement = document.getElementById('calculationResult');
    resultElement.innerHTML = ''; // Bersihkan hasil sebelumnya

    // Membuat paragraf untuk "Hasil:" dan membuatnya tebal dengan <strong>
    let resultTitle = document.createElement('p');
    let strongElement = document.createElement('strong');
    strongElement.textContent = 'Hasil:';
    resultTitle.appendChild(strongElement);
    resultElement.appendChild(resultTitle);

    // Membuat paragraf untuk luas
    let areaParagraph = document.createElement('p');
    areaParagraph.innerHTML = `Luas (L = s x s):<br>L = ${side} x ${side} = ${area}`;
    resultElement.appendChild(areaParagraph);
    
    // Membuat paragraf untuk keliling
    let perimeterParagraph = document.createElement('p');
    perimeterParagraph.innerHTML = `Keliling (K = 4 x s):<br>K = 4 x ${side} = ${perimeter}`;
    resultElement.appendChild(perimeterParagraph);
});

document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('squareside').value = '';
    document.getElementById('calculationResult').innerHTML = ''; // Bersihkan hasil
});
