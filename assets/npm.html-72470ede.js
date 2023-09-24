import{_ as o,r as i,o as c,c as l,a as n,d as s,b as e,e as p}from"./app-03679ccd.js";const u={},r=n("h1",{id:"npm-相关",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#npm-相关","aria-hidden":"true"},"#"),s(" NPM 相关")],-1),d=n("h2",{id:"如何发布-npm-包",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#如何发布-npm-包","aria-hidden":"true"},"#"),s(" 如何发布 npm 包")],-1),k={href:"https://juejin.cn/post/7052307032971411463#heading-11",target:"_blank",rel:"noopener noreferrer"},v=p(`<h3 id="_1-登录-npm-账号" tabindex="-1"><a class="header-anchor" href="#_1-登录-npm-账号" aria-hidden="true">#</a> 1. 登录 npm 账号</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 登陆
<span class="token function">npm</span> login

// 控制台会提示输入相关信息
Log <span class="token keyword">in</span> on https://registry.npmjs.org/
Username:  // 用户名
Password: // 密码
Email: <span class="token punctuation">(</span>this IS public<span class="token punctuation">)</span> // 邮箱
Enter one-time password: // 如果之前做过 双因素身份验证 <span class="token punctuation">(</span>2FA<span class="token punctuation">)</span>，需要生成一次性密钥
Logged <span class="token keyword">in</span> as xxx on https://registry.npmjs.org/.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-1" tabindex="-1"><a class="header-anchor" href="#_1-1" aria-hidden="true">#</a> 1.1</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 退出账号</span>
<span class="token function">npm</span> <span class="token builtin class-name">logout</span>

<span class="token comment"># 如果不知道当前登录的账号可以用who命令查看身份：</span>
<span class="token function">npm</span> <span class="token function">who</span> am i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-项目初始化" tabindex="-1"><a class="header-anchor" href="#_2-项目初始化" aria-hidden="true">#</a> 2.项目初始化</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加 npm 域级包: @zagss/create-template</span>
<span class="token function">npm</span> init <span class="token parameter variable">--scope</span><span class="token operator">=</span>zagss
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-项目开发" tabindex="-1"><a class="header-anchor" href="#_3-项目开发" aria-hidden="true">#</a> 3.项目开发</h3><p>项目种类：</p><ul><li>工具类包</li><li>全局包</li><li>组件库</li></ul><h4 id="_3-1-工具类包" tabindex="-1"><a class="header-anchor" href="#_3-1-工具类包" aria-hidden="true">#</a> 3.1 工具类包</h4><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>hello<span class="token operator">-</span>npm
<span class="token operator">|</span><span class="token comment">-- lib/（存放打包后的文件）</span>
<span class="token operator">|</span><span class="token comment">-- src/（源码）</span>
<span class="token operator">|</span><span class="token comment">-- package.json</span>
<span class="token operator">|</span><span class="token comment">-- rollup.config.base.js（rollup基础配置）</span>
<span class="token operator">|</span><span class="token comment">-- rollup.config.dev.js（rollup开发配置）</span>
<span class="token operator">|</span><span class="token comment">-- rollup.config.js（rollup正式配置）</span>
<span class="token operator">|</span><span class="token comment">-- README.md</span>
<span class="token operator">|</span><span class="token comment">-- tsconfig.json</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>package.json</code> 的配置</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hello-npm&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;我是npm包的描述&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lib/bundle.cjs.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;jsnext:main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lib/bundle.esm.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lib/bundle.esm.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;browser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lib/bundle.browser.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token string">&quot;types/index.d.ts&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npx rollup -wc rollup.config.dev.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npx rollup -c rollup.config.js &amp;&amp; npm run build:types&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build:types&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npx tsc&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rollup的 <code>base config</code> 文件, 打包成commonjs、esm和umd三种模块规范的包：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> typescript <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-typescript&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> pkg <span class="token keyword">from</span> <span class="token string">&quot;./package.json&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> json <span class="token keyword">from</span> <span class="token string">&quot;rollup-plugin-json&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> resolve <span class="token keyword">from</span> <span class="token string">&quot;rollup-plugin-node-resolve&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> commonjs <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-commonjs&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> eslint <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-eslint&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> babel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@rollup/plugin-babel&#39;</span>
<span class="token keyword">const</span> formatName <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  input<span class="token operator">:</span> <span class="token string">&quot;./src/index.ts&quot;</span><span class="token punctuation">,</span>
  output<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      file<span class="token operator">:</span> pkg<span class="token punctuation">.</span>main<span class="token punctuation">,</span>
      format<span class="token operator">:</span> <span class="token string">&quot;cjs&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      file<span class="token operator">:</span> pkg<span class="token punctuation">.</span>module<span class="token punctuation">,</span>
      format<span class="token operator">:</span> <span class="token string">&quot;esm&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      file<span class="token operator">:</span> pkg<span class="token punctuation">.</span>browser<span class="token punctuation">,</span>
      format<span class="token operator">:</span> <span class="token string">&quot;umd&quot;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> formatName<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">commonjs</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      include<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      preferBuiltins<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      jsnext<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      main<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      brower<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">typescript</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">eslint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">babel</span><span class="token punctuation">(</span><span class="token punctuation">{</span> exclude<span class="token operator">:</span> <span class="token string">&quot;node_modules/**&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rollup 生产环境 <code>pro config</code> 的配置，加入 terser 和 filesize 分别进行压缩和查看打包大小:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> terser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;rollup-plugin-terser&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> filesize <span class="token keyword">from</span> <span class="token string">&quot;rollup-plugin-filesize&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> baseConfig <span class="token keyword">from</span> <span class="token string">&quot;./rollup.config.base&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>baseConfig<span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>baseConfig<span class="token punctuation">.</span>plugins<span class="token punctuation">,</span> <span class="token function">terser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">filesize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rollup 生产环境 <code>dev config</code> 的配置:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> baseConfig <span class="token keyword">from</span> <span class="token string">&quot;./rollup.config.base&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> serve <span class="token keyword">from</span> <span class="token string">&quot;rollup-plugin-serve&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> livereload <span class="token keyword">from</span> <span class="token string">&quot;rollup-plugin-livereload&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>baseConfig<span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>baseConfig<span class="token punctuation">.</span>plugins<span class="token punctuation">,</span>
    <span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      contentBase<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      port<span class="token operator">:</span> <span class="token number">8020</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">livereload</span><span class="token punctuation">(</span><span class="token string">&quot;src&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>环境配置好后，我们就可以打包了:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 测试环境</span>
<span class="token function">npm</span> run dev
<span class="token comment"># 生产环境</span>
<span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-全局包" tabindex="-1"><a class="header-anchor" href="#_3-2-全局包" aria-hidden="true">#</a> 3.2 全局包</h4><p>通过npm i -g [pkg]进行全局安装的，比如常用的 <code>vue create</code>, <code>pm2</code> 等命令</p><p>文件头部的 <code>#!/usr/bin/env node</code> 是必须的，告诉node这是一个可执行的js文件，如果不写会报错。</p><p>在package.json中添加bin属性，它是一个对象，键名是告诉node在全局定义一个全局的命令，值则是执行命令的脚本文件路径，可以同时定义多个命令。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-calc&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;bin&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;calc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./src/calc.js&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不使用 <code>main</code> 字段的话，我们可能需要这样来引用依赖：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;some-module/dist/bundle.js&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-3-组件库" tabindex="-1"><a class="header-anchor" href="#_3-3-组件库" aria-hidden="true">#</a> 3.3 组件库</h4><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token operator">|</span><span class="token operator">-</span> lib
<span class="token operator">|</span><span class="token operator">-</span> src
    <span class="token operator">|</span><span class="token operator">-</span> MyButton
        <span class="token operator">|</span><span class="token operator">-</span> index<span class="token punctuation">.</span>js
        <span class="token operator">|</span><span class="token operator">-</span> index<span class="token punctuation">.</span>vue
        <span class="token operator">|</span><span class="token operator">-</span> index<span class="token punctuation">.</span>scss
    <span class="token operator">|</span><span class="token operator">-</span> MyInput
        <span class="token operator">|</span><span class="token operator">-</span> index<span class="token punctuation">.</span>js
        <span class="token operator">|</span><span class="token operator">-</span> index<span class="token punctuation">.</span>vue
        <span class="token operator">|</span><span class="token operator">-</span> index<span class="token punctuation">.</span>scss
    <span class="token operator">|</span><span class="token operator">-</span> main<span class="token punctuation">.</span>js
<span class="token operator">|</span><span class="token operator">-</span> rollup<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导出组件的index.js:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> MyButton <span class="token keyword">from</span> <span class="token string">&quot;./index.vue&quot;</span><span class="token punctuation">;</span>

MyButton<span class="token punctuation">.</span><span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>Vue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>MyButton<span class="token punctuation">.</span>name<span class="token punctuation">,</span> MyButton<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> MyButton<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件导出后在 <code>main.js</code> 中统一组件注册：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> MyButton <span class="token keyword">from</span> <span class="token string">&quot;./MyButton/index.js&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MyInput <span class="token keyword">from</span> <span class="token string">&quot;./MyInput/index&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> version <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../package.json&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&quot;./MyButton/index.scss&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;./MyInput/index.scss&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> components <span class="token operator">=</span> <span class="token punctuation">[</span>MyButton<span class="token punctuation">,</span> MyInput<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>Vue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  components<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>component<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>component<span class="token punctuation">.</span>name<span class="token punctuation">,</span> component<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> window <span class="token operator">!==</span> <span class="token string">&quot;undefined&quot;</span> <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span>Vue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">install</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>Vue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> MyButton<span class="token punctuation">,</span> MyInput<span class="token punctuation">,</span> install <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> version<span class="token punctuation">,</span> install <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置 <code>rollup.config.js</code> ：</p><p>这里我们打包出 <code>commonjs</code> 和 <code>iife</code> 两个模块规范，一个可以配合打包工具使用，另一个可以直接在浏览器中script引入。我们通过 <code>rollup-plugin-vue</code> 插件来解析vue文件，需要注意的是5.x版本解析vue2，最新的6.x版本解析vue3，</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> resolve <span class="token keyword">from</span> <span class="token string">&quot;rollup-plugin-node-resolve&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&quot;rollup-plugin-vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> babel <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-babel&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> commonjs <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-commonjs&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> scss <span class="token keyword">from</span> <span class="token string">&quot;rollup-plugin-scss&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> json <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-json&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> formatName <span class="token operator">=</span> <span class="token string">&quot;MyUI&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  input<span class="token operator">:</span> <span class="token string">&quot;./src/main.js&quot;</span><span class="token punctuation">,</span>
  output<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      file<span class="token operator">:</span> <span class="token string">&quot;./lib/bundle.cjs.js&quot;</span><span class="token punctuation">,</span>
      format<span class="token operator">:</span> <span class="token string">&quot;cjs&quot;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> formatName<span class="token punctuation">,</span>
      exports<span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      file<span class="token operator">:</span> <span class="token string">&quot;./lib/bundle.js&quot;</span><span class="token punctuation">,</span>
      format<span class="token operator">:</span> <span class="token string">&quot;iife&quot;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> formatName<span class="token punctuation">,</span>
      exports<span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      css<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      compileTemplate<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">babel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      exclude<span class="token operator">:</span> <span class="token string">&quot;**/node_modules/**&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">commonjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">scss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>项目引入我们的UI：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/* 全局引入 main.js */</span>
<span class="token keyword">import</span> MyUI <span class="token keyword">from</span> <span class="token string">&quot;my-ui&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 引入样式</span>
<span class="token keyword">import</span> <span class="token string">&quot;my-ui/lib/bundle.cjs.css&quot;</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>MyUI<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">/* 在组件中按需引入 */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> MyButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;my-ui&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
    MyButton
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-本地调试" tabindex="-1"><a class="header-anchor" href="#_4-本地调试" aria-hidden="true">#</a> 4.本地调试</h3><p>如果想要在本地进行调试，也可以使用 link 命令创建链接，首先在my-ui目录下运行 npm link 将组件挂载到全局</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 绑定</span>
<span class="token function">npm</span> <span class="token function">link</span>

<span class="token comment"># 解绑</span>
<span class="token function">npm</span> unlink <span class="token operator">&lt;</span>packageName<span class="token operator">&gt;</span>

<span class="token comment"># npm unlink @zagss/create-template -g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-1-本地模拟打包测试" tabindex="-1"><a class="header-anchor" href="#_4-1-本地模拟打包测试" aria-hidden="true">#</a> 4.1 本地模拟打包测试</h4><p>我们可以通过npm pack命令进行本地模拟打包测试，在项目根目录下就会生成一个tgz的压缩包，这就是将要上传的文件内容。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> pack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-项目发布" tabindex="-1"><a class="header-anchor" href="#_5-项目发布" aria-hidden="true">#</a> 5.项目发布</h3><p>每次更新npm包后，都是需要更新版本号，否则会报错提醒</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 打版本号 (第一次发布不用打版本号)</span>
<span class="token function">npm</span> version prerelease <span class="token parameter variable">--preid</span> beta

<span class="token comment"># 发布npm包 (第一次发布 npm publish --access public)</span>
<span class="token function">npm</span> publish

<span class="token comment"># 如果某版本的包有问题，我们还可以将其撤回</span>
<span class="token function">npm</span> unpublish <span class="token punctuation">[</span>pkg<span class="token punctuation">]</span>@<span class="token punctuation">[</span>version<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-关于-npm-init" tabindex="-1"><a class="header-anchor" href="#_6-关于-npm-init" aria-hidden="true">#</a> 6.关于 npm init</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># react</span>
<span class="token function">npm</span> init react-app my-app
<span class="token comment"># vue</span>
<span class="token function">npm</span> init vue@latest
<span class="token function">npm</span> create vite@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的 <code>npm create</code> 其实和 <code>npm init</code> 等价，是个别名。 根据npm，version 8版本的文档，以下三种命令是等价的:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init
<span class="token function">npm</span> create
<span class="token function">npm</span> innit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># npm init 的工作方式</span>
<span class="token function">npm</span> init foo -<span class="token operator">&gt;</span> <span class="token function">npm</span> <span class="token builtin class-name">exec</span> create-foo
<span class="token function">npm</span> init @usr/foo -<span class="token operator">&gt;</span> <span class="token function">npm</span> <span class="token builtin class-name">exec</span> @usr/create-foo
<span class="token function">npm</span> init @usr -<span class="token operator">&gt;</span> <span class="token function">npm</span> <span class="token builtin class-name">exec</span> @usr/create
<span class="token function">npm</span> init @usr@2.0.0 -<span class="token operator">&gt;</span> <span class="token function">npm</span> <span class="token builtin class-name">exec</span> @usr/create@2.0.0
<span class="token function">npm</span> init @usr/foo@2.0.0 -<span class="token operator">&gt;</span> <span class="token function">npm</span> <span class="token builtin class-name">exec</span> @usr/create-foo@2.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 传递参数给bin</span>

<span class="token comment"># npm 6.x</span>
<span class="token function">npm</span> create vite@latest my-vue-app <span class="token parameter variable">--template</span> vue

<span class="token comment"># npm 7+, extra double-dash is needed:</span>
<span class="token function">npm</span> create vite@latest my-vue-app -- <span class="token parameter variable">--template</span> vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这源于各个版本的process.argv的实现各不相同，npm6会将第一个--解析到结果中，而npm7+则不会在process.argv体现第一个--。</p><p><strong>包安装到了哪里？</strong></p><p>首先你会发现这个包不在你执行命令的子目录下，另外你也会发现这个包也没有存储到全局包的位置。 那这个包去哪里了呢... 他其实在你npm的缓存目录中，通常在 <code>~/.npm/_npx</code> 中以包名的 hash 方式命名的目录下存储。 你可以通过 <code>npm config get cache</code> 来找到缓存目录</p><h4 id="许可证" tabindex="-1"><a class="header-anchor" href="#许可证" aria-hidden="true">#</a> 许可证</h4><p>license字段使我们可以定义适用于package.json所描述代码的许可证。同样，在将项目发布到npm注册时，这非常重要，因为许可证可能会限制某些开发人员或组织对软件的使用。拥有清晰的许可证有助于明确定义该软件可以使用的术语。</p>`,59),m=["src"],b=p('<h4 id="版本号" tabindex="-1"><a class="header-anchor" href="#版本号" aria-hidden="true">#</a> 版本号</h4><p>在package.json的一些依赖的版本号中，我们还会看到^、~或者&gt;=这样的标识符，或者不带标识符的，这都代表什么意思呢？</p><ul><li>没有任何符号：完全百分百匹配，必须使用当前版本号</li><li>对比符号类的：&gt;(大于) &gt;=(大于等于) &lt;(小于) &lt;=(小于等于)</li><li>波浪符号~：固定主版本号和次版本号，修订号可以随意更改，例如 <code>~2.0.0</code>，可以使用 2.0.0、2.0.2 、2.0.9 的版本。</li><li>插入符号^：固定主版本号，次版本号和修订号可以随意更改，例如 <code>^2.0.0</code>，可以使用 2.0.1、2.2.2 、2.9.9 的版本。</li><li>任意版本*：对版本没有限制，一般不用 或符号：||可以用来设置多个版本号限制规则，例如 &gt;= 3.0.0 || &lt;= 1.0.0</li></ul><h2 id="vue-的发布流程" tabindex="-1"><a class="header-anchor" href="#vue-的发布流程" aria-hidden="true">#</a> Vue 的发布流程</h2>',4),g={href:"https://juejin.cn/post/6997943192851054606#heading-1",target:"_blank",rel:"noopener noreferrer"};function h(t,f){const a=i("ExternalLinkIcon");return c(),l("div",null,[r,d,n("p",null,[n("a",k,[s("参考"),e(a)])]),v,n("img",{src:t.$withBase("/images/license.png"),alt:"foo"},null,8,m),b,n("p",null,[n("a",g,[s("参考"),e(a)])])])}const y=o(u,[["render",h],["__file","npm.html.vue"]]);export{y as default};
