"use strict";
(() => {
  // Browser-only curated example renderer. No network calls, generated answers, or data storage.
  const scenarios = window.CORIPEX_DEMO_CONTENT;
  const buttons = Array.from(document.querySelectorAll("[data-domain]"));
  const title = document.getElementById("workspace-title");
  const description = document.getElementById("workspace-description");
  const sourceList = document.getElementById("source-list");
  const suggestions = document.getElementById("suggested-questions");
  const input = document.getElementById("question-input");
  const form = document.getElementById("ask-form");
  const result = document.getElementById("result");
  const insufficient = document.getElementById("insufficient-demo");
  let active = "finance";

  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const normalize = value => value.trim().toLowerCase().replace(/[^a-z0-9 ]+/g," ").replace(/\s+/g," ");
  const getDocument = (scenario, id) => scenario.documents.find(document => document.id === id);
  const verifiedUrl = url => {
    try { return new URL(url).protocol === "https:"; }
    catch { return false; }
  };

  function showPlaceholder(message) {
    const node = element("div", "placeholder", message);
    node.classList.add("has-top-gap");
    result.replaceChildren(node);
  }

  function showInsufficient() {
    result.replaceChildren();
    const box = element("div", "placeholder insufficient-state");
    box.append(element("strong", "", "No curated answer for this question"));
    box.append(element("p", "", "This static demo only recognizes the displayed example questions. It does not analyze new questions or generate an answer from a document."));
    box.append(element("p", "", "Select a listed question to inspect its predefined answer and reference."));
    result.append(box);
  }

  function showAnswer(question) {
    const scenario = scenarios[active];
    const doc = getDocument(scenario, question.documentId);
    if (!doc) { showInsufficient(); return; }
    const card = element("article", "answer-card");
    card.append(element("p", "answer-eyebrow", "CURATED ANSWER · SIMULATED RESEARCH FLOW"));
    card.append(element("h3", "", "Research summary"));
    card.append(element("p", "", question.answer));
    const trace = element("div", "evidence-trace");
    const details = element("details", "source-inspector");
    const summary = element("summary", "source-btn", "[1] Inspect supporting source →");
    details.append(summary);
    const body = element("div", "source-details");
    body.append(element("strong", "", doc.title));
    body.append(element("p", "source-meta", doc.location));
    body.append(element("p", "", question.evidence));
    if (verifiedUrl(doc.url)) {
      const link = element("a", "source-external", "View official publication ↗");
      link.href = doc.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      body.append(link);
    }
    details.append(body);
    trace.append(details);
    card.append(trace);
    card.append(element("p", "answer-caveat", question.caveat));
    result.replaceChildren(card);
  }

  function choose(domain) {
    if (!Object.prototype.hasOwnProperty.call(scenarios, domain)) return;
    active = domain;
    const data = scenarios[domain];
    buttons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.domain === domain)));
    title.textContent = data.title;
    description.textContent = data.description;
    const heading = element("h3", "", "Reference documents");
    const list = element("ul", "source-set");
    data.documents.forEach(doc => {
      const item = element("li");
      const link = verifiedUrl(doc.url) ? element("a", "document-chip", doc.title) : element("span", "document-chip", doc.title);
      if (link.tagName === "A") { link.href = doc.url; link.rel = "noopener noreferrer"; link.target = "_blank"; }
      item.append(link, element("p", "source-meta", doc.location));
      list.append(item);
    });
    sourceList.replaceChildren(heading, list);
    suggestions.replaceChildren();
    data.questions.forEach(question => {
      const source = getDocument(data, question.documentId);
      if (!source) return;
      const button = element("button", "question-choice", question.question);
      button.type = "button";
      button.append(element("small", "", "Based on: " + source.title));
      button.addEventListener("click", () => { input.value = question.question; showAnswer(question); });
      suggestions.append(button);
    });
    input.value = "";
    showPlaceholder("Choose a curated question to reveal the predefined answer and source reference.");
  }

  buttons.forEach(button => button.addEventListener("click", () => choose(button.dataset.domain)));
  form.addEventListener("submit", event => {
    event.preventDefault();
    const match = scenarios[active].questions.find(question => normalize(input.value) === normalize(question.question));
    if (match) showAnswer(match);
    else showInsufficient();
  });
  insufficient.addEventListener("click", showInsufficient);
  choose(active);
})();
