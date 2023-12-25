// Ensure script.js is included in the same directory as your HTML file

async function analyzeImage() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const endpoint = 'YOUR_ENDPOINT'; // Replace with your endpoint

    const fileInput = document.getElementById('imageInput');
    const resultsDiv = document.getElementById('results');

    const file = fileInput.files[0];
    if (!file) {
        alert('Please select an image');
        return;
    }

    // Create a FormData object to send the image file
    const formData = new FormData();
    formData.append('image', file);

    try {
        // Use the fetch API to send a POST request to the Azure Vision API
        const response = await fetch(`${endpoint}/vision/v3.1/analyze?visualFeatures=Description`, {
            method: 'POST',
            headers: {
                'Ocp-Apim-Subscription-Key': apiKey,
            },
            body: formData,
        });

        // Capture the response from the API
        const result = await response.json();

        // Display the results on the webpage
        resultsDiv.innerHTML = `<p>${result.description.captions[0].text}</p>`;
    } catch (error) {
        console.error('Error analyzing image:', error.message);
        resultsDiv.innerHTML = '<p>An error occurred while analyzing the image.</p>';
    }
}
