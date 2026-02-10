# DEGEN Website Development Roadmap

**Working Schedule**
- Thursday Nights: ~2–3 hours
- Sundays: ~6–8 hours  
- Total: ~9–11 hours/week

---

## PHASE 0 – Foundation & Decisions  
**Timeline: 2 Weeks**

### Week 1
**Sunday**
- Tech stack decisions:
  - Frontend: Next.js (dark mode first)
  - Backend/Auth/DB: Firebase or Supabase (MAYBE postgres SQL or Mongo DB)
  - Hosting: Vercel or Netlify or AWS (this is still up in the air)
- Rough wireframes (low fidelity):
  - Landing Page
  - “The Booth” feed
  - Bar Rankings

---

### Week 2
**Thursday**
- Draft database schema:
  - Users
  - Posts
  - Cities/States
  - Bars
  - Votes
- Decide auth rules:
  - Nickname + avatar only
  - No email for MVP

**Sunday**
- Repo setup
- Initial deployment
- Dark mode base styles
- Navigation shell with placeholder tabs

---

## PHASE 1 – MVP (Core Experience)  
**Timeline: 8–10 Weeks**

### MVP Feature Priority
1. Landing Page + AI Chat
2. “The Booth” (Anonymous City Feed)
3. Campus Bar Rankings (Simplified)
4. Social Media Links
5. Basic Moderation

---

## Weeks 3–6: Landing Page & AI Chat

### Week 3
**Thursday**
- Landing page layout
- Dive bar theme (fonts, textures, colors)

**Sunday**
- AI chat integration
- Chat guardrails:
  - Experience-based advice only
  - Built-in disclaimers
- Prompt structure:
  - What did you drink?
  - How do you feel?

---

### Week 4
**Thursday**
- Landing page polish
- CTA buttons → Tabs

**Sunday**
- AI chat enhancements:
  - Rough calorie estimates (ranges only)
  - Wellness suggestions (hydration, sleep, light movement)
  - Avoid “burn X calories” language

---

## Weeks 7–10: “The Booth” (Yik-Yak Style Feed)

### Week 5
**Thursday**
- Profile creation flow:
  - Avatar picker (bottle/seltzer icons)
  - Nickname validation (no hate speech)

**Sunday**
- Global post feed
- Post creation (city/state required)
- Dark-mode Reddit/Twitter-style UI

---

### Week 6
**Thursday**
- City/state filter dropdown

**Sunday**
- Local feed logic
- Moderation basics:
  - Report button
  - Blocked words list

---

## Weeks 11–13: Campus Bar Rankings

### Week 7
**Thursday**
- Bar list UI

**Sunday**
- Voting logic (simplified MVP):
  - 1 vote per user per month
  - 1–5 star rating
- Sort bars by median rating

---

### Week 8
**Thursday**
- “More →” modal UI

**Sunday**
- Deals/events fields
- “Bar of the Month” badge logic

---

## PHASE 2 – Polish & Soft Launch  
**Timeline: 4 Weeks**

### Weeks 9–10
- Share posts to socials with DEGEN watermark
- Micro-animations
- Mobile responsiveness
- Bug fixing

### Week 11
- Seed content:
  - Generic starter posts
  - Initial bar lists per city

### Week 12
- Soft launch:
  - Friends
  - One campus
  - One city

---

## PHASE 3 – Post-Launch Expansion (Optional)

Build only if engagement is strong.

- Popular Prompts tab
- Saved prompts
- Paid “Propaganda Posts” for bars
- Merch tab
- Regen drink informational page

---

## DO NOT BUILD YET (Pre-Launch)

- Complex multi-vote systems
- Payments
- Merch checkout
- Alcohol sales logic
- Advanced AI personalization
- Mobile app

---

## Timeline Summary

- MVP usable: ~3 months
- Polished product: ~4 months
- Monetization-ready: ~6+ months

