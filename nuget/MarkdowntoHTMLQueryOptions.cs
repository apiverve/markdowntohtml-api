using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.MarkdowntoHTML
{
    /// <summary>
    /// Query options for the Markdown to HTML API
    /// </summary>
    public class MarkdowntoHTMLQueryOptions
    {
        /// <summary>
        /// Markdown text to convert (max 100,000 characters)
        /// Example: # Title\n\nThis is **bold** text.
        /// </summary>
        [JsonProperty("markdown")]
        public string Markdown { get; set; }
    }
}
