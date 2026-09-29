# Trajeto

Previsão de chuva trecho a trecho para viagens de moto no Brasil.

Informe origem, destino, data, horário e velocidade média — o app calcula a rota, consulta a previsão hora a hora e mostra no mapa com relatório detalhado.

## Stack

- **Frontend:** Vanilla HTML/CSS/JS (zero framework)
- **Mapa:** Leaflet.js + OpenStreetMap (Esri Dark Gray Canvas tiles)
- **Roteamento:** GraphHopper (primário, com API key) + OSRM (fallback público)
- **Autocomplete:** Photon API (photon.komoot.io)
- **Geocoding:** Nominatim (geocoding e reverse geocoding)
- **Clima:** Open-Meteo API (modelo GFS/ICON)

## Deploy

Push no branch `main` dispara o workflow de deploy automaticamente:

1. GitHub Actions (`.github/workflows/deploy.yml`) é acionado a cada push em `main`.
2. O workflow injeta o SHA curto do commit no placeholder `<!--BUILD-->` do `index.html`.
3. O resultado é publicado no branch `gh-pages` via `peaceiris/actions-gh-pages`.
4. GitHub Pages serve o site a partir de `gh-pages` (root).
5. Domínio: **trajetoapp.com.br** (CNAME configurado no repo).

> Não faça push diretamente no branch `gh-pages` — ele é gerenciado pelo GitHub Actions.

## Estrutura

```
trajeto/
├── .agents/
│   └── AGENTS.md              # Instruções de branding e agentes
├── .github/
│   └── workflows/
│       └── deploy.yml         # CI/CD — deploy automático
├── assets/
│   ├── v0/                    # Assets originais (ícone, wordmark, favicon)
│   └── v1/                    # Assets atualizados (favicons, OG image, logos)
├── CLAUDE.md                  # Instruções para agentes de código
├── CNAME                      # Domínio customizado (trajetoapp.com.br)
├── index.html                 # Aplicação completa (HTML + CSS + JS inline)
└── README.md
```

## Funcionalidades

- Formulário com origem, destino, data, hora e velocidade média
- Autocomplete de cidades brasileiras (Photon API)
- Geocoding automático e reverse geocoding dos pontos intermediários
- Rota rodoviária real com fallback automático (GraphHopper → OSRM)
- Pontos intermediários amostrados ao longo da rota
- Previsão de precipitação (mm), probabilidade (%) e temperatura prevista por trecho
- Exibição de temperatura nos cards das cidades
- Mapa interativo com markers coloridos por classificação de chuva
- Timeline clicável (sincroniza com mapa)
- Classificação: seco / garoa / chuva leve / moderada / forte
- Veredicto automático + dicas para o piloto
- Link para rota no Google Maps (travelmode=two-wheeler)
- Link compartilhável via WhatsApp com resumo da previsão

## APIs utilizadas

| API | Uso | Observação |
|-----|-----|------------|
| GraphHopper | Roteamento primário | Requer API key |
| OSRM | Roteamento fallback | Público, sem chave |
| Photon | Autocomplete de cidades | Público, sem chave |
| Nominatim | Geocoding e reverse geocoding | 1 req/s |
| Open-Meteo | Previsão hora a hora | Gratuito (non-commercial) |
| Esri (ArcGIS) | Tiles do mapa | Gratuito, sem API key |