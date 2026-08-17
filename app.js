// Signal Desk landing page — content rendering.
// All competitor prices below are VERIFIED from vendor pricing pages (Aug 2026).
// Do not add a price here that was not retrieved from the vendor's own page.

const COLUMNS = [
  ["Company", "Legal/trading name"],
  ["Website", "Primary domain"],
  ["Signal Type", "Hiring For Technology · Stack Added · Stack Dropped"],
  ["Signal Detail", "The specific event in one line — e.g. \"12 of 293 open roles name Kubernetes\""],
  ["Signal Date", "When the event happened or was published"],
  ["Source Link", "The public URL the signal came from. You can click it and verify it yourself."],
  ["Freshness", "Days since the signal fired"],
  ["ICP Match Notes", "Which of <em>your</em> stated criteria this company hit"],
  ["Headcount", "Current estimated employee count"],
  ["Industry", "Primary category"],
  ["HQ Location", "City / region / country"],
  ["Open Roles", "How many roles they have open right now, and how many named your technology"],
  ["Contact Name", "The person who owns the problem, based on the titles you gave us"],
  ["Contact Title", "Exact title as listed"],
  ["Contact LinkedIn", "Profile URL"],
  ["Contact Email", "Business email, verification-checked before it ships"],
  ["Email Status", "Verified · Risky · Not Found — we tell you which, we don't pad the sheet"],
  ["Suggested Angle", "One line on why <em>this</em> signal makes <em>your</em> offer relevant right now"],
  ["Notes", "Anything material we caught — recent acquisition, hiring freeze, existing vendor"]
];

const CMP_TOOLS = {
  head: ["", "Signal Desk", "Apollo", "Clay"],
  rows: [
    ["Price", "$149/mo", "$49–$119/seat/mo (3-seat min on top tier = $357/mo)", "$167–$495/mo"],
    ["Who builds the searches", "We do", "You do", "You do"],
    ["Who manages credits", "We do", "You do", "You do"],
    ["Skill required", "None", "Moderate", "Highest in the category"],
    ["Delivered as", "Google Sheet in your inbox", "Software you operate", "Software you operate"],
    ["Signal types", "Hiring-for-tech + stack added/dropped", "You configure", "You configure and build"]
  ]
};

const CMP_LISTS = {
  head: ["", "Signal Desk", "FundedList", "Cursive"],
  rows: [
    ["Price", "$149/mo", "$149/mo", "$197/mo"],
    ["Signals covered", "Job-posting signals: hiring for a technology, stack added, stack dropped", "Funding only", "Search/visitor intent only"],
    ["ICP", "Any ICP you define", "Startup founders", "Your ICP"],
    ["Delivery", "Google Sheet, weekly", "CSV, weekly", "Google Sheet, weekly"]
  ]
};

const CMP_AGENCY = {
  head: ["", "Signal Desk", "CIENCE"],
  rows: [
    ["Month one", "$149", "$7,499"],
    ["Ongoing", "$149/mo", "$2,499/mo"],
    ["Contract", "Month-to-month", "Retainer"],
    ["Scope", "Job-signal-matched list + verified contacts", "Full outbound program (SDRs, sequences, meetings booked)"]
  ]
};

const INCLUDED = [
  "One weekly Google Sheet, delivered every Monday",
  "One ICP definition — adjust it any time, just reply to the email",
  "Both signal types: hiring for a specific technology, and stack added or dropped",
  "Verified business contacts with email status labeled honestly",
  "Source link on every row so you can check any signal yourself",
  "Direct email access to a human, not a ticket queue",
  "Month-to-month. Cancel from your account or by replying to any sheet email. No retention gauntlet."
];

const FAQ = [
  ["Why not just use Apollo?",
   "Use Apollo if you'll actually operate it — it's a strong platform. But its top tier has a 3-seat minimum, which puts you at $357/month, and the software is the easy part. The work is defining searches, maintaining filters, managing credits, and checking that what came out is usable. Apollo sells you the ability to build lists. We sell you the list. If you already have Apollo and enjoy running it, you don't need us."],
  ["Is this scraped consumer data?",
   "No. Signals come from companies' own public job boards — the same listings any job seeker can read, published by the hiring platforms those companies use (Greenhouse, Lever, Ashby). No scraping, no logins, no purchased consumer data. Contacts are business contacts in a business role at a business address. Every row includes a source link. We're not going to make a legal guarantee about how <em>you</em> use the data, because compliance depends on your jurisdiction and sending practices — if you're emailing into the EU or UK, get your own advice on lawful basis and make sure your sends carry sender identity and one-click unsubscribe."],
  ["What if the signals aren't relevant to me?",
   "That's the most likely thing to go wrong, and it's usually an ICP definition problem, not a data problem. Two protections: reply to any Monday sheet with what missed and we retune for the next one — no ticket, no change fee. And if your <em>first</em> sheet isn't usable, tell us within 7 days and we'll rebuild it or refund that month."],
  ["Can I cancel?",
   "Yes, any time, from your account or by replying to any sheet email with \"cancel.\" It takes effect at the end of the current billing period, you keep every sheet already delivered, and nobody calls you. Month-to-month means month-to-month."],
  ["How is this different from FundedList or Cursive?",
   "FundedList is $149/month for a weekly funded-founders CSV — the trigger is \"who raised money.\" Cursive is $197/month built on search/visitor intent — the trigger is \"who visited a site.\" Ours is different: the trigger is <em>what a company is hiring for</em>. Nobody else sells that. To be straight with you, we do <strong>not</strong> cover funding rounds or executive job changes — if those are your triggers, buy FundedList or run Apollo. We cover hiring-for-a-technology and stack changes, against any ICP you define."],
  ["How many companies are on each sheet?",
   "It depends on how tight your ICP is and how much actually happened that week. A narrow ICP in a slow week is a short sheet. We won't pad it with companies that didn't fire a signal, because a padded list is the exact thing you're trying to get away from. If your sheet is consistently thinner than you want, reply and we'll widen the definition with you — and if we under-deliver badly, we credit the month."],
  ["How fresh are the signals?",
   "Every row carries a signal date and a freshness field in days. We prioritise events from the preceding week and drop anything past your stated age limit. If a signal is older, the sheet says so rather than hiding it."],
  ["What happens if an email bounces?",
   "Every email is verification-checked before the sheet ships, and each row is labeled Verified, Risky, or Not Found. We ship the honest label instead of a guessed pattern. Nobody can promise zero bounces — people change jobs — but you'll always know which rows are safe to send to, which is the part that protects your sending domain."],
  ["Can I change my ICP later?",
   "Yes, as often as you want, at no extra cost. Reply to any sheet email with the change. If your positioning shifts or you want to test a new segment, just say so and the next Monday reflects it."],
  ["Who's behind this?",
   "A real person you can email directly, whose name and address are on every message we send. We're new — we launched recently, which is exactly why the founding price is locked and why the first-sheet guarantee exists."]
];

function table(el, spec) {
  const t = document.getElementById(el);
  if (!t) return;
  t.innerHTML =
    "<thead><tr>" + spec.head.map(h => `<th>${h}</th>`).join("") + "</tr></thead>" +
    "<tbody>" + spec.rows.map(r =>
      "<tr>" + r.map(c => `<td>${c}</td>`).join("") + "</tr>").join("") + "</tbody>";
}

document.addEventListener("DOMContentLoaded", () => {
  const ct = document.getElementById("col-table");
  if (ct) ct.innerHTML = COLUMNS.map(([c, d]) =>
    `<tr><td><code>${c}</code></td><td>${d}</td></tr>`).join("");

  table("cmp-tools", CMP_TOOLS);
  table("cmp-lists", CMP_LISTS);
  table("cmp-agency", CMP_AGENCY);

  const inc = document.getElementById("incl");
  if (inc) inc.innerHTML = INCLUDED.map(i => `<li>${i}</li>`).join("");

  const faq = document.getElementById("faq");
  if (faq) faq.innerHTML = FAQ.map(([q, a]) =>
    `<details class="faq-item"><summary>${q}</summary><p>${a}</p></details>`).join("");

});
