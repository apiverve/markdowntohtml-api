/**
 * Markdown to HTML API - Basic Usage Example
 *
 * This example demonstrates the basic usage of the Markdown to HTML API.
 * API Documentation: https://docs.apiverve.com/ref/markdowntohtml
 */

const API_KEY = process.env.APIVERVE_API_KEY || 'YOUR_API_KEY_HERE';
const API_URL = 'https://api.apiverve.com/v1/markdowntohtml';

/**
 * Make a POST request to the Markdown to HTML API
 */
async function callMarkdowntoHTMLAPI() {
  try {
    // Request body
    const requestBody &#x3D; {
    &quot;markdown&quot;: &quot;# Hello World\n\nThis is a **bold** statement and this is *italic*.\n\n## Features\n\n- Easy to use\n- Fast conversion\n- Supports common markdown syntax\n\n[Link to example](https://example.com)&quot;
};

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    // Check if response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Check API response status
    if (data.status === 'ok') {
      console.log('✓ Success!');
      console.log('Response data:', data.data);
      return data.data;
    } else {
      console.error('✗ API Error:', data.error || 'Unknown error');
      return null;
    }

  } catch (error) {
    console.error('✗ Request failed:', error.message);
    return null;
  }
}

// Run the example
callMarkdowntoHTMLAPI()
  .then(result => {
    if (result) {
      console.log('\n📊 Final Result:');
      console.log(JSON.stringify(result, null, 2));
    }
  });
