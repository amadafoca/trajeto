# AGENTS.md — Trajeto

Este arquivo complementa as [regras globais de engenharia](https://github.com/amadafoca/engineering/blob/main/AGENTS.md).
Em caso de conflito, este arquivo prevalece.

---

## Repository and deploy

- **Repo:** `amadafoca/trajeto`
- **Remote principal:** `origin` = `https://github.com/amadafoca/trajeto.git`
- **Branch principal:** `main` (branch de desenvolvimento)
- **Branch de publicação:** `gh-pages` (gerado automaticamente pelo workflow de deploy)
- **Domínio público:** `https://trajetoapp.com.br/`
- **CNAME esperado:** `trajetoapp.com.br`
- **Arquivo principal:** `index.html`

### Deploy

O deploy é feito automaticamente via GitHub Actions (`.github/workflows/deploy.yml`):

1. A cada push no branch `main`, o workflow é disparado.
2. O workflow substitui o placeholder `<!--BUILD-->` no `index.html` pelo SHA curto do commit (ex: `build a1b2c3d`).
3. O resultado é publicado no branch `gh-pages` via `peaceiris/actions-gh-pages`.
4. O GitHub Pages serve o site a partir do branch `gh-pages` (root).

**Regras importantes:**
- O placeholder `<!--BUILD-->` no rodapé **não deve ser substituído manualmente** — a substituição é feita exclusivamente pelo workflow.
- Não faça push diretamente no branch `gh-pages`. Ele é gerenciado pelo GitHub Actions.
- Todas as alterações devem ser feitas no branch `main`.

---

## Stack e integrações

Site estático, sem framework, sem build local.

| Camada | Serviço | Notas |
|---|---|---|
| Hosting | GitHub Pages | Branch `gh-pages`, deploy via GitHub Actions |
| Autocomplete | Photon API (`photon.komoot.io`) | `lang=pt` não funciona no public instance; filtrar client-side com `countrycode === 'BR'` (sem underscore) |
| Geocoding | Nominatim | Não incluir `countrycodes=br` para destinos internacionais; `User-Agent` obrigatório |
| Routing (primário) | GraphHopper | — |
| Routing (fallback) | OSRM | Semicolon-separated `lon,lat`; `geometries=geojson&overview=full` |
| Weather | Open-Meteo | Chave `precipitation` em mm; timezone `America/Sao_Paulo`; `precipitation_probability` pode estar ausente |
| Mapa | Leaflet + CARTO dark tiles | — |

**APIs descartadas:**
- Windy Point Forecast API — free tier retorna dados embaralhados, confirmado como não confiável.

**Google Maps links:** usar coordenadas lat/lng do Nominatim (não texto raw); `travelmode=two-wheeler` é suportado com fallback graceful.

---

## Product

Trajeto é um produto digital inicialmente focado em motociclistas no Brasil. Ajuda o usuário a entender o clima ao longo da rota antes de sair, combinando origem, destino, data, horário de partida e velocidade média.

**Core idea:** Não é a previsão da cidade. É a previsão da sua rota.

**Positioning:** Trajeto é a maneira inteligente de entender o clima do trajeto antes de sair. Ajuda o usuário a decidir melhor quando sair, entender onde a chuva afeta a rota, se preparar de forma prática e reduzir surpresas na estrada.

---

## Brand e tom de voz

**Nome oficial:** Trajeto. Usar "Trajeto App" apenas como referência interna quando necessário.

**Tagline padrão:** O clima do seu caminho

**Tom de voz:** claro, direto, confiável, prático, moderno, sóbrio. Deve soar como um co-piloto inteligente.

**Personalidade:** inteligente, útil, claro, confiável, premium, digital-first.

**Evitar:** gírias forçadas, jargão de startup, clichês de motociclismo, tom aventureiro exagerado, melodrama.

**Não deve parecer:** um clube de motociclistas, uma marca off-road, um dashboard de agência meteorológica, um template genérico de startup, um MVP hacky.

---

## Direção visual

Tratar o Trajeto como um produto digital premium, não como uma marca de lifestyle motociclista.

**Estilo desejado:** dark premium base, minimal, clean, geométrico, mobile-first, inspirado em rota/movimento/horizonte.

**Paleta de cores:** base escura premium com acentos em deep blue, blue-violet, electric blue controlado, cold cyan, teal refinado. Evitar roxo genérico de template e excesso de neon.

**Direção de logo:** T monograma formado por linha de rota, ou path + horizonte minimal, ou wordmark custom com cues sutis de rota. Deve ser simples, memorável, horizontal, app-icon friendly, forte em fundo escuro, funcional em tamanhos pequenos.

**Evitar:** escudos, brasões, motocicletas literais, nuvens, raios, map pins, estética off-road agressiva, poluição visual.

---

## Branding assets

Assets ativos referenciados no layout atual:

| Role | Arquivo |
|---|---|
| Ícone do topo | `trajeto-icon-padded.png` |
| Wordmark do header | `trajeto-wordmark.png` |
| Favicon | `trajeto-favicon-512.png` |

**Deprecated — não usar no layout:**
- `banner_desktop.png`
- `banner_mobile.png`

---

## Header / hero e UX copy

O topo da landing page deve ser minimal: brand (icon + wordmark), tagline, linha funcional, form.

**Hierarquia recomendada:**
1. Brand header
2. Hero atmosférico curto
3. Headline funcional
4. Linha de suporte
5. Form / CTA

**Copy aprovado:**

- **Header:** Trajeto — O clima do seu caminho
- **Headline funcional:** Veja o clima do seu trajeto antes de sair
- **Linha de suporte:** Informe origem, destino, horário e velocidade média para visualizar a previsão de chuva ao longo da rota.

Não repetir a marca de forma fraca múltiplas vezes na seção superior.

**Princípio de UX copy:** todo texto deve ajudar o usuário a tomar uma decisão. Priorizar: previsão por rota, timing de partida, preparação prática, clareza antes de sair.

---

## Agent rules

Regras específicas para agentes operando neste repositório.

**Form protection:**
- Não modificar o formulário ou seus campos sem pedido explícito.

**Asset discipline:**
- Antes de trocar, renomear ou remover qualquer asset, verificar se está referenciado no código.
- Ao ajustar branding, preferir ajuste fino de proporção e alinhamento antes de alterar estrutura ou layout.

**Legacy guard:**
- Não reintroduzir branding, naming ou assets do Moto Weather Route.
- Não usar `banner_desktop.png` ou `banner_mobile.png` no layout.
- Não reabrir a decisão de naming Trajeto vs SkyRoad salvo pedido explícito.

**Repo / domain:**
- Nome preferido do repositório: `trajeto`
- Não deixar restrições de domínio ou repo redefinir a marca pública.
