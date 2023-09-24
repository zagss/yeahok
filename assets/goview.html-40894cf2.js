import{_ as e,o as a,c as s,e as n}from"./app-03679ccd.js";const i={},d=n(`<h1 id="goview-项目分析" tabindex="-1"><a class="header-anchor" href="#goview-项目分析" aria-hidden="true">#</a> GOVIEW 项目分析</h1><p>「数据可视化」低代码开发平台</p><h2 id="项目概况" tabindex="-1"><a class="header-anchor" href="#项目概况" aria-hidden="true">#</a> 项目概况</h2><p>主要技术栈为：</p><table><thead><tr><th>名称</th><th>版本</th><th>名称</th><th>版本</th></tr></thead><tbody><tr><td>Vue</td><td>3.2.x</td><td>TypeScript4</td><td>4.6.x</td></tr><tr><td>Vite</td><td>4.2.x</td><td>NaiveUI</td><td>2.34.x</td></tr><tr><td>ECharts</td><td>5.3.x</td><td>Pinia</td><td>2.0.x</td></tr></tbody></table><h2 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> i naive-ui pinia dayjs axios vue-router

<span class="token function">pnpm</span> i <span class="token parameter variable">-D</span> @types/node sass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目配置" tabindex="-1"><a class="header-anchor" href="#项目配置" aria-hidden="true">#</a> 项目配置</h2><p>vite.config 配置</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 1. 路径重定向</span>

<span class="token comment">// 2. css 全局注册</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tsconfig 配置</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// baseUrl paths</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>main.ts 配置</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 1. 全局样式引入</span>
<span class="token comment">// 2. 挂载naive-ui组件</span>

<span class="token comment">// 3. 挂载状态管理</span>
<span class="token comment">// 3.1 处理主题默认值</span>

<span class="token comment">// 4. 挂载路由</span>
<span class="token comment">// 4.1 创建路由守卫，处理登录状态，标题</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>处理守卫，Axios中可使用 loading, message, dialog</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,16),t=[d];function r(c,l){return a(),s("div",null,t)}const p=e(i,[["render",r],["__file","goview.html.vue"]]);export{p as default};
