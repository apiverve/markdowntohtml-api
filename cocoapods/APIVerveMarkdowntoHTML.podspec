Pod::Spec.new do |s|
  s.name             = 'APIVerveMarkdowntoHTML'
  s.version          = '1.2.3'
  s.summary          = 'Markdown to HTML is a markdown converter API that parses markdown syntax and converts it to clean, semantic HTML suitable for web...'
  s.description      = <<-'DESC'
Markdown to HTML is a markdown converter API that parses markdown syntax and converts it to clean, semantic HTML suitable for web rendering and content management.

This iOS/macOS SDK provides a convenient way to access the Markdown to HTML from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/markdowntohtml?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/markdowntohtml-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveMarkdowntoHTML/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end
