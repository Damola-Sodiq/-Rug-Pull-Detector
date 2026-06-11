# Rug Pull Detector - Frontend

React frontend for the DeFi Rug Pull Detection System.

## Prerequisites

- Node.js 16+ and npm/yarn
- Rust backend running on http://127.0.0.1:8080

## Installation

```bash
cd frontend
npm install
```

## Development

```bash
npm start
```

The app will open at http://localhost:3000

## Build for Production

```bash
npm run build
```

## Features

- **Token Analyzer**: Input token metrics and get instant risk analysis
- **Risk Dashboard**: View analysis history with visual risk indicators
- **Real-time Updates**: Connects to Rust backend API
- **Modern UI**: Built with TailwindCSS and Lucide icons

## API Endpoints

- `POST /api/analyze` - Analyze a single token
- `POST /api/batch-analyze` - Analyze multiple tokens
- `GET /health` - Health check

## Tech Stack

- React 18
- TailwindCSS
- Lucide React (icons)
- Axios (HTTP client)
- Recharts (charts)
