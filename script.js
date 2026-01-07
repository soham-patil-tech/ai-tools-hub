/* =======================
   AI TOOLS DATA (10+ EACH)
   ======================= */

const tools = [

/* ===== CHAT (10) ===== */
{ name:"ChatGPT", category:"chat", link:"https://chat.openai.com", tags:["chat","assistant"], description:"Conversational AI assistant." },
{ name:"Claude", category:"chat", link:"https://claude.ai", tags:["chat","writing"], description:"AI for reasoning & writing." },
{ name:"Gemini", category:"chat", link:"https://gemini.google.com", tags:["chat"], description:"Google AI assistant." },
{ name:"Perplexity AI", category:"chat", link:"https://perplexity.ai", tags:["chat","search"], description:"AI search with citations." },
{ name:"Poe", category:"chat", link:"https://poe.com", tags:["chat"], description:"Multiple AI models in one place." },
{ name:"YouChat", category:"chat", link:"https://you.com", tags:["chat","search"], description:"Chat + live web search." },
{ name:"Pi AI", category:"chat", link:"https://pi.ai", tags:["assistant"], description:"Personal AI companion." },
{ name:"HuggingChat", category:"chat", link:"https://huggingface.co/chat", tags:["open-source"], description:"Open-source AI chat." },
{ name:"Character AI", category:"chat", link:"https://character.ai", tags:["chatbot"], description:"Chat with AI characters." },
{ name:"Phind", category:"chat", link:"https://phind.com", tags:["dev","search"], description:"Developer-focused AI search." },

/* ===== IMAGE (10) ===== */
{ name:"Leonardo AI", category:"image", link:"https://leonardo.ai", tags:["image","art"], description:"AI image generation." },
{ name:"Playground AI", category:"image", link:"https://playgroundai.com", tags:["image"], description:"Free AI image creation." },
{ name:"Craiyon", category:"image", link:"https://craiyon.com", tags:["image"], description:"Text-to-image AI." },
{ name:"NightCafe", category:"image", link:"https://nightcafe.studio", tags:["art"], description:"AI art generator." },
{ name:"Lexica", category:"image", link:"https://lexica.art", tags:["search"], description:"AI image search & gen." },
{ name:"Artbreeder", category:"image", link:"https://artbreeder.com", tags:["image"], description:"Blend AI images." },
{ name:"Remove.bg", category:"image", link:"https://remove.bg", tags:["background"], description:"Remove image background." },
{ name:"Cleanup Pictures", category:"image", link:"https://cleanup.pictures", tags:["editing"], description:"Remove objects from photos." },
{ name:"Upscayl", category:"image", link:"https://upscayl.org", tags:["upscale"], description:"AI image upscaler." },
{ name:"Fotor AI", category:"image", link:"https://fotor.com", tags:["editing"], description:"AI photo editing." },

/* ===== VIDEO (10) ===== */
{ name:"Runway ML", category:"video", link:"https://runwayml.com", tags:["video"], description:"AI video editing & gen." },
{ name:"Pictory", category:"video", link:"https://pictory.ai", tags:["video"], description:"Text to video AI." },
{ name:"Fliki", category:"video", link:"https://fliki.ai", tags:["tts"], description:"Text to video with voice." },
{ name:"CapCut", category:"video", link:"https://capcut.com", tags:["editing"], description:"AI video editor." },
{ name:"Descript", category:"video", link:"https://descript.com", tags:["editing"], description:"Edit video by text." },
{ name:"VEED", category:"video", link:"https://veed.io", tags:["video"], description:"Online AI video editor." },
{ name:"InVideo", category:"video", link:"https://invideo.io", tags:["video"], description:"AI video creation." },
{ name:"Kapwing", category:"video", link:"https://kapwing.com", tags:["editing"], description:"Collaborative video editor." },
{ name:"Lumen5", category:"video", link:"https://lumen5.com", tags:["video"], description:"AI marketing videos." },
{ name:"Pika Labs", category:"video", link:"https://pika.network", tags:["ai"], description:"AI short video generator." },

/* ===== WRITING (10) ===== */
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

/* ===== CODE (10) ===== */
{ name:"GitHub Copilot", category:"code", link:"https://github.com/features/copilot", tags:["code"], description:"AI coding assistant." },
{ name:"Blackbox AI", category:"code", link:"https://blackbox.ai", tags:["code"], description:"AI code generation." },
{ name:"Codeium", category:"code", link:"https://codeium.com", tags:["code"], description:"Free AI code completion." },
{ name:"Tabnine", category:"code", link:"https://tabnine.com", tags:["code"], description:"AI autocomplete." },
{ name:"Replit AI", category:"code", link:"https://replit.com", tags:["code"], description:"AI coding in browser." },
{ name:"Cursor", category:"code", link:"https://cursor.sh", tags:["editor"], description:"AI code editor." },
{ name:"Phind", category:"code", link:"https://phind.com", tags:["search"], description:"Developer AI search." },
{ name:"AskCodi", category:"code", link:"https://askcodi.com", tags:["dev"], description:"AI coding help." },
{ name:"Sourcegraph Cody", category:"code", link:"https://sourcegraph.com/cody", tags:["code"], description:"AI code assistant." },
{ name:"Mutable AI", category:"code", link:"https://mutable.ai", tags:["code"], description:"AI code refactoring." },

/* ===== PRODUCTIVITY (10) ===== */
{ name:"Notion AI", category:"productivity", link:"https://notion.so", tags:["notes"], description:"AI notes & docs." },
{ name:"Taskade", category:"productivity", link:"https://taskade.com", tags:["tasks"], description:"AI task management." },
{ name:"ClickUp AI", category:"productivity", link:"https://clickup.com", tags:["tasks"], description:"AI project management." },
{ name:"Trello", category:"productivity", link:"https://trello.com", tags:["tasks"], description:"Task boards." },
{ name:"Gamma", category:"productivity", link:"https://gamma.app", tags:["slides"], description:"AI presentations." },
{ name:"Tome", category:"productivity", link:"https://tome.app", tags:["story"], description:"AI storytelling." },
{ name:"Supernormal", category:"productivity", link:"https://supernormal.com", tags:["meetings"], description:"AI meeting notes." },
{ name:"Caktus AI", category:"productivity", link:"https://caktus.ai", tags:["students"], description:"Student productivity AI." },
{ name:"Fireflies", category:"productivity", link:"https://fireflies.ai", tags:["meetings"], description:"AI meeting recorder." },
{ name:"Clockwise", category:"productivity", link:"https://getclockwise.com", tags:["time"], description:"AI time optimization." },

/* ===== AUDIO (10) ===== */
{ name:"Murf AI", category:"audio", link:"https://murf.ai", tags:["voice"], description:"AI voice generator." },
{ name:"ElevenLabs", category:"audio", link:"https://elevenlabs.io", tags:["voice"], description:"Realistic AI voices." },
{ name:"Otter.ai", category:"audio", link:"https://otter.ai", tags:["transcription"], description:"AI meeting transcription." },
{ name:"Soundraw", category:"audio", link:"https://soundraw.io", tags:["music"], description:"AI music generator." },
{ name:"Mubert", category:"audio", link:"https://mubert.com", tags:["music"], description:"AI music streaming." },
{ name:"Lalal.ai", category:"audio", link:"https://lalal.ai", tags:["audio"], description:"Vocal remover." },
{ name:"PlayHT", category:"audio", link:"https://play.ht", tags:["tts"], description:"Text to speech AI." },
{ name:"Voicemaker", category:"audio", link:"https://voicemaker.in", tags:["tts"], description:"AI voice generation." },
{ name:"Resemble AI", category:"audio", link:"https://resemble.ai", tags:["voice"], description:"Voice cloning AI." },
{ name:"Cleanvoice", category:"audio", link:"https://cleanvoice.ai", tags:["audio"], description:"Remove filler words." }

/* ===== EDUCATION (10) ===== */
{ name:"Khanmigo", category:"education", link:"https://www.khanacademy.org/khan-labs", tags:["education","tutor"], description:"AI tutor by Khan Academy." },
{ name:"Duolingo Max", category:"education", link:"https://duolingo.com", tags:["language"], description:"AI-powered language learning." },
{ name:"Coursera Coach", category:"education", link:"https://coursera.org", tags:["learning"], description:"AI-assisted online learning." },
{ name:"Quizlet AI", category:"education", link:"https://quizlet.com", tags:["study"], description:"AI-generated flashcards & quizzes." },
{ name:"Socratic", category:"education", link:"https://socratic.org", tags:["homework"], description:"Google AI homework helper." },
{ name:"Brainly AI", category:"education", link:"https://brainly.com", tags:["education"], description:"AI-powered student help platform." },
{ name:"Gradescope", category:"education", link:"https://gradescope.com", tags:["grading"], description:"AI-assisted grading & feedback." },
{ name:"Elicit", category:"education", link:"https://elicit.org", tags:["research"], description:"AI research assistant for students." },
{ name:"Scite", category:"education", link:"https://scite.ai", tags:["research"], description:"Smart citation analysis tool." },
{ name:"Explainpaper", category:"education", link:"https://explainpaper.com", tags:["papers"], description:"Explain academic research papers." },

/* ===== AUTOMATION (10) ===== */
{ name:"Zapier", category:"automation", link:"https://zapier.com", tags:["automation"], description:"Automate workflows across apps." },
{ name:"IFTTT", category:"automation", link:"https://ifttt.com", tags:["automation"], description:"Automate everyday tasks." },
{ name:"n8n", category:"automation", link:"https://n8n.io", tags:["open-source"], description:"Open-source workflow automation." },
{ name:"Make (Integromat)", category:"automation", link:"https://make.com", tags:["automation"], description:"Advanced automation builder." },
{ name:"Peltarion", category:"automation", link:"https://peltarion.com", tags:["ml"], description:"ML workflow automation." },
{ name:"UiPath", category:"automation", link:"https://uipath.com", tags:["rpa"], description:"Robotic process automation." },
{ name:"Automation Anywhere", category:"automation", link:"https://automationanywhere.com", tags:["rpa"], description:"Enterprise automation platform." },
{ name:"Bardeen AI", category:"automation", link:"https://bardeen.ai", tags:["automation"], description:"AI browser automation tool." },
{ name:"Browse AI", category:"automation", link:"https://browse.ai", tags:["scraping"], description:"Automate web data extraction." },
{ name:"Relevance AI", category:"automation", link:"https://relevanceai.com", tags:["automation"], description:"AI-powered business automation." },

/* ===== SEARCH (10) ===== */
{ name:"Perplexity AI", category:"search", link:"https://perplexity.ai", tags:["search","ai"], description:"AI-powered search with citations." },
{ name:"You.com", category:"search", link:"https://you.com", tags:["search"], description:"AI search engine." },
{ name:"Komo AI", category:"search", link:"https://komo.ai", tags:["search"], description:"AI-powered search assistant." },
{ name:"Phind", category:"search", link:"https://phind.com", tags:["dev"], description:"Developer-focused AI search." },
{ name:"Consensus", category:"search", link:"https://consensus.app", tags:["research"], description:"Search research papers using AI." },
{ name:"Andi Search", category:"search", link:"https://andisearch.com", tags:["search"], description:"Conversational AI search engine." },
{ name:"Neeva AI", category:"search", link:"https://neeva.com", tags:["search"], description:"Ad-free AI search." },
{ name:"Elicit", category:"search", link:"https://elicit.org", tags:["research"], description:"AI research search tool." },
{ name:"Scite", category:"search", link:"https://scite.ai", tags:["citations"], description:"Citation-based search." },
{ name:"Metaphor", category:"search", link:"https://metaphor.systems", tags:["search"], description:"Search engine for LLMs." },

/* ===== SEO (10) ===== */
{ name:"Surfer SEO", category:"seo", link:"https://surferseo.com", tags:["seo"], description:"AI SEO content optimization." },
{ name:"Frase", category:"seo", link:"https://frase.io", tags:["seo","content"], description:"AI SEO content research." },
{ name:"NeuronWriter", category:"seo", link:"https://neuronwriter.com", tags:["seo"], description:"AI SEO writing assistant." },
{ name:"Scalenut", category:"seo", link:"https://scalenut.com", tags:["seo"], description:"AI SEO & content marketing." },
{ name:"Outranking", category:"seo", link:"https://outranking.io", tags:["seo"], description:"AI SEO strategy platform." },
{ name:"MarketMuse", category:"seo", link:"https://marketmuse.com", tags:["seo"], description:"AI content planning for SEO." },
{ name:"Clearscope", category:"seo", link:"https://clearscope.io", tags:["seo"], description:"SEO optimization platform." },
{ name:"Semrush AI", category:"seo", link:"https://semrush.com", tags:["seo"], description:"SEO tools with AI insights." },
{ name:"Ahrefs AI", category:"seo", link:"https://ahrefs.com", tags:["seo"], description:"SEO analysis with AI features." },
{ name:"RankIQ", category:"seo", link:"https://rankiq.com", tags:["seo"], description:"AI SEO tool for bloggers." },

/* ===== DESIGN (10) ===== */
{ name:"Canva AI", category:"design", link:"https://canva.com", tags:["design"], description:"AI-powered design platform." },
{ name:"Adobe Firefly", category:"design", link:"https://firefly.adobe.com", tags:["design"], description:"Adobe’s generative AI design tools." },
{ name:"Figma AI", category:"design", link:"https://figma.com", tags:["ui"], description:"AI-powered UI/UX design." },
{ name:"Uizard", category:"design", link:"https://uizard.io", tags:["ui"], description:"AI UI design generator." },
{ name:"Framer AI", category:"design", link:"https://framer.com", tags:["web"], description:"AI website builder." },
{ name:"Khroma", category:"design", link:"https://khroma.co", tags:["colors"], description:"AI color palette generator." },
{ name:"Looka", category:"design", link:"https://looka.com", tags:["branding"], description:"AI logo & brand kit generator." },
{ name:"Flair AI", category:"design", link:"https://flair.ai", tags:["branding"], description:"AI product visuals." },
{ name:"Designs.ai", category:"design", link:"https://designs.ai", tags:["branding"], description:"AI design suite." },
{ name:"Visily", category:"design", link:"https://visily.ai", tags:["ui"], description:"AI wireframing & UI tool." },
];

/* =======================
   APP LOGIC (UNCHANGED)
   ======================= */

const container = document.getElementById("toolsContainer");
const searchInput = document.getElementById("searchInput");
const categoryItems = document.querySelectorAll("#categoryList li");
const backToTop = document.getElementById("backToTop");
const resultCount = document.getElementById("resultCount");

let currentCategory = "all";

function renderTools(){
  container.innerHTML = "";
  const search = searchInput.value.toLowerCase();

  const filtered = tools.filter(t =>
    (currentCategory === "all" || t.category === currentCategory) &&
    t.name.toLowerCase().includes(search)
  );

  resultCount.innerText = `Showing ${filtered.length} tools`;

  if(filtered.length === 0){
    container.innerHTML = `
      <div class="tool-card">
        <h3>No tools found</h3>
        <p>Try another keyword or category.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(t=>{
    const card = document.createElement("div");
    card.className = "tool-card";
    card.innerHTML = `
      <h3>${t.name}</h3>
      <p>${t.description}</p>
      <a href="${t.link}" target="_blank" class="visit-btn">Visit Tool</a>
      <div>
        ${t.tags.map(tag=>`<span class="tag">#${tag}</span>`).join("")}
      </div>
    `;
    container.appendChild(card);
  });
}

/* CATEGORY FILTER */
categoryItems.forEach(item=>{
  item.onclick = ()=>{
    categoryItems.forEach(i=>i.classList.remove("active"));
    item.classList.add("active");
    currentCategory = item.dataset.cat;
    renderTools();
  };
});

/* SEARCH */
searchInput.addEventListener("input", renderTools);

/* BACK TO TOP */
window.addEventListener("scroll",()=>{
  backToTop.style.display = window.scrollY > 400 ? "block" : "none";
});

backToTop.onclick = ()=>{
  window.scrollTo({ top:0, behavior:"smooth" });
};

/* INIT */
renderTools();
