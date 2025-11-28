import React, { useState, useEffect } from 'react';
// 移除未使用的 'Calendar'
import { Plane, Map, Sun, Coffee, Camera, Palmtree, Waves, Mountain, Utensils, Hotel, DollarSign, Heart, ChevronUp } from 'lucide-react';

// 將 CarIcon 移到上方定義
const CarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
);

const BaliTrip = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll for "back to top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 確保 id 有明確的 string 類型
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const characters = [
    {
      name: "黃色虎斑貓",
      role: "日落與海灘俱樂部愛好者",
      icon: "🐱",
      color: "bg-orange-100 text-orange-600",
      desc: "喜歡在夕陽下發呆，享受美食與海風。"
    },
    {
      name: "灰色虎斑貓",
      role: "叢林與瀑布的探險家",
      icon: "😺",
      color: "bg-green-100 text-green-600",
      desc: "充滿好奇心，喜歡深入大自然與秘境。"
    },
    {
      name: "吉伊卡哇",
      role: "奢華度假村的放鬆大師",
      icon: "🐻‍❄️",
      color: "bg-blue-100 text-blue-600",
      desc: "最愛在飯店泳池耍廢，享受無所事事的快樂。"
    }
  ];

  const chapters = [
    {
      id: "chapter1",
      title: "第一章：海濱風情",
      location: "水明漾 (Seminyak)",
      days: "Days 1-3",
      theme: "warm", // orange/yellow
      icon: <Sun className="w-6 h-6" />,
      desc: "海風、日落與時尚的慵懶時光",
      details: [
        {
          day: "Day 1",
          title: "抵達與完美的假期開場",
          activities: [
            { time: "14:40", text: "抵達峇里島機場，前往水明漾", icon: <Plane size={16} /> },
            { time: "住宿", text: "Courtyard Bali Seminyak Resort (方便、舒適)", icon: <Hotel size={16} /> },
            { time: "晚餐", text: "Alma Tapas Bar (超高口碑西班牙料理)", icon: <Utensils size={16} /> }
          ]
        },
        {
          day: "Day 2",
          title: "逛街、咖啡與金色的日落饗宴",
          activities: [
            { time: "白天", text: "水明漾市區逛街、文青咖啡店 (Titik Temu Coffee)", icon: <Coffee size={16} /> },
            { time: "放鬆", text: "Lluvia Spa 熱石按摩", icon: <Heart size={16} /> },
            { time: "午餐", text: "Bo and Bun 越式餐廳", icon: <Utensils size={16} /> },
            { time: "傍晚", text: "Potato Head Beach Club (絕美夕陽、無邊際泳池)", icon: <Sun size={16} /> }
          ]
        },
        {
          day: "Day 3",
          title: "絕景滿滿的一天",
          activities: [
            { time: "上午", text: "Tanah Barak Cliff 石灰岩峽谷步道 (藍色公路)", icon: <Camera size={16} /> },
            { time: "中午", text: "One Eighty Day Club 懸崖泳池餐廳", icon: <Utensils size={16} /> },
            { time: "下午", text: "神鷹廣場 (GWK Cultural Park)", icon: <Map size={16} /> },
            { time: "傍晚", text: "烏魯瓦圖廟 (Uluwatu Temple) 看火舞與日落", icon: <Sun size={16} /> },
            { time: "晚餐", text: "Moggumung Seminyak 韓式烤肉", icon: <Utensils size={16} /> }
          ]
        }
      ]
    },
    {
      id: "chapter2",
      title: "第二章：山林之心",
      location: "烏布 (Ubud)",
      days: "Days 4-6",
      theme: "nature", // green
      icon: <Palmtree className="w-6 h-6" />,
      desc: "梯田、瀑布與叢林的生命力",
      details: [
        {
          day: "Day 4",
          title: "走進綠意盎然的山區",
          activities: [
            { time: "上午", text: "移動至烏布，德哥拉朗梯田 (Alas Harum Bali) 玩叢林鞦韆", icon: <Mountain size={16} /> },
            { time: "景點", text: "參觀烏布皇宮", icon: <Map size={16} /> },
            { time: "午茶", text: "Pison Café 感受慢活氣氛", icon: <Coffee size={16} /> },
            { time: "住宿", text: "Adiwana Suweta (靜謐又舒服)", icon: <Hotel size={16} /> }
          ]
        },
        {
          day: "Day 5",
          title: "叢林越野與身心靈放鬆",
          activities: [
            { time: "上午", text: "ATV 越野體驗 (DADI Bali Adventures) 刺激好玩", icon: <CarIcon /> },
            { time: "下午", text: "聖猴森林公園 (Sacred Monkey Forest)", icon: <Palmtree size={16} /> },
            { time: "晚餐", text: "L'Osteria Pizza 或 Kagemusha", icon: <Utensils size={16} /> },
            { time: "晚上", text: "飯店內 Tejas Spa 享受療程", icon: <Heart size={16} /> }
          ]
        },
        {
          day: "Day 6",
          title: "瀑布巡禮與自然奇觀",
          activities: [
            { time: "景點", text: "Tibumana Waterfall (簾幕般水流)", icon: <Waves size={16} /> },
            { time: "景點", text: "Kanto Lampo Waterfall (層疊岩石)", icon: <Waves size={16} /> },
            { time: "景點", text: "Goa Rang Reng Waterfall (探險氣息)", icon: <Waves size={16} /> },
            { time: "午餐", text: "OMMA Dayclub Bali (俯瞰 Tegenungan 瀑布)", icon: <Utensils size={16} /> }
          ]
        }
      ]
    },
    {
      id: "chapter3",
      title: "第三章：海島天堂",
      location: "努沙杜瓦 (Nusa Dua)",
      days: "Days 7-9",
      theme: "ocean", // blue
      icon: <Waves className="w-6 h-6" />,
      desc: "奢華飯店、藍夢島與無所事事的快樂",
      details: [
        {
          day: "Day 7",
          title: "回歸海邊，負責耍廢",
          activities: [
            { time: "上午", text: "移動至努沙杜瓦", icon: <CarIcon /> },
            { time: "住宿", text: "Renaissance Bali Nusa Dua Resort (設施齊全、超讚泳池)", icon: <Hotel size={16} /> },
            { time: "活動", text: "待在飯店耍廢，享受度假狀態", icon: <Heart size={16} /> },
            { time: "晚餐", text: "Nusa By/Suka 餐廳", icon: <Utensils size={16} /> }
          ]
        },
        {
          day: "Day 8",
          title: "跳島一日遊：藍夢島與金銀島",
          activities: [
            { time: "活動", text: "Klook 一日遊，搭船出海", icon: <Plane size={16} /> },
            { time: "體驗", text: "玩水、曬太陽、夢幻沙灘 (比較不擁擠)", icon: <Sun size={16} /> },
            { time: "晚餐", text: "髒鴨飯 (Bebek Bengil) 或 烤豬飯 (Babi Guling)", icon: <Utensils size={16} /> }
          ]
        },
        {
          day: "Day 9",
          title: "在天堂的最後一頓早餐",
          activities: [
            { time: "上午", text: "享用飯店豐盛早餐", icon: <Coffee size={16} /> },
            { time: "12:40", text: "抵達機場準備返台", icon: <Plane size={16} /> },
            { time: "15:40", text: "CI772 航班起飛", icon: <Plane size={16} /> }
          ]
        }
      ]
    }
  ];

  const costs = [
    { item: "國際機票", price: "54,861" },
    { item: "總住宿", price: "49,453" },
    { item: "交通 (包車等)", price: "6,900" },
    { item: "一日遊活動", price: "4,863" },
    { item: "保險 & 網卡", price: "5,000" },
  ];

  const flightInfo = {
    outbound: { date: "4/25", flight: "CI771", time: "09:10 - 14:40", route: "桃園 → 峇里島" },
    inbound: { date: "5/3", flight: "CI772", time: "15:40 - 21:05", route: "峇里島 → 桃園" }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-700 selection:bg-rose-200">
      
      {/* Hero Section */}
      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-200/50 to-orange-100/50 mix-blend-multiply"></div>
            {/* Abstract Background Shapes */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
            <div className="absolute top-20 right-20 w-64 h-64 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-20 left-1/2 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-4 inline-block px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm text-sm font-medium text-stone-500 shadow-sm">
            4月25日 - 5月3日 | 貓貓與吉伊卡哇的探險筆記
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-stone-800 mb-6 drop-shadow-sm">
            我們的峇里島<br />
            <span className="text-rose-500">九日療癒之旅</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            這不只是一趟旅行，而是一場精心策劃的療癒。<br />
            捨棄趕景點，改用最放鬆的節奏，享受自然與美食。
          </p>
          <div className="mt-10 flex gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('itinerary')}
              className="px-8 py-3 bg-stone-800 text-white rounded-full font-medium hover:bg-stone-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              開啟旅程
            </button>
            <button 
               onClick={() => scrollToSection('info')}
               className="px-8 py-3 bg-white text-stone-800 rounded-full font-medium hover:bg-stone-100 transition-all shadow-md hover:shadow-lg border border-stone-200"
            >
              航班與費用
            </button>
          </div>
        </div>
      </header>

      {/* Characters Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">療癒探險隊成員</h2>
            <div className="w-16 h-1 bg-rose-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {characters.map((char: any, index: number) => (
              <div key={index} className="group relative bg-stone-50 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-stone-100 transform hover:-translate-y-2">
                <div className={`w-24 h-24 mx-auto rounded-full ${char.color} flex items-center justify-center text-5xl mb-6 shadow-inner`}>
                  {char.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">{char.name}</h3>
                <p className="text-sm font-medium text-rose-500 mb-4 uppercase tracking-wider">{char.role}</p>
                <p className="text-stone-600 leading-relaxed">{char.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters Navigation (Sticky) */}
      <div id="itinerary" className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 overflow-x-auto">
          <div className="flex justify-center min-w-max">
            {chapters.map((chapter: any) => (
              <button
                key={chapter.id}
                onClick={() => {
                  setActiveTab(chapter.id);
                  scrollToSection(chapter.id);
                }}
                className={`px-6 py-5 text-sm md:text-base font-medium transition-colors border-b-4 ${
                  activeTab === chapter.id 
                    ? `border-${chapter.theme === 'warm' ? 'orange' : chapter.theme === 'nature' ? 'green' : 'blue'}-500 text-stone-800` 
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                {chapter.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Itinerary Sections */}
      <div className="bg-stone-50">
        {chapters.map((chapter: any) => (
          <section key={chapter.id} id={chapter.id} className="py-20 px-6 border-b border-stone-200 last:border-0">
            <div className="max-w-5xl mx-auto">
              {/* Chapter Header */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-12">
                <div className={`p-4 rounded-2xl ${
                  chapter.theme === 'warm' ? 'bg-orange-100 text-orange-600' : 
                  chapter.theme === 'nature' ? 'bg-green-100 text-green-600' : 
                  'bg-blue-100 text-blue-600'
                }`}>
                  {React.cloneElement(chapter.icon, { size: 32 })}
                </div>
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                    <h2 className="text-3xl font-bold text-stone-800">{chapter.location}</h2>
                    <span className="px-3 py-1 bg-stone-200 text-stone-600 text-xs font-bold rounded-full">{chapter.days}</span>
                  </div>
                  <h3 className="text-xl text-stone-600 font-medium mb-2">{chapter.title}</h3>
                  <p className="text-stone-500">{chapter.desc}</p>
                </div>
              </div>

              {/* Days Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {chapter.details.map((day: any, idx: number) => (
                  <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-stone-100">
                    <div className={`h-2 w-full ${
                       chapter.theme === 'warm' ? 'bg-orange-400' : 
                       chapter.theme === 'nature' ? 'bg-green-400' : 
                       'bg-blue-400'
                    }`}></div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                         <span className={`text-xs font-bold px-2 py-1 rounded text-white ${
                            chapter.theme === 'warm' ? 'bg-orange-400' : 
                            chapter.theme === 'nature' ? 'bg-green-400' : 
                            'bg-blue-400'
                         }`}>
                           {day.day}
                         </span>
                      </div>
                      <h4 className="text-lg font-bold text-stone-800 mb-6 h-14">{day.title}</h4>
                      
                      <div className="space-y-4">
                        {day.activities.map((act: any, actIdx: number) => (
                          <div key={actIdx} className="flex gap-3 text-sm">
                            <div className="mt-0.5 text-stone-400 flex-shrink-0">
                              {act.icon}
                            </div>
                            <div>
                               <span className="block font-semibold text-xs text-stone-400 uppercase tracking-wide mb-0.5">{act.time}</span>
                               <span className="text-stone-700">{act.text}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Info & Cost Section */}
      <section id="info" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">旅程資訊與費用</h2>
            <div className="w-16 h-1 bg-rose-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Flight Info */}
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
              <div className="flex items-center gap-3 mb-6">
                 <Plane className="text-rose-500" />
                 <h3 className="text-xl font-bold text-stone-800">航班資訊 (中華航空)</h3>
              </div>
              
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-stone-200">
                   <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-rose-400 border-4 border-white shadow-sm"></div>
                   <p className="text-sm font-bold text-stone-400 mb-1">去程 {flightInfo.outbound.date}</p>
                   <p className="text-lg font-bold text-stone-800">{flightInfo.outbound.route}</p>
                   <p className="text-stone-600">{flightInfo.outbound.flight} | {flightInfo.outbound.time}</p>
                </div>
                <div className="relative pl-6 border-l-2 border-stone-200">
                   <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-400 border-4 border-white shadow-sm"></div>
                   <p className="text-sm font-bold text-stone-400 mb-1">回程 {flightInfo.inbound.date}</p>
                   <p className="text-lg font-bold text-stone-800">{flightInfo.inbound.route}</p>
                   <p className="text-stone-600">{flightInfo.inbound.flight} | {flightInfo.inbound.time}</p>
                </div>
              </div>
            </div>

            {/* Cost Table */}
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
              <div className="flex items-center gap-3 mb-6">
                 <DollarSign className="text-rose-500" />
                 <h3 className="text-xl font-bold text-stone-800">費用概覽 (每人)</h3>
              </div>
              
              <div className="space-y-3 mb-6">
                {costs.map((cost: any, idx: number) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-stone-200 last:border-0">
                    <span className="text-stone-600">{cost.item}</span>
                    <span className="font-medium text-stone-800">TWD {cost.price}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-white p-4 rounded-xl flex justify-between items-center shadow-sm">
                 <span className="font-bold text-stone-800">團費總計</span>
                 <span className="text-xl font-bold text-rose-500">TWD 40,359</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 新增的吉伊卡哇 Section */}
      <section className="py-16 bg-white text-center overflow-hidden">
        <h3 className="text-2xl font-bold text-stone-800 mb-6">帶著滿滿的療癒回家吧！</h3>
        <div className="relative w-64 h-64 mx-auto animate-bounce" style={{ animationDuration: '3s' }}>
           {/* SVG Code for Chikawa-like character */}
           <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl">
             {/* Ears */}
             <circle cx="50" cy="50" r="25" fill="#FFFFFF" stroke="#57534e" strokeWidth="4"/>
             <circle cx="150" cy="50" r="25" fill="#FFFFFF" stroke="#57534e" strokeWidth="4"/>
             {/* Body/Face */}
             <rect x="30" y="40" width="140" height="130" rx="60" fill="#FFFFFF" stroke="#57534e" strokeWidth="4"/>
             {/* Face Features */}
             {/* Eyes */}
             <circle cx="70" cy="90" r="6" fill="#292524"/>
             <circle cx="130" cy="90" r="6" fill="#292524"/>
             {/* Cheeks */}
             <ellipse cx="55" cy="105" rx="12" ry="8" fill="#fda4af" opacity="0.6"/>
             <ellipse cx="145" cy="105" rx="12" ry="8" fill="#fda4af" opacity="0.6"/>
             {/* Mouth (W shape) */}
             <path d="M85 110 Q92 120 100 115 Q108 120 115 110" fill="none" stroke="#292524" strokeWidth="3" strokeLinecap="round"/>
             {/* Hands */}
             <ellipse cx="20" cy="120" rx="15" ry="12" fill="#FFFFFF" stroke="#57534e" strokeWidth="4" transform="rotate(-20 20 120)"/>
             <ellipse cx="180" cy="120" rx="15" ry="12" fill="#FFFFFF" stroke="#57534e" strokeWidth="4" transform="rotate(20 180 120)"/>
           </svg>
        </div>
        <p className="text-stone-500 mt-4 font-medium">哇！是吉伊卡哇！</p>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-2 mb-6 text-2xl">
            <span>🐱</span><span>😺</span><span>🐻‍❄️</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Mission Complete!</h2>
          <p className="mb-8">Seminyak 日落時光 • Ubud 秘境瀑布 • Nusa Dua 藍色潟湖</p>
          <div className="text-sm border-t border-stone-800 pt-8">
            © 2025 林北三人成團
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-rose-500 text-white rounded-full shadow-lg hover:bg-rose-600 transition-colors z-50 animate-bounce"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
};

export default BaliTrip;