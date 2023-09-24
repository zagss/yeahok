import{_ as n,o as s,c as a,e as t}from"./app-03679ccd.js";const p={},e=t(`<h1 id="九、函数" tabindex="-1"><a class="header-anchor" href="#九、函数" aria-hidden="true">#</a> 九、函数</h1><h2 id="_1-可变参数" tabindex="-1"><a class="header-anchor" href="#_1-可变参数" aria-hidden="true">#</a> 1. 可变参数</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">initSum</span><span class="token punctuation">(</span>x <span class="token operator">...</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>  <span class="token comment">// x是一个切片</span>
  sum <span class="token operator">:=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> x <span class="token punctuation">{</span>
    sum <span class="token operator">=</span> sum <span class="token operator">+</span> v
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> sum
<span class="token punctuation">}</span>

<span class="token function">initSum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// []</span>
<span class="token function">intSum</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token comment">// [10, 20]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-返回值补充" tabindex="-1"><a class="header-anchor" href="#_2-返回值补充" aria-hidden="true">#</a> 2. 返回值补充</h2><p>nil可以看做是一个有效的slice:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">someFunc</span><span class="token punctuation">(</span>x <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> x <span class="token operator">==</span><span class="token operator">=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">nil</span>    <span class="token comment">// 没必要返回 []int{}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-定义函数类型" tabindex="-1"><a class="header-anchor" href="#_3-定义函数类型" aria-hidden="true">#</a> 3. 定义函数类型</h2><p>使用 <code>type</code> 关键字来定义一个函数类型:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> calculation <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>凡是满足这个条件的函数都是calculation类型的函数:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">sub</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> x <span class="token operator">-</span> y
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>add和sub都能赋值给calculation类型的变量:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> c calculation
c <span class="token operator">=</span> add
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-函数作为参数" tabindex="-1"><a class="header-anchor" href="#_4-函数作为参数" aria-hidden="true">#</a> 4. 函数作为参数</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">calc</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">,</span> op <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">op</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ret <span class="token operator">:=</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> add<span class="token punctuation">)</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-函数作为返回值" tabindex="-1"><a class="header-anchor" href="#_5-函数作为返回值" aria-hidden="true">#</a> 5. 函数作为返回值</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">do</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> s <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&quot;+&quot;</span><span class="token punctuation">:</span>
      <span class="token keyword">return</span> add<span class="token punctuation">,</span> <span class="token boolean">nil</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
      err <span class="token operator">:=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;无法识别的操作符&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-匿名函数和闭包" tabindex="-1"><a class="header-anchor" href="#_6-匿名函数和闭包" aria-hidden="true">#</a> 6. 匿名函数和闭包</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 匿名函数</span>
  add <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>x <span class="token operator">+</span> y<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
  <span class="token comment">// 自执行函数</span>
  <span class="token keyword">func</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>x <span class="token operator">+</span> y<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>闭包=函数+引用环境</code>:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">adder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> x <span class="token builtin">int</span>
  <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    x <span class="token operator">+=</span> y
    <span class="token keyword">return</span> x
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> f <span class="token operator">=</span> <span class="token function">adder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">f</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// 10</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">f</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// 30</span>

  f1 <span class="token operator">:=</span> <span class="token function">adder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">f1</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 40</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">f1</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 90</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-defer语句" tabindex="-1"><a class="header-anchor" href="#_7-defer语句" aria-hidden="true">#</a> 7. defer语句</h2><p>先被 <code>defer</code> 的语句最后被执行，最后被 <code>defer</code> 的语句，最先被执行。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;end&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// start</span>
<span class="token comment">// end</span>
<span class="token comment">// 3</span>
<span class="token comment">// 2</span>
<span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">calc</span><span class="token punctuation">(</span>index <span class="token builtin">string</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	ret <span class="token operator">:=</span> a <span class="token operator">+</span> b
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> ret<span class="token punctuation">)</span>
	<span class="token keyword">return</span> ret
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	x <span class="token operator">:=</span> <span class="token number">1</span>
	y <span class="token operator">:=</span> <span class="token number">2</span>
	<span class="token keyword">defer</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token string">&quot;AA&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">)</span>
	x <span class="token operator">=</span> <span class="token number">10</span>
	<span class="token keyword">defer</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token string">&quot;BB&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">)</span>
	y <span class="token operator">=</span> <span class="token number">20</span>
<span class="token punctuation">}</span>

<span class="token comment">// A 1 2 3</span>
<span class="token comment">// B 10 2 12</span>
<span class="token comment">// BB 10 12 22</span>
<span class="token comment">// AA 1 3 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-内置函数" tabindex="-1"><a class="header-anchor" href="#_8-内置函数" aria-hidden="true">#</a> 8. 内置函数</h2><ul><li>close: 主要用来关闭channel</li><li>len: 用来求长度，比如string、array、slice、map、channel</li><li>new: 用来分配内存，主要用来分配值类型，比如int、struct。返回的是指针</li><li>make: 用来分配内存，主要用来分配引用类型，比如chan、map、slice</li><li>append: 用来追加元素到数组、slice中</li><li>panic recover: 用来做错误处理</li></ul><h2 id="_9-panic-recover" tabindex="-1"><a class="header-anchor" href="#_9-panic-recover" aria-hidden="true">#</a> 9. panic/recover</h2><p><code>panic</code> 可以在任何地方引发，但 <code>recover</code> 只有在 defer 调用的函数中有效。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">funcA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;func A&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">funcB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;panic in B&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">funcC</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;func C&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">funcA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">funcB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">funcC</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// func A</span>
<span class="token comment">// panic: panic in B</span>

<span class="token comment">// goroutine 1 [running]:</span>
<span class="token comment">// main.funcB(...)</span>
<span class="token comment">//         .../code/func/main.go:12</span>
<span class="token comment">// main.main()</span>
<span class="token comment">//         .../code/func/main.go:20 +0x98</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>程序运行期间 funcB 中引发了 panic 导致程序崩溃，异常退出了。这个时候我们就可以通过 <code>recover</code> 将程序恢复回来，继续往后执行。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">funcA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;func A&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">funcB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		err <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token comment">// 如果程序出出现了panic错误,可以通过recover恢复过来</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;recover in B&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;panic in B&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">funcC</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;func C&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">funcA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">funcB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">funcC</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// func A</span>
<span class="token comment">// recover in B</span>
<span class="token comment">// func C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>⚠️注意：</p><ol><li>recover() 必须搭配 defer 使用。</li><li>defer 一定要在可能引发 panic 的语句之前定义。</li></ol>`,34),c=[e];function o(i,l){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","function.html.vue"]]);export{d as default};
