import{_ as e,r as p,o,c,a as n,d as a,b as t,e as l}from"./app-03679ccd.js";const i="/yeahok/assets/image-7a941d87.png",r={},u=l(`<h1 id="_1-http-errors" tabindex="-1"><a class="header-anchor" href="#_1-http-errors" aria-hidden="true">#</a> 1. http-errors</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p><code>http-errors</code> 主要供 <code>express</code>、<code>koa</code> 等后端框架使用，用于便捷地创建 HTTP 异常状态。简单使用如下所示：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> createError <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http-errors&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token number">3001</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token function">createError</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Example app listening at http://localhost:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖" aria-hidden="true">#</a> 依赖</h2><p><code>http-errors</code> 的外部依赖包有 <code>depd</code>、<code>setprototypeof</code>、<code>statuses</code>、<code>inherits</code>、<code>toidentifier</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> deprecate <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;depd&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&#39;http-errors&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> setPrototypeOf <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;setprototypeof&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> statuses <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;statuses&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> inherits <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;inherits&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> toIdentifier <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;toidentifier&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="depd" tabindex="-1"><a class="header-anchor" href="#depd" aria-hidden="true">#</a> depd</h3><p><code>depd</code> 主要用于输出提示信息以及实现向后兼容操作，简单使用如下所示：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> deprecate <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;depd&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&#39;LvLin-test&#39;</span><span class="token punctuation">)</span>
<span class="token function">deprecate</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, I am LvLin.&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 输出提示语</span>

<span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello world!&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 实际运行了 sayHello，并输出了相关提示</span>
<span class="token keyword">const</span> sayHi <span class="token operator">=</span> deprecate<span class="token punctuation">.</span><span class="token function">function</span><span class="token punctuation">(</span>sayHello<span class="token punctuation">,</span> <span class="token string">&#39;sayHi; use &quot;sayHello&quot; instead&#39;</span><span class="token punctuation">)</span>
<span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下图所示：</p><p><img src="`+i+`" alt="Alt text"></p><h3 id="statuses" tabindex="-1"><a class="header-anchor" href="#statuses" aria-hidden="true">#</a> statuses</h3><p>statuses 是一个处理 HTTP 状态码的工具库。需要注意的是 http-errors 使用的 statuses 低于 2.0 版本，因为在 2.x 版本中部分 api 已经不再支持。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;statuses&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&gt;= 1.5.0 &lt; 2&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>statuses 的简单使用如下所示：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>status<span class="token punctuation">[</span><span class="token number">404</span><span class="token punctuation">]</span> <span class="token comment">// =&gt; &#39;Not Found&#39;</span>
status<span class="token punctuation">[</span><span class="token string">&#39;Not Found&#39;</span><span class="token punctuation">]</span> <span class="token comment">// =&gt; 404</span>
status<span class="token punctuation">.</span>codes <span class="token comment">// 获取所有状态码</span>
<span class="token comment">// [</span>
<span class="token comment">//     100, 101, 102, 103, 200, 201, 202, 203, 204,</span>
<span class="token comment">//     205, 206, 207, 208, 226, 300, 301, 302, 303,</span>
<span class="token comment">//     304, 305, 306, 307, 308, 400, 401, 402, 403,</span>
<span class="token comment">//     404, 405, 406, 407, 408, 409, 410, 411, 412,</span>
<span class="token comment">//     413, 414, 415, 416, 417, 418, 421, 422, 423,</span>
<span class="token comment">//     424, 425, 426, 428, 429, 431, 451, 500, 501,</span>
<span class="token comment">//     502, 503, 504, 505, 506, 507, 508, 509, 510,</span>
<span class="token comment">//     511</span>
<span class="token comment">// ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>statuses 的源码可以简单看一下，相关解释见注释：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span>

<span class="token comment">// 引入状态码映射表，结构如下</span>
<span class="token comment">// {</span>
<span class="token comment">//   &quot;100&quot;: &quot;Continue&quot;,</span>
<span class="token comment">//   &quot;101&quot;: &quot;Switching Protocols&quot;,</span>
<span class="token comment">//   &quot;102&quot;: &quot;Processing&quot;,</span>
<span class="token comment">//   &quot;103&quot;: &quot;Early Hints&quot;,</span>
<span class="token comment">//   ...</span>
<span class="token comment">// }</span>
<span class="token keyword">var</span> codes <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./codes.json&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> status

<span class="token comment">// status.STATUS_CODES 保存了所有状态码的原因短语映射</span>
status<span class="token punctuation">.</span><span class="token constant">STATUS_CODES</span> <span class="token operator">=</span> codes

<span class="token comment">// status.codes 保存了所有的状态码</span>
status<span class="token punctuation">.</span>codes <span class="token operator">=</span> <span class="token function">populateStatusesMap</span><span class="token punctuation">(</span>status<span class="token punctuation">,</span> codes<span class="token punctuation">)</span>

<span class="token comment">// 与重定向相关的状态码</span>
status<span class="token punctuation">.</span>redirect <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token number">300</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token number">301</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token number">302</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token number">303</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token number">305</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token number">307</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token number">308</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 响应报文没有 body 的状态码</span>
status<span class="token punctuation">.</span>empty <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token number">204</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token number">205</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token number">304</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 暂时无法处理请求，需要重试请求的状态码</span>
status<span class="token punctuation">.</span>retry <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token number">502</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token number">503</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token number">504</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 将状态码跟原因短语绑定到 statuses 上</span>
<span class="token keyword">function</span> <span class="token function">populateStatusesMap</span><span class="token punctuation">(</span><span class="token parameter">statuses<span class="token punctuation">,</span> codes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>codes<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">forEachCode</span><span class="token punctuation">(</span><span class="token parameter">code</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> message <span class="token operator">=</span> codes<span class="token punctuation">[</span>code<span class="token punctuation">]</span>
    <span class="token keyword">var</span> status <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span>

    <span class="token comment">// 状态码跟原因短语绑定到 statuses上</span>
    <span class="token comment">// 全小写的原因短语也考虑</span>
    statuses<span class="token punctuation">[</span>status<span class="token punctuation">]</span> <span class="token operator">=</span> message
    statuses<span class="token punctuation">[</span>message<span class="token punctuation">]</span> <span class="token operator">=</span> status
    statuses<span class="token punctuation">[</span>message<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> status

    <span class="token comment">// 将状态码保存，为了返回给 status.codes</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>

<span class="token comment">// 接受一个code，只能是数字或者字符串</span>
<span class="token comment">// 如果是数字：如果是支持的状态码，返回该数字，否则抛出异常</span>
<span class="token comment">// 如果字符串：1、尝试转成数字，如果非 NaN，判断是否是支持的状态码，返回该数字或者抛出异常</span>
<span class="token comment">//           2、当成原因短语处理，判断是否有符合的原因短语，返回相应的状态码或者抛出异常</span>
<span class="token keyword">function</span> <span class="token function">status</span><span class="token punctuation">(</span><span class="token parameter">code</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> code <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>status<span class="token punctuation">[</span>code<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;invalid status code: &#39;</span> <span class="token operator">+</span> code<span class="token punctuation">)</span>
    <span class="token keyword">return</span> code
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> code <span class="token operator">!==</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;code must be a number or string&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// &#39;403&#39;</span>
  <span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isNaN</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>status<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;invalid status code: &#39;</span> <span class="token operator">+</span> n<span class="token punctuation">)</span>
    <span class="token keyword">return</span> n
  <span class="token punctuation">}</span>

  n <span class="token operator">=</span> status<span class="token punctuation">[</span>code<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>n<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;invalid status message: &quot;&#39;</span> <span class="token operator">+</span> code <span class="token operator">+</span> <span class="token string">&#39;&quot;&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> n
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setprototypeof" tabindex="-1"><a class="header-anchor" href="#setprototypeof" aria-hidden="true">#</a> setprototypeof</h3><p>setprototypeof 是一个 Object.setPrototypeOf 的垫片库，跨平台，兼容到 IE8。</p><p>看一下源码实现：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span>
<span class="token comment">/* eslint no-proto: 0 */</span>
<span class="token comment">// 优先使用 Object.setPrototypeOf</span>
<span class="token comment">// 判断使用 __proto__ 能不能改变原型链，如果可以就用 setProtoOf</span>
<span class="token comment">// 如果不行就用 mixinProperties</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span>
  Object<span class="token punctuation">.</span>setPrototypeOf <span class="token operator">||</span>
  <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">__proto__</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token keyword">instanceof</span> <span class="token class-name">Array</span> <span class="token operator">?</span> setProtoOf <span class="token operator">:</span> mixinProperties<span class="token punctuation">)</span>

<span class="token comment">// 可以通过 __proto__ 修改原型链，直接修改</span>
<span class="token keyword">function</span> <span class="token function">setProtoOf</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> proto</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> proto
  <span class="token keyword">return</span> obj
<span class="token punctuation">}</span>

<span class="token comment">// 无法通过 __proto__ 修改原型链</span>
<span class="token keyword">function</span> <span class="token function">mixinProperties</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> proto</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> prop <span class="token keyword">in</span> proto<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 找出非本对象已有的属性，绑定到对象上</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> prop<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      obj<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> proto<span class="token punctuation">[</span>prop<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> obj
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="inherits" tabindex="-1"><a class="header-anchor" href="#inherits" aria-hidden="true">#</a> inherits</h3><p>inherits 用于实现对象的原型继承，简单使用如下所示：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Base</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;base&#39;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>base <span class="token operator">=</span> <span class="token number">1991</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Sub</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;sub&#39;</span>
<span class="token punctuation">}</span>
<span class="token function">inherits</span><span class="token punctuation">(</span>Sub<span class="token punctuation">,</span> Base<span class="token punctuation">)</span>

<span class="token keyword">let</span> objSub <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sub</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
objSub<span class="token punctuation">.</span>base <span class="token comment">// 1991</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看一下源码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// inherits.js</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果是 node 环境，用 util.inherits</span>
  <span class="token keyword">var</span> util <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;util&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">/* istanbul ignore next */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> util<span class="token punctuation">.</span>inherits <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token string">&#39;&#39;</span>
  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> util<span class="token punctuation">.</span>inherits
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果是浏览器环境就使用 inherits_browser.js</span>
  <span class="token comment">/* istanbul ignore next */</span>
  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./inherits_browser.js&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// inherits_browser.js</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> Object<span class="token punctuation">.</span>create <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果支持 Object.create，使用 object.create 实现寄生组合式继承</span>
  module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">inherits</span><span class="token punctuation">(</span><span class="token parameter">ctor<span class="token punctuation">,</span> superCtor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>superCtor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ctor<span class="token punctuation">.</span>super_ <span class="token operator">=</span> superCtor
      ctor<span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>superCtor<span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">constructor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> ctor<span class="token punctuation">,</span>
          <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// 利用空的构造函数实现寄生组合式继承</span>
  module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">inherits</span><span class="token punctuation">(</span><span class="token parameter">ctor<span class="token punctuation">,</span> superCtor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>superCtor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ctor<span class="token punctuation">.</span>super_ <span class="token operator">=</span> superCtor
      <span class="token keyword">var</span> <span class="token function-variable function">TempCtor</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token class-name">TempCtor</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> superCtor<span class="token punctuation">.</span>prototype
      ctor<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TempCtor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      ctor<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> ctor
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="toidentifier" tabindex="-1"><a class="header-anchor" href="#toidentifier" aria-hidden="true">#</a> toIdentifier</h3><p>toIdentifier 用于将字符串转成符合规范的变量名，源码及解释如下所示：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">toIdentifier</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> str
    <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token comment">// 按照空格将字符串分割成数组</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">token</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 各单词首字母大写</span>
      <span class="token keyword">return</span> token<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> token<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 所有单词重新拼接在一起</span>
    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[^ _0-9a-z]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 去掉特殊字符</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="http-errors-源码分析" tabindex="-1"><a class="header-anchor" href="#http-errors-源码分析" aria-hidden="true">#</a> http-errors 源码分析</h2><p>先从几个简单的工具函数看起。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 将状态码根据开头数字进行归类，比如 401、402 的 codeClass 为 400</span>
<span class="token keyword">function</span> <span class="token function">codeClass</span><span class="token punctuation">(</span><span class="token parameter">status</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">Number</span><span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;00&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 从名称标符获取类名，以 Error 结尾，</span>
<span class="token keyword">function</span> <span class="token function">toClassName</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> name<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">&#39;Error&#39;</span> <span class="token operator">?</span> name <span class="token operator">+</span> <span class="token string">&#39;Error&#39;</span> <span class="token operator">:</span> name
<span class="token punctuation">}</span>

<span class="token comment">// 修改函数的名称</span>
<span class="token keyword">function</span> <span class="token function">nameFunc</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> desc <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>func<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>desc <span class="token operator">&amp;&amp;</span> desc<span class="token punctuation">.</span>configurable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果可修改，通过 Object.defineProperty 修改函数名称</span>
    desc<span class="token punctuation">.</span>value <span class="token operator">=</span> name
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>func<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> desc<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>create.HttpError 是用于继承的抽象类，不能直接调用。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>HttpError <span class="token operator">=</span> <span class="token function">createHttpErrorConstructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 生成一个抽象基类</span>

<span class="token keyword">function</span> <span class="token function">createHttpErrorConstructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 这是一个抽象类，不能直接调用，只是用于继承</span>
  <span class="token comment">// 如果直接调用，抛出异常</span>
  <span class="token keyword">function</span> <span class="token function">HttpError</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;cannot construct abstract class&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">inherits</span><span class="token punctuation">(</span>HttpError<span class="token punctuation">,</span> Error<span class="token punctuation">)</span>
  <span class="token keyword">return</span> HttpError
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>createError.isHttpError 用于判断实例是否是 HttpError 类型。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>isHttpError <span class="token operator">=</span> <span class="token function">createIsHttpErrorFunction</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>HttpError<span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">createIsHttpErrorFunction</span><span class="token punctuation">(</span><span class="token parameter">HttpError</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">isHttpError</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>val <span class="token operator">||</span> <span class="token keyword">typeof</span> val <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果继承自 HttpError，返回 true</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token keyword">instanceof</span> <span class="token class-name">HttpError</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 通过 createError() 创建的自定义错误类型条件</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      val <span class="token keyword">instanceof</span> <span class="token class-name">Error</span> <span class="token operator">&amp;&amp;</span>
      <span class="token keyword">typeof</span> val<span class="token punctuation">.</span>expose <span class="token operator">===</span> <span class="token string">&#39;boolean&#39;</span> <span class="token operator">&amp;&amp;</span>
      <span class="token keyword">typeof</span> val<span class="token punctuation">.</span>statusCode <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span> <span class="token operator">&amp;&amp;</span>
      val<span class="token punctuation">.</span>status <span class="token operator">===</span> val<span class="token punctuation">.</span>statusCode
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化时，创建各个状态码异常类的构造函数，并绑定到 createError 上。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 将各类错误的 constructor 绑定到 createError 上，方便调用，比如 new createError.NotFound()</span>
<span class="token function">populateConstructorExports</span><span class="token punctuation">(</span>
  module<span class="token punctuation">.</span>exports<span class="token punctuation">,</span>
  statuses<span class="token punctuation">.</span>codes<span class="token punctuation">,</span>
  module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>HttpError
<span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">populateConstructorExports</span><span class="token punctuation">(</span><span class="token parameter">exports<span class="token punctuation">,</span> codes<span class="token punctuation">,</span> HttpError</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  codes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">forEachCode</span><span class="token punctuation">(</span><span class="token parameter">code</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> CodeError
    <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token function">toIdentifier</span><span class="token punctuation">(</span>statuses<span class="token punctuation">[</span>code<span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token function">codeClass</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token number">400</span><span class="token operator">:</span> <span class="token comment">// 4xx 状态码，提供客户端异常类的构造函数</span>
        CodeError <span class="token operator">=</span> <span class="token function">createClientErrorConstructor</span><span class="token punctuation">(</span>HttpError<span class="token punctuation">,</span> name<span class="token punctuation">,</span> code<span class="token punctuation">)</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token number">500</span><span class="token operator">:</span> <span class="token comment">// 5xx 状态码，提供服务端异常类的构造函数</span>
        CodeError <span class="token operator">=</span> <span class="token function">createServerErrorConstructor</span><span class="token punctuation">(</span>HttpError<span class="token punctuation">,</span> name<span class="token punctuation">,</span> code<span class="token punctuation">)</span>
        <span class="token keyword">break</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>CodeError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// createError[404] === createError.NotFound</span>
      <span class="token comment">// 相应的 code 和 name 对应同一个构造函数</span>
      exports<span class="token punctuation">[</span>code<span class="token punctuation">]</span> <span class="token operator">=</span> CodeError
      exports<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> CodeError
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 兼容旧版本的 I&#39;mateapot</span>
  exports<span class="token punctuation">[</span><span class="token string">&quot;I&#39;mateapot&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> deprecate<span class="token punctuation">.</span><span class="token function">function</span><span class="token punctuation">(</span>
    exports<span class="token punctuation">.</span>ImATeapot<span class="token punctuation">,</span>
    <span class="token string">&#39;&quot;I\\&#39;mateapot&quot;; use &quot;ImATeapot&quot; instead&#39;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再来看看客户端异常类和服务端异常类的构造函数是怎么生成的。</p><p><code>createServerErrorConstructor</code> 返回 ServerError 类构造函数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createServerErrorConstructor</span><span class="token punctuation">(</span><span class="token parameter">HttpError<span class="token punctuation">,</span> name<span class="token punctuation">,</span> code</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> className <span class="token operator">=</span> <span class="token function">toClassName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>

  <span class="token keyword">function</span> <span class="token function">ServerError</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建 Error 实例，错误描述为传入值或者</span>
    <span class="token keyword">var</span> msg <span class="token operator">=</span> message <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">?</span> message <span class="token operator">:</span> statuses<span class="token punctuation">[</span>code<span class="token punctuation">]</span>
    <span class="token keyword">var</span> err <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>

    <span class="token comment">// 捕获构造点的堆栈跟踪，具体使用见 http://nodejs.cn/api/errors.html#errors_error_capturestacktrace_targetobject_constructoropt</span>
    Error<span class="token punctuation">.</span><span class="token function">captureStackTrace</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> ServerError<span class="token punctuation">)</span>

    <span class="token comment">// err.__proto__ = ServerError.prototype</span>
    <span class="token comment">// 即让 err 成为 ServerError 类实例</span>
    <span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token class-name">ServerError</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>

    <span class="token comment">// 重定义 err 的错误描述</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> msg<span class="token punctuation">,</span>
      <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 重定义 err 的 name</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> className<span class="token punctuation">,</span>
      <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> err
  <span class="token punctuation">}</span>

  <span class="token comment">// ServerError 类继承自 HttpError 类</span>
  <span class="token function">inherits</span><span class="token punctuation">(</span>ServerError<span class="token punctuation">,</span> HttpError<span class="token punctuation">)</span>
  <span class="token comment">// 将构造函数重命名为 name + &#39;Error&#39;，避免重名</span>
  <span class="token function">nameFunc</span><span class="token punctuation">(</span>ServerError<span class="token punctuation">,</span> className<span class="token punctuation">)</span>

  <span class="token class-name">ServerError</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>status <span class="token operator">=</span> code
  <span class="token class-name">ServerError</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> code
  <span class="token class-name">ServerError</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>expose <span class="token operator">=</span> <span class="token boolean">false</span>

  <span class="token keyword">return</span> ServerError
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>createClientErrorConstructor</code> 返回 ClientError 类构造函数，其实现与 ServerError 基本一一致。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createClientErrorConstructor</span><span class="token punctuation">(</span><span class="token parameter">HttpError<span class="token punctuation">,</span> name<span class="token punctuation">,</span> code</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> className <span class="token operator">=</span> <span class="token function">toClassName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>

  <span class="token keyword">function</span> <span class="token function">ClientError</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建 Error 类实例</span>
    <span class="token keyword">var</span> msg <span class="token operator">=</span> message <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">?</span> message <span class="token operator">:</span> statuses<span class="token punctuation">[</span>code<span class="token punctuation">]</span>
    <span class="token keyword">var</span> err <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>

    <span class="token comment">// 捕获构造点的堆栈跟踪，具体使用见 http://nodejs.cn/api/errors.html#errors_error_capturestacktrace_targetobject_constructoropt</span>
    Error<span class="token punctuation">.</span><span class="token function">captureStackTrace</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> ClientError<span class="token punctuation">)</span>

    <span class="token comment">// err.__proto__ = ClientError.prototype</span>
    <span class="token comment">// 即让 err 成为 ClientError 类实例</span>
    <span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token class-name">ClientError</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>

    <span class="token comment">// 重定义 err 的错误描述</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> msg<span class="token punctuation">,</span>
      <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 重定义 err 的 name</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> className<span class="token punctuation">,</span>
      <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> err
  <span class="token punctuation">}</span>
  <span class="token comment">// ClientError 类继承自 HttpError 类</span>
  <span class="token function">inherits</span><span class="token punctuation">(</span>ClientError<span class="token punctuation">,</span> HttpError<span class="token punctuation">)</span>
  <span class="token comment">// 将构造函数重命名为 name + &#39;Error&#39;，避免重名</span>
  <span class="token function">nameFunc</span><span class="token punctuation">(</span>ClientError<span class="token punctuation">,</span> className<span class="token punctuation">)</span>

  <span class="token class-name">ClientError</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>status <span class="token operator">=</span> code
  <span class="token class-name">ClientError</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> code
  <span class="token class-name">ClientError</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>expose <span class="token operator">=</span> <span class="token boolean">true</span>

  <span class="token keyword">return</span> ClientError
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后来看 <code>createError()</code> 方法的实现，详细解释见注释：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 有两种调用方式，但是由于参数都是可省略的，所以需要考虑的参数情况比较多</span>
<span class="token comment">// createError([status], [message], [properties])</span>
<span class="token comment">// createError([status], [error], [properties])</span>
<span class="token keyword">function</span> <span class="token function">createError</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> err
  <span class="token keyword">var</span> msg
  <span class="token keyword">var</span> status <span class="token operator">=</span> <span class="token number">500</span>
  <span class="token keyword">var</span> props <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// 遍历参数，判断各个参数类型</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arguments<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> arg <span class="token operator">=</span> arguments<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token comment">// 如果是继承自 Error，就是参数列表中对应的 error</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arg <span class="token keyword">instanceof</span> <span class="token class-name">Error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      err <span class="token operator">=</span> arg
      status <span class="token operator">=</span> err<span class="token punctuation">.</span>status <span class="token operator">||</span> err<span class="token punctuation">.</span>statusCode <span class="token operator">||</span> status
      <span class="token keyword">continue</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">&#39;string&#39;</span><span class="token operator">:</span> <span class="token comment">// 参数列表中的 message</span>
        msg <span class="token operator">=</span> arg
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">&#39;number&#39;</span><span class="token operator">:</span> <span class="token comment">// 参数列表中的 status</span>
        status <span class="token operator">=</span> arg
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 如果 status 不是第一个参数，就报异常</span>
          <span class="token function">deprecate</span><span class="token punctuation">(</span>
            <span class="token string">&#39;non-first-argument status code; replace with createError(&#39;</span> <span class="token operator">+</span>
              arg <span class="token operator">+</span>
              <span class="token string">&#39;, ...)&#39;</span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">&#39;object&#39;</span><span class="token operator">:</span> <span class="token comment">// 如果是 object，就是参数列表中的 properties</span>
        props <span class="token operator">=</span> arg
        <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 只支持处理 4xx 和 5xx 类型的异常状态</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> status <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>status <span class="token operator">&lt;</span> <span class="token number">400</span> <span class="token operator">||</span> status <span class="token operator">&gt;=</span> <span class="token number">600</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">deprecate</span><span class="token punctuation">(</span><span class="token string">&#39;non-error status code; use only 4xx or 5xx status codes&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 如果 status 不满足条件，status 置为 500</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    <span class="token keyword">typeof</span> status <span class="token operator">!==</span> <span class="token string">&#39;number&#39;</span> <span class="token operator">||</span>
    <span class="token punctuation">(</span><span class="token operator">!</span>statuses<span class="token punctuation">[</span>status<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>status <span class="token operator">&lt;</span> <span class="token number">400</span> <span class="token operator">||</span> status <span class="token operator">&gt;=</span> <span class="token number">600</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    status <span class="token operator">=</span> <span class="token number">500</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 获取对应状态码的构造函数，已经挂载到 createError 上，没有就获取 400 或 500 对应的构造函数</span>
  <span class="token keyword">var</span> HttpError <span class="token operator">=</span> createError<span class="token punctuation">[</span>status<span class="token punctuation">]</span> <span class="token operator">||</span> createError<span class="token punctuation">[</span><span class="token function">codeClass</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">]</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 异常类实例创建</span>
    err <span class="token operator">=</span> HttpError <span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name">HttpError</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>msg <span class="token operator">||</span> statuses<span class="token punctuation">[</span>status<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token comment">// // 捕获构造点的堆栈跟踪，具体使用见 http://nodejs.cn/api/errors.html#errors_error_capturestacktrace_targetobject_constructoropt</span>
    Error<span class="token punctuation">.</span><span class="token function">captureStackTrace</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> createError<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>HttpError <span class="token operator">||</span> <span class="token operator">!</span><span class="token punctuation">(</span>err <span class="token keyword">instanceof</span> <span class="token class-name">HttpError</span><span class="token punctuation">)</span> <span class="token operator">||</span> err<span class="token punctuation">.</span>status <span class="token operator">!==</span> status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    err<span class="token punctuation">.</span>expose <span class="token operator">=</span> status <span class="token operator">&lt;</span> <span class="token number">500</span>
    err<span class="token punctuation">.</span>status <span class="token operator">=</span> err<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> status
  <span class="token punctuation">}</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">!==</span> <span class="token string">&#39;status&#39;</span> <span class="token operator">&amp;&amp;</span> key <span class="token operator">!==</span> <span class="token string">&#39;statusCode&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      err<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> props<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> err
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关资料" tabindex="-1"><a class="header-anchor" href="#相关资料" aria-hidden="true">#</a> 相关资料</h2>`,48),k={href:"https://zhuanlan.zhihu.com/p/365787792",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/jshttp/http-errors",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/dougwilson/nodejs-depd",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/component/toidentifier",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/jshttp/statuses",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/isaacs/inherits",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/wesleytodd/setprototypeof",target:"_blank",rel:"noopener noreferrer"};function g(w,h){const s=p("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[n("a",k,[a("每天一个 npm 包：http-errors"),t(s)])]),n("p",null,[n("a",d,[a("http-errors 源码"),t(s)])]),n("p",null,[n("a",v,[a("nodejs-depd 源码"),t(s)])]),n("p",null,[n("a",m,[a("toidentifier 源码"),t(s)])]),n("p",null,[n("a",b,[a("statuses 源码"),t(s)])]),n("p",null,[n("a",y,[a("inherits 源码"),t(s)])]),n("p",null,[n("a",f,[a("setprototypeof 源码"),t(s)])])])}const j=e(r,[["render",g],["__file","httpErrors.html.vue"]]);export{j as default};
