function predictSkinDisease(event) {
    var formData = new FormData();
    formData.append('file', event.target.files[0]);

    fetch('/predict', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Display prediction result or proceed to next prediction
        console.log('Predicted disease:', data.predicted_disease);
        // Redirect to next prediction or next page after all predictions
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function redirectToNextPage() {
    var filename = document.getElementById('Skin-Disease').innerText;
    // Redirect to the next page with filename as a query parameter
    window.location.href = 'nextpage.html?filename=' + encodeURIComponent(filename);
}

document.getElementById('file').addEventListener('change', function(event) {
    var file = event.target.files[0];
    if (file) {
        predictSkinDisease(event);
    }
});
