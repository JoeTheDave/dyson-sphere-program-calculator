# Dyson Sphere Program Calculator

A production calculator for the game Dyson Sphere Program. This web application helps players calculate resource requirements and production chains for crafting items in the game.

## Production URL

https://dyson-sphere-program-calculator.fly.dev/

## Tech Stack

- **React** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **DaisyUI** - Component library
- **Nginx** - Production web server

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Deployment

This project is configured for deployment to [fly.io](https://fly.io).

### First Time Setup

1. Install flyctl:

```bash
curl -L https://fly.io/install.sh | sh
```

2. Login to fly.io:

```bash
fly auth login
```

3. Launch your app (this creates it on fly.io):

```bash
fly launch --no-deploy
```

4. Deploy:

```bash
npm run deploy
```

### Deployment Configuration

The deployment uses:

- **Dockerfile**: Multi-stage build with Node.js (build) and Nginx (serve)
- **nginx.conf**: Configured for SPA routing and static asset caching
- **fly.toml**: Auto-scaling configuration with minimal resources (256MB RAM)
- Auto-start and auto-stop machines to minimize costs

You can customize the app name and region in `fly.toml`:

- `app`: Your fly.io app name
- `primary_region`: Region code (e.g., "iad" for US East, "sjc" for US West, "lhr" for London)

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and HTML data
│   ├── components/     # React components
│   ├── lib/            # Utilities, types, and data
│   ├── styles/         # CSS files
│   └── main.tsx        # Entry point
├── scripts/            # Build and data loading scripts
├── Dockerfile          # Docker configuration for deployment
├── nginx.conf          # Nginx configuration for production
└── fly.toml            # Fly.io deployment configuration
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.
