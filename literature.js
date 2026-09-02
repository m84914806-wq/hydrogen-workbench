// 连续流固定床加氢 · 每日文献推送（每日 10:00 自动化检索并覆写）
// window.LIT: 数组，按日期倒序；每天 2 篇高质量文献，链接均经检索确认可打开。
window.LIT = [
  {
    date: "2026-09-02",
    note: "每日自动推送 · 连续流固定床加氢方向高质量文献（PubMed 检索，链接均经核验可打开）",
    articles: [
      {
        id: "pmid-40413195",
        title: "Boosting the activity in the liquid-phase hydrogenation of S-containing nitroarenes by dual-site Pt/CeO2 catalysts design",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/40413195/",
        doi: "https://doi.org/10.1038/s41467-025-59920-x",
        journal: "Nature Communications (2025), DOI 10.1038/s41467-025-59920-x, open access (PMC12103592)",
        verified: true,
        verifiedLinkType: "pubmed",
        verifiedAt: "2026-09-02",
        highlights: "直面液相硝基芳烃加氢的工业级痛点——底物自带硫基团（噻唑、苯并噻唑、噻吩）时负载金属纳米颗粒极易中毒失活。作者提出「双活性位」解耦策略：构建高缺陷 CeO2（富活性氧空位 Ov）负载 Pt 亚纳米团簇的 Pt/CeO2 催化剂，让硝基还原发生在载体的氧空位上、而金属 Pt 只承担 H2 解离并通过氢溢流（spillover）把 H 输送到 Ov 位点。由于硫基团的强化学吸附只封堵 Pt 表面、并不抑制 Ov 上的硝基活化，体系天然耐硫。该反常机理由表征、DFT 建模、动力学（NBT 与 H2 反应级数、表观活化能、KIE、H2-D2 交换）与系统中毒实验（poison/substrate=0.3:1，分别以 TZ/BTZ/TP 为毒物）交叉验证。最优 Pt/CeO2-300 反应速率 3.9 mmol·g_cat⁻¹·h⁻¹、5-氨基苯并噻唑选择性 >99%；最贴合本平台的是连续流固定床条件下（1.4 g 催化剂、5 mM 5-硝基苯并噻唑乙醇溶液、5.4 mL·h⁻¹、80 °C、2 MPa H2）连续在线 250 h，累计产出纯 5-氨基苯并噻唑 >145 kg·kg_Pt⁻¹——这是可直接换算为贵金属单耗的产能指标。还量化了 -NO2 基团对 Pt 表面可接近性与活化位点选择的定量关系（大共轭结构更倾向走氧空位路径）。发表于 Nature Communications，全文 OA。",
        shortcomings: "连续流长周期实验的空速极低：按 5 mM、5.4 mL·h⁻¹、催化剂 1.4 g 折算，进料速率约 0.027 mmol·h⁻¹（约 4.9 mg·h⁻¹），对应 WHSV 仅约 3.5×10⁻³ g_底物·g_cat⁻¹·h⁻¹，单位催化剂产能远低于工业要求，250 h 稳定性是在此极稀、极低负荷下取得，高浓度/高空速下的选择性与失活行为未验证；固定床未给出床层压降、径向温度分布、绝热温升与内外扩散消除判据（Weisz-Prater/Mears），动力学参数主要来自 10 mg 催化剂的间歇釜（3 mL 乙醇、80 °C、2 MPa）而非固定床本征测定；依赖贵金属 Pt，虽给出 145 kg·kg_Pt⁻¹ 但缺 Pt 浸出/团聚的 ICP 定量与再生协议；底物聚焦含硫硝基芳烃（5-硝基苯并噻唑为主）与若干模型硝基化合物，对含卤、含氮杂环及真实工业粗料的普适性与脱卤副反应未展开；高缺陷 CeO2 的氧空位浓度在长周期还原氛围下的演化与批间重现性、规模化制备一致性未评估。",
        oneliner: "通过在高缺陷 CeO2 上负载 Pt 亚纳米团簇构建「Pt 解离氢 + 氧空位活化硝基」的双活性位催化剂，把硝基还原从易被硫毒化的金属表面转移到载体氧空位、依靠氢溢流供氢，从而实现含硫硝基芳烃的耐硫液相加氢（速率 3.9 mmol·g_cat⁻¹·h⁻¹、选择性 >99%），并在连续流条件下连续运行 250 h 累计产出 >145 kg·kg_Pt⁻¹ 的 5-氨基苯并噻唑，为含硫底物加氢的抗中毒催化剂设计与贵金属单耗核算提供了机理级依据。",
        keywords: ["连续流", "固定床", "液相加氢", "选择性", "硝基芳烃", "铂催化剂", "氢溢流", "抗硫中毒", "动力学", "催化剂单耗"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流 液相加氢 含硫硝基芳烃 铂铈催化剂 氧空位 氢溢流 抗中毒 选择性")
      },
      {
        id: "pmid-41974786",
        title: "Alkaline-earth-promoted Pd-Ag/Al2O3 for selective acetylene hydrogenation: green-oil mitigation, ethylene selectivity, and implications for hydrogen spillover",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/41974786/",
        doi: "https://doi.org/10.1038/s41598-026-46044-5",
        journal: "Scientific Reports (2026), DOI 10.1038/s41598-026-46044-5, open access (PMC13269756)",
        verified: true,
        verifiedLinkType: "pubmed",
        verifiedAt: "2026-09-02",
        highlights: "针对乙烯装置尾端加氢脱除微量乙炔（保护 Ziegler-Natta 聚合催化剂）这一典型工业固定床工况，制备蛋壳型（eggshell）Pd-Ag/θ-Al2O3 球形催化剂（Pd 仅 0.03 wt%、Ag 0.13 wt%），并以 1 wt% 碱土金属（Mg、Ca、Sr）助剂抑制绿油（green oil）生成、提升乙烯选择性。工程价值集中在三点：其一，蛋壳型活性组分分布 + 球形 θ-Al2O3 载体是工业固定床装填的成熟形态，贵金属用量压到 0.03 wt% 量级，直接对应催化剂单耗核算；其二，固定床实测工况明确（10 bar、40–60 °C、H2 预还原），并给出乙炔转化率与乙烯选择性随 time-on-stream 的演化曲线，助剂催化剂全部达到 ≳96% 乙炔转化并同时提高乙烯选择性、降低积碳；其三，用 XRD、N2 物理吸附、H2-TPR、NH3/CO2-TPD、TPO、SEM-EDS、ICP-OES 建立完整构效关系——助剂稳定 θ-Al2O3 相、提高比表面与中孔率、增强金属-载体相互作用，反应后样品的 TPO 与 SEM 对比直接量化绿油/积碳抑制效果。全文 OA（PMC13269756）。",
        shortcomings: "反应为气相脱除微量乙炔的模型体系（乙烯精制），与本平台关注的含甲醇溶剂中低压液相选择性加氢差异较大；摘要与主图未给出 GHSV/WHSV、床层压降 ΔP、绝热温升与内外扩散消除判据（Weisz-Prater/Mears），难以直接接入本工作台的空速—时空收率—催化剂单耗核算链；time-on-stream 曲线时长有限，缺数百小时级失活曲线与 Pd/Ag 烧结、流失的 ICP 定量及再生协议；氢溢流机制作者本人明确标注为「基于间接证据的定性讨论、未直接验证」（Fig 8 亦注明 not directly verified），机理层面证据强度弱于同方向顶刊工作；转化率停在 ≳96% 而非近全转化，乙烯选择性仅给相对提升、缺绝对值与 C4/乙烷副产物的定量分布；仍依赖贵金属 Pd（虽超低载量）与 Ag，成本-性能权衡、蛋壳层厚度对内扩散的影响以及批间重现性未评估；期刊为 Scientific Reports，影响力弱于同方向顶刊。",
        oneliner: "用 1 wt% 碱土金属（Mg/Ca/Sr）助剂改性超低载量蛋壳型 Pd-Ag/θ-Al2O3 球形催化剂（Pd 0.03 wt%、Ag 0.13 wt%），在 10 bar、40–60 °C 的固定床中实现乙炔选择性加氢 ≳96% 转化并同步提高乙烯选择性、抑制绿油与积碳，借助剂稳定 θ-Al2O3 相、增大比表面与中孔率并强化金属-载体相互作用，为工业尾端加氢固定床的贵金属减量与绿油治理提供可直接借鉴的催化剂配方与构效依据。",
        keywords: ["固定床", "选择性加氢", "乙炔", "钯银催化剂", "蛋壳型催化剂", "绿油抑制", "乙烯选择性", "碱土助剂", "积碳", "催化剂单耗"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("固定床 乙炔选择性加氢 钯银催化剂 蛋壳型 绿油 乙烯选择性 碱土助剂")
      }
    ]
  },
  {
    date: "2026-09-01",
    note: "每日自动推送 · 连续流固定床加氢方向高质量文献（PubMed 检索，链接均经核验可打开）",
    articles: [
      {
        id: "pmid-41083548",
        title: "Reac-Discovery: an artificial intelligence-driven platform for continuous-flow catalytic reactor discovery and optimization",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/41083548/",
        doi: "https://doi.org/10.1038/s41467-025-64127-1",
        journal: "Nature Communications (2025), DOI 10.1038/s41467-025-64127-1, open access (PMC12518858)",
        verified: true,
        verifiedLinkType: "pubmed",
        verifiedAt: "2026-09-01",
        highlights: "提出 Reac-Discovery 数字平台，把催化反应器的参数化设计、高分辨 3D 打印制造与自驱动实验室优化整合为闭环：Reac-Gen 用参数化数学方程生成周期性开孔结构（POC）并做几何-拓扑分析；Reac-Fab 用机器学习校验可打印性、3D 打印并以离子液体功能化；Reac-Eval 用实时核磁共振（NMR）监测与自驱动平台并行多反应器评价，以人工神经网络（ANN）同时优化工艺参数与拓扑描述符。以两个多相催化案例验证：苯乙酮加氢（Pd 纳米颗粒固载于离子液体功能化 3D 打印聚合物结构）与 CO2 环加成；苯乙酮加氢用 ANN 把空速（关联 WHSV）、温度、气/液流速、底物浓度与拓扑参数（比表面积、孔隙率、弯曲度、装填率）映射为收率与时空收率（STY），最优 Lidinoid S15L0 几何预测 STY 达 352 g·L⁻¹·h⁻¹ 并经实验验证。直接对标本平台「反应器工程 + 结构化固定床 + WHSV/时空收率 + 放大」主线，且发表于 Nature Communications，把 AI 驱动的连续流反应器发现范式与 3D 打印结构化催化剂床层推向可量化的 STY 优化。",
        shortcomings: "苯乙酮加氢仅作为反应器发现平台的示范反应，并非本平台关注的含溶剂/甲醇中低压选择性加氢；Pd 纳米颗粒属贵金属、离子液体功能化聚合物载体在有机溶剂中的长期溶胀与机械强度未系统评估；3D 打印反应器为实验室尺度（毫米级特征），工业放大的床层均一性、压降、径向温度分布与传热/传质（Weisz-Prater/Mears）判据未展开；STY 优化依赖 ANN 黑箱，缺乏本征动力学（反应级数、Arrhenius）与内外扩散消除的直接论证；预测 STY 仅以 4 个几何做实验验证，长期稳定性（数百小时失活/压降演化）与催化剂再生协议缺失；CO2 环加成案例与本平台主线无关。",
        oneliner: "提出 Reac-Discovery 数字平台，整合参数化设计（Reac-Gen）、可打印性校验与 3D 打印（Reac-Fab）及实时 NMR 监测的自驱动优化（Reac-Eval），以人工神经网络把苯乙酮加氢的工艺与拓扑参数映射为时空收率（STY），实验验证最优 3D 打印结构化反应器 STY 达 352 g·L⁻¹·h⁻¹，为连续流结构化固定床反应器的 AI 驱动发现与 STY 量化放大提供范式。",
        keywords: ["连续流", "反应器工程", "加氢", "3D打印", "结构化反应器", "机器学习", "时空收率", "钯催化剂"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流 反应器 3D打印 结构化反应器 机器学习 时空收率 加氢 优化")
      },
      {
        id: "pmid-40852220",
        title: "Hydrogenation of Quinolines and Aldehydes Catalyzed by a Pyrolyzed, Augmented Cobalt-Salen Complex",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/40852220/",
        doi: "https://doi.org/10.1021/acsomega.5c04940",
        journal: "ACS Omega (2025), DOI 10.1021/acsomega.5c04940, open access (PMC12368676)",
        verified: true,
        verifiedLinkType: "pubmed",
        verifiedAt: "2026-09-01",
        highlights: "以放大的 salcomine 型均相钴-沙仑（Co-salen）配合物前驱体湿浸渍于 SiO2 后可控热解，制备出易操作、稳定的 Co@SiO2 复合催化剂（XPS/HAADF-STEM/EDX 确认 Co 以金属态存在）。该催化剂可多相催化喹啉与醛的加氢：喹啉选择性生成 1,2,3,4-四氢喹啉、醛加氢为伯醇，并展示良好的官能团兼容性。最贴合本平台的是催化剂同时在间歇高压釜与连续流反应系统（ThalesNano H-Cube Mini Plus，通过水电解现场制氢）两种模式下评价，均取得良好收率与官能团耐受性，给出从间歇到连续流的迁移路径与反应器示意。非贵金属 Co、连续流、选择性加氢齐备，直接对标本平台「连续流 + 非贵金属 + 选择性加氢」主线，全文 OA（PMC12368676）。",
        shortcomings: "连续流部分仅以 H-Cube Mini Plus（实验室级、电解水现场制氢、低压）验证喹啉/醛加氢，未给出固定床工业放大的床层压降、径向温度分布与放大倍数；缺长期稳定性曲线（数百小时失活、Co 烧结/流失的 ICP 定量）与 WHSV/空速、本征动力学（反应级数、Arrhenius）及内外扩散消除判据；喹啉加氢选择性仅以 1,2,3,4-四氢喹啉收率表示，对深度加氢（十氢喹啉）与副产物的选择性调控未充分展开；SiO2 载体在有机溶剂与较高压力下的长期机械/化学稳定性、Co 浸出与回收经济性未评估；非贵金属 Co 体系对含氮杂芳烃的氮中毒失活仅简要提及，未系统考察。",
        oneliner: "用放大的 Co-salen 配合物前驱体湿浸渍 SiO2 后可控热解制备稳定易操作的 Co@SiO2 复合催化剂，实现喹啉与醛的选择性多相加氢（喹啉→1,2,3,4-四氢喹啉、醛→伯醇），并在间歇高压釜与 ThalesNano H-Cube 连续流系统（电解水现场制氢）两种模式下验证其良好收率与官能团兼容性，为非贵金属连续流选择性加氢提供可操作的催化剂方案。",
        keywords: ["连续流", "固定床", "加氢", "喹啉", "钴催化剂", "非贵金属", "选择性", "杂芳烃"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流 固定床 喹啉加氢 钴催化剂 非贵金属 选择性")
      }
    ]
  },
  {
    date: "2026-08-31",
    note: "每日自动推送 · 连续流固定床加氢方向高质量文献（PubMed 检索，链接均经核验可打开）",
    articles: [
      {
        id: "doi-10.1055-a-2793-1620",
        title: "Synthesis of a Key Linezolid Intermediate via Fixed-Bed Continuous-Flow Hydrogenation: Insights into Catalyst Grade Selection and Optimum Reaction Conditions for Scale-Up",
        pubmed: "https://doi.org/10.1055/a-2793-1620",
        doi: "https://doi.org/10.1055/a-2793-1620",
        journal: "Sustainability & Circularity NOW (2026), 03, a27931620, DOI 10.1055/a-2793-1620 (Thieme, open access CC BY)",
        verified: true,
        verifiedLinkType: "doi",
        verifiedAt: "2026-08-31",
        highlights: "以固定床连续流加氢制备利奈唑胺（Linezolid，高用量抗菌药）关键前体 3-氟-4-吗啉代苯胺，是制药 API 连续制造的工程范本，直接对应本工作台主线。底物 4-(2-氟-4-硝基苯基)吗啉经催化加氢还原硝基，重点考察催化剂牌号选择（Pd/C 与 Raney Ni）及时间、温度、溶剂、浓度的协同效应；最贴合本平台的是用「time-on-stream」长期运行实验量化催化剂稳定性与寿命，并给出空间-时收率（space-time yield, STY）：最优条件下产物 >99.5%、1 的近定量分离收率，STY 达 1.65 kg/L/h，而传统间歇法仅 0.0058 kg/L/h（提升约 280 倍）。文章还明确讨论如何「安全且可放大」地实现该转化、抑制脱卤杂质生成，对固定床放大与催化剂单耗核算极具参考价值。发表于 Thieme 开源期刊（CC BY），数据可复用。",
        shortcomings: "研究对象为单一利奈唑胺前体（4-氟硝基芳烃→氟代苯胺）这一特定 API 中间体，并非本平台关注的含甲醇溶剂的中低压通用液相选择性加氢场景；反应体系偏温和，文中未给出绝热温升、本征动力学（反应级数、Arrhenius）及 WHSV/空速与催化剂单耗的定量核算；time-on-stream 稳定性虽给出，但缺数百至上千小时级失活曲线、Pd 流失/烧结或 Raney Ni 比表面衰减的 ICP/BET 数据；催化剂牌号（grade）对比停留在宏观产率，未深入载体粒径分布、金属分散度与压降（ΔP）的关联，也未用 Ergun 方程做放大压降估算；溶剂/浓度优化未涉及甲醇体系，对含卤/含水原料的普适性与经济性（vs Pd 成本）仅定性讨论。",
        oneliner: "在固定床连续流反应器中以 Pd/C 与 Raney Ni 催化剂牌号筛选实现 4-(2-氟-4-硝基苯基)吗啉→3-氟-4-吗啉代苯胺（利奈唑胺前体）的选择性硝基加氢，最优条件产物 >99.5%、近定量分离收率、空间-时收率 1.65 kg/L/h（间歇法仅 0.0058），并以 time-on-stream 实验量化长期稳定性与放大可行性，为 API 连续流加氢的催化剂选型、稳定性评价与放大提供可直接复用的工程数据。",
        keywords: ["固定床", "连续流", "选择性加氢", "硝基化合物", "利奈唑胺", "钯碳催化剂", "雷尼镍", "放大", "时空收率", "API连续制造"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流 固定床 选择性加氢 利奈唑胺 硝基 钯碳 雷尼镍 放大 时空收率")
      },
      {
        id: "doi-10.3390-catal16080669",
        title: "Resin-Based Spherical Activated Carbon-Supported Pt-Pd Catalysts for Continuous Liquid-Phase Hydrogenation of Nitrobenzene",
        pubmed: "https://doi.org/10.3390/catal16080669",
        doi: "https://doi.org/10.3390/catal16080669",
        journal: "Catalysts (2026), 16(8), 669, DOI 10.3390/catal16080669 (MDPI, open access)",
        verified: true,
        verifiedLinkType: "doi",
        verifiedAt: "2026-08-31",
        highlights: "以树脂基球形活性炭（RSAC）为载体构建结构化 Pt-Pd/C 催化剂，解决连续固定床液相加氢中常见的局部过热、催化剂烧结与磨损问题，直接对应本工作台「催化剂结构化 + 连续流稳定性 + 选择性」主线。在微填充床反应器（micro-packed bed）中以乙醇为溶剂（硝基苯 0.08 mol·L⁻¹）实现硝基苯→苯胺的连续液相加氢：间歇初筛中 Pt-Pd/C（Pt 2.59 wt%、Pd 0.33 wt%）表观 TOF 达 6594 h⁻¹、苯胺选择性 >99.9%；连续操作中约 2 h 达稳态，随后 70 h 内维持硝基苯转化约 87%、苯胺选择性近定量（~99%）且无系统衰减。RSAC 载体兼具机械强度与连续流动适用性，为选择性连续制苯胺提供了结构化稳健体系。发表于 MDPI Catalysts（开源），数据完整可核算。",
        shortcomings: "反应体系为模型底物硝基苯→苯胺（单一 C-N 还原），并非本平台关注的含甲醇溶剂、含卤/含杂环原料的中低压选择性加氢，87% 转化率下未进一步追平完全转化所需的空速/催化剂装填与压降权衡；70 h 稳定性窗口偏短，缺数百至上千小时级失活曲线、Pt/Pd 流失/烧结的 ICP/TEM 定量及 RSAC 载体水热稳定性数据；文章未给出绝热温升、本征动力学（反应级数、Arrhenius）与 WHSV/时空收率的经济性核算；稳态 2 h 启停、放热热点与径向温度分布、以及放大到工业尺寸的 Ergun 压降估算均未展开；Pd 用量极低（0.33 wt%）虽降本，但 Pt 属贵金属，整体成本—性能权衡与回收仅简要提及。",
        oneliner: "用树脂基球形活性炭（RSAC）负载 Pt-Pd/C 结构化催化剂在微填充床反应器中实现硝基苯连续液相加氢制苯胺，间歇初筛 TOF 达 6594 h⁻¹、选择性 >99.9%，连续操作约 2 h 达稳态后维持 70 h（~87% 转化、近定量选择性）无衰减，以高机械强度载体破解固定床连续流中的烧结与磨损难题，为结构化催化剂的连续加氢稳定性与放大提供范本。",
        keywords: ["微填充床", "连续流", "液相加氢", "硝基苯", "铂钯催化剂", "活性炭载体", "选择性", "催化剂稳定性", "结构化催化剂"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流 微填充床 液相加氢 硝基苯 铂钯 活性炭载体 选择性 催化剂稳定性")
      }
    ]
  },
  {
    date: "2026-08-28",
    note: "每日自动推送 · 连续流固定床加氢方向高质量文献（PubMed 检索，链接均经核验可打开）",
    articles: [
      {
        id: "doi-10.1021-acs.oprd.5c00519",
        title: "Innovative Approaches to a Scalable Catalytic Flow Reaction: A Focus on Selective Nitro-Group Hydrogenation in a Fixed-Bed System",
        pubmed: "https://doi.org/10.1021/acs.oprd.5c00519",
        doi: "https://doi.org/10.1021/acs.oprd.5c00519",
        journal: "Organic Process Research & Development (2026), 30(3), 795-805, DOI 10.1021/acs.oprd.5c00519 (ACS, open access)",
        verified: true,
        verifiedLinkType: "doi",
        verifiedAt: "2026-08-28",
        highlights: "在固定床连续流反应器中以 Co/Al2O3 非贵金属催化剂实现硝基化合物的化学选择性加氢，核心工程价值在于把「催化剂粒径工程 + 压降控制 + 放大」整合进同一工作：载体选用粒径均匀、分布窄的球形 Al2O3（d50≈343 μm、跨度 d10–d90 284–441 μm），使反应器直径/颗粒直径比 D/d≈29，显著削弱壁效应与偏流，从而把床层压降 ΔP 降到接近零并防止催化剂粉化造成的堵塞。针对卤代硝基芳烃（Pd/Pt 催化剂易脱卤的痛点），Co/Al2O3 对各类取代基（位置、电子效应）的硝基芳烃均给出高化学选择性；以对氯硝基苯加氢制对氯苯胺为例，80 °C 下保持完全转化、选择性 >97% 并稳定运行 180 h，ΔP 几乎不变。文章进一步给出多规模固定床装置（实现逐级 stepwise scale-up），并用 Ergun 方程估算放大到商业规模时 ΔP 仍可 <1 bar，是本平台「固定床压降 + 放大 + 催化剂单耗」主线不可多得的工程范本。发表于 Org Process Res Dev（药物工艺旗舰期刊），对 API 连续制造的工业相关性高。",
        shortcomings: "研究对象为硝基芳烃加氢制芳胺（制药 API 关键步骤），并非本平台聚焦的含溶剂/甲醇中低压液相选择性加氢的通用场景，温度 80 °C 较温和但依赖 H2 加压、未给出绝热温升与本征动力学（反应级数、Arrhenius）定量；180 h 稳定性出色但缺数百至上千小时级的失活曲线、Co 烧结/流失与 Al2O3 载体水热稳定性（ICP/中毒）数据；虽用 Ergun 估算 ΔP，但实验压降仅 180 h 窗口、未提供径向温度分布与放大热点的实测，也未给出 WHSV/空速与催化剂单耗的核算；依赖纯 Co 体系对深度加氢/含 N、S 杂环底物的普适性未展开，经济性（vs Pd/Pt 的成本—性能权衡）仅定性讨论；文中明确点出温度梯度与启停策略为后续研究，说明放大热管理尚未闭环。",
        oneliner: "用粒径均匀、分布窄的球形 Al2O3 负载 Co 催化剂（d50≈343 μm、D/d≈29）装填固定床，在 80 °C 下实现对氯硝基苯等硝基芳烃高化学选择性加氢（>97%、完全转化）并稳定连续运行 180 h 且床层压降近乎为零，结合多规模装置与 Ergun 方程论证可放大至商业规模 ΔP<1 bar，为固定床连续加氢的催化剂粒径工程、压降控制与 stepwise 放大提供可直接复用的 API 制造工程范本。",
        keywords: ["固定床", "连续流", "选择性加氢", "硝基化合物", "钴催化剂", "API连续制造", "压降", "放大"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流 固定床 选择性加氢 硝基 钴催化剂 压降 放大 API")
      },
      {
        id: "doi-10.1021-acs.iecr.5c03941",
        title: "Continuous Hydrogenation of Glucose in a Micropacked Bed Reactor",
        pubmed: "https://doi.org/10.1021/acs.iecr.5c03941",
        doi: "https://doi.org/10.1021/acs.iecr.5c03941",
        journal: "Industrial & Engineering Chemistry Research (2026), 65(5), 2521-2528, DOI 10.1021/acs.iecr.5c03941 (ACS)",
        verified: true,
        verifiedLinkType: "doi",
        verifiedAt: "2026-08-28",
        highlights: "以微填充床反应器（micropacked bed reactor, μPBR）实现葡萄糖连续加氢制山梨醇，是固定床反应器工程 + 本征动力学 + 长周期稳定性的完整范例。用 Ru/C 催化剂在温和条件（100 °C、1 MPa）下取得完全转化与 99.0% 山梨醇选择性，时空收率（STY）高达 1.25 g_sorb/(g_cat·h)；最贴合本平台的是：连续运行 500 h 无明显失活、周转数 TON 达 53,144（远超文献报道的 9–3350），并系统建立本征动力学、用 Weisz 模数评估内扩散影响（排除内扩散控制），还把体系拓展到多种糖底物验证底物兼容性。全文直接给出空速/收率/稳定性/动力学的可核算数据，对应本工作台 WHSV 时空收率与催化剂单耗两大模块。发表于 Industrial & Engineering Chemistry Research（化工旗舰期刊）。",
        shortcomings: "反应为葡萄糖→山梨醇这一单一 C=O 加氢模型体系（生物质制糖醇），并非本平台关注的含氮/含硫原料的中低压选择性加氢，反应体系偏温和（100 °C/1 MPa）、与甲醇溶剂、含卤/含硝基底物的兼容性未涉及；微填充床以极小尺寸颗粒装填，虽改善传质但单位体积催化剂装填密度与工业放大的压降、径向分布、热点需另行论证，文中未给床层压降实测与放大传热数据；500 h 稳定性优秀但缺更长时间（数千小时）失活曲线、Ru 流失/团聚与 C 载体氧化的 ICP 定量；动力学模型未给出与 WHSV 直接挂钩的产能核算与催化剂单耗经济性；多种糖底物的选择性/收率仅简要列出，副产物（甘露醇等）分布与调控未充分展开。",
        oneliner: "用微填充床反应器（μPBR）配合 Ru/C 催化剂在 100 °C、1 MPa 的温和条件下实现葡萄糖连续加氢制山梨醇（完全转化、99.0% 选择性、STY 1.25 g_sorb/(g_cat·h)），连续运行 500 h 无明显失活、TON 达 53,144，并建立本征动力学与 Weisz 模数内扩散判据、验证多种糖底物兼容性，为固定床连续加氢的动力学建模、时空收率与长周期稳定性评估提供可直接复用的工程数据。",
        keywords: ["微填充床", "连续流", "加氢", "葡萄糖", "山梨醇", "钌催化剂", "动力学", "时空收率", "催化剂稳定性"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流 微填充床 加氢 葡萄糖 山梨醇 钌催化剂 动力学 时空收率")
      }
    ]
  },
  {
    date: "2026-08-27",
    note: "每日自动推送 · 连续流固定床加氢方向高质量文献（PubMed 检索，链接均经核验可打开）",
    articles: [
      {
        id: "pmid-41361027",
        title: "Breaking the yield-selectivity trade-off in polystyrene waste valorization via tandem depolymerization and hydrogenolysis",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/41361027/",
        doi: "https://doi.org/10.1038/s41565-025-02069-x",
        journal: "Nature Nanotechnology (2026), 21(1), 87-94, DOI 10.1038/s41565-025-02069-x (Springer Nature)",
        verified: true,
        verifiedLinkType: "pubmed",
        verifiedAt: "2026-08-27",
        highlights: "以 Co3O4 负载 Ru 单原子（RuSA/Co3O4）催化气相氢解，核心工程思想是「把解聚与氢解解耦」——在加压双段固定床反应器（pressurized dual-stage fixed-bed reactor）中，聚苯乙烯先于 475 °C 加氢热解（hydropyrolysis），气相产物再串入 275 °C 第二段固定床做气相氢解（0.4 MPa H2、停留时间仅 2.4 s），从而打破甲苯「收率-选择性」互斥：甲苯选择性 99%、收率 83.5 wt%、反应速率 1320 mmol·gcat⁻¹·h⁻¹。催化剂在 100 h 连续运行中维持 >99% 转化与选择性、TON 达 24747，并可直接处理多种真实废聚苯乙烯。更难得的是配套给出全生命周期评价（碳足迹较化石路线降低 53%）与技术经济分析（最低销售价 0.61 美元/kg，低于 1 美元/kg 行业基准）。发表于 Nature Nanotechnology，对本平台最有价值的是「多段固定床串联 + 低压短停留 + 单位催化剂产率 + 长周期稳定性 + TEA 经济性」这一条完整的从反应器构型到经济性的闭环。",
        shortcomings: "反应体系为废塑料气相氢解制甲苯（C-C 氢解 + 高温热解），并非本平台关注的中低压液相选择性加氢，475 °C 热解段能耗高、与甲醇溶剂温和加氢路线差异大；单原子 Ru 属贵金属，Ru 回收、单原子载体规模化制备一致性与批间重现性未评估；双段固定床未给出床层压降、径向温度分布、绝热温升与气固传热/传质判据（Weisz-Prater/Mears），2.4 s 停留时间对应的空速换算与放大准则也未展开；连续运行 100 h 虽稳定，但缺数百至上千小时的失活曲线、积碳与 Ru 团聚/流失的 ICP 定量；TEA 与 LCA 基于模型假设，未经中试验证；真实废塑料中的杂质（卤素、添加剂、颜料）对单原子位点的中毒作用仅作定性说明。",
        oneliner: "在加压双段固定床反应器中把聚苯乙烯的加氢热解（475 °C）与 Ru 单原子催化的气相氢解（275 °C、0.4 MPa H2、停留 2.4 s）解耦串联，实现甲苯 99% 选择性、83.5 wt% 收率与 1320 mmol·gcat⁻¹·h⁻¹ 速率、100 h 连续运行无衰减（TON 24747），并以碳足迹降低 53%、最低销售价 0.61 美元/kg 的 LCA/TEA 论证经济可行性，为多段固定床连续加氢工艺的构型设计与放大经济性评估提供完整范本。",
        keywords: ["固定床", "连续流", "氢解", "单原子催化剂", "钌催化剂", "选择性", "放大", "技术经济分析", "废塑料"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("双段固定床 氢解 单原子钌 聚苯乙烯 甲苯 连续流 技术经济")
      },
      {
        id: "pmid-42094728",
        title: "Pt-Y supported on magnesium-aluminium composite oxide catalysts for highly selective synthesis of 1,2-pentanediol from furfuryl alcohol under mild conditions",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/42094728/",
        doi: "https://doi.org/10.1039/d6ra02263d",
        journal: "RSC Advances (2026), 16(26), 23314-23325, open access (PMC13143263)",
        verified: true,
        verifiedLinkType: "pubmed",
        verifiedAt: "2026-08-27",
        highlights: "报道 MgO-AlO(OH) 复合氧化物（MAO）负载的 Pt-Y 双金属催化剂，用于糠醇（FFA）选择性氢解制 1,2-戊二醇（1,2-PeD），在极温和条件（140 °C、0.8 MPa H2、水为溶剂）下即可完全转化 FFA、1,2-PeD 选择性 80.3%（110 mol 产物·mol Pt⁻¹·h⁻¹），显著优于单金属对照。AC-HAADF-STEM 与 XPS 证实形成 Pt-Y 混合团簇并发生 Pt→Y 电子转移，该电子调控与 MAO 载体可调碱性协同，抑制呋喃环过度加氢、促进目标 C-O 键活化；原位 FT-IR 显示引入 Y 后 FFA 以 O-H 与 C-O-C 竖直吸附构型吸附，从而利于选择性开环。与本平台高度契合的是文中同时给出：固定床反应器示意图（Scheme 1）、H2 压力与 FFA 浓度的反应级数、120-150 °C 的 Arrhenius 活化能，以及固定床连续流长周期稳定性——140 °C、0.8 MPa H2、液相 0.01 mL·min⁻¹、气相 8 mL·min⁻¹、2.5 wt% FFA 水溶液、1 g 催化剂，连续运行 200 h 以上无明显失活。全文 OA（PMC13143263）。",
        shortcomings: "长周期实验的空速极低——按液相 0.01 mL·min⁻¹、2.5 wt% FFA、1 g 催化剂折算 WHSV 仅约 0.015 g_FFA·g_cat⁻¹·h⁻¹，单位催化剂产能远低于工业要求，200 h 稳定性是在此极低负荷下取得，高空速下的选择性与失活行为未验证；1,2-PeD 选择性 80.3% 仍有约 20% 碳流向过度加氢/开环副产物，副产物分布与分离未展开；依赖贵金属 Pt（辅以稀土 Y），Pt 回收、成本与 MAO 载体规模化制备一致性未评估；未提供床层压降、径向温度分布、绝热温升与内外扩散消除判据（Weisz-Prater/Mears），动力学参数主要来自间歇釜（50 mg 催化剂、6 h）而非固定床本征测定；水相体系中 MgO-AlO(OH) 载体的长期水热稳定性与 Mg 溶出缺 ICP 定量；仅以糠醇单一底物验证，对真实生物质水解液杂质的耐受性未考察。",
        oneliner: "用 MgO-AlO(OH) 复合氧化物负载 Pt-Y 双金属团簇，借 Pt→Y 电子转移与载体碱性协同抑制呋喃环过度加氢、定向活化 C-O 键，在 140 °C/0.8 MPa 的温和水相条件下实现糠醇完全转化与 80.3% 的 1,2-戊二醇选择性，并在固定床连续流反应器中连续运行 200 h 以上无明显失活，为温和条件下的连续流选择性氢解催化剂设计与长周期稳定性验证提供了可复用范例。",
        keywords: ["固定床", "连续流", "选择性氢解", "双金属催化剂", "铂催化剂", "糠醇", "1,2-戊二醇", "生物质", "催化剂稳定性", "动力学"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流 固定床 糠醇 选择性氢解 1,2-戊二醇 铂钇双金属 催化剂稳定性")
      }
    ]
  },
  {
    date: "2026-08-26",
    note: "每日自动推送 · 连续流固定床加氢方向高质量文献（PubMed 检索，链接均经核验可打开）",
    articles: [
      {
        id: "pmid-41983231",
        title: "Hydrocracking of Waste Plastic Pyrolysis Oil and Light Cycle Oil (PPO/LCO) Blends in a Trickle-Bed Reactor: Catalyst Assessment and Operating-Condition Screening",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/41983231/",
        doi: "https://doi.org/10.1021/acs.energyfuels.6c00240",
        journal: "Energy & Fuels (2026), DOI 10.1021/acs.energyfuels.6c00240, open access (PMC13072571)",
        verified: true,
        verifiedLinkType: "pubmed",
        verifiedAt: "2026-08-26",
        highlights: "在滴流床（trickle-bed，气液固三相固定床）反应器中，以废塑料裂解油（PPO）与催化裂化轻循环油（LCO）掺混物（20:80 质量比）为原料，考察 PtPd/HZSM-5、PtPd/HY、NiW/HY 三种催化剂的加氢裂化制车用燃料性能。工况为 400 °C、60 bar、H2/进料体积比 2000:1、空时 0.23 g·h·gfeed⁻¹、在线时间 8 h；PtPd/HY 凭借中等酸强度、更强加氢能力与微孔结构取得 81 wt% 汽油馏分选择性，并进一步考察压力（80 bar 加剧过裂化）与 PPO 掺混比（升至 40 wt% 促进轻组分但抑制重质馏分与汽油生成）的影响，给出催化剂再生评价。直接对标本平台「固定床/滴流床 + 加氢 + 反应器工况筛选」主线，全文 OA（PMC13072571）。",
        shortcomings: "研究对象是废塑料裂解油/重油组分的加氢裂化（heavy refinery hydrocracking），属 C-C 裂化与加氢并重的重油改质，并非本平台关注的中低压精细化学品选择性加氢；反应苛刻（400 °C、60–80 bar），与甲醇溶剂、常压/中压的温和液相加氢路线差异大；未提供床层压降、径向温度分布、绝热温升与传热/传质（Weisz-Prater/Mears）判据；虽提到再生，但缺数百小时级连续失活曲线、金属流失与积碳动力学定量；汽油选择性 81 wt% 仅以产物分布表示，未给出 WHSV/时空收率与本征动力学（反应级数、Arrhenius）；NiW/HY 含 W 战略金属，成本与可持续性未评估。",
        oneliner: "在滴流床（气液固三相固定床）反应器中以 PPO/LCO 掺混油为原料筛选 PtPd/HZSM-5、PtPd/HY、NiW/HY 三种催化剂的加氢裂化性能，确定 PtPd/HY 凭借中等酸强与强加氢能力取得 81 wt% 汽油选择性，并厘清压力与 PPO 掺混比对过裂化及重质馏分转化的影响，为废塑料油连续固定床加氢改质与工况优化提供可直接借鉴的数据。",
        keywords: ["滴流床", "固定床", "加氢裂化", "连续流", "废塑料油", "催化剂筛选", "操作工况", "汽油选择性"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流 滴流床 加氢裂化 废塑料油 固定床 催化剂筛选")
      },
      {
        id: "pmid-41432387",
        title: "Selective Hydrogenation of Heteroarenes Using Supported Ruthenium Phosphide Nanoparticle Catalysts",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/41432387/",
        doi: "https://doi.org/10.1021/jacs.5c16144",
        journal: "Journal of the American Chemical Society (2026), 148(1), 766-777, open access (PMC12814184)",
        verified: true,
        verifiedLinkType: "pubmed",
        verifiedAt: "2026-08-26",
        highlights: "以有机金属法在咪唑基负载型离子液体相（SILP）上合成并固载钌磷化物纳米颗粒 Ru_xP100-x@SILP，可于温和湿化学条件下制备并系统调控 Ru/P 比；该催化剂对喹啉、吲哚、苯并呋喃、苯并噻吩等杂芳烃的选择性加氢（保留芳环、仅氢化杂环）表现出高活性、高选择性与强稳健性，且明确「在间歇与连续流条件下均可应用」。连续流实例以 6-氯喹啉为底物：Ru50P50@SILP（250 mg）与玻璃珠稀释装填，50 °C/20 bar 或 90 °C/50 bar，停留时间 1.14 min、流速 0.7 mL/min，并成功合成 cuspareine、salsolidine 等药物分子与含同位素标记的合成子。发表于化学顶刊 JACS，直接对标本平台「连续流 + 选择性加氢 + 催化剂 + 药物中间体」主线，全文 OA（PMC12814184）。",
        shortcomings: "连续流部分仅以 6-氯喹啉单一模型底物展示（停留时间 1.14 min、0.7 mL/min），未给出催化剂装填量对应的 WHSV、床层压降、长期稳定性与失活曲线、Ru 流失/磷溶出定量；杂芳烃选择性部分加氢的目标产物为药物合成砌块，产能规模小，未涉及放大传热/传质、绝热温升与气液分布；依赖贵金属 Ru 与 SILP 载体，Ru50P50@SILP 的规模化制备一致性、Ru 回收与成本未评估；本征动力学（反应级数、活化能）与内外扩散消除判据未提供；虽强调稳健性，但缺数十/数百小时级连续在线运行数据。",
        oneliner: "用有机金属法在 SILP 上构建钌磷化物纳米颗粒 Ru_xP100-x@SILP，对喹啉/吲哚/苯并呋喃/苯并噻吩等杂芳烃实现保留芳环的选择性部分加氢，并在连续流固定床（6-氯喹啉，停留 1.14 min）中验证其稳健性，进一步用于 cuspareine、salsolidine 等药物分子合成，为连续流选择性杂芳烃加氢提供高活性高选择性催化剂方案。",
        keywords: ["连续流", "固定床", "选择性加氢", "杂芳烃", "钌磷化物", "离子液体", "药物中间体", "催化剂稳定性"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流 固定床 选择性加氢 杂芳烃 钌磷化物 离子液体 药物中间体")
      }
    ]
  },
  {
    date: "2026-08-25",
    note: "每日自动推送 · 连续流固定床加氢方向高质量文献（PubMed 检索，链接均经核验可打开）",
    articles: [
      {
        id: "pmid-41677507",
        title: "Selective Acetylene Hydrogenation: Influence of Carbon Supports on the Stabilization of Pd4S-like Active Sites",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/41677507/",
        doi: "https://doi.org/10.3390/nano16030157",
        journal: "Nanomaterials (Basel) (2026), 16(3), 157, open access (PMC12899367)",
        verified: true,
        verifiedLinkType: "pubmed",
        verifiedAt: "2026-08-25",
        highlights: "系统考察碳载体本性与钯前驱体对乙炔选择性加氢的双重影响：在四种碳材料（高温热处理碳纤维 HHT、碳纳米管 CNT、活性炭 AC、高比表面石墨 G）上分别用硫酸盐或氯化物前驱体制备 6 个 Pd 催化剂，全部在连续固定床反应器（continuous fixed-bed reactor）中评价。结果显示 HHT 负载催化剂乙烯选择性与长期稳定性最佳，硫酸盐前驱体普遍优于氯化物；XPS 证实性能提升源于亚化学计量硫化物物种（S2-）与金属 Pd 相互作用形成 Pd4S 样活性位，而非单纯的 Pd 分散度差异，高石墨化的 HHT 纤维更利于表面硫保留。文中给出 40 °C 下乙烷/乙烯/C4 选择性与乙炔转化率的 time-on-stream 演化曲线，并配合 TEM/EDX/XPS/Raman 对反应后样品做全面表征。载体-前驱体-活性位三者的构效关系清晰，直接对标本平台「固定床 + 催化剂 + 选择性」主线，全文 OA（PMC12899367）。",
        shortcomings: "乙炔选择性加氢属气相脱除微量乙炔的模型反应（乙烯精制场景），未涉及液相/气液固三相加氢与多官能团竞争加氢的选择性调控；未提供 WHSV/空速、床层压降、绝热温升与内外扩散判据（Weisz-Prater/Mears），难以直接用于本平台的 WHSV 时空收率核算；长期稳定性以 time-on-stream 曲线展示但缺数百小时级失活曲线，以及 Pd 烧结、硫物种流失的定量（ICP/XPS 定量）数据；仍依赖贵金属 Pd，未讨论回收与经济性；碳载体（尤其 HHT 纤维、CNT）的机械强度、装填均一性与工业放大成本未评估，绿油（green oil）生成与再生协议也未展开。",
        oneliner: "通过对比四种碳载体与硫酸盐/氯化物两类钯前驱体，在连续固定床反应器中开展乙炔选择性加氢，揭示高石墨化 HHT 碳纤维载体利于表面硫保留并稳定 Pd4S 样活性位，从而取得最高乙烯选择性与最佳长期稳定性，为固定床选择性加氢催化剂的「载体-前驱体-活性位」协同设计提供可直接借鉴的依据。",
        keywords: ["固定床", "连续流", "选择性加氢", "乙炔", "钯催化剂", "碳载体", "硫化钯", "催化剂稳定性"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续固定床 乙炔选择性加氢 钯催化剂 碳载体 硫化钯")
      },
      {
        id: "pmid-42360121",
        title: "Selective Nitrone Synthesis via Cascade Hydrogenative Coupling of Nitro Compounds and Aldehydes Catalyzed by Single-Atom Platinum on N,P-Doped Carbon",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/42360121/",
        doi: "https://doi.org/10.1021/jacs.6c08609",
        journal: "Journal of the American Chemical Society (2026), 148(26), 27762-27770, DOI 10.1021/jacs.6c08609 (ACS)",
        verified: true,
        verifiedLinkType: "pubmed",
        verifiedAt: "2026-08-25",
        highlights: "报道 N,P 共掺杂碳负载的单原子铂催化剂（Pt single-atom on N,P-doped carbon），高效催化硝基化合物与醛的级联加氢偶联（cascade hydrogenative coupling），一步高选择性合成硝酮（nitrones），共制得 40 种结构多样的硝酮，覆盖芳香族与脂肪族底物以及若干生物活性化合物的重要中间体。与易导致过度还原的 Pt 纳米颗粒催化剂形成鲜明对照，单原子 Pt 平台官能团兼容性极宽——可容忍同分子内可还原的 C=C、C=O 键与芳基卤，展现了单原子位点在「级联加氢」这一尚少被探索方向上的独特反应性；更关键的是催化剂在连续流体系（continuous-flow system）中表现出稳健耐久性，给出原子经济、可持续的硝酮连续制造路线。发表于化学顶刊 JACS，直接对标本平台「连续流 + 单原子催化剂 + 选择性控制」主线。",
        shortcomings: "论文主线是合成方法学（底物谱与选择性），连续流部分仅作为耐久性验证，未给出催化剂装填量、空速（WHSV/LHSV）、停留时间、床层压降与逐时转化率/选择性曲线等固定床反应器工程参数，无法直接用于 WHSV 时空收率与催化剂单耗核算；依赖贵金属 Pt 单原子，N,P 掺杂碳载体的规模化制备一致性、Pt 回收与成本未评估；单原子位点在长周期流动运行下的团聚/浸出缺 ICP 定量与失活曲线；目标产物硝酮属精细化工/药物中间体，产能规模小，未涉及放大传热传质、绝热温升与气液分布；亦未提供本征动力学（反应级数、活化能）与内外扩散消除判据。",
        oneliner: "用 N,P 共掺杂碳负载单原子铂催化硝基化合物与醛的级联加氢偶联，高选择性合成 40 种硝酮（可耐受 C=C/C=O/芳基卤等可还原官能团、显著抑制纳米颗粒催化剂常见的过度还原），并在连续流体系中验证催化剂的稳健耐久性，为单原子催化剂驱动的连续流级联加氢提供了原子经济且可持续的方法学。",
        keywords: ["连续流", "级联加氢", "单原子催化剂", "铂催化剂", "选择性", "硝基化合物", "硝酮", "官能团兼容性"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流 级联加氢 单原子铂 硝基化合物 硝酮 选择性")
      }
    ]
  },

  {
    date: "2026-08-24",
    note: "每日自动推送 · 连续流固定床加氢方向高质量文献（PubMed 检索，链接均经核验可打开）",
    articles: [
      {
        id: "pmid-39254682",
        title: "Organic synthesis in flow mode by selective liquid-phase hydrogenation over heterogeneous non-noble metal catalysts",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/39254682/",
        doi: "https://doi.org/10.1039/d4ob00873a",
        journal: "Organic & Biomolecular Chemistry (2024), DOI 10.1039/d4ob00873a (RSC)",
        verified: true,
        verifiedLinkType: "pubmed",
        verifiedAt: "2026-08-24",
        highlights: "这是一篇系统综述，聚焦在连续流（flow mode）条件下、以多相非贵金属（Ni、Cu、Co 等）催化剂进行液相加氢的方法。重点讨论在双/多官能团有机物中「选择性还原单一官能团」——即 NO2、C=C、C=O、C=N、C≡N 在其它取代基存在下被分别还原，并给出若干涉及加氢的级联（cascade）合成路线。相较过去二十年以贵金属为主导的流动加氢研究，本文明确指出非贵金属催化剂因低成本、高丰度更利于实际应用，为连续流加氢的降本与绿色化提供清晰路线图。直接对标本平台「连续流 + 选择性加氢 + 非贵金属催化剂」主线。",
        shortcomings: "本质为综述、无新实验数据，各选择性加氢示例停留在概览层面，缺乏统一可比的工程参数（WHSV/LHSV、压力、温度、空速、床层压降）；所涉及的流动反应器类型（固定床 packed-bed vs 微反应器 microreactor）未逐例交代，难以直接用于本平台 WHSV 核算；非贵金属催化剂在连续流中的失活、选择性权衡与再生仍未被根本解决；对放大经济性与工业装填一致性的讨论较弱。",
        oneliner: "一篇系统综述，汇总了多相非贵金属（Ni/Cu/Co）催化剂在连续流液相加氢中的应用，重点阐述在多官能团有机物中「选择性还原单一官能团」（NO2/C=C/C=O/C=N/C≡N）及级联合成路线，为连续流加氢的低成本、绿色化提供方法学路线图。",
        keywords: ["连续流", "液相加氢", "选择性加氢", "非贵金属催化剂", "镍催化剂", "铜催化剂", "化学选择性", "综述"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流 液相加氢 非贵金属催化剂 选择性加氢 综述")
      },
      {
        id: "pmid-40568928",
        title: "Kinetic Investigation of the Asymmetric Hydrogenation of Benzylphenylephrone in Continuous Flow",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/40568928/",
        doi: "https://doi.org/10.2533/chimia.2025.441",
        journal: "Chimia (2025), 79(6), 441-448, DOI 10.2533/chimia.2025.441, open access",
        verified: true,
        verifiedLinkType: "pubmed",
        verifiedAt: "2026-08-24",
        highlights: "报道了一套全自动化、mL 级连续流工艺，用于苯基苯丙酮（benzylphenylephrone）不对称加氢生成 (R)-benzylphenylephrine（BPE，一种拟交感神经药 API 中间体）。采用均相铑（Rh）催化剂、最高 65 bar 高压，转化 >96%、收率最高 95%、对映体过量（ee）最高 91%，停留时间 <5 min、底物/催化剂摩尔比（S/C）=750；并在连续流微反应器中开展动力学研究、建立与实验高度吻合的动力学模型。直接对标本平台「连续流 + 动力学 + 反应器工程」主线，且论文为 OA（Free article）。",
        shortcomings: "使用均相 Rh 催化剂，存在成本高、产物与催化剂分离困难、金属浸出风险；操作压力最高 65 bar，对设备等级与成本要求较高；底物范围较窄（仅单一 API 中间体模型）；为 mL 级微反应器，缺固定床工业放大的床层压降、径向温度分布与放大倍数验证；未给出长期催化剂稳定性与失活曲线；本工作为均相催化不对称加氢路线，并非本工作台中心关注的「多相固定床 H2 气相加氢」方案。",
        oneliner: "提出一套全自动化 mL 级连续流不对称加氢工艺，以均相 Rh 催化剂在最高 65 bar 下将苯基苯丙酮转化为 (R)-benzylphenylephrine（转化 >96%、收率 95%、ee 91%、停留 <5 min），并在连续流微反应器中建立与实验吻合的动力学模型，展示了快速、可重复的 API 中间体连续制造。",
        keywords: ["连续流", "不对称加氢", "动力学", "微反应器", "铑催化剂", "药物中间体", "工艺开发", "选择性"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流 不对称加氢 动力学 微反应器 铑催化剂 药物中间体")
      }
    ]
  },

  {
    date: "2026-08-22",
    note: "每日自动推送 · 连续流固定床加氢方向高质量文献（PubMed 检索，链接均经核验可打开）",
    articles: [
      {
        id: "pmid-42540193",
        title: "Cu-Ni x O y /SiO2 Catalysts for Hydrogenation of Dimethyl Oxalate to Ethylene Glycol: Regulation of Coprecipitation Process and Structure-Activity Relationship Study",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/42540193/",
        doi: "https://doi.org/10.1021/acsomega.6c05343",
        journal: "ACS Omega (2026), 11(29), DOI 10.1021/acsomega.6c05343, open access (PMC13425310)",
        verified: true,
        verifiedLinkType: "pubmed",
        verifiedAt: "2026-08-22",
        highlights: "以共沉淀法制备 SiO2 负载的 Cu-NiₓOᵧ 杂化纳米结构催化剂，系统优化沉淀温度与加料顺序（室温先氨水、后加 Cu 前驱体得 Cu/SiO2-FA-RT）。在固定床反应器中考察草酸二甲酯（DMO）加氢制乙二醇（EG）：Cu-NiₓOᵧ/SiO2 取得 98.9% DMO 转化率与 89.2% EG 选择性，优于单一 Cu/SiO2-FA-RT；稳定性测试显示活性与选择性几乎无衰减、积碳仅 0.07 wt%。机理归于 Cu-NiₓOᵧ 紧密接触界面调控活性表面电子/几何性质、抑制积碳。文中用 LHSV（0.8 h-1）、H2 压力 2.6 MPa、185 °C、H2/DMO=60/1 等固定床工况参数，并用 XRD/HAADF-STEM/H2-TPR/XPS/DRIFT-IR 系统表征，非贵金属、固定床、选择性+稳定性齐备，直接对标本平台催化剂+选择性+放大主线。发表于 OA 期刊 ACS Omega（PMC13425310）。",
        shortcomings: "反应为草酸二甲酯→乙二醇（煤/合成气制 EG 路线）这一特定体系，未涉及含氮/含硫底物的竞争加氢与中毒；空速仅 LHSV 0.8 h-1（基于 15 wt% DMO 甲醇溶液），单位催化剂产能偏低，未给出 WHSV 与本征动力学（反应级数、Arrhenius）、Weisz-Prater/Mears 内外扩散判据；连续固定床长期稳定性虽给出但时长有限，缺数百小时级失活曲线、Cu 烧结/流失定量、床层压降与放大传热数据；EG 选择性 89.2% 仍有提升空间，副产物（如乙醇酸甲酯）分布与调控未充分展开；SiO2 载体在甲醇溶剂中长期溶胀/机械强度与放大装填均一性需验证。",
        oneliner: "用共沉淀法制备 SiO2 负载 Cu-NiₓOᵧ 杂化纳米结构催化剂，在固定床反应器中以 98.9% 转化率、89.2% 乙二醇选择性实现草酸二甲酯加氢，稳定性测试中活性/选择性几乎无衰减且积碳仅 0.07 wt%，以 Cu-NiₓOᵧ 紧密接触界面调控电子/几何性质并抑制积碳，为非贵金属固定床加氢催化剂的构效与稳定放大提供可直接借鉴的依据。",
        keywords: ["固定床", "连续流", "加氢", "草酸二甲酯", "乙二醇", "铜镍双金属", "选择性", "催化剂稳定性", "积碳"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流 固定床 草酸二甲酯 加氢制乙二醇 铜镍双金属 选择性")
      },
      {
        id: "pmid-42441287",
        title: "Evaluation of Ag-, Fe- and Ni-exchanged mordenite for the reduction of 4-nitrophenol under different reduction pathways",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/42441287/",
        doi: "https://doi.org/10.1039/d6ra01638c",
        journal: "RSC Advances (2026), DOI 10.1039/d6ra01638c, open access (PMC13335188)",
        verified: true,
        verifiedLinkType: "pubmed",
        verifiedAt: "2026-08-22",
        highlights: "水热合成丝光沸石（MOR）并经 Ag⁺/Fe³⁺/Ni²⁺ 离子交换改性，XRD/XPS/BET/XRF/FTIR/UV-Vis/SEM 系统表征确认骨架完整、金属在孔道内高分散。以 4-硝基酚（4-NP）还原为模型，对比 NaBH4 化学还原与 H-Cube Pro（ThalesNano）连续流催化加氢（电解水产 H2）两条路径：连续流加氢下 AgMOR、NiMOR、FeMOR 分别达 89%、92%、60% 转化，明确展示连续流操作优势与金属-载体相互作用对性能的关键作用，并给出 H-Cube 流动反应器示意图与 AgMOR 循环再利用数据。直接对标本平台「连续流固定床加氢」主题，且分子筛载体利于工程化装填、电解水产氢降低高压 H2 门槛，全文 OA（PMC13335188）。",
        shortcomings: "连续流加氢仅以 4-硝基酚单一模型底物验证，未涉及多官能团竞争加氢、含氮/含硫真实底物的选择性调控与中毒；H-Cube Pro 为实验室级流动反应器（电解水产氢、低压），缺固定床工业放大的床层压降、径向温度分布与放大倍数验证；长期稳定性仅以 NaBH4 批次循环展示，缺数十/数百小时级连续在线失活曲线、金属浸出量（ICP）定量；未提供 WHSV/空速、本征动力学与传质判据；Ag/Fe/Ni-MOR 在有机溶剂与较高压力下的适用性、沸石交换量批间重现性与成本未评估；转化率高但副产物（4-NP→4-AP 外的过度还原产物）选择性未量化。",
        oneliner: "通过水热合成丝光沸石并经 Ag/Fe/Ni 离子交换改性，在 H-Cube Pro 连续流催化加氢反应器（电解水产 H2）中实现 4-硝基酚还原，AgMOR、NiMOR、FeMOR 分别达 89%、92%、60% 转化，以分子筛载体+连续流操作展示金属-载体相互作用对加氢性能的关键作用，为连续流固定床加氢提供易工程化、低压氢的催化剂候选。",
        keywords: ["连续流", "固定床", "加氢", "4-硝基酚", "分子筛", "银催化剂", "金属载体相互作用", "选择性"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("连续流 加氢 4-硝基酚 银分子筛 固定床 选择性")
      }
    ]
  },
  {
    date: "2026-08-21",
    note: "每日自动推送 · 连续流固定床加氢方向高质量文献（PubMed 检索，链接均经核验可打开）",
    articles: [
      {
        id: "pmid-41050603",
        title: "Wool-supported Pd and Rh nanoparticles for selective hydrogenation of maleic acid to succinic acid in batch and flow systems",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/41050603/",
        doi: "https://doi.org/10.1039/d5ra05365j",
        journal: "RSC Advances (2025), 15(44), 36760-36768, open access (PMC12495411)",
        verified: true,
        verifiedLinkType: "pubmed",
        verifiedAt: "2026-08-21",
        highlights: "以低品位羊毛纤维（可再生、可生物降解废料）为载体制备 Pd、Rh 纳米颗粒（约 5 nm、球形分散），经 SEM/TEM/XPS/XRD 系统表征；在间歇与连续流两种模式下考察马来酸（MA）选择性加氢制琥珀酸（SA）。间歇条件下室温、水溶液、H2 鼓泡、3 mol% 金属担载即 2 h 完全转化且 100% 选择性；进一步在固定床连续流反应器中，Rh/WF 以硫酸肼为替代氢源（常温水溶液）75 min 完全转化 MA→SA；催化剂坚固可循环、活性无损失。把「废料羊毛载体+贵金属纳米颗粒+固定床连续流」结合，直接对标绿色、可连续、易回收的液相加氢工艺，并提供从间歇到固定床的放大路径与反应器设计讨论（填充柱可长期使用至催化剂耗尽、无需分离、无机械搅拌应力）。全文 OA 可获取（PMC12495411）。",
        shortcomings: "反应为单一 C=C 加氢（马来酸→琥珀酸）的模型反应，未涉及多官能团竞争加氢、含氮/含硫底物的选择性调控与中毒；固定床连续流长期稳定性仅以 75 min 完全转化展示，缺数百小时级失活曲线、金属浸出量（ICP）定量与床层压降演化；以硫酸肼为氢源属化学氢供体/催化转移加氢，并非高压 H2 气液固三相工业加氢工况，氢源成本、副产物分离与放大气液分布未展开；羊毛载体在有机溶剂、高温高压下的溶胀/机械强度与批间重现性需评估；虽给出负载量/温度扫描，但未与 WHSV、本征动力学、Weisz-Prater/Mears 传质判据及工业放大倍数挂钩。",
        oneliner: "以低品位羊毛纤维固载 Pd/Rh 纳米颗粒（约 5 nm）构建出可在间歇与固定床连续流两种模式下实现马来酸 100% 选择性加氢制琥珀酸的绿色催化剂，Rh/WF 在固定床以硫酸肼为氢源 75 min 完全转化且可循环无失活，用可再生废料载体+固定床连续流把液相加氢的绿色化与易回收性落到实处。",
        keywords: ["固定床", "连续流", "加氢", "选择性", "钯催化剂", "铑催化剂", "羊毛载体", "琥珀酸", "绿色化学"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("羊毛负载钯铑纳米颗粒 固定床连续流 加氢 马来酸 琥珀酸")
      },
      {
        id: "pmid-40406927",
        title: "Trinuclear [FeIII2-MgII] compounds with aminopyridines as precursors for supported C=C bond hydrogenation catalysts at atmospheric pressure in a plug-flow reactor",
        pubmed: "https://pubmed.ncbi.nlm.nih.gov/40406927/",
        doi: "https://doi.org/10.1039/d5dt00653h",
        journal: "Dalton Transactions (2025), 54(23), 9329-9337, DOI 10.1039/d5dt00653h (RSC)",
        verified: true,
        verifiedLinkType: "pubmed",
        verifiedAt: "2026-08-21",
        highlights: "以杂金属铁(III)配合物为「非铂」加氢催化剂前驱体，合成系列新戊酸根桥联的 {FeIII–MgII} 三核化合物（β-ampy/γ-ampy 氨基吡啶配体），经 X 射线单晶、Mössbauer、磁性测量系统表征其结构（三核 {Fe2MgO} 单元、高自旋 Fe3+）；将配合物 1/2 负载于 γ-Al2O3 制得催化剂，在常压氢气、流动式（plug-flow）反应器中测试苯乙烯（VB）与双环戊二烯（DCPD）C=C 加氢，配合物 1 所得催化剂效率令人满意、相应加氢产物收率转化率达 80%。核心贡献是「分子前驱体→氧化物载体催化剂」的精准构筑路径与常压连续流加氢验证，为非贵金属、非 Pt 的连续流 C=C 加氢提供新前驱体思路，且反应在常压进行、显著降低设备门槛。",
        shortcomings: "主打贡献在配合物前驱体合成与结构表征，催化性能仅为常压流动反应器中苯乙烯/双环戊二烯加氢「转化率达 80%」的中等水平，未给出选择性（副反应如深度加氢/异构化）、空速（WHSV）、长期稳定性与失活曲线、金属浸出/流失定量；未涉及床层压降、径向温度分布与放大传热等反应器工程参数；苯乙烯/双环戊二烯仅为模型烯烃，对含官能团底物（如含 O/N/S 的烯烃）的兼容性与选择性调控未展开；γ-Al2O3 负载量、活性位结构（Fe 价态在反应中的演化）与构效关系未充分关联，从分子前驱体到工业放大催化剂的路径仍需大量验证。",
        oneliner: "通过合成 {FeIII–MgII} 三核氨基吡啶配合物前驱体并负载于 γ-Al2O3，构建出可在常压氢气、plug-flow 流动反应器中用于苯乙烯与双环戊二烯 C=C 加氢的非铂催化剂（转化率最高 80%），以「分子前驱体→载体催化剂」的精准构筑为连续流非贵金属加氢提供新路径。",
        keywords: ["连续流", "柱塞流反应器", "加氢", "非贵金属催化剂", "铁催化剂", "前驱体", "常压", "苯乙烯"],
        wechat: "https://weixin.sogou.com/weixin?type=2&query=" + encodeURIComponent("铁镁三核配合物 前驱体 固定床连续流 加氢 苯乙烯 常压")
      }
    ]
  },
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
