# Markdown to HTML API - Dart/Flutter Client

Markdown to HTML is a markdown converter API that parses markdown syntax and converts it to clean, semantic HTML suitable for web rendering and content management.

[![pub package](https://img.shields.io/pub/v/apiverve_markdowntohtml.svg)](https://pub.dev/packages/apiverve_markdowntohtml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is the Dart/Flutter client for the [Markdown to HTML API](https://apiverve.com/marketplace/markdowntohtml?utm_source=dart&utm_medium=referral&utm_content=readme).

## Installation

Add this to your `pubspec.yaml`:

```yaml
dependencies:
  apiverve_markdowntohtml: ^1.2.5
```

Then run:

```bash
dart pub get
# or for Flutter
flutter pub get
```

## Usage

```dart
import 'package:apiverve_markdowntohtml/apiverve_markdowntohtml.dart';

void main() async {
  final client = MarkdowntohtmlClient('YOUR_API_KEY');

  try {
    final response = await client.execute({
      'markdown': '# Hello World

This is a **bold** statement and this is *italic*.

## Features

- Easy to use
- Fast conversion
- Supports common markdown syntax

[Link to example](https://example.com)'
    });

    print('Status: ${response.status}');
    print('Data: ${response.data}');
  } catch (e) {
    print('Error: $e');
  }
}
```

## Response

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

## API Reference

- **API Home:** [Markdown to HTML API](https://apiverve.com/marketplace/markdowntohtml?utm_source=dart&utm_medium=referral&utm_content=readme)
- **Documentation:** [docs.apiverve.com/ref/markdowntohtml](https://docs.apiverve.com/ref/markdowntohtml?utm_source=dart&utm_medium=referral&utm_content=readme)

## Authentication

All requests require an API key. Get yours at [apiverve.com](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme).

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with Dart for [APIVerve](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme)
