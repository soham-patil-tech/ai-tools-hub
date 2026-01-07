/* =======================
   AI TOOLS DATA
   ======================= */

const tools = [

/* ===== CHAT ===== */
{ name:"ChatGPT", category:"chat", link:"https://chat.openai.com", tags:["chat","assistant"], description:"Conversational AI assistant." },
{ name:"Claude", category:"chat", link:"https://claude.ai", tags:["chat","writing"], description:"AI for reasoning & writing." },
{ name:"Gemini", category:"chat", link:"https://gemini.google.com", tags:["chat"], description:"Google AI assistant." },
{ name:"Perplexity AI", category:"chat", link:"https://perplexity.ai", tags:["chat","search"], description:"AI search with citations." },
{ name:"Poe", category:"chat", link:"https://poe.com", tags:["chat"], description:"Multiple AI models in one place." },
{ name:"YouChat", category:"chat", link:"https://you.com", tags:["chat","search"], description:"Chat + web search." },
{ name:"Pi AI", category:"chat", link:"https://pi.ai", tags:["assistant"], description:"Personal AI companion." },
{ name:"HuggingChat", category:"chat", link:"https://huggingface.co/chat", tags:["open-source"], description:"Open-source AI chat." },
{ name:"Character AI", category:"chat", link:"https://character.ai", tags:["chatbot"], description:"Chat with AI characters." },
{ name:"Komo AI", category:"chat", link:"https://komo.ai", tags:["search"], description:"AI-powered chat search." },

/* ===== IMAGE ===== */
{ name:"Leonardo AI", category:"image", link:"https://leonardo.ai", tags:["image","art"], description:"AI image generation." },
{ name:"Playground AI", category:"image", link:"https://playgroundai.com", tags:["image"], description:"Free AI image creation." },
{ name:"Craiyon", category:"image", link:"https://craiyon.com", tags:["image"], description:"Text-to-image AI." },
{ name:"NightCafe", category:"image", link:"https://nightcafe.studio", tags:["art"], description:"AI art generator." },
{ name:"Lexica", category:"image", link:"https://lexica.art", tags:["search"], description:"AI image search." },
{ name:"Artbreeder", category:"image", link:"https://artbreeder.com", tags:["image"], description:"Blend AI images." },
{ name:"Remove.bg", category:"image", link:"https://remove.bg", tags:["background"], description:"Remove image background." },
{ name:"Cleanup Pictures", category:"image", link:"https://cleanup.pictures", tags:["editing"], description:"Remove objects from photos." },
{ name:"Upscayl", category:"image", link:"https://upscayl.org", tags:["upscale"], description:"AI image upscaler." },
{ name:"Fotor AI", category:"image", link:"https://fotor.com", tags:["editing"], description:"AI photo editing." },

/* ===== VIDEO ===== */
{ name:"Runway ML", category:"video", link:"https://runwayml.com", tags:["video"], description:"AI video editing & generation." },
{ name:"Pictory", category:"video", link:"https://pictory.ai", tags:["video"], description:"Text to video AI." },
{ name:"Fliki", category:"video", link:"https://fliki.ai", tags:["tts"], description:"Text to video with voice." },
{ name:"CapCut", category:"video", link:"https://capcut.com", tags:["editing"], description:"AI video editor." },
{ name:"Descript", category:"video", link:"https://descript.com", tags:["editing"], description:"Edit video by text." },
{ name:"VEED", category:"video", link:"https://veed.io", tags:["video"], description:"Online AI video editor." },
{ name:"InVideo", category:"video", link:"https://invideo.io", tags:["video"], description:"AI video creation." },
{ name:"Kapwing", category:"video", link:"https://kapwing.com", tags:["editing"], description:"Collaborative video editor." },
{ name:"Lumen5", category:"video", link:"https://lumen5.com", tags:["video"], description:"AI marketing videos." },
{ name:"Pika Labs", category:"video", link:"https://pika.network", tags:["ai"], description:"AI short video generator." },

/* ===== WRITING ===== */
{ name:"Grammarly", category:"writing", link:"https://grammarly.com", tags:["writing"], description:"Grammar & clarity checker." },
{ name:"QuillBot", category:"writing", link:"https://quillbot.com", tags:["rewrite"], description:"Paraphrasing tool." },
{ name:"Rytr", category:"writing", link:"https://rytr.me", tags:["content"], description:"AI writing assistant." },
{ name:"Copy.ai", category:"writing", link:"https://copy.ai", tags:["marketing"], description:"Marketing copy generator." },
{ name:"Wordtune", category:"writing", link:"https://wordtune.com", tags:["rewrite"], description:"Rewrite sentences." },
{ name:"Writesonic", category:"writing", link:"https://writesonic.com", tags:["content"], description:"AI content writing." },
{ name:"Sudowrite", category:"writing", link:"https://sudowrite.com", tags:["story"], description:"Creative writing AI." },
{ name:"INK", category:"writing", link:"https://inkforall.com", tags:["seo"], description:"SEO writing assistant." },
{ name:"Hemingway App", category:"writing", link:"https://hemingwayapp.com", tags:["clarity"], description:"Improve readability." },
{ name:"ChatPDF", category:"writing", link:"https://chatpdf.com", tags:["pdf"], description:"Chat with PDFs." },

/* ===== EDUCATION ===== */
{ name:"Khanmigo", category:"education", link:"https://www.khanacademy.org/khan-labs", tags:["tutor"], description:"AI tutor by Khan Academy." },
{ name:"Duolingo Max", category:"education", link:"https://duolingo.com", tags:["language"], description:"AI-powered language learning." },
{ name:"Coursera Coach", category:"education", link:"https://coursera.org", tags:["learning"], description:"AI-assisted courses." },
{ name:"Quizlet AI", category:"education", link:"https://quizlet.com", tags:["study"], description:"AI flashcards & quizzes." },
{ name:"Socratic", category:"education", link:"https://socratic.org", tags:["homework"], description:"Google AI homework helper." },
{ name:"Brainly AI", category:"education", link:"https://brainly.com", tags:["education"], description:"Student Q&A AI." },
{ name:"Gradescope", category:"education", link:"https://gradescope.com", tags:["grading"], description:"AI grading & feedback." },
{ name:"Elicit", category:"education", link:"https://elicit.org", tags:["research"], description:"AI research assistant." },
{ name:"Scite", category:"education", link:"https://scite.ai", tags:["citations"], description:"Smart citation analysis." },
{ name:"Explainpaper", category:"education", link:"https://explainpaper.com", tags:["papers"], description:"Explain research papers." },

/* ===== AUTOMATION ===== */
{ name:"Zapier", category:"automation", link:"https://zapier.com", tags:["automation"], description:"Automate workflows." },
{ name:"IFTTT", category:"automation", link:"https://ifttt.com", tags:["automation"], description:"Automate daily tasks." },
{ name:"n8n", category:"automation", link:"https://n8n.io", tags:["open-source"], description:"Workflow automation." },
{ name:"Make", category:"automation", link:"https://make.com", tags:["automation"], description:"Advanced automation builder." },
{ name:"UiPath", category:"automation", link:"https://uipath.com", tags:["rpa"], description:"Robotic process automation." },
{ name:"Automation Anywhere", category:"automation", link:"https://automationanywhere.com", tags:["rpa"], description:"Enterprise automation." },
{ name:"Bardeen AI", category:"automation", link:"https://bardeen.ai", tags:["automation"], description:"Browser automation." },
{ name:"Browse AI", category:"automation", link:"https://browse.ai", tags:["scraping"], description:"Web data extraction." },
{ name:"Relevance AI", category:"automation", link:"https://relevanceai.com", tags:["automation"], description:"Business automation." },
{ name:"Peltarion", category:"automation", link:"https://peltarion.com", tags:["ml"], description:"ML workflow automation." },
];


/* =======================
   APP LOGIC (FIXED)
   ======================= */

const container = document.getElementById("toolsContainer");
const searchInput = document.getElementById("searchInput");
const categoryItems = document.querySelectorAll("#categoryList li");
const themeToggle = document.getElementById("themeToggle");
const backToTop = document.getElementById("backToTop");
const resultCount = document.getElementById("resultCount");

let currentCategory = "all";

function renderTools(){
  container.innerHTML = "";
  const search = searchInput.value.toLowerCase();

  const filtered = tools.filter(t =>
    (currentCategory === "all" || t.category === currentCategory) &&
    (t.name.toLowerCase().includes(search) ||
     t.description.toLowerCase().includes(search) ||
     t.tags.join(" ").toLowerCase().includes(search))
  );

  resultCount.innerText = `Showing ${filtered.length} tools`;

  filtered.forEach(t=>{
    const card = document.createElement("div");
    card.className = "tool-card";
    card.innerHTML = `
      <h3>${t.name}</h3>
      <p>${t.description}</p>
      <a href="${t.link}" target="_blank" class="visit-btn">Visit Tool</a>
      <div>${t.tags.map(tag=>`<span class="tag">#${tag}</span>`).join("")}</div>
    `;
    container.appendChild(card);
  });
}

categoryItems.forEach(item=>{
  item.onclick = ()=>{
    categoryItems.forEach(i=>i.classList.remove("active"));
    item.classList.add("active");
    currentCategory = item.dataset.cat;
    renderTools();
  };
});

searchInput.addEventListener("input", renderTools);

themeToggle.onclick = ()=>{
  document.body.classList.toggle("light");
};

window.addEventListener("scroll", ()=>{
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.onclick = ()=>{
  window.scrollTo({top:0, behavior:"smooth"});
};

renderTools();
