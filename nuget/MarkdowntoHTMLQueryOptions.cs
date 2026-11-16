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
        /// Markdown text to convert (max 500,000 characters); leading indentation and trailing spaces are kept
        /// </summary>
        [JsonProperty("markdown")]
        public string Markdown { get; set; }
    }
}
