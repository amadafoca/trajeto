# 🏍️ Moto Weather Route

Previsão de chuva trecho a trecho para viagens de moto no Brasil.

Digita origem, destino, data e horário — o app calcula a rota, consulta a previsão hora a hora e mostra no mapa com relatório detalhado.

## Stack

- **Frontend:** Vanilla HTML/CSS/JS (zero build, zero framework)
- **Mapa:** Leaflet.js + OpenStreetMap (CARTO dark tiles)
- **Rota:** OSRM (Open Source Routing Machine)
- **Geocoding:** Nominatim (OpenStreetMap)
- **Clima:** Open-Meteo API (modelo GFS/ICON)
- **Custo:** 100% gratuito, sem API keys

## Deploy no GitHub Pages

```bash
# 1. Cria o repo no GitHub (pode ser pelo site ou CLI)
gh repo create moto-weather --public

# 2. Na pasta do projeto
cd moto-weather
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/moto-weather.git
git push -u origin main

# 3. Ativa GitHub Pages
# → Vai em Settings > Pages > Source: Deploy from branch > main > / (root) > Save

# 4. Acessa em: https://SEU_USUARIO.github.io/moto-weather/
```

## Estrutura

```
moto-weather/
├── index.html          # Página principal
├── css/
│   └── style.css       # Tema escuro
├── js/
│   ├── app.js          # Orquestrador principal
│   ├── geocode.js      # Nominatim geocoding
│   ├── route.js        # OSRM rota + sampling
│   ├── weather.js      # Open-Meteo + classificação
│   └── ui.js           # Renderização mapa + report
└── README.md
```

## Funcionalidades

- Formulário com origem, destino, data, hora e velocidade média
- Geocoding automático de cidades brasileiras
- Rota rodoviária real (não linha reta)
- Pontos intermediários amostrados automaticamente
- Reverse geocoding dos pontos (identifica cidade/município)
- Previsão de precipitação (mm) e probabilidade (%) por hora
- Mapa interativo com markers coloridos por classificação
- Timeline clicável (sincroniza com mapa)
- Classificação: seco / garoa / chuva leve / moderada / forte
- Veredicto automático + dicas pro piloto
- Botão copiar mensagem formatada WhatsApp

## APIs utilizadas (todas gratuitas e sem chave)

| API | Uso | Rate limit |
|-----|-----|-----------|
| Nominatim | Geocoding | 1 req/s |
| OSRM | Rota rodoviária | Sem limite publicado |
| Open-Meteo | Previsão hora a hora | Ilimitado (non-commercial) |
| CARTO | Tiles do mapa | Ilimitado |

## Licença

MIT
