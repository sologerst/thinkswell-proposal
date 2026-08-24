# Thinkswell Proposal Hub

Client proposals for [Thinkswell](https://thinkswell.com), living at **proposal.thinkswell.com**. Same subdomain pattern as [analysis.thinkswell.com](https://analysis.thinkswell.com).

## What this is

- **Hub** (`/`): internal index of every client proposal
- **Proposal** (`/p/[slug]`): shareable, branded document the client can open
- **Template** (`/p/thinkswell-partnership`): Thinkswell's standard entertainment and hospitality partnership proposal

Duplicate the template in `lib/proposals.ts`, fill in the client, and push. The hub and route update automatically.

## Local

```bash
npm install
npm run dev
```

## Add a client proposal

1. Copy `thinkswellPartnership` in `lib/proposals.ts`
2. Change `slug`, `clientName`, opportunity copy, in-scope capabilities, timeline, and investment
3. Push it into the `proposals` array
4. Share `https://proposal.thinkswell.com/p/your-slug`

Investment numbers stay out of the template on purpose. Fill them in before you send a link.

## Deploy

GitHub: [sologerst/thinkswell-proposal](https://github.com/sologerst/thinkswell-proposal)

Vercel project: `thinkswell-proposal`, production domain `proposal.thinkswell.com` (point a CNAME at Vercel once the project exists).
