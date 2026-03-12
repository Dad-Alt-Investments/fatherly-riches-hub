export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  tags: string[];
  keywords: string;
  published: boolean;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  intro: string;
}

export const categories: Category[] = [
  {
    name: "Stocks & ETFs",
    slug: "stocks-etfs",
    description: "Long-term investing, dividend stocks, retirement portfolios.",
    intro: "Stocks and ETFs are the backbone of most wealth-building portfolios. Whether you're looking at dividend income, index fund growth, or finding the right brokerage — we break it down in plain English so you can invest with confidence.",
  },
  {
    name: "Crypto & Digital Assets",
    slug: "crypto-digital-assets",
    description: "Bitcoin, Ethereum, DeFi, wallets, staking, and security.",
    intro: "Crypto doesn't have to be confusing or reckless. We cover the fundamentals — how to buy safely, store securely, and think about digital assets as part of a responsible family portfolio. No hype, no memes, just substance.",
  },
  {
    name: "Gold & Precious Metals",
    slug: "gold-precious-metals",
    description: "Buying gold, silver, storage, and IRA rollovers.",
    intro: "Gold has been a store of value for thousands of years — and in uncertain times, it's more relevant than ever. Learn how to buy physical gold safely, compare IRA companies, and understand where precious metals fit in your portfolio.",
  },
  {
    name: "Buying Businesses",
    slug: "buying-businesses",
    description: "Buying small or online businesses, due diligence, financing.",
    intro: "Owning a business is one of the most powerful wealth-building tools available. From buying a local business for under $100k to acquiring online businesses through marketplaces — we walk you through the entire process.",
  },
  {
    name: "Real Estate",
    slug: "real-estate",
    description: "Finding, financing, fixing, and flipping real estate.",
    intro: "Real estate remains one of the most reliable ways to build wealth over time. We cover rental properties, REITs, fractional investing, and creative financing strategies designed for busy dads.",
  },
  {
    name: "Personal Finance & Wealth Building",
    slug: "personal-finance",
    description: "Budgeting, debt management, family wealth, insurance, mindset.",
    intro: "Before you invest a dollar, you need the foundation right. Budgeting, debt payoff, emergency funds, tax strategy — these are the building blocks that make everything else work.",
  },
];

export const articles: Article[] = [
  { slug: "how-to-buy-a-small-local-business", title: "How to Buy a Small Local Business for Under $100k Down", description: "Beginner guide to buying small businesses.", category: "Buying Businesses", categorySlug: "buying-businesses", tags: ["Beginner Guides", "Passive Income", "Guides & How-To's"], keywords: "buy small business, business acquisition", published: false },
  { slug: "flippa-vs-empire-flippers", title: "Flippa vs Empire Flippers: Which Is Better?", description: "Compare online business marketplaces.", category: "Buying Businesses", categorySlug: "buying-businesses", tags: ["Tools & Platforms", "Guides & How-To's", "Beginner Guides"], keywords: "flippa vs empire flippers", published: false },
  { slug: "how-to-finance-a-business-purchase", title: "How to Finance a Business Purchase Without Savings", description: "SBA loans, seller financing, creative funding.", category: "Buying Businesses", categorySlug: "buying-businesses", tags: ["Credit & Loans", "Guides & How-To's", "Financial Independence"], keywords: "seller financing, SBA loans", published: false },
  { slug: "how-to-spot-a-good-online-business-deal", title: "How to Spot a Good Online Business Deal", description: "Red flags, multiples, valuation, deal checklist.", category: "Buying Businesses", categorySlug: "buying-businesses", tags: ["Guides & How-To's", "Tools & Platforms", "Buying Businesses"], keywords: "buy online business, business valuation", published: false },
  { slug: "5-side-business-ideas", title: "5 Side Business Ideas You Can Start This Weekend", description: "Fast-start business ideas for dads.", category: "Buying Businesses", categorySlug: "buying-businesses", tags: ["Beginner Guides", "Passive Income", "Guides & How-To's"], keywords: "side business ideas, dad businesses", published: false },
  { slug: "how-to-buy-bitcoin-safely", title: "How to Buy Bitcoin and Cryptocurrency Safely (Without Getting Scammed)", description: "Guide to safely buying and storing Bitcoin & Cryptocurrency", category: "Crypto & Digital Assets", categorySlug: "crypto-digital-assets", tags: ["Beginner Guides", "Tools & Platforms", "Guides & How-To's"], keywords: "buy bitcoin safely, avoid crypto scams", published: false },
  { slug: "best-crypto-wallets", title: "5 Crypto Wallets Every Dad Should Know", description: "Breakdown of secure hot and cold wallets.", category: "Crypto & Digital Assets", categorySlug: "crypto-digital-assets", tags: ["Tools & Platforms", "Beginner Guides", "Guides & How-To's"], keywords: "best crypto wallets, hardware wallet", published: false },
  { slug: "crypto-in-family-portfolio", title: "Should I Buy Crypto? The Case for Crypto in a Family Portfolio", description: "Why crypto belongs in a long-term portfolio.", category: "Crypto & Digital Assets", categorySlug: "crypto-digital-assets", tags: ["Investment Mindset", "Financial Independence", "Guides & How-To's"], keywords: "crypto investing, portfolio diversification", published: false },
  { slug: "top-5-crypto-etfs", title: "Top 5 Crypto ETFs", description: "Compare the best crypto-based ETFs.", category: "Crypto & Digital Assets", categorySlug: "crypto-digital-assets", tags: ["Tools & Platforms", "Passive Income", "Guides & How-To's"], keywords: "crypto ETFs, bitcoin ETF", published: false },
  { slug: "crypto-staking-explained", title: "Crypto Staking Explained for Beginners", description: "Earn passive income with staking safely.", category: "Crypto & Digital Assets", categorySlug: "crypto-digital-assets", tags: ["Passive Income", "Beginner Guides", "Guides & How-To's"], keywords: "crypto staking, passive crypto income", published: false },
  { slug: "blockchain-small-business", title: "How Blockchain Will Impact Small Business Ownership", description: "Future of buying businesses with Web3 tools.", category: "Crypto & Digital Assets", categorySlug: "crypto-digital-assets", tags: ["Investment Mindset", "Tools & Platforms", "Guides & How-To's"], keywords: "blockchain business, Web3 investing", published: false },
  { slug: "how-to-buy-gold-online-safely", title: "How to Buy Gold Online Safely", description: "Guide to buying gold from trusted dealers and services online", category: "Gold & Precious Metals", categorySlug: "gold-precious-metals", tags: ["Beginner Guides", "Guides & How-To's", "Recession-Proofing"], keywords: "buy gold online, gold dealers", published: true },
  { slug: "gold-vs-crypto-which-is-the-better-hedge", title: "Gold vs Crypto: Which Is the Better Hedge?", description: "Compare inflation protection between assets.", category: "Gold & Precious Metals", categorySlug: "gold-precious-metals", tags: ["Recession-Proofing", "Investment Mindset", "Guides & How-To's"], keywords: "gold vs crypto, inflation hedge", published: false },
  { slug: "top-gold-ira-companies-reviewed", title: "Top Gold IRA Companies Reviewed", description: "Ranking top gold IRA providers.", category: "Gold & Precious Metals", categorySlug: "gold-precious-metals", tags: ["Tools & Platforms", "Tax Strategies", "Guides & How-To's"], keywords: "best gold IRA companies", published: false },
  { slug: "7-recession-proof-assets-every-dad-should-consider", title: "7 Recession-Proof Assets Every Dad Should Consider", description: "Asset list with risk breakdown.", category: "Personal Finance & Wealth Building", categorySlug: "personal-finance", tags: ["Recession-Proofing", "Investment Mindset", "Financial Independence"], keywords: "recession investing, recession proof assets", published: false },
  { slug: "how-to-protect-your-portfolio-from-inflation", title: "How to Protect Your Portfolio from Inflation", description: "Asset mix strategies to hedge inflation.", category: "Personal Finance & Wealth Building", categorySlug: "personal-finance", tags: ["Recession-Proofing", "Investment Mindset", "Guides & How-To's"], keywords: "inflation hedge, portfolio protection", published: false },
  { slug: "the-ultimate-dadalt-investment-playbook", title: "The Ultimate DadAlt Investment Playbook (Free Guide)", description: "Lead magnet roundup post linking all categories.", category: "Personal Finance & Wealth Building", categorySlug: "personal-finance", tags: ["Guides & How-To's", "Beginner Guides", "Financial Independence"], keywords: "investment playbook, beginner investing", published: false },
  { slug: "how-to-pay-off-debt-and-still-invest", title: "How to Pay Off Debt and Still Invest", description: "Balance debt payoff while investing.", category: "Personal Finance & Wealth Building", categorySlug: "personal-finance", tags: ["Credit & Loans", "Financial Independence", "Guides & How-To's"], keywords: "pay off debt, wealth building", published: false },
  { slug: "simple-budget-system-for-busy-dads", title: "Simple Budget System for Busy Dads", description: "Low-maintenance budgeting system.", category: "Personal Finance & Wealth Building", categorySlug: "personal-finance", tags: ["Beginner Guides", "Financial Independence", "Guides & How-To's"], keywords: "family budgeting, personal finance", published: false },
  { slug: "teach-kids-about-money", title: "How to Teach Your Kids About Money", description: "Fun family financial literacy system.", category: "Personal Finance & Wealth Building", categorySlug: "personal-finance", tags: ["Beginner Guides", "Investment Mindset", "Guides & How-To's"], keywords: "teach kids money, financial literacy", published: true },
  { slug: "beginners-guide-to-investing", title: "The Ultimate Beginner's Guide to Investing for Dads", description: "Plain-English roadmap to get started.", category: "Personal Finance & Wealth Building", categorySlug: "personal-finance", tags: ["Beginner Guides", "Financial Independence", "Guides & How-To's"], keywords: "beginner investing, investment basics", published: true },
  { slug: "best-investment-apps", title: "Best Apps Dads Can Use to Manage Investments", description: "Compare portfolio tracking & investing apps.", category: "Personal Finance & Wealth Building", categorySlug: "personal-finance", tags: ["Tools & Platforms", "Guides & How-To's", "Beginner Guides"], keywords: "investing apps, portfolio tracker", published: true },
  { slug: "compound-interest-explained", title: "What Every Dad Should Know About Compound Interest", description: "Explaining compound growth visually.", category: "Personal Finance & Wealth Building", categorySlug: "personal-finance", tags: ["Beginner Guides", "Financial Independence", "Investment Mindset"], keywords: "compound interest, wealth building", published: true },
  { slug: "tax-efficient-investing", title: "The Dad's Guide to Tax-Efficient Investing", description: "Reduce taxes legally across asset classes.", category: "Personal Finance & Wealth Building", categorySlug: "personal-finance", tags: ["Tax Strategies", "Financial Independence", "Guides & How-To's"], keywords: "tax efficient investing, tax strategy", published: true },
  { slug: "emergency-funds-and-investing", title: "The Dad's Guide to Emergency Funds & Investing", description: "How much to save before investing.", category: "Personal Finance & Wealth Building", categorySlug: "personal-finance", tags: ["Beginner Guides", "Financial Independence", "Guides & How-To's"], keywords: "emergency fund, invest safely", published: true },
  { slug: "top-5-real-estate-investment-options", title: "Top 5 Real Estate Investment Options for Busy Dads", description: "REITs, rentals, syndication, notes, crowdfunds.", category: "Real Estate", categorySlug: "real-estate", tags: ["Passive Income", "Tools & Platforms", "Guides & How-To's"], keywords: "real estate investing, REITs, rentals", published: true },
  { slug: "buy-rental-property-without-20-percent", title: "How to Buy Rental Property Without 20% Down", description: "Creative financing & loan options explained.", category: "Real Estate", categorySlug: "real-estate", tags: ["Credit & Loans", "Guides & How-To's", "Financial Independence"], keywords: "rental property, low down payment", published: true },
  { slug: "best-fractional-real-estate-platforms", title: "Best Platforms to Buy Fractional Real Estate", description: "Compare Fundrise, Arrived, Yieldstreet, etc.", category: "Real Estate", categorySlug: "real-estate", tags: ["Tools & Platforms", "Passive Income", "Guides & How-To's"], keywords: "fractional real estate, real estate apps", published: true },
  { slug: "dividend-portfolio-beginner-dad", title: "How to Build a Dividend Portfolio as a Beginner Dad", description: "Step-by-step guide to creating a dividend investing strategy for long-term passive income.", category: "Stocks & ETFs", categorySlug: "stocks-etfs", tags: ["Passive Income", "Beginner Guides", "Guides & How-To's"], keywords: "dividend portfolio, beginner investing, passive income", published: true },
  { slug: "index-funds-vs-etfs", title: "Index Funds vs ETFs: Which Is Better for Busy Dads?", description: "Simple breakdown comparing index funds and ETFs.", category: "Stocks & ETFs", categorySlug: "stocks-etfs", tags: ["Beginner Guides", "Tools & Platforms", "Guides & How-To's"], keywords: "index funds, ETFs, long-term investing", published: false },
  { slug: "top-stock-brokerages", title: "Top Stock Brokerages for New Investors [2025 Review]", description: "Review of beginner-friendly trading platforms.", category: "Stocks & ETFs", categorySlug: "stocks-etfs", tags: ["Tools & Platforms", "Beginner Guides", "Guides & How-To's"], keywords: "stock brokerages, investing apps", published: true },
  { slug: "passive-income-with-etfs", title: "How to Create Passive Income with ETFs", description: "Build passive income using ETF strategies.", category: "Stocks & ETFs", categorySlug: "stocks-etfs", tags: ["Passive Income", "Guides & How-To's", "Tools & Platforms"], keywords: "passive income ETFs, dividend ETFs", published: true },
];
