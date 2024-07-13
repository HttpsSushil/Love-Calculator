document.getElementById('loveForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const yourName = document.getElementById('yourName').value;
    const crushName = document.getElementById('crushName').value;
    
    // Log the names to the console
    console.log(`Your Name: ${yourName}`);
    console.log(`Your Crush: ${crushName}`);
    
    // Store the names in localStorage
    localStorage.setItem('yourName', yourName);
    localStorage.setItem('crushName', crushName);

    // Simple love percentage calculation
    const lovePercentage = Math.floor(Math.random() * 31) + 70; // Generates a number between 70 and 100
    document.getElementById('result').innerHTML = `
        <div>Percentage of 💗 between ${yourName} & ${crushName}</div>
        <div>${lovePercentage}%</div>
    `;
});
