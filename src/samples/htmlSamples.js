function getHtmlSample() {
    return String.raw`<html><body>
<!--StartFragment--><h1>Online Markdown Editor - The Best Free Markdown Tool 🚀</h1>
<p>Experience the <strong>fastest</strong>, <em>most intuitive</em>, and <del>hassle-free</del> Markdown editor online!<br>Create and preview Markdown instantly with <strong>GitHub Flavored Markdown (GFM)</strong> support.  </p>
<h2>✨ Features of Online Markdown Editor</h2>
<ul>
<li><strong>Live Preview</strong>: Instantly see how your Markdown renders  </li>
<li><strong>Auto-save</strong>: Never lose your work with local storage backup  </li>
<li><strong>File Management</strong>: Create, edit, rename, and delete files easily  </li>
<li><strong>Text Formatting</strong>: Supports <strong>bold</strong>, <em>italic</em>, <del>strikethrough</del>, <sup>superscript</sup>, and <sub>subscript</sub>  </li>
<li><strong>Lists</strong>: Easily create <strong>bullet lists</strong> and <strong>numbered lists</strong>  </li>
<li><strong>Code Blocks</strong>: Format your code with syntax highlighting  </li>
<li><strong>Tables</strong>: Create structured data with Markdown tables  </li>
<li><strong>Mermaid Diagrams</strong>: Visualize concepts with flowcharts and graphs  </li>
<li><strong>Image &amp; Link Insertion</strong>: Easily add images and links  </li>
<li><strong>Print &amp; Download</strong>: Save as a Markdown file or print directly</li>
</ul>
<hr>
<h2>📌 Markdown Syntax Guide</h2>
<h3>Headings</h3>
<h1>H1 - Largest Heading</h1>
<h2>H2 - Second Largest</h2>
<h3>H3 - Subheading</h3>
<h4>H4 - Smaller Heading</h4>
<h5>H5 - Tiny Heading</h5>
<h6>H6 - Smallest Heading</h6>
<h3>✍️ Text Formatting</h3>
<ul>
<li><strong>Bold</strong> → <code>**Bold**</code> → <strong>Bold</strong>  </li>
<li><em>Italic</em> → <code>*Italic*</code> → <em>Italic</em>  </li>
<li><del>Strikethrough</del> → <code>~~Strikethrough~~</code> → <del>Strikethrough</del>  </li>
<li><sup>Superscript</sup> → <code>&lt;sup&gt;Superscript&lt;/sup&gt;</code>  </li>
<li><sub>Subscript</sub> → <code>&lt;sub&gt;Subscript&lt;/sub&gt;</code></li>
</ul>
<h3>📋 Lists</h3>
<h4>Bullet List</h4>
<ul>
<li>Item 1  </li>
<li>Item 2
<ul>
<li>Item 2 > Sub item 1</li>
<li>Item 2 > Sub item 2
<ul>
<li>Item 2 > Sub item 2 > item 1</li>
<li>Item 2 > Sub item 2 > item 2</li>
<li>Item 2 > Sub item 2 > item 3</li></ul></li>
<li>Item 2 > Sub item 3</li>
</ul>
</li>
<li>Item 3</li>
</ul>
<h4>Numbered List</h4>
<ol>
<li>First Item  
<ol>
<li>First sub Item  </li>
<li>Second sub Item  </li>
<li>Third sub Item</li>
</ol></li>
<li>Second Item  </li>
<li>Third Item</li>
</ol>
<h3>🔗 Links &amp; Images</h3>
<p><a href="https://onlinemarkdown.com">Visit Online Markdown Editor</a>  </p>
<p><img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg" alt="Markdown Logo"></p>
<h3>📝 Blockquotes</h3>
<blockquote>
<p>"Markdown is a lightweight markup language for creating formatted text using a plain-text editor."<br>– John Gruber</p>
</blockquote>
<h3>Code Blocks</h3>
<h4>JavaScript Example</h4>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">function</span> <span class="hljs-title function_">greet</span>(<span class="hljs-params">name</span>) {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">\`Hello, <span class="hljs-subst">\${name}</span>!\`</span>);
}

<span class="hljs-comment">// Call the function</span>
<span class="hljs-title function_">greet</span>(<span class="hljs-string">'Markdown'</span>);</code></pre><h4>Python Example</h4>
<pre><code class="hljs language-python"><span class="hljs-keyword">def</span> <span class="hljs-title function_">calculate_sum</span>(<span class="hljs-params">numbers</span>):
    <span class="hljs-keyword">return</span> <span class="hljs-built_in">sum</span>(numbers)

<span class="hljs-comment"># Example usage</span>
result = calculate_sum([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>])
<span class="hljs-built_in">print</span>(<span class="hljs-string">f"The sum is: <span class="hljs-subst">{result}</span>"</span>)</code></pre><h3>📊 Tables</h3>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Supported</th>
</tr>
</thead>
<tbody><tr>
<td>Bold/Italic</td>
<td>✅ Yes</td>
</tr>
<tr>
<td>Lists</td>
<td>✅ Yes</td>
</tr>
<tr>
<td>Code Blocks</td>
<td>✅ Yes</td>
</tr>
<tr>
<td>Tables</td>
<td>✅ Yes</td>
</tr>
<tr>
<td>Image</td>
<td>✅ Yes</td>
</tr>
<tr>
<td>Link</td>
<td>✅ Yes</td>
</tr>
</tbody></table>
<h3>📢 Try It Now!</h3>
<p>Start writing Markdown at <a href="https://onlinemarkdown.com">Online Markdown Editor</a> and boost your productivity today! 🚀</p><!--EndFragment-->
</body>
</html>`;
}

export default getHtmlSample;
