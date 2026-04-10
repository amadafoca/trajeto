# AGENTS.md — Trajeto

---

## Repository and deploy

- **Repo:** `amadafoca/trajeto`
- **Remote principal:** `origin` = `https://github.com/amadafoca/trajeto.git`
- **Branch principal:** `main` (branch de desenvolvimento)
- **Branch de publicação:** `gh-pages` (gerado automaticamente pelo workflow de deploy)
- **Domínio público:** `https://trajetoapp.com.br/`
- **CNAME esperado:** `trajetoapp.com.br`
- **Stack:** site estático, sem build, sem framework
- **Arquivo principal:** `index.html`

### Deploy

O deploy é feito automaticamente via GitHub Actions (`.github/workflows/deploy.yml`):

1. A cada push no branch `main`, o workflow é disparado.
2. O workflow substitui o placeholder `<!--BUILD-->` no `index.html` pelo SHA curto do commit (ex: `build a1b2c3d`).
3. O resultado é publicado no branch `gh-pages` via `peaceiris/actions-gh-pages`.
4. O GitHub Pages serve o site a partir do branch `gh-pages` (root).

**Regras importantes:**
- O `index.html` contém o placeholder `<!--BUILD-->` no rodapé. Ele **não deve ser substituído manualmente** — a substituição é feita exclusivamente pelo workflow de deploy.
- Não faça push diretamente no branch `gh-pages`. Ele é gerenciado pelo GitHub Actions.
- O branch `main` é o branch de desenvolvimento principal. Todas as alterações devem ser feitas nele.

---

## Brand

Trajeto is the official public-facing brand.
Use Trajeto App only as an internal project reference when needed.

Do not reopen the Trajeto vs SkyRoad naming decision unless explicitly requested.

Do not reintroduce legacy branding from Moto Weather Route in any form.

---

## Branding assets

Active assets referenced in the current layout:

| Role | File |
|---|---|
| Ícone do topo | `trajeto-icon-padded.png` |
| Wordmark do header | `trajeto-wordmark.png` |
| Favicon | `trajeto-favicon-512.png` |

Deprecated assets — do not use in the layout:

- `banner_desktop.png`
- `banner_mobile.png`

Before swapping or removing any asset, verify whether it is actually referenced in the codebase.

---

## Product

Trajeto is a digital product initially focused on motorcyclists in Brazil.

It helps users understand the weather along the route before departure by combining:
- origin
- destination
- date
- departure time
- average speed

The product is about route-aware forecast, not just weather in a city.

**Core idea**

Não é a previsão da cidade. É a previsão da sua rota.

---

## Positioning

Trajeto helps users:
- decide better when to leave
- understand where rain affects the route
- prepare more practically
- reduce surprises on the road

**Main positioning line**

Trajeto is the smart way to understand the climate of the route before departure.

---

## Tagline

**Default tagline**

O clima do seu caminho

Use this as the main brand signature by default.

---

## Tone of voice

Trajeto should sound:
- clear
- direct
- trustworthy
- practical
- modern
- sober

It should feel like a smart co-pilot.

Avoid:
- forced slang
- startup jargon
- biker clichés
- exaggerated adventure tone
- melodrama

---

## Brand personality

Trajeto should feel:
- intelligent
- useful
- clear
- reliable
- premium
- digital-first

It should not feel like:
- a biker club
- an off-road brand
- a weather agency dashboard
- a generic startup template
- a hacky MVP

---

## Visual direction

Treat Trajeto as a premium digital product, not a motorcycle lifestyle brand.

**Desired style**
- dark premium base
- minimal
- clean
- geometric
- mobile-first
- route/movement/horizon inspired

**Avoid**
- shields
- crests
- literal motorcycle visuals
- clouds, lightning, map pins
- aggressive off-road aesthetics
- visual clutter

---

## Logo direction

The project should have a logo.

**Best directions**
1. T monogram formed by a route line
2. Minimal path + horizon symbol
3. Custom Trajeto wordmark with subtle route cues

**Logo requirements**
- simple
- memorable
- horizontal
- app-icon friendly
- strong on dark backgrounds
- functional at small sizes

---

## Color direction

Use a dark premium base with accents around:
- deep blue
- blue-violet
- controlled electric blue
- cold cyan
- refined teal

Avoid generic-looking template purple and flashy neon excess.

---

## Header / hero rules

The brand must appear once, strongly and clearly at the top.

The top of the landing page must remain minimal:
- brand (icon + wordmark)
- tagline
- short functional line
- form

**Recommended hierarchy**
1. Brand header
2. Short atmospheric hero
3. Functional headline
4. Supporting line
5. Form / CTA

**Approved top copy**

Trajeto
O clima do seu caminho

**Approved functional headline**

Veja o clima do seu trajeto antes de sair

**Approved support line**

Informe origem, destino, horário e velocidade média para visualizar a previsão de chuva ao longo da rota.

Do not repeat the brand weakly multiple times in the top section.

---

## UX copy principle

All copy should help the user make a decision.

Prioritize:
- route-aware weather
- departure timing
- practical preparation
- clarity before leaving

---

## Agent rules

These rules apply to any coding agent or LLM operating on this repo.

**Form protection**
- Do not modify the form or its fields without an explicit request.

**Asset discipline**
- Before swapping, renaming, or removing any asset, verify it is actually referenced in the code.
- When adjusting branding, prefer fine-tuning proportion and alignment before altering structure or layout.

**Legacy guard**
- Do not reintroduce any Moto Weather Route branding, naming, or assets.
- Do not use `banner_desktop.png` or `banner_mobile.png` in the layout.

**Repo / domain rule**
- Preferred repository name: `trajeto`
- Do not let domain or repo constraints redefine the public brand unnecessarily.

---

## Fast summary

Trajeto is a Brazilian digital product initially focused on motorcyclists. It helps users understand the weather along a route before departure. The official brand is Trajeto, the default tagline is "O clima do seu caminho," and the brand should feel like a modern, premium, practical digital product — not a biker club or a generic weather tool. The app is a static site deployed via GitHub Actions to the branch `gh-pages` at `trajetoapp.com.br`.