//Connects webpage with aloglia app
const searchClient = algoliasearch(
  "R72IBHBPVN", //Application ID
  "d1df70b9b9a93d83ffe910b72966444e" //Search-Only API Key
);

//From my Algolia app, use the index called "index_name" when searching
const search = instantsearch({
  indexName: "ai_search", //"It is like a database inside aloglia"
  searchClient,
});

search.addWidgets([
  // instantsearch.widgets.searchBox({
  //   container: "#searchbox",
  //   placeholder: "ابحث عن الأدوات...",
  // }),

  instantsearch.widgets.configure({
    hitsPerPage: 5,
  }),

  // Use connectSearchBox to connect your own input
  instantsearch.connectors.connectSearchBox((renderOptions, isFirstRender) => {
    const { query, refine } = renderOptions;

    if (isFirstRender) {
      const input = document.querySelector(".search-input");
      const dropdown = document.getElementById("hits");

      input.addEventListener("input", (e) => {
        refine(e.target.value);
        dropdown.classList.toggle("hidden", !e.target.value);
      });

      // Close on click outside
      document.addEventListener("click", (e) => {
        if (!e.target.closest(".search-container")) {
          dropdown.classList.add("hidden");
        }
      });
    }
  })(),

  instantsearch.widgets.hits({
    container: "#hits",
    templates: {
      item: (data) => {
        const urlPatterns = {
          tools: `/tools/${data.slug}/`,
          blog: `/blog/${data.slug}/`,
          category: `/tools/${data.slug}/`,
        };

        const typeLabels = {
          tools: "🛠️ أداة",
          blog: "📝 مقالة",
          category: "📂 فئة",
        };

        const url = urlPatterns[data.type] || `/${data.type}/${data.slug}/`;
        const label = typeLabels[data.type] || "📂 فئة";

        return `
         <a href="${url}" class="hit-item">
          <span class="hit-type">${label}</span>
           <h3 class="hit-title">${data.title}</h3>
           <p class="hit-description">${data.description}</p>
         </a>
         `;
      },

      empty: `<div class="no-results">لا توجد نتائج مطابقة 😔</div>`,
    },
  }),
]);

search.start();

console.log(search);
