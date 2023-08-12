import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as s,a as e,b as a,d as t,e as c}from"./app-b401fc1d.js";const d={},p=e("p",null,"最近，关于 ChatGPT 的讨论越来越多，但大多数人仅仅将其视为一款聊天机器人，并从猎奇的角度去测试其人工智能的回答。然而，ChatGPT 不仅仅是一个猎奇的 AI 玩具，未来它将会成为必备生产工具。ChatGPT 之类的 AI 工具将用它巨大的语言知识库，为我们创造更多的价值。",-1),l={href:"https://platform.openai.com/examples",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/f/awesome-chatgpt-prompts",target:"_blank",rel:"noopener noreferrer"},g={href:"https://learnprompting.org/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://www.aishort.top",target:"_blank",rel:"noopener noreferrer"},m=c('<h2 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明" aria-hidden="true">#</a> 使用说明</h2><p>ChatGPT Shortcut 页面默认显示全部的提示词，页面分为标签区、搜索区和提示词展示区。</p><figure><img src="https://img.newzone.top/2023-02-28-10-30-20.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="标签筛选" tabindex="-1"><a class="header-anchor" href="#标签筛选" aria-hidden="true">#</a> 标签筛选</h3><p>标签区按提示词的领域和功能进行划分，可根据不同场景和需求进行选择。与标签区右上方的「标签筛选规则切换」按钮配合使用，可进行多标签筛选。默认状态为 OR，即选中标签下的所有提示词。切换到 AND 后，将筛选出具备已选中的多个标签的提示词。</p><figure><img src="https://img.newzone.top/2023-02-28-10-31-01.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="关键词搜索" tabindex="-1"><a class="header-anchor" href="#关键词搜索" aria-hidden="true">#</a> 关键词搜索</h3><p>关键词搜索范围包括提示词的标题、简介、内容和中文翻译。输入关键词后，提示词展示区将立即展示筛选出的内容。如果已选中标签，则关键词搜索仅限于标签筛选范围内。对于 PC 端，搜索框内容变化后，新的搜索结果会在 800 毫秒后显示。移动端则为即时刷新。</p><figure><img src="https://img.newzone.top/2023-02-28-10-31-10.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="展示区复制" tabindex="-1"><a class="header-anchor" href="#展示区复制" aria-hidden="true">#</a> 展示区复制</h3><p>通过标签筛选和关键词搜索，点击卡片右上方的「复制」按钮即可获取提示词，将其粘贴到 ChatGPT 中，参考中文提示调整需求文本，即可得到指定领域的回复。如果提示词中的中文备注没有解释清楚，可以点击提示词的绿色标题查看来源网页。</p><figure><img src="https://img.newzone.top/2023-02-28-10-31-19.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="语言切换" tabindex="-1"><a class="header-anchor" href="#语言切换" aria-hidden="true">#</a> 语言切换</h3><p>默认情况下，提示词内容会显示为英文。如果你想查看中文释义，可以点击提示词内容将其切换到中文，再次点击即可切回英文。请注意，语言切换只在文字上点击有效，点击空白区域无效。中文释义为机器翻译，仅供参考。</p><figure><img src="https://img.newzone.top/chatgptshortcut_encn.gif" alt="中英文切换" tabindex="0" loading="lazy"><figcaption>中英文切换</figcaption></figure><p>如果想让提示词默认显示为中文，你可以点击标签区右上方的 <code>CN</code> 按钮。需要注意的是，即使切换到中文翻译，复制按钮也仅针对英文提示词复制。下方会有解释原因。</p><h3 id="热门排序" tabindex="-1"><a class="header-anchor" href="#热门排序" aria-hidden="true">#</a> 热门排序</h3><p>现在页面会显示 Prompt 的使用次数，使用次数排名靠前的 Prompt 将会被标记为「favorite」。同时，Prompt 的标签排序也将以热力值为主。热力值将会定期更新。</p><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="为什么提示词用英文" tabindex="-1"><a class="header-anchor" href="#为什么提示词用英文" aria-hidden="true">#</a> 为什么提示词用英文？</h3><p>ChatGPT Shortcut 是为方便中文母语人士使用 ChatGPT 而创建的，但是提示词却全部是英文。这是因为相较于中文，ChatGPT 对英文的理解更为出色。即使是国内第一个对话式大型语言模型 MOSS，也承认 MOSS 的英文回答水平比中文高，建议使用英文。（MOSS 已不对外开放）</p><p>使用中文提示词可能会得到不错的结果，但是当你再次输入相同的中文提示时，结果可能与之前大相径庭。因为 ChatGPT 对中文的理解每次都不同，所以建议大家在生产力型提示词的输入中使用英文提示词，以保证输出效果。此外，英文提示词带来的回复也很可能是英文的，你可以在提示词结尾添加 <code>respond in Chinese</code>，将回复指定为中文。</p><h3 id="每次都要输入-promot" tabindex="-1"><a class="header-anchor" href="#每次都要输入-promot" aria-hidden="true">#</a> 每次都要输入 Promot？</h3><p>API 中可以将提示词设为「system prompt」，这样后续就不需要输入提示词了，ChatGPT 会按照 system prompt 来执行操作。</p><p>在网页版 ChatGPT 中，如果没有切换主提示词，只需用引号将后续回复内容框选即可，这样就不需要每次都输入提示词。当回复内容不符合提示词要求时，说明 ChatGPT 已经忘记了提示词，此时需要重新输入提示词以唤醒它。另外，每个对话的链接都是唯一的，你可以将常用的对话保存为书签，以便日后使用。</p><h3 id="中文搜索延迟" tabindex="-1"><a class="header-anchor" href="#中文搜索延迟" aria-hidden="true">#</a> 中文搜索延迟</h3><p>搜索功能基于 Docusaurus 的 showcase，存在 PC 端中文输入法焦点丢失问题。向 Docusaurus 反馈后，对方表示会尝试修复和 <code>FWIW, you should not be using Chinese anyway, since the showcase is not localized</code>。但问题始终没有解决。因此，我将搜索组件分为移动端和 PC 端两类。移动端搜索逻辑保持不变，而屏幕宽度阈值 768px 以上的 PC 端浏览引入 <code>debounce</code> 函数解决中文输入问题。但这在 PC 端产生两个问题：一是中文输入需在 800 毫秒内完成；二是 PC 端搜索刷新从即时变为 800 毫秒延迟。若你有更好的解决方案，欢迎提供反馈。</p><h3 id="输出虚假信息" tabindex="-1"><a class="header-anchor" href="#输出虚假信息" aria-hidden="true">#</a> 输出虚假信息</h3><p>ChatGPT 虽然非常强大，但并不是万能的。有时它会输出虚假信息。例如，当我需要将上百条信息录入到 ChatGPT Shortcut 中时，我让 ChatGPT 按指定格式转换数据。但是在转换过程中，我发现其中一些信息被 ChatGPT 误写。例如，在文本中一条标签是 <code>movie critic</code>，而 ChatGPT 将其更改为 <code>film critic</code>。尽管这在文本中不会造成什么影响，但放在代码中会报错。因此，在使用 ChatGPT 时，务必检查其输出内容。</p><h3 id="提示词不好用" tabindex="-1"><a class="header-anchor" href="#提示词不好用" aria-hidden="true">#</a> 提示词不好用</h3>',30),u={href:"https://platform.openai.com/examples",target:"_blank",rel:"noopener noreferrer"},_={href:"https://xq7pd3qu17.feishu.cn/share/base/form/shrcnK7oaSPaAcj1YAHfy4jo0Jh",target:"_blank",rel:"noopener noreferrer"},C=e("p",null,"如果你是进行摘要总结，可以使用 GPT 对原有回答进行再次修正，以提高回答的精度。此外，提示词不仅能用于工作生产，更重要的是帮助你开拓思路、发散思维，从多个角度考虑问题，并解决人们在思考时容易忽略的问题。",-1),T=e("h2",{id:"为什么执着于-chatgpt",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#为什么执着于-chatgpt","aria-hidden":"true"},"#"),a(" 为什么执着于 ChatGPT？")],-1),G=e("p",null,"家人看到我每天把大量时间花在 ChatGPT，实际上并不能理解。因为这看起来跟我的工作关系不大。ChatGPT 帮我节省的时间远少于我的投入，帮我写的代码和文章都需要大幅修改，而查找的资料也基本上只是基础知识，而对于具体的问题我还需要去专业网站进行查询。那么，ChatGPT 究竟有什么用呢？等它成熟了再去使用不好吗？",-1),b=e("p",null,"但是，我们需要明确的是，使用 ChatGPT 等 AI 工具可以提高我们的工作效率和解放我们的时间，让我们可以更专注于创造性的工作和创新性的思考。比如，ChatGPT 在文章修订、语气转换、语音录入、代码解释、创意思维等方面已经成为我不可或缺的工具。虽然 ChatGPT 目前的功能和表现还有待提高和改进，但它毕竟是未来工具的一部分，是我们不断提高自己和适应未来的必要工具。我相信随着时间的推移，ChatGPT 的表现会越来越优秀，让我们的工作更高效，更具有创造性。",-1),x=e("h2",{id:"最后",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#最后","aria-hidden":"true"},"#"),a(" 最后")],-1),w=e("p",null,"目前，ChatGPT 已经有 1 亿用户，但这仅仅是 80 亿人口中很小的一部分。无论你身处哪个行业，你使用 ChatGPT 都代表着你在行业前沿。尽管你可能认为这看起来似乎与你的行业无关，但使用它就代表着你比别人更早地迈出了这一步，可以探索更多的可能性。",-1),S=e("p",null,"我并不期待 ChatGPT Shortcut 成为完美的工具，而是希望它能为大家推开使用 AI 的一道门缝。我希望让更多人了解和使用 ChatGPT，摆脱对其聊天机器人的刻板印象，以提高工作效率。因为我相信，在未来，ChatGPT 和其他 AI 工具将扮演越来越重要的角色，成为我们生产力的强大工具。",-1);function y(z,k){const r=o("ExternalLinkIcon"),h=o("BiliBili");return i(),s("div",null,[p,e("p",null,[a("ChatGPT 的回复质量取决于提示词（即 Prompt）。这通常是用户提供的问题或文本，以激活模型生成回复。简单来说，prompt 就是用户想要询问的内容，作为输入送到 ChatGPT 中，ChatGPT 会尝试理解这个输入，然后输出合适的回答或响应。通过优化提示词，可以使 ChatGPT 生成更加准确、有用的回复。为了能让 ChatGPT 成为生产力工具，我花大量时间逐个研究提示词的规则和范例，如 "),e("a",l,[a("ChatGPT Prompt Examples"),t(r)]),a("、"),e("a",f,[a("Awesome ChatGPT Prompts"),t(r)]),a("、"),e("a",g,[a("Learn Prompting"),t(r)]),a(" 等。我筛选出了 163 个 Prompts（提示词），仅记录它们的功能而非内容，这就让我的笔记超过了 5000 字。提示词目录也变得越来越长，即使将浏览器全屏，也无法完整显示。起初，我制作提示词目录是为了方便自己，但每次需要查找提示词时，我不得不依靠记忆。这些笔记反而成为了负担，拖累 ChatGPT 的工作效率。")]),e("p",null,[a("为了更好地使用 ChatGPT，我将精选的提示词编入索引，根据领域和功能对其进行分类，添加针对提示词的标签筛选、关键词搜索、一键复制和中英文切换功能，创建了 ChatGPT Shortcut 项目。即使是初学者，你只需"),e("strong",null,[a("打开 "),e("a",P,[a("ChatGPT Shortcut"),t(r)]),a("，复制提示词，稍加修改后发送给 ChatGPT")]),a("，就能获得指定输出，让你的生产力加倍！")]),t(h,{bvid:"BV1os4y137WH"}),m,e("p",null,[a("所有提示词均来自互联网，会定期进行更新。虽然我测试过每一条提示词，但实际效果可能因需求而有所偏差。你可以参考页面和 "),e("a",u,[a("ChatGPT Prompt Examples"),t(r)]),a(" 进行调整。如果你发现任何错误、有创意的想法或有好的提示词，欢迎"),e("a",_,[a("反馈和投稿"),t(r)]),a("。")]),C,T,G,b,x,w,S])}const B=n(d,[["render",y],["__file","2023-02-27-chatgpt_shortcuts.html.vue"]]);export{B as default};
