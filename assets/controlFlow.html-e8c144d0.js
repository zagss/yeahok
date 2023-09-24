import{_ as n,o as s,c as a,e as t}from"./app-03679ccd.js";const e={},p=t(`<h1 id="五、流程控制" tabindex="-1"><a class="header-anchor" href="#五、流程控制" aria-hidden="true">#</a> 五、流程控制</h1><h2 id="_1-if-else-分支结构" tabindex="-1"><a class="header-anchor" href="#_1-if-else-分支结构" aria-hidden="true">#</a> 1. if else 分支结构</h2><p>在 if 表达式前添加一个执行语句</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ifDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> score <span class="token operator">:=</span> <span class="token number">65</span><span class="token punctuation">;</span> score <span class="token operator">&gt;=</span> <span class="token number">90</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> score <span class="token operator">&gt;</span> <span class="token number">75</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-for-循环结构" tabindex="-1"><a class="header-anchor" href="#_2-for-循环结构" aria-hidden="true">#</a> 2. for 循环结构</h2><p>for 循环的初始语句可以被忽略，但是初始语句后的分号必须要写:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">forDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  i <span class="token operator">:=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>for循环的初始语句和结束语句都可以省略，类似 while :</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">forDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  i <span class="token operator">:=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> i <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    i<span class="token operator">++</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>无限循环：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">for</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-for-range-键值循环" tabindex="-1"><a class="header-anchor" href="#_3-for-range-键值循环" aria-hidden="true">#</a> 3. for range 键值循环</h2><p><code>for range</code> 可用来遍历数组、切片、字符串、map、channel 等：</p><ul><li>数组、切片、字符串返回 <strong>索引和值</strong></li><li>map 返回 <strong>键和值</strong></li><li>channel 只返回 <strong>通道内的值</strong></li></ul><h2 id="_4-switch-case" tabindex="-1"><a class="header-anchor" href="#_4-switch-case" aria-hidden="true">#</a> 4. switch case</h2><p>一个分支可以有多个值：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">switchDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> n <span class="token operator">:=</span> <span class="token number">7</span><span class="token punctuation">;</span> n <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">:</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;奇数&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">:</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;偶数&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>fallthrough</code> 语法可以执行满足条件的 case 的下一个 case</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">switchDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s <span class="token operator">:=</span> <span class="token string">&quot;a&quot;</span>
	<span class="token keyword">switch</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> s <span class="token operator">==</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">fallthrough</span>
	<span class="token keyword">case</span> s <span class="token operator">==</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">case</span> s <span class="token operator">==</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// a</span>
<span class="token comment">// b</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-goto-跳转到指定标签" tabindex="-1"><a class="header-anchor" href="#_5-goto-跳转到指定标签" aria-hidden="true">#</a> 5. goto 跳转到指定标签</h2><p><code>goto</code> 语句通过标签进行代码间的无条件跳转，能简化代码：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 示例：</span>
<span class="token keyword">func</span> <span class="token function">gotoDemo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> breakFlag <span class="token builtin">bool</span>
  <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> j <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">{</span>
        <span class="token comment">// 设置退出标签</span>
        breakFlag <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 外层for循环判断</span>
    <span class="token keyword">if</span> breakFlag <span class="token punctuation">{</span>
      <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// goto 简化：</span>
<span class="token keyword">func</span> <span class="token function">gotoDemo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> j <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">{</span>
        <span class="token keyword">goto</span> breakTag
      <span class="token punctuation">}</span>
      fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v-%v\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span>
breakTag<span class="token punctuation">:</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;结束for循环&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 0-0</span>
<span class="token comment">// 0-1</span>
<span class="token comment">// 结束for循环</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-break-跳出循环" tabindex="-1"><a class="header-anchor" href="#_6-break-跳出循环" aria-hidden="true">#</a> 6. break 跳出循环</h2><p><code>break</code> 语句可以结束 <code>for</code> 、<code>switch</code> 和 <code>select</code> 的代码块。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">breakDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
breakFlag<span class="token punctuation">:</span>
  <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> j <span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> j <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">{</span>
        <span class="token keyword">break</span> breakFlag
      <span class="token punctuation">}</span>
      fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v-%v\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 0-0</span>
<span class="token comment">// 0-1</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-continue-继续下次循环" tabindex="-1"><a class="header-anchor" href="#_7-continue-继续下次循环" aria-hidden="true">#</a> 7. continue 继续下次循环</h2><p><code>continue</code> 语句可以结束当前循环，开始下一次的循环迭代过程，仅限在 <code>for</code> 循环内使用。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">continueDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
forloop1<span class="token punctuation">:</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
				<span class="token keyword">continue</span> forloop1
			<span class="token punctuation">}</span>
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v-%v\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 0-0</span>
<span class="token comment">// 0-1</span>
<span class="token comment">// 0-2</span>
<span class="token comment">// 1-0</span>
<span class="token comment">// 2-0</span>
<span class="token comment">// 2-1</span>
<span class="token comment">// 2-2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-九九乘法表" tabindex="-1"><a class="header-anchor" href="#_8-九九乘法表" aria-hidden="true">#</a> 8. 九九乘法表</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 第几行</span>
  <span class="token keyword">for</span> y <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> y <span class="token operator">&lt;=</span> <span class="token number">9</span><span class="token punctuation">;</span> y<span class="token operator">++</span> <span class="token punctuation">{</span>
    <span class="token comment">// 第几列</span>
    <span class="token keyword">for</span> x <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> x <span class="token operator">&lt;=</span> y<span class="token punctuation">;</span> x<span class="token operator">++</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d*%d=%d &quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> x <span class="token operator">*</span> y<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 回车</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","controlFlow.html.vue"]]);export{r as default};
