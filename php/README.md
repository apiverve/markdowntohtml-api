# Markdown to HTML API - PHP Package

Markdown to HTML parses markdown syntax and converts it to clean, semantic HTML suitable for web rendering and content management.

## Installation

Install via Composer:

```bash
composer require apiverve/markdowntohtml
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Markdowntohtml\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute(['markdown' => '# Hello World

This is a **bold** statement and this is *italic*.

## Features

- Easy to use
- Fast conversion
- Supports common markdown syntax

[Link to example](https://example.com)']);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Markdowntohtml\Client;
use APIVerve\Markdowntohtml\Exceptions\APIException;
use APIVerve\Markdowntohtml\Exceptions\ValidationException;

try {
    $response = $client->execute(['markdown' => '# Hello World

This is a **bold** statement and this is *italic*.

## Features

- Easy to use
- Fast conversion
- Supports common markdown syntax

[Link to example](https://example.com)']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "html": "<h1>Hello World</h1>\n<p>This is a <strong>bold</strong> statement and this is <em>italic</em>.</p>\n<h2>Features</h2>\n<ul>\n<li>Easy to use</li>\n<li>Fast conversion</li>\n<li>Supports common markdown syntax</li>\n</ul>\n<p><a href=\"https://example.com\">Link to example</a></p>\n",
    "markdownLength": 185,
    "htmlLength": 272
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/markdowntohtml?utm_source=packagist&utm_medium=readme).

## Support

- Website: [https://markdowntohtml.apiverve.com?utm_source=php&utm_medium=readme](https://markdowntohtml.apiverve.com?utm_source=php&utm_medium=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
