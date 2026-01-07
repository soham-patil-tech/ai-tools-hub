/* =======================
   AI TOOLS DATA
   ======================= */

const tools = [
  { name:"ChatGPT", category:"chat", link:"https://chat.openai.com", tags:["chat","assistant"], description:"Free conversational AI assistant." },
  { name:"Claude", category:"chat", link:"https://claude.ai", tags:["chat","writing"], description:"Helpful AI for reasoning and writing." },
  { name:"Perplexity AI", category:"search", link:"https://perplexity.ai", tags:["search","research"], description:"AI-powered search with citations." },
  { name:"Gamma", category:"productivity", link:"https://gamma.app", tags:["slides","docs"], description:"AI presentations & documents." },
  { name:"Leonardo AI", category:"image", link:"https://leonardo.ai", tags:["image","art"], description:"AI image generation platform." },
  { name:"Runway ML", category:"video", link:"https://runwayml.com", tags:["video","editing"], description:"AI video creation & editing." },
  { name:"Jasper", category:"writing", link:"https://jasper.ai", tags:["content","marketing"], description:"AI content writing tool." },
  { name:"Grammarly", category:"writing", link:"https://grammarly.com", tags:["writing"], description:"Grammar & writing assistant." },
  { name:"GitHub Copilot", category:"code", link:"https://github.com/features/copilot", tags:["code"], description:"AI coding assistant." },
  { name:"Zapier", category:"automation", link:"https://zapier.com", tags:["automation"], description:"Workflow automation with AI." },
  { name:"Murf AI", category:"audio", link:"https://murf.ai", tags:["voice"], description:"AI voice generator." },
  { name:"Duolingo AI", category:"education", link:"https://duolingo.com", tags:["learning"], description:"AI-powered language learning." },
  { name:"Consensus", category:"search", link:"https://consensus.app", tags:["research"], description:"AI research search engine." },
  { name:"Pika Labs", category:"video", link:"https://pika.network", tags:["ai","video"], description:"AI short video generation." },
  { name:"Flair AI", category:"design", link:"https://flair.ai", tags:["branding"], description:"AI product & brand visuals." }
];

/* =======================
   APP LOGIC
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
