import{_ as s,o as n,c as a,e}from"./app-03679ccd.js";const t={},p=e(`<h1 id="ts-相关" tabindex="-1"><a class="header-anchor" href="#ts-相关" aria-hidden="true">#</a> TS 相关</h1><h2 id="never-的妙用" tabindex="-1"><a class="header-anchor" href="#never-的妙用" aria-hidden="true">#</a> never 的妙用</h2><p>默认分支使用never类型，如果 Method 添加新的 PUT 等方法，此时 method 不能赋值给 never 类型可在编译时报错，更好的提示给开发者。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Method</span> <span class="token operator">=</span> <span class="token string">&#39;GET&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;POST&#39;</span>

<span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span>method<span class="token operator">:</span> Method<span class="token punctuation">,</span> url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>method<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;GET&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token string">&#39;...&#39;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;POST&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token string">&#39;...&#39;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">const</span> n<span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">=</span> method
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function c(r,i){return n(),a("div",null,o)}const d=s(t,[["render",c],["__file","ts.html.vue"]]);export{d as default};