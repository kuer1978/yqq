import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronRight, Droplets, Leaf, Activity, 
  Cpu, ShieldCheck, Award, Beaker, Zap, BarChart3, 
  Thermometer, CheckCircle2, FlaskConical, Globe, PhoneCall, Send, FileText
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('water');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(''); // 'business' or 'paper'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const navItems = [
    { name: '核心科技', href: '#technology' },
    { name: '健康生活', href: '#products' },
    { name: '智慧农业', href: '#agriculture' },
    { name: '大咖说氢', href: '#endorsement' },
    { name: '关于我们', href: '#footer' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden scroll-smooth">
      {/* 导航栏 - 玻璃拟态 */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 group cursor-pointer">
  {/* 替换原来的渐变背景+Droplets图标为图片logo */}
  <img 
    src="./companylogo.png"  // 根据你图片的实际路径调整
    alt="怡氢泉" 
    className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
  />
  {/* 如果logo图片已包含公司名称文字，可以保留或删除下面的文字部分 */}
  <div className="flex flex-col">
    <span className={`text-xl font-bold tracking-tighter leading-none ${isScrolled ? 'text-slate-800' : 'text-white'}`}>怡氢泉</span>
    <span className="text-[10px] uppercase tracking-[0.2em] text-blue-500 font-medium">Yearn-Spring</span>
  </div>
</a>          
          <div className="hidden lg:flex space-x-8 text-[13px] font-semibold uppercase tracking-widest">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className={`${isScrolled ? 'text-slate-600' : 'text-white/80'} hover:text-blue-500 transition-colors relative group`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className={`hidden sm:block text-sm font-bold ${isScrolled ? 'text-slate-600' : 'text-white'} hover:text-blue-500 transition-colors uppercase`}>EN</button>
            <button 
              onClick={() => openModal('business')}
              className="bg-blue-600 text-white px-7 py-2.5 rounded-full text-sm font-bold hover:bg-blue-500 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/20"
            >
              商务合作
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-blue-500">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl animate-fade-in-down">
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-600 font-bold text-lg border-b border-slate-50 pb-2"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0A192F]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/40 via-slate-900 to-slate-900"></div>
          {/* 动态氢分子背景 */}
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-blue-400/10 rounded-full blur-xl animate-pulse"
              style={{
                width: Math.random() * 300 + 50 + 'px',
                height: Math.random() * 300 + 50 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-[0.2em] mb-8 uppercase">
            <Zap className="w-3 h-3" />
            <span>Advanced Hydrogen Bio-Technology</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-tight">
            让生命不再<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">“生锈”</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light mb-12 leading-relaxed">
            氢是宇宙中最小、最轻、最强的选择性抗氧化分子。<br/>
            我们利用物理学路径，精准捕捉自由基，重塑细胞原始活力。
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
            <a href="#products" className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-500 transition-all shadow-2xl shadow-blue-600/30 flex items-center justify-center group">
              探索健康方案 <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#agriculture" className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center">
              了解氢农业
            </a>
          </div>
        </div>
      </section>

      {/* 叙事模块 */}
      <section id="narrative" className="py-32 px-6 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">氧化应激：<br/><span className="text-blue-600">一切衰老的根源</span></h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                人体代谢产生的“毒性自由基”如同铁锈一般，不断攻击DNA、蛋白质和脂质。怡氢泉通过氢分子中和自由基，在“生锈”前进行深度维护。
              </p>
              <div className="space-y-4">
                <div className="p-6 rounded-2xl border border-blue-100 bg-blue-50/30 flex items-start space-x-4">
                  <CheckCircle2 className="text-blue-500 w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-lg block mb-1">主动健康</span>
                    <p className="text-slate-500 text-sm">通过氢分子选择性抗氧化，精准中和自由基。</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-xl">
                <Activity className="w-10 h-10 text-blue-400 mb-4" />
                <div className="text-8xl font-bold mb-1">60+</div>
                <div className="text-slate-400 text-[30px] uppercase tracking-wider">疾病有效性研究</div>
              </div>
              <div className="bg-blue-600 p-8 rounded-[2.5rem] text-white shadow-xl mt-12">
                <ShieldCheck className="w-10 h-10 text-white mb-4" />
                <div className="text-6xl font-bold mb-1">100%</div>
                <div className="text-blue-100 text-[30px] uppercase tracking-wider">生物安全性</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 技术解构 */}
      <section id="technology" className="py-32 px-6 bg-slate-900 text-white scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 italic !text-white">SCVF 强对流涡流场技术</h2>
            <p className="text-slate-400 text-lg">物理学路径改写气液溶解极限，制造“高浓度、长效、超微”氢水。</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "135nm 极限粒径", desc: "气泡越小，渗透力越强，直达线粒体。", icon: <Cpu className="text-blue-400" />, stat: "10^9 个/ml" },
              { title: "3.48ppm 超饱和浓度", desc: "远超市面普通标准，确保氢分子摄入足量。", icon: <Droplets className="text-cyan-400" />, stat: "行业领先标准" },
              { title: "长效稳定性", desc: "专利结构确保气泡在水中具备数周的长效停留。", icon: <Activity className="text-emerald-400" />, stat: "高生物利用率" }
            ].map((tech, i) => (
              <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 transition-all group">
                <div className="mb-6">{tech.icon}</div>
                <div className="text-xs font-mono text-blue-400 mb-2">{tech.stat}</div>
                <h3 className="text-2xl font-bold mb-3">{tech.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 核心产品 & 智慧农业 */}
      <section id="products" className="py-32 px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-blue-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Product Ecosystem</span>
              <h2 className="text-4xl font-bold text-slate-800 leading-tight">覆盖全场景的<br/><span className="text-blue-600">氢分子应用系统</span></h2>
            </div>
            <div className="flex bg-slate-100 p-1.5 rounded-2xl">
              {[
                { id: 'water', label: '健康饮水', icon: <Droplets className="w-4" /> },
                { id: 'bath', label: '温热养生', icon: <Thermometer className="w-4" /> },
                { id: 'agri', label: '智慧农业', icon: <Leaf className="w-4" /> }
              ].map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === tab.id ? 'bg-white shadow-md text-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
                >
                  {tab.icon} <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center" id="agriculture">
          <div className="bg-slate-200 aspect-square rounded-[3.5rem] overflow-hidden shadow-inner flex items-center justify-center">
  {activeTab === 'water' && (
    <img 
      src="./gold.png" 
      alt="水素生活袋装水" 
      className="w-full h-full object-cover"
    />
  )}
  {activeTab === 'bath' && (
    <img 
      src="./hydrogenbath.png" 
      alt="智能氢浴机" 
      className="w-full h-full object-cover"
    />
  )}
  {activeTab === 'agri' && (
    <img 
      src="./100T.jpg" 
      alt="氢水灌溉农业系统" 
      className="w-full h-full object-cover"
    />
  )}
</div>
            <div className="space-y-8">
              {activeTab === 'water' && (
                <>
                  <h3 className="text-3xl font-bold">水素生活 · 含氢饮用水</h3>
                  <p className="text-slate-500 text-lg leading-relaxed">Monde Selection 金奖品质，采用物理溶氢技术，中科院检测，让每一口水都成为身体的“除锈剂”。</p>
                  <div className="grid grid-cols-2 gap-4">
                    {["核心溶氢锁氢专利", "铝箔高阻隔包装"].map(t => <div key={t} className="bg-blue-50 p-4 rounded-xl font-bold text-blue-700 text-center">{t}</div>)}
                  </div>
                </>
              )}
              {activeTab === 'bath' && (
                <>
                  <h3 className="text-3xl font-bold">智能氢浴系统</h3>
                  <p className="text-slate-500 text-lg leading-relaxed">20分钟提升核心体温，唤醒免疫系统。通过皮下吸收，让自愈力飞跃提升。</p>
                  <div className="bg-blue-600 p-6 rounded-2xl text-white">
                    <div className="text-6xl font-bold mb-1">1℃，5~6 倍</div>
                    <div className="text-xs uppercase opacity-70">免疫调节物质提升</div>
                  </div>
                </>
              )}
              {activeTab === 'agri' && (
                <>
                  <h3 className="text-3xl font-bold">物理路径智慧农业</h3>
                  <p className="text-slate-500 text-lg leading-relaxed">减量化肥25%，水稻增产8%-10%。利用氢/氧纳米气泡改善土壤菌群环境。</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                      <div className="text-2xl font-bold text-emerald-700">+18.8%</div>
                      <div className="text-[10px] text-emerald-600 uppercase font-bold">峰值产量提升</div>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                      <div className="text-2xl font-bold text-blue-700">-25%</div>
                      <div className="text-[10px] text-blue-600 uppercase font-bold">化肥减量</div>
                    </div>
                  </div>
                </>
              )}
              <button 
                onClick={() => openModal('business')}
                className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold flex items-center space-x-2 hover:bg-blue-600 transition-all"
              >
                <span>联系咨询方案</span> <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 学术背书 */}
      <section id="endorsement" className="py-32 px-6 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 italic">科学驱动 · 专家支持</h2>
            <p className="text-slate-500">深耕氢医学临床与超细气泡物理研究。</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { n: "钟南山", r: "中国工程院院士", q: "氢分子有较强的抗氧化作用，主要针对慢性疾病，理念是对因治疗，不是对症治疗。" },
              { n: "丁文江", r: "中国工程院院士", q: "氢科技是未来科技进步的大方向之一。" },
              { n: "骆肖群", r: "皮肤、免疫学家", q: "氢分子医学在皮肤科领域有很多神奇的效果。" },              
              { n: "胡钧", r: "纳米气泡物理学家", q: "界面物理、纳米气泡将影响深远。" }
            ].map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 text-center group">
                <div className="w-20 h-20 bg-slate-100 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="text-slate-400 group-hover:text-blue-500" />
                </div>
                <h4 className="font-bold text-lg">{s.n}</h4>
                <div className="text-blue-600 text-[10px] font-bold uppercase mb-4 tracking-widest">{s.r}</div>
                <p className="text-slate-400 text-xs italic">"{s.q}"</p>
              </div>
            ))}
          </div>
          <div className="mt-20 p-12 bg-slate-900 rounded-[3.5rem] text-white flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">《神奇的氢聊：临床实录》</h3>
              <p className="text-slate-400 text-sm">收录国内顶级医院氢医学临床实践成果。</p>
            </div>
            <button 
              onClick={() => openModal('paper')}
              className="mt-6 md:mt-0 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-500 hover:text-white transition-all"
            >
              申请索取视频介绍/白皮书
            </button>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer id="footer" className="bg-white border-t border-slate-100 pt-24 pb-12 px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Droplets className="text-blue-600 w-6 h-6" />
              <span className="text-xl font-bold tracking-tighter">怡氢泉</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">氢分子生物科技领军企业，致力于推广主动健康理念与可持续农业。</p>
          </div>
          <div>
             <h5 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-6">核心产业</h5>
             <ul className="text-sm space-y-3 text-slate-600">
               <li>氢健康包装饮用水</li>
               <li>智能氢浴机系统</li>
               <li>微纳米气泡农业装备</li>
             </ul>
          </div>
          <div>
             <h5 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-6">联系详情</h5>
             <ul className="text-sm space-y-3 text-slate-600">
               <li>181-1642-1859</li>
               <li>yiqingquan@likeh2.com</li>
               <li>上海市闵行区兴梅路579弄B1栋601shi</li>
             </ul>
          </div>
          <div className="bg-slate-50 p-6 rounded-3xl">
            <h5 className="font-bold text-xs uppercase tracking-widest text-slate-800 mb-4">关注动态</h5>
            <div className="aspect-square bg-slate-200 rounded-xl overflow-hidden">
              <img
                src="wechat-qr.jpg"
                alt="微信公众号二维码"
                classname="w-full h-full object-over"
              />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
          <p>© 2025 上海怡氢泉健康科技有限公司 版权所有</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#">隐私条款</a> <a href="#">法律声明</a>
          </div>
        </div>
      </footer>

      {/* 模态框 - 有效性交互 */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
          <div className="relative bg-white w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl animate-scale-in">
            <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900"><X /></button>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                {modalType === 'business' ? <PhoneCall /> : <FileText />}
              </div>
              <h3 className="text-2xl font-bold mb-4">{modalType === 'business' ? '开启商务合作' : '索取学术白皮书'}</h3>
              <p className="text-slate-500 mb-8 text-sm">
                {modalType === 'business' ? '请留下您的联系方式，我们的健康科技专家将在24小时内为您提供全案咨询。' : '资料包含最新的临床数据与农业实验报告。'}
              </p>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
                <input type="text" placeholder="您的姓名" className="w-full bg-slate-50 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-500 transition-all outline-none" required />
                <input type="tel" placeholder="联系电话" className="w-full bg-slate-50 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-500 transition-all outline-none" required />
                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/20">
                  <Send className="w-4 h-4" /> <span>立即提交</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
