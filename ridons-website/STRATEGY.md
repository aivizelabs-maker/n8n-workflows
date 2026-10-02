# Ridons landing page: strategy notes and launch checklist

## What a ride-hailing launch page has to do
A visitor decides in about 5 seconds whether to stay, so the page has to answer four questions in order:

1. **Is this for me?** A one-line promise, the city, and a choice between rider and motari right in the hero.
2. **Does it work?** A demo they can play with, then specific numbers.
3. **Is it safe and fair?** Verification, the fare rules, what happens when something goes wrong, and the regulator.
4. **Is it easy to start?** Store buttons repeated at every decision point, a 1-minute sign-up, and WhatsApp for questions.

## How Bolt, Careem and Faras pitch themselves, and what we took from each
| Pattern | Seen at | Used here |
|---|---|---|
| A split between riders and drivers right in the hero | Bolt ("Ride" / "Drive") | Toggle: "I need a ride" / "I'm a motari" |
| Leading on price for riders and low commission for drivers | Bolt | 92% / 8% shown everywhere, plus an earnings calculator |
| Short, plain and confident copy; one idea per section | Careem | One headline and one supporting paragraph per section |
| Local payment and local transport as the main pitch | Faras (wallet, boda) | MTN MoMo, motari, Kinyarwanda, Kigali neighbourhoods |
| Driver sign-up laid out as clear steps | All three | A 4-step join list, the documents to bring, and a WhatsApp CTA |

## The psychology behind each section
- **Loss aversion:** the "Why switch" cards strike through real frustrations ("It's 2,500 now, the traffic was bad") before giving the promise.
- **Control and autonomy:** "Agree the price", "You choose", "Nobody sets your price for you".
- **Certainty:** the price is locked, disputes are decided within 24 hours, and pay arrives in 30 seconds. Specific numbers beat adjectives.
- **Trying it yourself:** in the hero demo, visitors negotiate and see the fare lock. That's the product in 10 seconds.
- **Fairness, shown both ways:** a floor protects motari and a ceiling protects passengers.
- **Authority and safety:** RIB check, RURA, numbered vests, and a response time for every type of incident.
- **Identity and purpose:** the "Why Ridons exists" section gives motari pride and gives press and investors a story.
- **Lower friction:** a sticky "Get the app" bar on mobile, WhatsApp links with pre-filled text, and the FAQ answering objections up front.

## Deliberately left out
- **Testimonials, download counts and star ratings.** We have no real ones yet, and invented ones would destroy trust at launch. Add real quotes from pilot motari and passengers as soon as you have them (with names, photos and consent). That's the single biggest conversion lift still available.
- **A full Kinyarwanda version.** It needs a native translator, not machine translation.

## Before you go live (search `LAUNCH TODO` in index.html)
- [ ] Put the Play Store and App Store URLs in `STORE_LINKS` in the script. Every badge updates from there.
- [ ] Add an `og:image` (1200×630) and `og:url`, so links shared on WhatsApp show a preview.
- [ ] Link the Terms, Privacy and Cookies pages.
- [ ] Add the social profile URLs.
- [ ] Confirm whether motari registration, the vest or training costs anything, and say so in the FAQ.
- [ ] Optional, and high impact: a launch offer (e.g. "first ride's Ridons fee on us" for motari, or a referral code) in the orange top strip.
- [ ] Optional: a Kinyarwanda version. Add `?for=motari` to links in motari WhatsApp groups; the page opens on the motari view.
- [ ] Replace the illustrated map with real photos of vested motari in Kimihurura and Remera.
