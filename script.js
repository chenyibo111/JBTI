// 题目数据
const questions = [
  // 风险偏好 R
  {
    id: 1,
    dimension: 'R',
    text: "看到一只股票一天涨了 20%，你的第一反应是？",
    options: [
      { text: "赶紧追，明天继续冲", score: 1 },
      { text: "观察一下，可能是陷阱", score: -1 },
      { text: "早就买了，现在在数钱", score: 1 }
    ]
  },
  {
    id: 2,
    dimension: 'R',
    text: "账户一天跌了 10%，你会？",
    options: [
      { text: "割肉跑路，保命要紧", score: -1 },
      { text: "加仓摊平，越跌越买", score: 1 },
      { text: "关掉 APP，眼不见为净", score: -1 }
    ]
  },
  {
    id: 3,
    dimension: 'R',
    text: "朋友推荐一只'稳赚不赔'的股票，你？",
    options: [
      { text: "先研究研究再说", score: -1 },
      { text: "先买一点试试水", score: 1 },
      { text: "直接 full 仓，信任朋友", score: 1 }
    ]
  },
  {
    id: 4,
    dimension: 'R',
    text: "你有 10 万块，会怎么投？",
    options: [
      { text: "分散买 5-6 只，东方不亮西方亮", score: -1 },
      { text: "全仓一只，要赚就赚大的", score: 1 },
      { text: "先买 2 万试试，对了再加", score: -1 }
    ]
  },
  {
    id: 5,
    dimension: 'R',
    text: "新股上市，首日涨幅 200%，你？",
    options: [
      { text: "看看就好，与我无关", score: -1 },
      { text: "后悔没中籤，明天开盘就追", score: 1 },
      { text: "这种涨幅肯定回调，等跌了再说", score: -1 }
    ]
  },
  
  // 决策风格 D
  {
    id: 6,
    dimension: 'D',
    text: "买股票前你最看重什么？",
    options: [
      { text: "财报、PE、现金流、护城河", score: -1 },
      { text: "大佬推荐、消息面、概念热度", score: 1 },
      { text: "图表形态、技术指标、资金流向", score: -1 }
    ]
  },
  {
    id: 7,
    dimension: 'D',
    text: "听到一个内幕消息说某股票要涨，你？",
    options: [
      { text: "先查查消息来源靠不靠谱", score: -1 },
      { text: "直接冲，宁可信其有", score: 1 },
      { text: "反向操作，消息都是割韭菜的", score: -1 }
    ]
  },
  {
    id: 8,
    dimension: 'D',
    text: "对于网红分析师的观点，你？",
    options: [
      { text: "完全不信，自己研究", score: -1 },
      { text: "经常参考，有时候挺准", score: 1 },
      { text: "只看逻辑，不看结论", score: -1 }
    ]
  },
  {
    id: 9,
    dimension: 'D',
    text: "两只股票选一只：A 公司基本面好但没人讨论，B 概念火热但亏损，你选？",
    options: [
      { text: "A 公司，踏实", score: -1 },
      { text: "B 公司，有故事才有涨幅", score: 1 },
      { text: "都不选，再看看别的", score: -1 }
    ]
  },
  {
    id: 10,
    dimension: 'D',
    text: "你的交易决策主要来自？",
    options: [
      { text: "自己做的研究和分析", score: -1 },
      { text: "群里大佬、大 V、消息源", score: 1 },
      { text: "结合多方信息，自己判断", score: 0 }
    ]
  },
  
  // 持仓周期 T
  {
    id: 11,
    dimension: 'T',
    text: "你买了一只股票，一周后涨了 30%，你？",
    options: [
      { text: "赶紧卖，落袋为安", score: -1 },
      { text: "继续拿，还能涨", score: 1 },
      { text: "卖一半留一半，进退自如", score: 0 }
    ]
  },
  {
    id: 12,
    dimension: 'T',
    text: "一只股票被套了半年，你？",
    options: [
      { text: "早就忘了这回事，当存银行了", score: 1 },
      { text: "每天看，盼着解套就跑", score: -1 },
      { text: "越跌越买，拉低成本", score: 1 }
    ]
  },
  {
    id: 13,
    dimension: 'T',
    text: "你的平均持仓时间是？",
    options: [
      { text: "几天到几周", score: -1 },
      { text: "几个月到几年", score: 1 },
      { text: "看情况，对了就拿错了就跑", score: 0 }
    ]
  },
  {
    id: 14,
    dimension: 'T',
    text: "看到一只股票连续涨了 3 个月，你？",
    options: [
      { text: "趋势形成了，赶紧上车", score: -1 },
      { text: "已经涨这么多了，风险太大", score: 1 },
      { text: "等回调再进", score: -1 }
    ]
  },
  {
    id: 15,
    dimension: 'T',
    text: "对于'做 T'（日内交易），你的态度是？",
    options: [
      { text: "经常搞，降低成本嘛", score: -1 },
      { text: "太累了，长期拿着不香吗", score: 1 },
      { text: "偶尔做做，主要看行情", score: 0 }
    ]
  },
  
  // 情绪控制 E
  {
    id: 16,
    dimension: 'E',
    text: "连续三次交易都亏了，你？",
    options: [
      { text: "怀疑人生，退出股市", score: 1 },
      { text: "总结教训，调整策略", score: -1 },
      { text: "休息一段时间，冷静一下", score: 0 }
    ]
  },
  {
    id: 17,
    dimension: 'E',
    text: "看到别人买的股票翻倍了，你？",
    options: [
      { text: "为他高兴，自己不急", score: -1 },
      { text: "后悔当初没买", score: 1 },
      { text: "马上找他问代码", score: 1 }
    ]
  },
  {
    id: 18,
    dimension: 'E',
    text: "持仓股票跌停，你当晚？",
    options: [
      { text: "该吃吃该睡睡，明天再说", score: -1 },
      { text: "失眠，反复想哪里出了问题", score: 1 },
      { text: "看看有没有利空，决定去留", score: 0 }
    ]
  },
  {
    id: 19,
    dimension: 'E',
    text: "牛市来了，周围人都在赚钱，你？",
    options: [
      { text: "按计划操作，不追高", score: -1 },
      { text: "忍不住加大投入，怕踏空", score: 1 },
      { text: "小仓位参与，感受一下", score: 0 }
    ]
  },
  {
    id: 20,
    dimension: 'E',
    text: "卖出后股票继续涨了 50%，你？",
    options: [
      { text: "没事，赚到自己那份就好", score: -1 },
      { text: "拍断大腿，恨不得扇自己两巴掌", score: 1 },
      { text: "安慰自己：卖飞总比套牢好", score: 0 }
    ]
  }
];

// 16 种结果类型
// 注意：R/D/T/E 的 + 表示正分（激进/直觉/长线/冷静），- 表示负分（保守/数据/短线/情绪化）
const resultTypes = {
  // R- 保守派
  // D- 数据党
  // T- 短线王
  // E- 情绪化
  'R-D-T-E-': {
    emoji: '📚',
    title: '价值投资宗师',
    subtitle: '保守 + 数据 + 短线 + 情绪化',
    comment: '你的操作风格像极了 2000 年的巴菲特，建议出书',
    advice: '继续保持你的理性分析能力，可以考虑分享你的投资心得，帮助更多新手少走弯路。'
  },
  'R-D-T-E+': {
    emoji: '🧘',
    title: '佛系股东',
    subtitle: '保守 + 数据 + 短线 + 冷静',
    comment: '嘴上说长期持有，跌停时比谁都难受',
    advice: '试着把看盘时间减少一半，多出去走走。投资是为了更好的生活，别让 K 线图绑架你的情绪。'
  },
  'R-D-T+E-': {
    emoji: '💼',
    title: '稳健交易员',
    subtitle: '保守 + 数据 + 长线 + 情绪化',
    comment: '赚小钱的高手，亏大钱？不存在的',
    advice: '你的风险控制能力很强，可以考虑适当增加仓位，抓住更多机会。'
  },
  'R-D-T+E+': {
    emoji: '😰',
    title: '焦虑套利者',
    subtitle: '保守 + 数据 + 长线 + 冷静',
    comment: '每天都在卖飞和套牢之间反复横跳',
    advice: '建立一个明确的交易计划，严格执行止盈止损。别让情绪左右你的决策。'
  },
  // D+ 直觉派
  'R-D+E-': {
    emoji: '🦅',
    title: '独狼猎手',
    subtitle: '保守 + 直觉 + 短线 + 情绪化',
    comment: '不听消息不跟风，有自己的交易节奏',
    advice: '保持独立思考的同时，可以适当关注市场热点，找到两者的平衡点。'
  },
  'R-D+E+': {
    emoji: '🐿️',
    title: '松鼠型囤积者',
    subtitle: '保守 + 直觉 + 短线 + 冷静',
    comment: '听消息买股，然后囤着当传家宝',
    advice: '建立选股标准，不是每只股票都值得长期持有。定期清理持仓，去弱留强。'
  },
  'R-D+T+E-': {
    emoji: '📰',
    title: '消息灵通人士',
    subtitle: '保守 + 直觉 + 长线 + 情绪化',
    comment: '群里第一个转发利好消息的，也是第一个跑的',
    advice: '消息面可以作为参考，但别完全依赖。学会自己分析，形成独立判断。'
  },
  'R-D+T+E+': {
    emoji: '🌪️',
    title: '风中凌乱者',
    subtitle: '保守 + 直觉 + 长线 + 冷静',
    comment: '今天信这个明天信那个，账户像坐过山车',
    advice: '专注 1-2 个你熟悉的领域，深耕细作。贪多嚼不烂，少即是多。'
  },
  // R+ 激进派
  // D- 数据党
  'R+D-T-E-': {
    emoji: '🎰',
    title: '理性赌徒',
    subtitle: '激进 + 数据 + 短线 + 情绪化',
    comment: '敢梭哈还能睡得着，你是真·大心脏',
    advice: '你的风险承受能力强，但建议分散投资，避免单一个股黑天鹅。'
  },
  'R+D-T-E+': {
    emoji: '🤖',
    title: '人形量化机器',
    subtitle: '激进 + 数据 + 短线 + 冷静',
    comment: '没有感情的交易执行器，建议送去当 AI 训练数据',
    advice: '你的理性和执行力很强，可以考虑学习量化交易，把策略系统化。'
  },
  'R+D-T+E-': {
    emoji: '📉',
    title: '数据型韭菜',
    subtitle: '激进 + 数据 + 长线 + 情绪化',
    comment: '分析得头头是道，操作得一塌糊涂',
    advice: '知行合一是最难的。把分析写成交易计划，严格执行，别让情绪干扰。'
  },
  'R+D-T+E+': {
    emoji: '🎯',
    title: '精准狙击手',
    subtitle: '激进 + 数据 + 长线 + 冷静',
    comment: '研究透了再下手，下手了就跑，绝不留恋',
    advice: '你的策略很成熟，保持纪律性。可以考虑带带新手，教学相长。'
  },
  // D+ 直觉派
  'R+D+T-E-': {
    emoji: '⚡',
    title: '短线收割机',
    subtitle: '激进 + 直觉 + 短线 + 情绪化',
    comment: '今天买明天卖，券商最爱你的手续费',
    advice: '你的短线操作能力不错，但注意交易成本。可以考虑降低频率，提高单笔收益。'
  },
  'R+D+T-E+': {
    emoji: '🔥',
    title: '追涨杀跌王',
    subtitle: '激进 + 直觉 + 短线 + 冷静',
    comment: '高位接盘·低位割肉·循环往复·永不言弃',
    advice: '强制自己每笔交易前写下来理由，一周后复盘。你会发现很多交易根本没必要做。'
  },
  'R+D+T+E-': {
    emoji: '🎢',
    title: '韭菜中的战斗机',
    subtitle: '激进 + 直觉 + 长线 + 情绪化',
    comment: '你的交易记录可以拍成纪录片《如何快速亏钱》',
    advice: '先模拟盘练习 3 个月，建立自己的交易系统后再实盘。记住：活着才有翻盘机会。'
  },
  'R+D+T+E+': {
    emoji: '💣',
    title: '爆仓预备役',
    subtitle: '激进 + 直觉 + 长线 + 冷静',
    comment: '杠杆加满·全仓进出·心态爆炸·周而复始',
    advice: '立刻停止杠杆交易！先用小资金练习，证明能稳定盈利再说。活着最重要。'
  }
};

// 状态管理
let currentQuestion = 0;
let answers = new Array(20).fill(null);

// DOM 元素
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentNumEl = document.getElementById('current-num');
const progressPercentEl = document.getElementById('progress-percent');
const progressFill = document.getElementById('progress-fill');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

// 初始化
startBtn.addEventListener('click', startQuiz);
prevBtn.addEventListener('click', prevQuestion);
nextBtn.addEventListener('click', nextQuestion);
document.getElementById('restart-btn').addEventListener('click', restartQuiz);
document.getElementById('share-btn').addEventListener('click', shareResult);

// 开始测试
function startQuiz() {
  startScreen.classList.remove('active');
  quizScreen.classList.add('active');
  renderQuestion();
}

// 渲染题目
function renderQuestion() {
  const q = questions[currentQuestion];
  currentNumEl.textContent = currentQuestion + 1;
  progressPercentEl.textContent = `${Math.round((currentQuestion / 20) * 100)}%`;
  progressFill.style.width = `${((currentQuestion + 1) / 20) * 100}%`;
  
  questionText.textContent = `${q.id}. ${q.text}`;
  
  optionsContainer.innerHTML = '';
  ['A', 'B', 'C'].forEach((label, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    if (answers[currentQuestion] === idx) {
      btn.classList.add('selected');
    }
    btn.textContent = `${label} ${q.options[idx].text}`;
    btn.onclick = () => selectOption(idx);
    optionsContainer.appendChild(btn);
  });
  
  prevBtn.disabled = currentQuestion === 0;
  nextBtn.disabled = answers[currentQuestion] === null;
}

// 选择选项
function selectOption(idx) {
  answers[currentQuestion] = idx;
  renderQuestion();
}

// 上一题
function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
}

// 下一题
function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    calculateResult();
  }
}

// 计算结果
function calculateResult() {
  const scores = { R: 0, D: 0, T: 0, E: 0 };
  
  questions.forEach((q, idx) => {
    const answer = answers[idx];
    if (answer !== null) {
      scores[q.dimension] += q.options[answer].score;
    }
  });
  
  console.log('维度得分:', scores);
  
  // 确定类型代码
  const typeCode = `R${scores.R >= 0 ? '+' : '-'}D${scores.D >= 0 ? '+' : '-'}T${scores.T >= 0 ? '+' : '-'}E${scores.E >= 0 ? '+' : '-'}`;
  console.log('类型代码:', typeCode);
  console.log('可用类型:', Object.keys(resultTypes));
  
  const result = resultTypes[typeCode];
  
  if (!result) {
    console.error('找不到匹配的类型！typeCode:', typeCode);
    alert('计算出错，类型代码：' + typeCode + '\n请检查控制台日志');
    return;
  }
  
  // 显示结果
  showResult(result, scores);
}

// 显示结果
function showResult(result, scores) {
  quizScreen.classList.remove('active');
  resultScreen.classList.add('active');
  
  document.getElementById('result-emoji').textContent = result.emoji;
  document.getElementById('result-title').textContent = result.title;
  document.getElementById('result-subtitle').textContent = result.subtitle;
  document.getElementById('result-comment').textContent = result.comment;
  document.getElementById('result-advice').textContent = result.advice;
  
  // 渲染维度条
  const dimensionBars = document.getElementById('dimension-bars');
  const dimensions = [
    { key: 'R', label: '风险偏好', negative: '🐢保守', positive: '🚀激进' },
    { key: 'D', label: '决策风格', negative: '📊数据', positive: '🔮直觉' },
    { key: 'T', label: '持仓周期', negative: '⚡短线', positive: '🌲长线' },
    { key: 'E', label: '情绪控制', negative: '😱情绪', positive: '🤖冷静' }
  ];
  
  dimensionBars.innerHTML = '';
  dimensions.forEach(dim => {
    const score = scores[dim.key];
    const percent = ((score + 5) / 10) * 100; // -5~5 → 0~100%
    const isPositive = score >= 0;
    const color = isPositive ? '#667eea' : '#764ba2';
    const label = score < 0 ? dim.negative : (score > 0 ? dim.positive : '⚖️平衡');
    
    dimensionBars.innerHTML += `
      <div class="dimension-item">
        <span class="dimension-label">${dim.label}</span>
        <div class="dimension-bar-bg">
          <div class="dimension-bar-fill" style="width: ${percent}%; background: ${color}"></div>
        </div>
        <span class="dimension-value">${label}</span>
      </div>
    `;
  });
}

// 重新测试
function restartQuiz() {
  currentQuestion = 0;
  answers = new Array(20).fill(null);
  resultScreen.classList.remove('active');
  startScreen.classList.add('active');
}

// 分享结果
function shareResult() {
  const title = document.getElementById('result-title').textContent;
  const text = `我是${title}型股民，你呢？来测测→`;
  
  if (navigator.share) {
    navigator.share({
      title: '股票市场角色测试',
      text: text,
      url: window.location.href
    });
  } else {
    // 复制链接
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('链接已复制！');
    });
  }
}
