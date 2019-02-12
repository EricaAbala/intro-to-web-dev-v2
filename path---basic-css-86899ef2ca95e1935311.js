webpackJsonp([0xfe050a490751],{461:function(e,t){e.exports={data:{markdownRemark:{html:'<style>\n  .step-one {\n    color: red\n  }\n\n  .step-two {\n    color: limegreen;\n    font-size: 60px;\n    font-weight: normal;\n    text-decoration: underline;\n    text-transform: uppercase;\n    border: 3px solid pink;\n  }\n</style>\n<p>Okay, now we\'ve began putting HTML elements on a page. Using our house-building analogy, this is like we have all the materials now in a pile in front of our house. However a pile of lumber does not make a house. We\'re going to start reasoning about how to put together these things, how to create our blueprints, our plans. CSS is really powerful and can accomplish a wide variety of things: colors, sizes, order, positioning, hiding, showing, animation, etc. We\'ll scratch the surface here, but know you can do a lot with just CSS. It\'s a deep subject and a powerful tool.</p>\n<p>Like HTML, CSS is not a programming language. It\'s a list of rules that you give the browser. You\'ll provide rules to the browser like "all <code class="language-text">h1</code>s will be colored red." We\'ll explore why this is different than JavaScript later, but know that\'s the gist.</p>\n<h2 id="style"><a href="#style" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Style</h2>\n<p>We\'ll first explore the most apparent way to use CSS: to effect visual changes on your HTML. Imagine an <code class="language-text">h1</code> like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-htm"><code class="language-htm">&lt;h1&gt;This is an h1.&lt;/h1&gt;</code></pre>\n      </div>\n<p>So far so good. What if we wanted to instead make the h1 be red instead? Like this</p>\n<h1 class="step-one">This is an h1.</h1>\n<p>We\'re going to write a CSS rule that makes the case. That would look like:</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">h1</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>That\'s it! There\'s your first CSS. Let\'s dissect each piece of this rule:</p>\n<ul>\n<li><code class="language-text">h1</code> — This is what we\'d call the <strong>selector</strong>. Anything that matches this selector is going to have everything inside the <code class="language-text">{ }</code> applied to it. These selectors can be a wide variety of things but for now we\'re just selecting <em>every</em> <code class="language-text">h1</code> on the page. That\'s important to keep in mind too: it\'ll apply the changes to everything that matches that selector.</li>\n<li><code class="language-text">color:</code> – This is called the <strong>property</strong>. There are about <a href="https://meiert.com/en/indices/css-properties/">~350 properties</a> that you can use but to be honest you\'ll never use all of them. Maybe fifty to a hundred are used frequently and the rest are a long tail that are rarely used. The <code class="language-text">color</code> property affects the color of the font (as well as some other things, but for now just assume it means font color.)</li>\n<li><code class="language-text">red</code> – This is the <strong>value</strong>. This identifies what the value of the property is going to be. In this case, we\'re telling the color to be red. There are variety of ways to define color in CSS. This is called using "named color", of which there are about <a href="https://css-tricks.com/snippets/css/named-colors-and-hex-equivalents/">150 different colors</a> that CSS understands. CSS also understands hex values like <code class="language-text">#ff0000</code>, rgb values like <code class="language-text">rgb(255, 0, 0)</code>, and hsl values like <code class="language-text">hsl(0, 100%, 50%)</code>. All those values I gave in the previous sentence are the same color as <code class="language-text">red</code>. You don\'t actually need to understand how these values work to understand web programming or CSS and I would assert most web developers don\'t. If you need to understand, here\'s a great article on it from <a href="https://css-tricks.com/nerds-guide-color-web/">CSS Tricks</a>.</li>\n<li><code class="language-text">;</code> – Every property-value pair will end in a semicolon. Think of it like a period/full-stop to end of a sentence. This is how the computer knows you\'re done with that property and moving on.</li>\n</ul>\n<p>So let\'s go a step further. Let\'s make our h1 even more different! Let\'s make it limegreen, bigger, not bold (<code class="language-text">h1</code>s are by-default bold), underlined, uppercased, and have pink border!</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">h1</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> limegreen<span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>\n  <span class="token property">font-weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>\n  <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>\n  <span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 3px solid pink<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h1 class="step-two">This is an h1</h1>\n<p>Notice the HTML we\'re using for this is still: <code class="language-text">&lt;h1&gt;This is an h1&lt;/h1&gt;</code>. Nothing has changed there! This is all just using a CSS rule the affect how it looks. Pretty cool, right? Also notice that one selector can have multiple properties and that one property can have multiple values! Let\'s dissect that.</p>\n<ul>\n<li><code class="language-text">color: limegreen;</code> – We used this before, but now we\'re using the color <code class="language-text">limegreen</code>!</li>\n<li><code class="language-text">font-size: 60px;</code> – <code class="language-text">font-size</code> is how we make text bigger or smaller. Since we wanted to make it bigger, we made it 60 pixels tall which is quite large. The <code class="language-text">px</code> represent the unit of measurement here. Just as it\'s different to say something is five feet long, five inches long, or five meters long, so too is it different to say something is <code class="language-text">60px</code> or <code class="language-text">60em</code>. CSS has a bunch of different measurements, but <em>most</em> things are measured in <code class="language-text">px</code>, <code class="language-text">em</code>, or <code class="language-text">rem</code>. <a href="https://css-tricks.com/the-lengths-of-css/">See this CSS Tricks article</a> if you want see more about the various measurements of CSS.</li>\n<li><code class="language-text">font-weight: normal;</code> – Like I stated previously, <code class="language-text">h1</code>s are bold by default. This is how you tell the browser to keep the text\'s weight to normal. There are more things you <em>can</em> do here, but typically you\'re only telling it be bold or normal.</li>\n<li><code class="language-text">text-decoration: underline;</code> – This is how you tell it underline the text. Mostly text-decoration is used for that but you\'ll also see <code class="language-text">line-through</code> for strikethrough or <code class="language-text">overline</code> for … overlining purposes? Yeah, I\'m not sure. But you can do it!</li>\n<li><code class="language-text">text-transform: uppercase;</code> – This can be a bit confusing because we\'re not changing the text inside the HTML tag but we\'re making everything upprecase. This is what <code class="language-text">text-transform</code> can do for you. It will also do <code class="language-text">lowercase</code> or <code class="language-text">capitalize</code> (the latter being capitalize the first letter of each word.) Be careful with this since if your website supports other languages, changing the cases of letters will modify the meaning.</li>\n<li><code class="language-text">border: 3px solid pink;</code> – This is how you make borders around items. First, notice the border goes all the way to the edge of the page. That\'s because <code class="language-text">h1</code>s take the whole line even though they don\'t necessarily have text to fill that. We\'ll address this later when we talk about the block model but it\'s good to know that now. So notice we have three values there for the one property: <code class="language-text">3px</code>, <code class="language-text">solid</code>, and <code class="language-text">pink</code>. These are all separate and could be put in any order (ie you could say <code class="language-text">border: solid pink 3px;</code> and it\'s the same.) The <code class="language-text">3px</code> represents the thickness of the border, the <code class="language-text">solid</code> represents that it\'s a solid line (it could be <code class="language-text">dotted</code>, <code class="language-text">dashed</code>, <code class="language-text">double</code>, or a few others) and <code class="language-text">pink</code> represents the color of the border. This actually an example of a combined CSS property, a shortcut. You could separate this out as <code class="language-text">border-style: solid;</code>, <code class="language-text">border-color: pink;</code>, and <code class="language-text">border-width: 3px;</code>. You\'ll see a lot of these in CSS.</li>\n</ul>\n<h2 id="parents-and-children"><a href="#parents-and-children" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Parents and Children</h2>\n<p>You\'ll notice that if I have HTML like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-htm"><code class="language-htm">&lt;div&gt;\n  &lt;h1&gt;An h1&lt;/h1&gt;\n&lt;/div&gt;</code></pre>\n      </div>\n<p>And I have CSS that looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">div</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>The <code class="language-text">h1</code> will be colored blue. This is because it has a parent (or ancestor) tag that is a <code class="language-text">div</code> which means that CSS will still affect it. This even works will large degrees of separation. If I have <code class="language-text">&lt;body&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;h1&gt;my h1&lt;/h1&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/body&gt;</code> and my CSS selector is <code class="language-text">body { color: orange }</code> that will affect the <code class="language-text">h1</code> in the middle.</p>\n<h2 id="experiment"><a href="#experiment" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Experiment</h2>\n<p>That\'s a basic primer to CSS and properties. Play around with the below CodePen and see what sorts of trouble you can cause. The key with CSS is experimentation. As you may imagine, all the various properties will interact with each other, sometimes to your detriment and sometimes in really cool and interesting ways. We\'ll explore more how to CSS to position and size things, but for now mess around with these styling techniques. To switch between the HTML and CSS, click the buttons at the top of the CodePen.</p>\n<iframe height=\'600\' scrolling=\'no\' title=\'CSS Playground\' src=\'//codepen.io/btholt/embed/ELaxOB/?height=265&theme-id=dark&default-tab=css,result&embed-version=2\' frameborder=\'no\' allowtransparency=\'true\' allowfullscreen=\'true\' style=\'width: 100%;\'>See the Pen <a href=\'https://codepen.io/btholt/pen/ELaxOB/\'>CSS Playground</a> by Brian Holt (<a href=\'https://codepen.io/btholt\'>@btholt</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>',frontmatter:{path:"/basic-css",title:"Basic CSS",order:6}},allMarkdownRemark:{edges:[{node:{frontmatter:{order:0,path:"/intro",title:"Introduction to the Course"}}},{node:{frontmatter:{order:1,path:"/overview",title:"Overview of What You'll Be Learning In This Course"}}},{node:{frontmatter:{order:2,path:"/tools",title:"Tools"}}},{node:{frontmatter:{order:3,path:"/basic-html",title:"Basic HTML"}}},{node:{frontmatter:{order:4,path:"/html-next-steps",title:"HTML Next Steps"}}},{node:{frontmatter:{order:5,path:"/meta-html",title:"Meta HTML"}}},{node:{frontmatter:{order:6,path:"/basic-css",title:"Basic CSS"}}},{node:{frontmatter:{order:7,path:"/selectors",title:"CSS Selectors and the Cascade"}}},{node:{frontmatter:{order:8,path:"/layout-css",title:"Layout CSS"}}},{node:{frontmatter:{order:9,path:"/css-patterns",title:"Effective Patterns for Writing CSS"}}},{node:{frontmatter:{order:10,path:"/project-html-css",title:"Project: HTML & CSS"}}},{node:{frontmatter:{order:11,path:"/programming-fundamentals",title:"Programming Fundamentals"}}},{node:{frontmatter:{order:12,path:"/functions-and-scope",title:"Functions and Scope"}}},{node:{frontmatter:{order:13,path:"/objects-and-arrays",title:"Objects and Arrays"}}},{node:{frontmatter:{order:14,path:"/dom",title:"The DOM"}}},{node:{frontmatter:{order:15,path:"/js-project",title:"JavaScript, HTML, and CSS Project"}}},{node:{frontmatter:{order:16,path:"/ajax",title:"AJAX"}}},{node:{frontmatter:{order:17,path:"/libraries",title:"Integrating with Other People's Libraries"}}},{node:{frontmatter:{order:18,path:"/git-and-bash",title:"Git and Bash"}}},{node:{frontmatter:{order:19,path:"/node",title:"Node.js"}}},{node:{frontmatter:{order:20,path:"/deploying",title:"Deploying Your App"}}},{node:{frontmatter:{order:21,path:"/final-thoughts",title:"Final Thoughts"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---basic-css-86899ef2ca95e1935311.js.map