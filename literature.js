// 连续流固定床加氢 · 每日文献推送（由每日 0:00 自动化检索并覆写此文件）
// window.LIT: 数组，按日期倒序；每天 2 篇高质量文献，链接均经检索确认可打开。
window.LIT = [
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
