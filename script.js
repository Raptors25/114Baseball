document.getElementById('chat-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const question = document.getElementById('question').value;
    const responseDiv = document.getElementById('response');
    responseDiv.innerText = 'Loading...';

    // Fetch response from OpenAI's API
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_OPENAI_API_KEY`
        },
        body: JSON.stringify({
            prompt: question,
            max_tokens: 100
        })
    });
    
    const data = await response.json();
    responseDiv.innerText = data.choices[0].text.trim();
});
