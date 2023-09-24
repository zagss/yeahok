import{_ as n,o as s,c as a,e as t}from"./app-03679ccd.js";const e={},p=t(`<h1 id="十一、结构体" tabindex="-1"><a class="header-anchor" href="#十一、结构体" aria-hidden="true">#</a> 十一、结构体</h1><p>Go语言中没有 “类” 的概念，也不支持 “类” 的继承等面向对象的概念。Go语言中通过结构体的内嵌再配合接口比面向对象具有更高的扩展性和灵活性。</p><h2 id="_1-自定义类型" tabindex="-1"><a class="header-anchor" href="#_1-自定义类型" aria-hidden="true">#</a> 1. 自定义类型</h2><p>自定义类型是定义了一个全新的类型。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 将MyInt定义为int类型</span>
<span class="token keyword">type</span> MyInt <span class="token builtin">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过type关键字的定义，MyInt就是一种新的类型，它具有int的特性。</p><h2 id="_2-类型别名" tabindex="-1"><a class="header-anchor" href="#_2-类型别名" aria-hidden="true">#</a> 2. 类型别名</h2><p>类型别名规定：TypeAlias只是Type的别名，本质上TypeAlias与Type是同一个类型</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> TypeAlias <span class="token operator">=</span> Type
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们之前见过的rune和byte就是类型别名，他们的定义如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> <span class="token builtin">byte</span> <span class="token operator">=</span> <span class="token builtin">uint8</span>
<span class="token keyword">type</span> <span class="token builtin">rune</span> <span class="token operator">=</span> <span class="token builtin">int32</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-类型定义和类型别名的区别" tabindex="-1"><a class="header-anchor" href="#_3-类型定义和类型别名的区别" aria-hidden="true">#</a> 3. 类型定义和类型别名的区别</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> NewInt <span class="token builtin">int</span>

<span class="token keyword">type</span> MyInt <span class="token operator">=</span> <span class="token builtin">int</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a NewInt
  <span class="token keyword">var</span> b MyInt

  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;type of a:%T\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span> <span class="token comment">// type of a:main.NewInt</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;type of b:%T\\n&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token comment">// type of b:int</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MyInt 类型只会在代码中存在，编译完成时并不会有MyInt类型。</p><h2 id="_4-结构体的定义" tabindex="-1"><a class="header-anchor" href="#_4-结构体的定义" aria-hidden="true">#</a> 4. 结构体的定义</h2><p>表达一个事物的全部或部分属性时，这时候再用单一的基本数据类型明显就无法满足需求了，Go语言提供了一种自定义数据类型，可以封装多个基本数据类型：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> 类型名 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  字段名 字段类型
  字段名 字段类型
  …
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name <span class="token builtin">string</span>
	city <span class="token builtin">string</span>
	age  <span class="token builtin">int8</span>
<span class="token punctuation">}</span>

<span class="token comment">// 同样类型的字段也可以写在一行，</span>
<span class="token keyword">type</span> person1 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name<span class="token punctuation">,</span> city <span class="token builtin">string</span>
	age        <span class="token builtin">int8</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-结构体实例化" tabindex="-1"><a class="header-anchor" href="#_5-结构体实例化" aria-hidden="true">#</a> 5. 结构体实例化</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  name <span class="token builtin">string</span>
  city <span class="token builtin">string</span>
  age  <span class="token builtin">int8</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> p1 person
  p1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;kael&quot;</span>
  p1<span class="token punctuation">.</span>city <span class="token operator">=</span> <span class="token string">&quot;背景&quot;</span>
  p1<span class="token punctuation">.</span>age  <span class="token operator">=</span> <span class="token number">18</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;p1=%v\\n&quot;</span><span class="token punctuation">,</span> p1<span class="token punctuation">)</span>  <span class="token comment">// p1={沙河娜扎 北京 18}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;p1=%#v\\n&quot;</span><span class="token punctuation">,</span> p1<span class="token punctuation">)</span> <span class="token comment">// p1=main.person{name:&quot;沙河娜扎&quot;, city:&quot;北京&quot;, age:18}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-匿名结构体" tabindex="-1"><a class="header-anchor" href="#_6-匿名结构体" aria-hidden="true">#</a> 6. 匿名结构体</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> user <span class="token keyword">struct</span><span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
    Age <span class="token builtin">int</span>
  <span class="token punctuation">}</span>
  user<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;kael&quot;</span>
  user<span class="token punctuation">.</span>Age <span class="token operator">=</span> <span class="token number">18</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-创建指针类型结构体" tabindex="-1"><a class="header-anchor" href="#_7-创建指针类型结构体" aria-hidden="true">#</a> 7. 创建指针类型结构体</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%T\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>     <span class="token comment">// *main.person</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;p=%#v\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>  <span class="token comment">// p=&amp;main.person{name:&quot;&quot;, city:&quot;&quot;, age:0}</span>

p<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;小王子&quot;</span>
p<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">28</span>
p<span class="token punctuation">.</span>city <span class="token operator">=</span> <span class="token string">&quot;上海&quot;</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;p=%#v\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>  <span class="token comment">// p=&amp;main.person{name:&quot;小王子&quot;, city:&quot;上海&quot;, age:28}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-取结构体的地址实例化" tabindex="-1"><a class="header-anchor" href="#_8-取结构体的地址实例化" aria-hidden="true">#</a> 8. 取结构体的地址实例化</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>p <span class="token operator">:=</span> <span class="token operator">&amp;</span>person<span class="token punctuation">{</span><span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%T\\n&quot;</span><span class="token punctuation">,</span> p3<span class="token punctuation">)</span>     <span class="token comment">// *main.person</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;p3=%#v\\n&quot;</span><span class="token punctuation">,</span> p3<span class="token punctuation">)</span> <span class="token comment">// p3=&amp;main.person{name:&quot;&quot;, city:&quot;&quot;, age:0}</span>

p<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;kiss&quot;</span>
p<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">30</span>
p<span class="token punctuation">.</span>city <span class="token operator">=</span> <span class="token string">&quot;北京&quot;</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;p3=%#v\\n&quot;</span><span class="token punctuation">,</span> p3<span class="token punctuation">)</span> <span class="token comment">//p3=&amp;main.person{name:&quot;kiss&quot;, city:&quot;北京&quot;, age:30}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>p3.name = &quot;kiss&quot;其实在底层是 (*p3).name = &quot;kiss&quot;，这是Go语言帮我们实现的语法糖。</p><h2 id="_9-结构体初始化" tabindex="-1"><a class="header-anchor" href="#_9-结构体初始化" aria-hidden="true">#</a> 9. 结构体初始化</h2><p>没有初始化的结构体，其成员变量都是对应其类型的零值:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> p4 person
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;p4=%#v\\n&quot;</span><span class="token punctuation">,</span> p4<span class="token punctuation">)</span> <span class="token comment">//p4=main.person{name:&quot;&quot;, city:&quot;&quot;, age:0}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>使用键值对初始化</p></blockquote><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>p5 <span class="token operator">:=</span> person<span class="token punctuation">{</span>
	name<span class="token punctuation">:</span> <span class="token string">&quot;小王子&quot;</span><span class="token punctuation">,</span>
	city<span class="token punctuation">:</span> <span class="token string">&quot;北京&quot;</span><span class="token punctuation">,</span>
	age<span class="token punctuation">:</span>  <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;p5=%#v\\n&quot;</span><span class="token punctuation">,</span> p5<span class="token punctuation">)</span> <span class="token comment">// p5=main.person{name:&quot;小王子&quot;, city:&quot;北京&quot;, age:18}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以对结构体指针进行键值对初始化，例如：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>p6 <span class="token operator">:=</span> <span class="token operator">&amp;</span>person<span class="token punctuation">{</span>
	name<span class="token punctuation">:</span> <span class="token string">&quot;小王子&quot;</span><span class="token punctuation">,</span>
	city<span class="token punctuation">:</span> <span class="token string">&quot;北京&quot;</span><span class="token punctuation">,</span>
	age<span class="token punctuation">:</span>  <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;p6=%#v\\n&quot;</span><span class="token punctuation">,</span> p6<span class="token punctuation">)</span> <span class="token comment">// p6=&amp;main.person{name:&quot;小王子&quot;, city:&quot;北京&quot;, age:18}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当某些字段没有初始值的时候，该字段可以不写。此时，没有指定初始值的字段的值就是该字段类型的零值。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>p7 <span class="token operator">:=</span> <span class="token operator">&amp;</span>person<span class="token punctuation">{</span>
	city<span class="token punctuation">:</span> <span class="token string">&quot;北京&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;p7=%#v\\n&quot;</span><span class="token punctuation">,</span> p7<span class="token punctuation">)</span> <span class="token comment">//p7=&amp;main.person{name:&quot;&quot;, city:&quot;北京&quot;, age:0}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-使用值的列表初始化" tabindex="-1"><a class="header-anchor" href="#_10-使用值的列表初始化" aria-hidden="true">#</a> 10. 使用值的列表初始化</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>p8 <span class="token operator">:=</span> <span class="token operator">&amp;</span>person<span class="token punctuation">{</span>
	<span class="token string">&quot;沙河娜扎&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;北京&quot;</span><span class="token punctuation">,</span>
	<span class="token number">28</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;p8=%#v\\n&quot;</span><span class="token punctuation">,</span> p8<span class="token punctuation">)</span> <span class="token comment">//p8=&amp;main.person{name:&quot;沙河娜扎&quot;, city:&quot;北京&quot;, age:28}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-结构体内存布局" tabindex="-1"><a class="header-anchor" href="#_11-结构体内存布局" aria-hidden="true">#</a> 11. 结构体内存布局</h2><p>结构体占用一块连续的内存。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> test <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	a <span class="token builtin">int8</span>
	b <span class="token builtin">int8</span>
	c <span class="token builtin">int8</span>
	d <span class="token builtin">int8</span>
<span class="token punctuation">}</span>
n <span class="token operator">:=</span> test<span class="token punctuation">{</span>
	<span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;n.a %p\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">.</span>a<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;n.b %p\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">.</span>b<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;n.c %p\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">.</span>c<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;n.d %p\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">.</span>d<span class="token punctuation">)</span>

<span class="token comment">// n.a 0xc0000a0060</span>
<span class="token comment">// n.b 0xc0000a0061</span>
<span class="token comment">// n.c 0xc0000a0062</span>
<span class="token comment">// n.d 0xc0000a0063</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-空结构体" tabindex="-1"><a class="header-anchor" href="#_12-空结构体" aria-hidden="true">#</a> 12. 空结构体</h2><p>空结构体是不占用空间的。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> v <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>unsafe<span class="token punctuation">.</span><span class="token function">Sizeof</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// 0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-构造函数" tabindex="-1"><a class="header-anchor" href="#_13-构造函数" aria-hidden="true">#</a> 13. 构造函数</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">newPerson</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> city <span class="token builtin">string</span><span class="token punctuation">,</span> age <span class="token builtin">int8</span><span class="token punctuation">)</span> <span class="token operator">*</span>person <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>person<span class="token punctuation">{</span>
		name<span class="token punctuation">:</span> name<span class="token punctuation">,</span>
		city<span class="token punctuation">:</span> city<span class="token punctuation">,</span>
		age<span class="token punctuation">:</span>  age<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

p9 <span class="token operator">:=</span> <span class="token function">newPerson</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;沙河&quot;</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v\\n&quot;</span><span class="token punctuation">,</span> p9<span class="token punctuation">)</span> <span class="token comment">// &amp;main.person{name:&quot;张三&quot;, city:&quot;沙河&quot;, age:90}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14-方法和接收者" tabindex="-1"><a class="header-anchor" href="#_14-方法和接收者" aria-hidden="true">#</a> 14. 方法和接收者</h2><p>Go语言中的方法（Method）是一种作用于特定类型变量的函数。这种特定类型变量叫做接收者（Receiver）。接收者的概念就类似于其他语言中的 <code>this</code> 或者 self。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>接收者变量 接收者类型<span class="token punctuation">)</span> 方法名<span class="token punctuation">(</span>参数列表<span class="token punctuation">)</span> <span class="token punctuation">(</span>返回参数<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  函数体
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  name <span class="token builtin">string</span>
  age <span class="token builtin">int8</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewPerson</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> age <span class="token builtin">int8</span><span class="token punctuation">)</span> <span class="token operator">*</span>Person <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&amp;</span>Person<span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> name<span class="token punctuation">,</span>
    age<span class="token punctuation">:</span> age<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p Person<span class="token punctuation">)</span> <span class="token function">Dream</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s的梦想是学好Go语言！\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  p <span class="token operator">:=</span> <span class="token function">NewPerson</span><span class="token punctuation">(</span><span class="token string">&quot;kael&quot;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>
  p<span class="token punctuation">.</span><span class="token function">Dream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_15-指针类型的接收者" tabindex="-1"><a class="header-anchor" href="#_15-指针类型的接收者" aria-hidden="true">#</a> 15. 指针类型的接收者</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Person<span class="token punctuation">)</span> <span class="token function">SetAge</span><span class="token punctuation">(</span>newAge <span class="token builtin">int8</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  p<span class="token punctuation">.</span>age <span class="token operator">=</span> newAge
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  p <span class="token operator">:=</span> <span class="token function">NewPerson</span><span class="token punctuation">(</span><span class="token string">&quot;kael&quot;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// 25</span>
  p<span class="token punctuation">.</span><span class="token function">SetAge</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// 30</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_16-值类型的接收者" tabindex="-1"><a class="header-anchor" href="#_16-值类型的接收者" aria-hidden="true">#</a> 16. 值类型的接收者</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>p Person<span class="token punctuation">)</span> <span class="token function">SetAge2</span><span class="token punctuation">(</span>newAge <span class="token builtin">int8</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	p<span class="token punctuation">.</span>age <span class="token operator">=</span> newAge
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	p1 <span class="token operator">:=</span> <span class="token function">NewPerson</span><span class="token punctuation">(</span><span class="token string">&quot;小王子&quot;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span>
	p1<span class="token punctuation">.</span><span class="token function">Dream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// 25</span>
	p1<span class="token punctuation">.</span><span class="token function">SetAge2</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>      <span class="token comment">// (*p1).SetAge2(30)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// 25</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>什么时候应该使用指针类型接收者</p></blockquote><ol><li>需要修改接收者中的值</li><li>接收者是拷贝代价比较大的大对象</li><li>保证一致性，如果有某个方法使用了指针接收者，那么其他的方法也应该使用指针接收者。</li></ol><h2 id="_17-任意类型添加方法" tabindex="-1"><a class="header-anchor" href="#_17-任意类型添加方法" aria-hidden="true">#</a> 17. 任意类型添加方法</h2><p>任何类型都可以拥有方法。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> MyInt <span class="token builtin">int</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>m MyInt<span class="token punctuation">)</span> <span class="token function">SayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, 我是一个int。&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> m1 MyInt
  m1<span class="token punctuation">.</span><span class="token function">SayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  m1 <span class="token operator">=</span> <span class="token number">100</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v  %T\\n&quot;</span><span class="token punctuation">,</span> m1<span class="token punctuation">,</span> m1<span class="token punctuation">)</span> <span class="token comment">// 100  main.MyInt</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><mark>注意事项</mark>： 非本地类型不能定义方法，也就是说我们不能给别的包的类型定义方法。</p><h2 id="_18-结构体的匿名字段" tabindex="-1"><a class="header-anchor" href="#_18-结构体的匿名字段" aria-hidden="true">#</a> 18. 结构体的匿名字段</h2><p>一个结构体中同种类型的匿名字段只能有一个:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Person 结构体Person类型</span>
<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token builtin">string</span>
	<span class="token builtin">int</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_19-嵌套结构体" tabindex="-1"><a class="header-anchor" href="#_19-嵌套结构体" aria-hidden="true">#</a> 19. 嵌套结构体</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">//Address 地址结构体</span>
<span class="token keyword">type</span> Address <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Province <span class="token builtin">string</span>
	City     <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//User 用户结构体</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name    <span class="token builtin">string</span>
	Gender  <span class="token builtin">string</span>
	Address Address
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	user1 <span class="token operator">:=</span> User<span class="token punctuation">{</span>
		Name<span class="token punctuation">:</span>   <span class="token string">&quot;小王子&quot;</span><span class="token punctuation">,</span>
		Gender<span class="token punctuation">:</span> <span class="token string">&quot;男&quot;</span><span class="token punctuation">,</span>
		Address<span class="token punctuation">:</span> Address<span class="token punctuation">{</span>
			Province<span class="token punctuation">:</span> <span class="token string">&quot;山东&quot;</span><span class="token punctuation">,</span>
			City<span class="token punctuation">:</span>     <span class="token string">&quot;威海&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;user1=%#v\\n&quot;</span><span class="token punctuation">,</span> user1<span class="token punctuation">)</span>  <span class="token comment">// user1=main.User{Name:&quot;小王子&quot;, Gender:&quot;男&quot;, Address:main.Address{Province:&quot;山东&quot;, City:&quot;威海&quot;}}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>嵌套匿名字段:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">//Address 地址结构体</span>
<span class="token comment">//Address 地址结构体</span>
<span class="token keyword">type</span> Address <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Province <span class="token builtin">string</span>
	City     <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//User 用户结构体</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name    <span class="token builtin">string</span>
	Gender  <span class="token builtin">string</span>
	Address <span class="token comment">//匿名字段</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> user2 User
	user2<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;小王子&quot;</span>
	user2<span class="token punctuation">.</span>Gender <span class="token operator">=</span> <span class="token string">&quot;男&quot;</span>
	user2<span class="token punctuation">.</span>Address<span class="token punctuation">.</span>Province <span class="token operator">=</span> <span class="token string">&quot;山东&quot;</span>    <span class="token comment">// 匿名字段默认使用类型名作为字段名</span>
	user2<span class="token punctuation">.</span>City <span class="token operator">=</span> <span class="token string">&quot;威海&quot;</span>                <span class="token comment">// 匿名字段可以省略</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;user2=%#v\\n&quot;</span><span class="token punctuation">,</span> user2<span class="token punctuation">)</span>  <span class="token comment">// user2=main.User{Name:&quot;小王子&quot;, Gender:&quot;男&quot;, Address:main.Address{Province:&quot;山东&quot;, City:&quot;威海&quot;}}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_20-结构体的-继承" tabindex="-1"><a class="header-anchor" href="#_20-结构体的-继承" aria-hidden="true">#</a> 20. 结构体的“继承”</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Animal <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  name <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>Animal<span class="token punctuation">)</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s会动！\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Dog <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  Feet <span class="token builtin">int8</span>
  <span class="token operator">*</span>Animal   <span class="token comment">// 通过嵌套匿名结构体实现继承</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>d <span class="token operator">*</span>Dog<span class="token punctuation">)</span> <span class="token function">wang</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s会汪汪汪~\\n&quot;</span><span class="token punctuation">,</span> d<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  d <span class="token operator">:=</span> <span class="token operator">&amp;</span>Dog<span class="token punctuation">{</span>
    Feet<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    Animal<span class="token punctuation">:</span> <span class="token operator">&amp;</span>Animal<span class="token punctuation">{</span>
      name<span class="token punctuation">:</span> <span class="token string">&quot;乐乐&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  d1<span class="token punctuation">.</span><span class="token function">wang</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 乐乐会汪汪汪~</span>
	d1<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 乐乐会动！</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_21-结构体与json序列化" tabindex="-1"><a class="header-anchor" href="#_21-结构体与json序列化" aria-hidden="true">#</a> 21. 结构体与JSON序列化</h2><h2 id="_22-结构体标签-tag" tabindex="-1"><a class="header-anchor" href="#_22-结构体标签-tag" aria-hidden="true">#</a> 22. 结构体标签（Tag）</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">//Student 学生</span>
<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	ID     <span class="token builtin">int</span>    <span class="token string">\`json:&quot;id&quot;\`</span> <span class="token comment">// 通过指定tag实现json序列化该字段时的key</span>
	Gender <span class="token builtin">string</span> <span class="token comment">// json序列化是默认使用字段名作为key</span>
	name   <span class="token builtin">string</span> <span class="token comment">// 私有不能被json包访问</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  s1 <span class="token operator">:=</span> Student <span class="token punctuation">{</span>
    ID<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    Gender<span class="token punctuation">:</span> <span class="token string">&quot;男&quot;</span><span class="token punctuation">,</span>
    name<span class="token punctuation">:</span> <span class="token string">&quot;娜扎&quot;</span>
  <span class="token punctuation">}</span>
  data<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;json marshal failed!&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;json str:%s\\n&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span> <span class="token comment">//json str:{&quot;id&quot;:1,&quot;Gender&quot;:&quot;男&quot;}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_23-结构体和方法补充知识点" tabindex="-1"><a class="header-anchor" href="#_23-结构体和方法补充知识点" aria-hidden="true">#</a> 23. 结构体和方法补充知识点</h2><p>slice 和 map 这两种数据类型都包含了指向底层数据的指针，因此我们在需要复制它们时要特别注意:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Person <span class="token keyword">struct</span><span class="token punctuation">{</span>
  name <span class="token builtin">string</span>
  age  <span class="token builtin">int8</span>
  dreams <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Person<span class="token punctuation">)</span> <span class="token function">SetDreams</span><span class="token punctuation">(</span>dreams <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  p<span class="token punctuation">.</span>dreams <span class="token operator">=</span> dreams
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  p <span class="token operator">:=</span> Person<span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">&quot;小王子&quot;</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">}</span>
  data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;吃饭&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;睡觉&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;打豆豆&quot;</span><span class="token punctuation">}</span>
	p1<span class="token punctuation">.</span><span class="token function">SetDreams</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>

  data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;不睡觉&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>dreams<span class="token punctuation">)</span>  <span class="token comment">// [吃饭 不睡觉 打豆豆]</span>
<span class="token punctuation">}</span>

<span class="token comment">// 正确做法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Person<span class="token punctuation">)</span> <span class="token function">SetDreams</span><span class="token punctuation">(</span>dreams <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  p<span class="token punctuation">.</span>dreams <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>dreams<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token function">copy</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>dreams<span class="token punctuation">,</span> dreams<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,77),o=[p];function i(c,u){return s(),a("div",null,o)}const d=n(e,[["render",i],["__file","struct.html.vue"]]);export{d as default};
