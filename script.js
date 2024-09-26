// scripts.js
document.getElementById('analyzeBtn').addEventListener('click', function() {
    const videoInput = document.getElementById('videoUpload');
    const videoPlayer = document.getElementById('droneVideo');
    const resultsContainer = document.getElementById('resultsContainer');

    // Check if a file is uploaded
    if (videoInput.files && videoInput.files[0]) {
        const file = videoInput.files[0];
        const url = URL.createObjectURL(file);
        videoPlayer.src = url;
        videoPlayer.play();

        // Simulate analysis process
        resultsContainer.innerHTML = '<p>Analyzing... Please wait.</p>';
        setTimeout(function() {
            resultsContainer.innerHTML = '<p>Analysis complete. No anomalies detected.</p>';
        }, 3000); // Simulate a delay in analysis
    } else {
        alert('Please upload a video file.');
    }
});
