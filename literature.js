// 连续流固定床加氢 · 每日文献推送（每日 10:00 自动化检索并覆写）
// window.LIT: 数组，按日期倒序；每天 2 篇高质量文献，链接均经检索确认可打开。
window.LIT = [
  {
    date: "2026-08-20",
    note: "每日自动推送 · 连续流固定床加氢方向高质量文献（PubMed 检索，链接均经核验可打开）",
    articles: [
      {
        id: "pmid-39064923",
        title: "Catalytic Performance of CuZnAl Hydrotalcite-Derived Materials in the Continuous-Flow Chemoselective Hydrogenation of 2-Methyl-2-pentanal toward Fine Chemicals and Pharmaceutical Intermediates",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/39064923/",
        doi: "https://doi.org/10.3390/molecules29143345",
        journal: "Molecules (2024), 29(14), 3345, open access (PMC11279871)",
        verified: true,
        verifiedLinkType: "pubmed",
        verifiedAt: "2026-08-20",
        highlights: "考察三种不同 CuZnAl 摩尔比的水滑石衍生（混合氧化物）材料，在液相连续流反应器中用于 2-甲基-2-戊烯醛（MPEA）的化学选择性加氢。系统表征（ICP-OES、TPR、in situ XRD、XPS、NH3/CO2-TPD、TEM）贯穿催化剂各阶段；活性与 Cu0/Cu+ 比例相关，可借温度/压力调控选择性：≤338 K 时所有催化剂对镇静药物前体 2-甲基戊醛（MPAA）保持 100% 选择性（低转化），而高温高压（378 K、6×10^6 Pa）下另一目标产物、香料中间体 2-甲基-2-戊烯-1-醇（MPEO）选择性显著升至 54%（对应 60% 底物转化），机理联系 Cu+ 表面优势、氢溢流与体系酸碱性质。文中给出 358 K/4×10^6 Pa 下 6 h 长期稳定性测试。发表于 OA 期刊 Molecules，非贵金属、水滑石衍生、连续流、化学选择性齐备，贴合本平台催化剂+选择性+放大的主线。",
        shortcomings: "连续流长期测试仅 6 h，未给出数十/数百小时级失活曲线，积碳与 Cu 烧结/流失无定量数据，催化剂寿命与再生未验证；未提供 WHSV/空速、床层压降、绝热温升与放大传热/传质判据（无 Weisz-Prater、Mears 内外扩散消除论证）；底物仅为 2-甲基-2-戊烯醛单一模型底物，多官能团竞争加氢与真实复配体系的普适性未展开；反应压力达 6×10^6 Pa（约 60 bar）仍偏高，且 MPEO 54% 选择性对应 60% 转化意味着整体收率受限，距工业高收率目标尚远；水滑石前驱体制备与批间重现性、规模化成本未评估。",
        oneliner: "用三种 CuZnAl 摩尔比的水滑石衍生混合氧化物在液相连续流反应器中实现 2-甲基-2-戊烯醛的化学选择性加氢：≤338 K 时 100% 选择性生成镇静药前体 2-甲基戊醛，378 K/60 bar 下把香料中间体 2-甲基-2-戊烯-1-醇选择性调至 54%，以 Cu0/Cu+ 比例与氢溢流/酸碱性质调控选择性，为非贵金属连续流加氢催化剂的构效-选择性协同提供可直接借鉴的依据。",
        keywords: ["连续流", "固定床", "加氢", "化学选择性", "水滑石", "铜锌铝催化剂", "精细化工", "药物中间体"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流 化学选择性加氢 水滑石 CuZnAl 2-甲基-2-戊烯醛 药物中间体")
      },
      {
        id: "pmid-39322621",
        title: "Stable and Versatile Pd Precursors for the Preparation of Robust Pd Catalysts Under Continuous-Flow",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/39322621/",
        doi: "https://doi.org/10.1002/cssc.202401859",
        journal: "ChemSusChem (2025), 18(4), e202401859 (Wiley)",
        verified: true,
        verifiedLinkType: "pubmed",
        verifiedAt: "2026-08-20",
        highlights: "开发了一种空气稳定、可高效将细分散 Pd 金属负载到载体上的新型 Pd 前驱体（Pd-80），由四（三苯基膦）钯经热促进有氧氧化制备，并用 NMR、SEM、XPS、溶剂弛豫 NMR、DLS 系统表征其物理化学性质。以 Pd-80 与堇青石（cordierite）粉末室温氯仿中搅拌即得 Pd/堇青石催化剂，可在连续流加氢中氢化炔烃、叠氮、硝基、烯烃、Cbz/Bn 保护基、芳香酮、环氧苯乙烯等多种可还原官能团；硝基苯衍生物连续流加氢生成相应苯胺时，活性维持超过 250 h、TON 高达 61,090。直接针对连续流多相催化中 Pd 易浸出/失活的痛点，给出空气稳定前驱体→简易固载→长期稳定的完整链条，多孔陶瓷堇青石载体也利于工程化装填。",
        shortcomings: "虽给出 250 h 连续运行与 TON 61,090，但缺该运行下的逐时转化/选择性曲线、Pd 浸出量定量 ICP 分析以及床层压降演化；官能团普适性以间歇/连续混合展示，连续流下的底物谱与空速（WHSV）定量、放大传热/传质数据未系统给出；堇青石负载量、Pd 颗粒尺寸分布与反应级数/动力学未提供；以氯仿为分散介质、室温搅拌浸渍的工艺在规模化与溶剂安全（氯代烃）上存在成本与环保考量；未与固定床柱床压降、工业放大倍数挂钩。",
        oneliner: "通过开发空气稳定的新型 Pd 前驱体（Pd-80）在室温下简易固载到堇青石，构建出可在连续流加氢中稳定氢化炔/叠氮/硝基/烯烃/保护基等多类官能团、并保持 >250 h 活性（TON 61,090）的 Pd/堇青石催化剂，以稳定前驱体+易固载策略破解连续流多相催化中 Pd 易失活/浸出的工程难题。",
        keywords: ["连续流", "固定床", "加氢", "钯催化剂", "催化剂前驱体", "堇青石载体", "催化剂稳定性", "选择性"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流 加氢 钯催化剂 前驱体 堇青石 催化剂稳定性")
      }
    ]
  },
  {
    date: "2026-08-19",
    note: "每日自动推送 · 连续流固定床加氢方向高质量文献（PubMed 检索，链接均经核验可打开）",
    articles: [
      {
        id: "pmid-41743313",
        title: "Stabilizing Pd Catalysts for Liquid-Phase Hydrogenation of N-Heterocyclic Hydrogen Carriers through Zeolite Encapsulation",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/41743313/",
        doi: "https://doi.org/10.1021/acscatal.5c08818",
        journal: "ACS Catalysis (2026), 16(4), 3097-3104, open access (PMC12930350)",
        verified: true,
        verifiedLinkType: "pubmed",
        verifiedAt: "2026-08-19",
        highlights: "将 Pd 纳米颗粒封装于大孔沸石（尤其是 Pd/Beta）中，在连续流反应器里实现 N-甲基吲哚（N-MID，一种 N-杂环氢载体）的液相加氢；对照 Pd/Al2O3、Pd/SiO2 在反应过程中明显烧结、粒径长大，Pd/Beta 能把 Pd 颗粒稳定维持在 <2 nm，机理上归结为沸石孔腔抑制了 N-MID 对 Pd 的螯合与迁移。流反应器工况为 1 wt% N-MID/十二烷、35 bar H2、373 K、1.8 mL/h，催化剂还可经焙烧+还原再生恢复活性。发表于催化顶刊 ACS Catal，直接针对连续流液相加氢中金属纳米颗粒烧结失活这一核心工程痛点。",
        shortcomings: "研究对象是 N-甲基吲哚这类氢载体的吸/脱氢循环，并非典型工业加氢产物合成，工程价值主要体现在催化剂抗烧结与稳定性机理层面；流反应器实验采用较低浓度（1 wt%）底物、35 bar 高压，未给出高时空收率（WHSV）下的产能数据、床层压降与径向温度分布；缺少本征动力学模型与放大传热/传质判据；仅以 N-MID 单一模型底物验证，对其他含氮杂环（如喹啉、吲哚）及真实油品的普适性未展开；沸石封装对孔道内传质扩散的限制未量化。",
        oneliner: "将 Pd 纳米颗粒封装于大孔沸石（Pd/Beta）中，在连续流反应器实现 N-甲基吲哚液相加氢时把 Pd 颗粒稳定维持在 <2 nm、抑制烧结失活（对照 Pd/Al2O3、Pd/SiO2 明显长大），以沸石孔腔限域解决连续流液相加氢中金属催化剂烧结这一核心工程难题。",
        keywords: ["固定床", "连续流", "加氢", "钯催化剂", "沸石封装", "抗烧结", "催化剂稳定性", "氢载体"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流 加氢 钯催化剂 沸石封装 抗烧结 固定床")
      },
      {
        id: "pmid-41306011",
        title: "Effective and Selective Hydrogenation of Methyl Acrylate to Methyl Propionate on Single-Atom Nickel Catalyst",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/41306011/",
        doi: "https://doi.org/10.1002/chem.202502973",
        journal: "Chemistry (Weinheim) (2026), 32(26), e02973, open access (PMC13356342)",
        verified: true,
        verifiedLinkType: "pubmed",
        verifiedAt: "2026-08-19",
        highlights: "以 Ni 掺杂 ZIF-8 为前驱体、经热解构建具 Ni─N4 配位结构的单原子镍催化剂（Ni-SAC@CN），在固定床反应器中实现丙烯酸甲酯（MA）加氢制丙酸甲酯（MP）。用 HAADF-STEM、H2-TPR、XRD、XAFS 系统表征并优化出最佳 Ni0.1-SAC@CN；在 80 °C、1.0 MPa、n(H2)/n(MA)=5 条件下 TOF 高达 200.8 h-1、选择性 100%。最契合本平台的是：文章专门考察了空速 WHSV 对活性的影响，并给出内/外扩散消除判据、H2 与 MA 反应级数、Arrhenius 活化能等本征动力学，原位 IR 揭示机理。非贵金属单原子、固定床、选择性+动力学齐备，工程参考价值高。OA（PMC13356342）。",
        shortcomings: "反应为单一 C=C 加氢（丙烯酸甲酯→丙酸甲酯）的模型反应，体系相对简单，未涉及多官能团竞争加氢、含氮/含硫底物的选择性调控与中毒；固定床长期稳定性（数百小时失活曲线、单原子 Ni 流失/团聚）数据缺失；未给出床层压降、绝热温升与放大传热；单原子 Ni 的普遍性与大规模制备一致性（ZIF-8 前驱体成本与批间重现）需评估；虽已测 WHSV，但未与工业实际产能（如千吨级）做衔接核算。",
        oneliner: "用 Ni 掺杂 ZIF-8 热解构建 Ni─N4 单原子镍催化剂（Ni-SAC@CN），在固定床反应器以 100% 选择性、TOF 200.8 h-1 实现丙烯酸甲酯加氢制丙酸甲酯，并系统给出 WHSV、内/外扩散消除、反应级数与活化能等本征动力学数据，为非贵金属单原子催化剂的固定床连续加氢及工艺放大提供可直接复用的动力学依据。",
        keywords: ["固定床", "连续流", "加氢", "单原子催化剂", "镍催化剂", "选择性", "动力学", "空速", "非贵金属"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流 固定床 单原子镍 选择性加氢 动力学 空速")
      }
    ]
  },
  {
    date: "2026-08-18",
    note: "每日自动推送 · 连续流固定床加氢方向高质量文献（PubMed 检索，链接均经核验可打开）",
    articles: [
      {
        id: "pmid-41983043",
        title: "Continuous-flow carbonyl hydrogenation under subatmospheric to atmospheric hydrogen pressure enabled by robust heterogeneous Pt-Fe catalysts",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/41983043/",
        doi: "https://doi.org/10.3762/bjoc.22.43",
        journal: "Beilstein Journal of Organic Chemistry (2026), 22, 43, open access (PMC13071934)",
        verified: true,
        verifiedLinkType: "pubmed",
        verifiedAt: "2026-08-18",
        highlights: "开发了一种负载于二甲基聚硅氧烷（dimethylpolysilane）/氧化铝复合载体上的双金属 Pt-Fe 纳米颗粒催化剂，并装填成连续流固定床柱用于羰基（酮/醛）加氢制醇。关键突破是可在室温、亚常压至常压氢气（subatmospheric to atmospheric H2）下稳定运行——酮类加氢通常需高温高压，本文把氢气分压降到亚常压仍保持活性，显著降低设备与能耗门槛；底物谱覆盖位阻很大的酮/醛，且金属种类组合与 Pt/Fe 比例强烈影响性能，给出了系统的金属比筛选。长期连续流运行验证了多相催化剂的高耐久性（无失活/浸出），契合工业连续化需求。发表于 OA 期刊 Beilstein J Org Chem。",
        shortcomings: "反应体系为有机合成中的羰基（酮/醛）加氢制醇，属于精细化工模型反应，并非高压 H2 气液固三相的工业加氢工况，传热与气液分布等反应器工程参数未系统展开；催化剂以复合有机-无机载体（二甲基硅油类）为主，其在有机溶剂中的溶胀、长期机械强度与床层压降演化数据有限；选择性只针对羰基→醇这一单一转化，未涉及更复杂的多官能团竞争加氢或含氮/含硫底物的中毒与选择性调控；缺少本征动力学、Weisz-Prater/Mears 传质判据及放大传热数据，从实验室柱床到工业放大的路径未验证。",
        oneliner: "用二甲基聚硅氧烷/氧化铝复合载体固载双金属 Pt-Fe 纳米颗粒装填连续流固定床，在室温、亚常压至常压氢气下实现酮/醛（含大位阻底物）的高效加氢并长期稳定运行，以低压氢气策略显著降低连续流羰基加氢的设备与能耗门槛，解决该反应长期依赖高温高压的痛点。",
        keywords: ["连续流", "固定床", "加氢", "羰基还原", "双金属催化剂", "铂铁", "低压氢气", "催化剂稳定性"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流 羰基加氢 Pt-Fe双金属催化剂 低压氢气 固定床")
      },
      {
        id: "pmid-41537008",
        title: "Furfural Valorization to γ-Valerolactone over Zr/Sn Zeolite-Supported Catalysts in a Liquid-Phase Continuous Flow Reactor",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/41537008/",
        doi: "https://doi.org/10.1021/acs.energyfuels.5c05628",
        journal: "Energy & Fuels (2025), DOI 10.1021/acs.energyfuels.5c05628, open access (PMC12797859)",
        verified: true,
        verifiedLinkType: "pubmed",
        verifiedAt: "2026-08-18",
        highlights: "首次在单一液相连续流反应器中考察 Sn 与 Zr 协同将呋喃甲醛（FU）级联转化为 γ-戊内酯（GVL）：采用脱铝 Y 沸石（HY）负载 Sn、Zr 的双金属催化剂，利用醇（2-丙醇）作为氢供体进行催化转移加氢（catalytic transfer hydrogenation），避免高压分子氢，更经济环保。Sn:Zr 原子比 1:1 时性能最佳，180 °C、停留时间 10 min、以 2-丙醇为氢源获得约 45% 的 GVL 收率；文章系统给出长期稳定性测试、失活分析，并开发了高效的催化剂再生协议——再生后多次循环转化与选择性接近新鲜催化剂（FU 转化率 >90%）。还用时空收率（space time yield）与文献连续流/间歇体系做了横向对比，工程参考价值高。OA（PMC12797859）。",
        shortcomings: "采用催化转移加氢（以 2-丙醇为氢供体）而非高压 H2 气相加氢，与工业高压加氢路线存在差异，氢源成本与副产丙酮的分离未充分讨论；GVL 收率约 45% 仍有较大提升空间，级联反应中副产物控制与全碳收率未给出；反应温度 180 °C、停留 10 min 属中等强度，未系统考察压降、径向温度分布与放大传热；仅以呋喃甲醛单一模型底物验证，对其他平台分子（如乙酰丙酸、糠醇）及真实生物质水解液的适用性未展开；沸石载体成本与规模化制备一致性也需评估。",
        oneliner: "用脱铝 Y 沸石负载 Sn/Zr 双金属催化剂在液相连续流反应器中以 2-丙醇为氢供体将呋喃甲醛级联转移加氢为 γ-戊内酯（约 45% 收率），并配套长期稳定性测试与再生协议实现多循环近新鲜催化性能，以连续流催化转移加氢同时解决高压氢风险与催化剂可再生利用两大难题。",
        keywords: ["连续流", "液相反应器", "催化转移加氢", "呋喃醛", "γ-戊内酯", "沸石载体", "双金属催化剂", "催化剂再生", "选择性"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流 呋喃醛 γ-戊内酯 催化转移加氢 沸石 催化剂再生")
      }
    ]
  },
  {
    date: "2026-08-05",
    note: "每日自动推送 · 连续流固定床加氢方向高质量文献（PubMed 检索，链接均经核验可打开）",
    articles: [
      {
        id: "pmid-41354632",
        title: "ZIF-67-Confined Pd Single-Atom Catalysts Implanted Into Polydopamine-Modified Bamboo Microchannels for Robust Continuous-Flow Hydrogenation",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/41354632/",
        doi: "https://doi.org/10.1002/advs.202513960",
        journal: "Advanced Science (2026), 13(11), e13960, open access (PMC12931216)",
        verified: true,
        verifiedLinkType: "pubmed",
        verifiedAt: "2026-08-05",
        highlights: "直接以天然竹材的维管束微通道作为结构化连续流反应器骨架：先用聚多巴胺（PDA）改性竹微通道并预锚定 Co2+ 晶种，再在流动条件下于通道内原位生长 ZIF-67，并以室温方法把 Pd 单原子在 ZIF-67 成核过程中限域稳定，形成 Pd@Z-P/b 催化微反应器。Pd 负载量低至 0.0014 wt.%，却因原子级分散的 Pd-N4 位点而显著优于负载量更高（0.0035 wt.%）的 Pd 纳米颗粒对照件：饱和浓度 4-硝基苯胺连续加氢 10 天保持 94.3% 转化率，克级亚甲基蓝（1.0 g/L）连续运行 5 天保持 97.5%，且在真实环境水样中性能稳定。XAFS 与 DFT 表明 Pd-N4 构型促进电子转移并优化氢结合能，是活性跃升的根源；文章还给出了再生性能评估。发表于 Adv Sci，把「贵金属极限减量 + 天然结构化载体 + 单原子限域」三者整合进连续流加氢反应器设计。",
        shortcomings: "目标反应集中在硝基芳烃/染料的水相还原脱色（偏环境修复场景），并非高压 H2 气液固三相的工业加氢工艺，反应压力、温度、气液分布等关键反应器参数未按化工加氢工况考察；竹材作为载体的耐温、耐溶剂与长期机械/化学稳定性存疑，难以直接迁移到有机溶剂高压体系；通道尺寸与床层结构受天然竹材固有形貌限制，放大时难以精确设计与复制，压降和放大倍数数据缺失；超低 Pd 负载下的活性位密度上限也限制了体积生产强度。",
        oneliner: "用聚多巴胺改性竹微通道原位生长 ZIF-67 并室温限域 Pd 单原子，构建超低载量（0.0014 wt.%）的连续流加氢催化微反应器，实现饱和 4-硝基苯胺 10 天 94.3% 转化、克级亚甲基蓝 5 天 97.5% 转化，以天然结构化载体加单原子限域同时解决贵金属用量与流动条件下催化剂稳定性两大难题。",
        keywords: ["连续流", "微反应器", "加氢", "单原子催化剂", "钯催化剂", "MOF", "结构化载体", "催化剂稳定性"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流加氢 单原子催化剂 微反应器 ZIF-67 竹微通道")
      },
      {
        id: "pmid-41983171",
        title: "Efficient selective hydrogenation of N,N-dimethylaniline in a continuous fixed-bed reactor over a Cu/Ni-Al2O3 catalyst",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/41983171/",
        doi: "https://doi.org/10.1039/d6ra01119e",
        journal: "RSC Advances (2026), DOI 10.1039/d6ra01119e, open access (PMC13075126)",
        verified: true,
        verifiedLinkType: "pubmed",
        verifiedAt: "2026-08-05",
        highlights: "制备了一系列不同 Cu/Ni 比的 Cu 改性 Ni-Al2O3 催化剂（xCu/Ni-Al2O3），用 BET、XRD、SEM、H2-TPR、H2-TPD、TG、原位 XPS 做了系统表征，并在连续固定床反应器中考察 N,N-二甲基苯胺（DMA）选择性加氢制 N,N-二甲基环己胺（DMCHA）。当 Cu/Ni 摩尔比为 0.1 时活性组分在 Al2O3 上高度分散，比表面积大、孔结构发达，氢脱附能力强、热稳定性提升；Ni 与 Cu 之间的协同电子相互作用同时改善了底物与 H2 的吸附活化，Cu 在 Ni 活性位附近的掺入有效调控了对目标产物的选择性（抑制苯环过度加氢与脱甲基副反应）。在 5 MPa H2、130 °C、LHSV 0.1 h-1、氢胺体积比 5500:1 的优化条件下，DMA 转化率 99.5%、DMCHA 选择性 97.6%，并给出了固定床稳定性测试。工艺参数（压力、温度、空速、氢胺比）逐一扫描，非贵金属体系、直接对标工业连续固定床加氢生产。",
        shortcomings: "空速极低（LHSV 仅 0.1 h-1）且氢胺体积比高达 5500:1，意味着单位催化剂产能偏低、氢气循环量巨大，工业经济性与能耗需重新核算；稳定性测试时长有限，未给出数百小时级失活曲线、积碳与 Ni 烧结/流失的定量分析；缺少本征动力学与传质判据（Weisz-Prater、Mears 等）判定是否存在内外扩散控制，也未提供床层压降、径向温度分布与放大传热数据；期刊为 RSC Advances，影响力弱于同方向的顶刊工作。",
        oneliner: "通过 Cu 修饰 Ni-Al2O3（Cu/Ni=0.1）利用 Cu-Ni 协同电子效应调控吸附与选择性，在连续固定床反应器中实现 N,N-二甲基苯胺加氢制 N,N-二甲基环己胺 99.5% 转化率与 97.6% 选择性，为芳胺加氢制脂环胺提供了非贵金属、可连续化的固定床工艺方案。",
        keywords: ["固定床", "连续流", "选择性加氢", "非贵金属催化剂", "铜镍双金属", "工艺优化", "空速", "芳胺加氢"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续固定床 选择性加氢 N,N-二甲基苯胺 铜镍催化剂")
      }
    ]
  },
  {
    date: "2026-08-04",
    note: "每日自动推送 · 连续流固定床加氢方向高质量文献（PubMed 检索，链接均经核验可打开）",
    articles: [
      {
        id: "pmid-41432202",
        title: "Unlocking the Continuous Flow Asymmetric Hydrogenation of Olefins Through the Development of a Non-Deactivating Immobilized Iridium Catalyst",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/41432202/",
        doi: "https://doi.org/10.1002/anie.202521508",
        journal: "Angewandte Chemie International Edition (2026), 65(6), e21508, open access (PMC12865244)",
        verified: true,
        verifiedLinkType: "pubmed",
        verifiedAt: "2026-08-04",
        highlights: "把 Ir-P,S 手性催化剂通过共价键固载到聚苯乙烯树脂上，且不增加合成步骤即可得到空气稳定的固载催化剂；固载后完全保留了均相 Ir 配合物的催化性能（ee 最高 99%）。装填成固定床用于烯烃的连续流不对称加氢，底物范围远超常规基准底物，可在低停留时间、远低于间歇釜的氢压下长时间连续产出高收率高对映选择性产物。最关键的是全程未观察到 Ir 失活或浸出，并给出了流动加氢后催化剂储存与再利用的简易实操流程。发表于 Angew Chem Int Ed，直击连续流不对称加氢长期无法工业化的痛点。",
        shortcomings: "载体为聚苯乙烯树脂，溶胀性与机械强度限制了可用溶剂体系和床层压降耐受，长周期高通量下的树脂形变与压降演化未充分给出；仍依赖贵金属 Ir 与手性配体，成本敏感；实验为实验室级柱床，缺少工业放大所需的传热、径向分布与放大倍数验证数据。",
        oneliner: "用一步共价固载法把 Ir-P,S 手性催化剂锚定在聚苯乙烯树脂上装填固定床，实现烯烃连续流不对称加氢在低压低停留时间下长期稳定产出（ee 达 99%）且无失活与金属浸出，解决了固载手性催化剂在连续流中易失活、易浸出而无法工业化的核心难题。",
        keywords: ["固定床", "连续流", "不对称加氢", "铱催化剂", "催化剂固载", "选择性", "金属浸出", "催化剂失活"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流 不对称加氢 固载 铱催化剂 固定床")
      },
      {
        id: "pmid-41757500",
        title: "Pd\u03b4+ Formation Induced by Electronic Metal-Support Interaction Enables Efficient Continuous-Flow Hydrogenation of Pyridine to Piperidine",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/41757500/",
        doi: "https://doi.org/10.1002/smll.202514352",
        journal: "Small (2026), 22(24), e14352, DOI 10.1002/smll.202514352 (Wiley)",
        verified: true,
        verifiedLinkType: "pubmed",
        verifiedAt: "2026-08-04",
        highlights: "用液相还原法制备 Pd/θ-Al2O3 催化剂，Pd 纳米颗粒在 θ-Al2O3 纳米片上均匀分散，用于吡啶连续流加氢制哌啶。表征证实 Pd 与 θ-Al2O3 间存在强电子金属-载体相互作用（EMSI），界面电子转移生成 Pd δ+ 物种，该电子调控的活性位点优化了吡啶吸附并促进哌啶脱附，因而显著提升活性并抵抗含氮化合物导致的中毒失活。在 150 °C、3 MPa、氢油比 300 的连续流条件下，吡啶近乎完全转化、哌啶选择性 >99%，25 个循环保持良好稳定性；DFT 计算佐证 EMSI 增强底物吸附、改善加氢动力学，底物谱宽、官能团兼容性好。",
        shortcomings: "反应条件仍偏苛刻（150 °C、3 MPa），能耗与设备压力等级要求较高；稳定性以 25 个循环表征，缺少数百小时级连续在线运行的失活曲线与积碳/烧结分析；床层压降、气液分布与放大传热等反应器工程数据未展开，且依赖贵金属 Pd，未讨论回收与经济性。",
        oneliner: "通过电子金属-载体相互作用在 Pd/θ-Al2O3 上构筑 Pd δ+ 活性位，在连续流固定床中实现吡啶近全转化、哌啶选择性 >99% 并稳定 25 个循环，以电子结构调控解决含氮芳烃加氢的氮中毒失活难题，为医药中间体哌啶的安全可放大连续制备提供方案。",
        keywords: ["固定床", "连续流", "加氢", "吡啶", "哌啶", "钯催化剂", "金属载体相互作用", "选择性", "抗中毒"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流加氢 吡啶 哌啶 钯催化剂 金属载体相互作用")
      }
    ]
  },
  {
    date: "2026-07-31",
    note: "每日自动推送 · 连续流固定床加氢方向高质量文献（PubMed 检索，链接均经核验可打开）",
    articles: [
      {
        id: "pmid-42464715",
        title: "Engineering Tandem Catalysis for Direct CO2-Enabled N-Methylaniline Synthesis With a Fixed-Bed Flow Reaction Process",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/42464715/",
        doi: "https://doi.org/10.1002/anie.3089595",
        journal: "Angewandte Chemie International Edition (2026), DOI 10.1002/anie.3089595",
        verified: true,
        verifiedLinkType: "pubmed",
        verifiedAt: "2026-07-31",
        highlights: "在连续固定床反应器（fixed-bed flow）中以 CuZnZrOx 催化剂，将硝基苯 + CO2 + H2 一步串联转化为 N-甲基苯胺；转化率达 99%、选择性 95%，稳定运行 >100 h。机理揭示 Cu+-Ov-Zn2-δ 界面是 CO2 加氢生成甲醛（CH2O*）的关键活性位，串联构型还带来本征热管理优势（每摩尔硝基苯回收 0.341 kg、1.5 MPa、201°C 蒸汽），较传统三步法显著节能。发表于化学顶级期刊 Angew Chem Int Ed。",
        shortcomings: "反应体系聚焦硝基苯模型底物与 CO2 加氢制 N-甲基苯胺这一特定路线，对其他含氮官能团（腈、肟）及更复杂多取代硝基芳烃的普适性与选择性尚未系统考察；固定床长期运行的压降、催化剂积碳/失活及放大传热仍需进一步验证。",
        oneliner: "用 CuZnZrOx 催化剂在连续固定床反应器中将硝基苯、CO2 与 H2 一步串联转化为 N-甲基苯胺，实现 99% 转化/95% 选择性并稳定运行超 100 h，以反应器级串联催化兼顾原子级活性位点与热管理，为连续流 CO2 增值提供方案。",
        keywords: ["固定床", "连续流", "加氢", "CO2利用", "串联催化", "选择性", "N-甲基苯胺", "热管理"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流 固定床 CO2 加氢 N-甲基苯胺 串联催化")
      },
      {
        id: "doi-10.1016-j.cej.2025.159265",
        title: "Design and kinetic optimization of a 3D-printed packed bed reactor for high-volume continuous hydrogenation of nitroaromatic compounds and simultaneous production of aromatic amines",
        pubmed: "https://doi.org/10.1016/j.cej.2025.159265",
        doi: "https://doi.org/10.1016/j.cej.2025.159265",
        journal: "Chemical Engineering Journal (2025), 505, 159265, DOI 10.1016/j.cej.2025.159265 (Elsevier)",
        verified: true,
        verifiedLinkType: "doi",
        verifiedAt: "2026-07-31",
        highlights: "设计 3D 打印填充床反应器（PBR）并集成铼（Re）基多相催化剂，用于硝基芳香化合物（NACs）的连续加氢；突破曲线显示 Re 催化剂可连续处理 4-硝基苯酚达 1200 床体积（BV）且无穿透。动力学建模给出 4-NP 拟一级速率常数 0.97 s-1（远高于硝基苯 0.11 s-1），优化后体积流速达 37 BV/min 实现完全转化，高通量可放大；直接对接废水修复与高值精细化学品的连续提取。",
        shortcomings: "催化剂以 Re 为主、体系主要验证 4-硝基苯酚与 2,4,6-三硝基苯酚等模型污染物，对工业复杂硝基芳烃混合物及多硝基化合物的扩散限制/选择性未充分展开；3D 打印床层的长期机械稳定性、催化剂再生与床层放大下的均一性仍需进一步研究。",
        oneliner: "通过 3D 打印填充床反应器集成铼基催化剂实现硝基芳香化合物的高通量连续加氢，单床可处理 1200 床体积无穿透、流速达 37 BV/min 完全转化，以结构化反应器与动力学优化提供可放大的连续加氢方案。",
        keywords: ["填充床", "连续流", "加氢", "硝基芳烃", "3D打印", "铼催化剂", "动力学", "放大"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流 3D打印 填充床 加氢 硝基芳烃")
      }
    ]
  },
  {
    date: "2026-07-29",
    note: "每日自动推送 · 连续流固定床加氢方向高质量文献（PubMed）",
    articles: [
      {
        id: "pmid-38783856",
        title: "Copper-Catalyzed Continuous-Flow Transfer Hydrogenation of Nitroarenes to Anilines: A Scalable and Reliable Protocol",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/38783856/",
        doi: "https://doi.org/10.1021/acs.oprd.3c00144",
        journal: "Organic Process Research & Development (2024), open access (PMC11110069)",
        verified: true,
        verifiedAt: "2026-07-29",
        highlights: "以 Celite 负载铜纳米颗粒（CuNPs/Celite）为固定床填料，在连续流填充床反应器（PBR）中实现硝基芳烃向苯胺的选择性转移加氢；无需高压氢气和贵金属，硝基苯转化率 >99%，可连续稳定运行长达 145 h。产物经固相萃取即可分离，E-factor 分析显示绿色高效。",
        shortcomings: "采用乙二醇/水合肼等氢供体进行转移加氢（非真实 H2 气相加氢），与工业高压加氢工艺路线存在差异；底物谱以模型硝基苯类为主，多硝基/稠环底物的适用性以及放大下的传热与压降未深入讨论。",
        oneliner: "用 Celite 负载铜纳米颗粒构建连续流固定床，以转移加氢方式实现硝基芳烃 >99% 转化并稳定运行 145 h，提供了无需高压氢气与贵金属的绿色放大方案。",
        keywords: ["固定床", "连续流", "转移加氢", "硝基芳烃", "铜催化剂", "选择性", "放大", "绿色化学"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流 转移加氢 硝基芳烃 固定床 铜催化剂")
      },
      {
        id: "doi-10.1039-D4RE00049H",
        title: "Novel TPMS carbon-based monolithic catalysts by three-dimensional printing for enhancement of nitrobenzene hydrogenation reaction",
        pubmed: "https://doi.org/10.1039/D4RE00049H",
        doi: "https://doi.org/10.1039/D4RE00049H",
        journal: "Reaction Chemistry & Engineering (2024), 9(7), 1816-1823, open access (RSC)",
        verified: true,
        verifiedAt: "2026-07-29",
        highlights: "采用数字光处理（DLP）3D 打印制备螺旋陀螺（gyroid, TPMS）碳基整体式催化剂，装入固定床微反应器用于硝基苯加氢；常温常压下转化率达 99%、选择性 98.2%，气液下行停留时间仅 0.83 min。整体式结构无死区、孔隙率高，高流速下传质优于颗粒催化剂。",
        shortcomings: "整体式催化剂以碳基为主、未负载高活性金属（主要靠碳本征活性或后续修饰），对更具挑战的选择性加氢普适性有限；12 mm 内径仍为实验室规模，工业放大下的床层均一性与压降仍需验证。",
        oneliner: "用 3D 打印 TPMS 碳基整体式催化剂构建固定床微反应器，在常温常压下实现硝基苯 99% 转化与 98.2% 选择性，以结构化催化剂改善高流速下的传质。",
        keywords: ["固定床", "连续流", "加氢", "硝基苯", "3D打印", "整体式催化剂", "传质", "选择性"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流 加氢 硝基苯 3D打印 整体式催化剂 固定床")
      }
    ]
  },
  {
    date: "2026-07-28",
    note: "每日自动推送 · 连续流固定床加氢方向高质量文献（PubMed）",
    articles: [
      {
        id: "pmid-38390498",
        title: "Enhancing continuous-flow reactions via compression-molding of solid catalysts and dilutants in packed-bed systems",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/38390498/",
        doi: "https://doi.org/10.1039/d3ra08088a",
        journal: "RSC Advances (2024), open access (PMC10882219)",
        verified: true,
        verifiedAt: "2026-07-28",
        highlights: "将 Pt-black 粉末与 SiO2 通过压片成型后填入固定床，显著抑制金属浸出；并在大尺寸柱上完成放大实验，保持优异收率。对连续流固定床的催化剂成型与装填工程有实用价值。",
        shortcomings: "以 Pt-black 为模型体系，未系统量化加氢转化率和选择性；成型对床层压降/传质的影响缺少 CFD 或实验压降数据的支撑。",
        oneliner: "用压片成型把粉体催化剂固化为固定床填料，解决连续流中催化剂流失问题，实现了可放大的连续反应。",
        keywords: ["固定床", "压片成型", "催化剂装填", "放大", "Pt", "连续流", "催化剂流失"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流 固定床 催化剂 压片成型 连续反应")
      },
      {
        id: "doi-10.3390-pr11041074",
        title: "Continuous-Flow Hydrogenation of Nitroaromatics in Microreactor with Mesoporous Pd@SBA-15",
        pubmed: "https://doi.org/10.3390/pr11041074",
        doi: "https://doi.org/10.3390/pr11041074",
        journal: "Processes (2023), open access (MDPI)",
        verified: true,
        verifiedAt: "2026-07-28",
        highlights: "介孔 Pd@SBA-15 装入微填充床（MPBR），硝基芳烃 1 分钟内转化率 99%；连续运行 24 h 活性几乎不衰减，解决了传统 Pd/C 易团聚失活的问题。",
        shortcomings: "仅在模型底物（硝基苯类）验证；Pd 负载量、>24 h 长期稳定性及工业放大下的床层压降与热点问题未充分讨论。",
        oneliner: "以介孔 Pd@SBA-15 为固定床催化剂实现硝基芳烃连续流加氢，1 分钟近完全转化且可长时间稳定运行。",
        keywords: ["硝基芳烃", "加氢", "Pd", "SBA-15", "微填充床", "微反应器", "选择性", "连续流", "稳定性"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流 加氢 硝基芳烃 Pd SBA-15 微反应器")
      }
    ]
  }
];
