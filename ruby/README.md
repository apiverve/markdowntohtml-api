# Markdown to HTML API - Ruby Gem

Markdown to HTML is a markdown converter API that parses markdown syntax and converts it to clean, semantic HTML suitable for web rendering and content management.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_markdowntohtml'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_markdowntohtml
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_markdowntohtml'

# Initialize the client
client = APIVerve::Markdowntohtml::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({ markdown: "# Hello World

This is a **bold** statement and this is *italic*.

## Features

- Easy to use
- Fast conversion
- Supports common markdown syntax

[Link to example](https://example.com)" })

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ markdown: "# Hello World

This is a **bold** statement and this is *italic*.

## Features

- Easy to use
- Fast conversion
- Supports common markdown syntax

[Link to example](https://example.com)" })
  puts response["data"]
rescue APIVerve::Markdowntohtml::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Markdowntohtml::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Markdowntohtml::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/markdowntohtml?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/markdowntohtml?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/markdowntohtml?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
