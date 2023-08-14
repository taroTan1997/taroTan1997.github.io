import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as c,c as u,b as s,e as n,d as t,a as p}from"./app-8cf4862e.js";const l={},i={href:"https://docs.python.org/zh-cn/3.6/howto/sorting.html",target:"_blank",rel:"noopener noreferrer"},r=s("p",null,"Python 列表内置的 list.sort()方法可以直接修改列表。另外 sorted()内置函数，可以传入迭代对象构建一个新的排序列表。",-1),k=s("hr",null,null,-1),d=s("p",null,[s("strong",null,[s("code",null,"sorted")]),n("("),s("em",null,"iterable"),n(", ***, "),s("em",null,"key=None"),n(", *reverse=False*)")],-1),m=s("em",null,"iterable",-1),b=s("br",null,null,-1),g=s("br",null,null,-1),h=s("em",null,"key",-1),v=s("em",null,"iterable",-1),_=s("code",null,"key=str.lower",-1),y=s("code",null,"None",-1),f=s("br",null,null,-1),w=s("em",null,"reverse",-1),j=s("code",null,"True",-1),x=s("br",null,null,-1),B={href:"https://docs.python.org/zh-cn/3.6/library/functools.html#functools.cmp_to_key",target:"_blank",rel:"noopener noreferrer"},z=s("em",null,"cmp",-1),P=s("em",null,"key",-1),A=s("br",null,null,-1),S={href:"https://docs.python.org/zh-cn/3.6/library/functions.html#sorted",target:"_blank",rel:"noopener noreferrer"},T=p(`<hr><h2 id="基本排序" tabindex="-1"><a class="header-anchor" href="#基本排序" aria-hidden="true">#</a> 基本排序</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> a<span class="token punctuation">.</span>sort<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> a
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="key-函数" tabindex="-1"><a class="header-anchor" href="#key-函数" aria-hidden="true">#</a> key 函数</h2><p>可以使用一个函数来指定排序使用的键</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span><span class="token string">&quot;This is a test string from Andrew&quot;</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> key<span class="token operator">=</span><span class="token builtin">str</span><span class="token punctuation">.</span>lower<span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Andrew&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;from&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;is&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;This&#39;</span><span class="token punctuation">]</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> student_tuples <span class="token operator">=</span> <span class="token punctuation">[</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token punctuation">(</span><span class="token string">&#39;john&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token punctuation">(</span><span class="token string">&#39;jane&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token punctuation">(</span><span class="token string">&#39;dave&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span>student_tuples<span class="token punctuation">,</span> key<span class="token operator">=</span><span class="token keyword">lambda</span> student<span class="token punctuation">:</span> student<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>   <span class="token comment"># sort by age</span>
<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;dave&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;jane&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;john&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="operator-模块函数" tabindex="-1"><a class="header-anchor" href="#operator-模块函数" aria-hidden="true">#</a> Operator 模块函数</h2>`,7),N={href:"https://docs.python.org/zh-cn/3.6/library/operator.html#module-operator",target:"_blank",rel:"noopener noreferrer"},O={href:"https://docs.python.org/zh-cn/3.6/library/operator.html#operator.itemgetter",target:"_blank",rel:"noopener noreferrer"},V={href:"https://docs.python.org/zh-cn/3.6/library/operator.html#operator.attrgetter",target:"_blank",rel:"noopener noreferrer"},q={href:"https://docs.python.org/zh-cn/3.6/library/operator.html#operator.methodcaller",target:"_blank",rel:"noopener noreferrer"},E=p(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> operator <span class="token keyword">import</span> itemgetter<span class="token punctuation">,</span> attrgetter

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span>student_tuples<span class="token punctuation">,</span> key<span class="token operator">=</span>itemgetter<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;dave&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;jane&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;john&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span>student_objects<span class="token punctuation">,</span> key<span class="token operator">=</span>attrgetter<span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;dave&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;jane&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;john&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">]</span>

<span class="token comment"># 也支持多级排序！</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span>student_tuples<span class="token punctuation">,</span> key<span class="token operator">=</span>itemgetter<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;john&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;dave&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;jane&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span>student_objects<span class="token punctuation">,</span> key<span class="token operator">=</span>attrgetter<span class="token punctuation">(</span><span class="token string">&#39;grade&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;john&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;dave&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;jane&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="升序和降序" tabindex="-1"><a class="header-anchor" href="#升序和降序" aria-hidden="true">#</a> <strong>升序和降序</strong></h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span>student_tuples<span class="token punctuation">,</span> key<span class="token operator">=</span>itemgetter<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> reverse<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;john&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;jane&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;dave&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="排序稳定性和排序复杂度" tabindex="-1"><a class="header-anchor" href="#排序稳定性和排序复杂度" aria-hidden="true">#</a> <strong>排序稳定性和排序复杂度</strong></h2>`,4),L={href:"https://en.wikipedia.org/wiki/Sorting_algorithm#Stability",target:"_blank",rel:"noopener noreferrer"},C=p(`<p>注意  <em>blue</em>  的两个记录如何保留它们的原始顺序，以便  <code>(&#39;blue&#39;, 1)</code>  保证在  <code>(&#39;blue&#39;, 2)</code>  之前。</p><p>这个美妙的属性允许你在一系列排序步骤中构建复杂的排序。例如，要按  <em>grade</em>  降序然后  <em>age</em>  升序对学生数据进行排序，请先  <em>age</em>  排序，然后再使用  <em>grade</em>  排序：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s <span class="token operator">=</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span>student_objects<span class="token punctuation">,</span> key<span class="token operator">=</span>attrgetter<span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>     <span class="token comment"># sort on secondary key</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> key<span class="token operator">=</span>attrgetter<span class="token punctuation">(</span><span class="token string">&#39;grade&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> reverse<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>       <span class="token comment"># now sort on primary key, descending</span>
<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;dave&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;jane&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;john&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),D={href:"https://en.wikipedia.org/wiki/Timsort",target:"_blank",rel:"noopener noreferrer"},H=p(`<h2 id="使用装饰-排序-去装饰的旧方法" tabindex="-1"><a class="header-anchor" href="#使用装饰-排序-去装饰的旧方法" aria-hidden="true">#</a> <strong>使用装饰-排序-去装饰的旧方法</strong></h2><p>这个三个步骤被称为 Decorate-Sort-Undecorate ：</p><ul><li>首先，初始列表使用控制排序顺序的新值进行修饰。</li><li>然后，装饰列表已排序。</li><li>最后，删除装饰，创建一个仅包含新排序中初始值的列表。</li></ul><p>例如，要使用 DSU 方法按  <em>grade</em>  对学生数据进行排序：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> decorated <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>student<span class="token punctuation">.</span>grade<span class="token punctuation">,</span> i<span class="token punctuation">,</span> student<span class="token punctuation">)</span> <span class="token keyword">for</span> i<span class="token punctuation">,</span> student <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>student_objects<span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> decorated<span class="token punctuation">.</span>sort<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>student <span class="token keyword">for</span> grade<span class="token punctuation">,</span> i<span class="token punctuation">,</span> student <span class="token keyword">in</span> decorated<span class="token punctuation">]</span>               <span class="token comment"># undecorate</span>
<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;john&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;jane&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;dave&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这方法语有效是因为元组按字典顺序进行比较，先比较第一项；如果它们相同则比较第二个项目，依此类推。</p><p>不一定在所有情况下都要在装饰列表中包含索引  <em>i</em> ，但包含它有两个好处：</p><ul><li>排序是稳定的——如果两个项具有相同的键，它们的顺序将保留在排序列表中。</li><li>原始项目不必具有可比性，因为装饰元组的排序最多由前两项决定。 因此，例如原始列表可能包含无法直接排序的复数。</li></ul>`,8),I={href:"https://en.wikipedia.org/wiki/Schwartzian_transform",target:"_blank",rel:"noopener noreferrer"},K=s("p",null,"既然 Python 排序提供了键函数，那么通常不需要这种技术。",-1),U=s("h2",{id:"使用-cmp-参数的旧方法",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#使用-cmp-参数的旧方法","aria-hidden":"true"},"#"),n(" 使用 cmp 参数的旧方法")],-1),W={href:"https://docs.python.org/zh-cn/3.6/library/functions.html#sorted",target:"_blank",rel:"noopener noreferrer"},F={href:"https://docs.python.org/zh-cn/3.6/library/stdtypes.html#list.sort",target:"_blank",rel:"noopener noreferrer"},R=s("em",null,"cmp",-1),G=p(`<p>在 Py3.0 中， <em>cmp</em>  参数被完全删除（作为简化和统一语言努力的一部分，消除了丰富的比较与  <code>__cmp__()</code>  魔术方法之间的冲突）。</p><p>在 Py2.x 中， sort 允许一个可选函数，可以调用它来进行比较。该函数应该采用两个参数进行比较，然后返回负值为小于，如果它们相等则返回零，或者返回大于大于的正值。例如，我们可以这样做：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">def</span> <span class="token function">numeric_compare</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">return</span> x <span class="token operator">-</span> y
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token builtin">cmp</span><span class="token operator">=</span>numeric_compare<span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者你可反转比较的顺序：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">def</span> <span class="token function">reverse_numeric</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">return</span> y <span class="token operator">-</span> x
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token builtin">cmp</span><span class="token operator">=</span>reverse_numeric<span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将代码从 Python 2.x 移植到 3.x 时，如果用户提供比较功能并且需要将其转换为键函数，则会出现这种情况。 以下包装器使这很容易：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">cmp_to_key</span><span class="token punctuation">(</span>mycmp<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token string">&#39;Convert a cmp= function into a key= function&#39;</span>
    <span class="token keyword">class</span> <span class="token class-name">K</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> obj<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>obj <span class="token operator">=</span> obj
        <span class="token keyword">def</span> <span class="token function">__lt__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> mycmp<span class="token punctuation">(</span>self<span class="token punctuation">.</span>obj<span class="token punctuation">,</span> other<span class="token punctuation">.</span>obj<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span>
        <span class="token keyword">def</span> <span class="token function">__gt__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> mycmp<span class="token punctuation">(</span>self<span class="token punctuation">.</span>obj<span class="token punctuation">,</span> other<span class="token punctuation">.</span>obj<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span>
        <span class="token keyword">def</span> <span class="token function">__eq__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> mycmp<span class="token punctuation">(</span>self<span class="token punctuation">.</span>obj<span class="token punctuation">,</span> other<span class="token punctuation">.</span>obj<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span>
        <span class="token keyword">def</span> <span class="token function">__le__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> mycmp<span class="token punctuation">(</span>self<span class="token punctuation">.</span>obj<span class="token punctuation">,</span> other<span class="token punctuation">.</span>obj<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">0</span>
        <span class="token keyword">def</span> <span class="token function">__ge__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> mycmp<span class="token punctuation">(</span>self<span class="token punctuation">.</span>obj<span class="token punctuation">,</span> other<span class="token punctuation">.</span>obj<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">0</span>
        <span class="token keyword">def</span> <span class="token function">__ne__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> mycmp<span class="token punctuation">(</span>self<span class="token punctuation">.</span>obj<span class="token punctuation">,</span> other<span class="token punctuation">.</span>obj<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span>
    <span class="token keyword">return</span> K
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要转换为键函数，只需包装旧的比较函数：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> key<span class="token operator">=</span>cmp_to_key<span class="token punctuation">(</span>reverse_numeric<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9),J={href:"https://docs.python.org/zh-cn/3.6/library/functools.html#functools.cmp_to_key",target:"_blank",rel:"noopener noreferrer"},M={href:"https://docs.python.org/zh-cn/3.6/library/functools.html#module-functools",target:"_blank",rel:"noopener noreferrer"};function Q(X,Y){const a=e("ExternalLinkIcon");return c(),u("div",null,[s("p",null,[n("原文链接："),s("a",i,[n("Sorting HOW TO - Python 3.10.4 documentation"),t(a)])]),r,k,d,s("p",null,[n("根据  "),m,n("  中的项返回一个新的已排序列表。"),b,n(" 具有两个可选参数，它们都必须指定为关键字参数。"),g,h,n("  指定带有单个参数的函数，用于从  "),v,n("  的每个元素中提取用于比较的键 (例如  "),_,n(")。 默认值为  "),y,n(" (直接比较元素)。"),f,w,n("  为一个布尔值。 如果设为  "),j,n("，则每个列表元素将按反向顺序比较进行排序。"),x,n(" 使用  "),s("a",B,[n("functools.cmp_to_key()"),t(a)]),n("  可将老式的  "),z,n("  函数转换为  "),P,n("  函数。"),A,n(" 内置的  "),s("a",S,[n("sorted()"),t(a)]),n("  确保是稳定的。 如果一个排序确保不会改变比较结果相等的元素的相对顺序就称其为稳定的 — 这有利于进行多重排序（例如先按部门、再按薪级排序）。")]),T,s("p",null,[n("上面显示的键函数模式非常常见，因此 Python 提供了便利功能，使访问器功能更容易，更快捷。  "),s("a",N,[n("operator"),t(a)]),n("  模块有  "),s("a",O,[n("itemgetter()"),t(a)]),n(" 、 "),s("a",V,[n("attrgetter()"),t(a)]),n("  和  "),s("a",q,[n("methodcaller()"),t(a)]),n("  函数。")]),E,s("p",null,[n("排序保证是  "),s("strong",null,[s("a",L,[n("稳定"),t(a)])]),n(" 的。 这意味着当多个记录具有相同的键值时，将保留其原始顺序。")]),C,s("p",null,[n("Python 中使用的  "),s("a",D,[n("Timsort"),t(a)]),n("  算法可以有效地进行多种排序，因为它可以利用数据集中已存在的任何排序。")]),H,s("p",null,[n("这个方法的另一个名字是 Randal L. Schwartz 在 Perl 程序员中推广的  "),s("a",I,[n("Schwartzian transform"),t(a)]),n("。")]),K,U,s("p",null,[n("本 HOWTO 中给出的许多结构都假定为 Python 2.4 或更高版本。在此之前，没有内置  "),s("a",W,[n("sorted()"),t(a)]),n(" ， "),s("a",F,[n("list.sort()"),t(a)]),n("  也没有关键字参数。相反，所有 Py2.x 版本都支持  "),R,n("  参数来处理用户指定的比较函数。")]),G,s("p",null,[n("在 Python 3.2 中， "),s("a",J,[n("functools.cmp_to_key()"),t(a)]),n("  函数被添加到标准库中的  "),s("a",M,[n("functools"),t(a)]),n("  模块中。")])])}const nn=o(l,[["render",Q],["__file","python-sort.html.vue"]]);export{nn as default};
