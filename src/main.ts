import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="container">
        <i class="bx bx-link-alt"></i>
        <h1>URL Shortener</h1>
        <label for="originalUrl">Enter URL to shorten:</label>
        <input type="text" id="originalUrl" placeholder="https://example.com">
        <div class="buttons">
            <button id="reload-btn">Reload</button>
            <button id="short-btn">Shorten</button>
        </div>
        <label for="shortenedUrl">Shortened URL:</label>
        <textarea id="shortenedUrl" rows="2" readonly></textarea>
    </div>
`;

const shortBtn = document.getElementById('short-btn') as HTMLButtonElement;
const reloadBtn = document.getElementById('reload-btn') as HTMLButtonElement;

shortBtn.addEventListener('click', () => {
    const originalUrl = (document.getElementById('originalUrl') as HTMLInputElement).value;
    const apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);
    const shortenedUrlTextarea = document.getElementById('shortenedUrl') as HTMLTextAreaElement;

    fetch(apiUrl)
        .then(response => response.text())
        .then(data => {
            shortenedUrlTextarea.value = data;
        })
        .catch(error => {
            shortenedUrlTextarea.value = `Error: ${error.message}`;
        });
});

reloadBtn.addEventListener('click', () => {
    location.reload();
});
