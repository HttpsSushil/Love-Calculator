document.getElementById('loveForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission
    
    const yourName = document.getElementById('yourName').value;
    const crushName = document.getElementById('crushName').value;
    
    // Log the names to the console (for debugging purposes)
    console.log(`Your Name: ${yourName}`);
    console.log(`Your Crush: ${crushName}`);
    
    // Simple love percentage calculation (replace with actual calculation)
    const lovePercentage = Math.floor(Math.random() * 31) + 70; // Generates a number between 70 and 100
    
    // Display the result on the webpage
    document.getElementById('result').innerHTML = `
        <div>Love Percentage: ${lovePercentage}%</div>
        <div>Now I know your crush name: ${crushName} 😆</div>
    `;
});
