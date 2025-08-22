# Rubix Learn

This website is built using [Docusaurus](https://docusaurus.io/). It serves as the official documentation and learning platform for Rubix.

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window at `http://localhost:3000`. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Production Preview

```bash
npm run serve
```

This command serves the built website locally for testing the production build.

## Deployment

This website is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment is handled by GitHub Actions workflow located at `.github/workflows/github-pages.yml`.

### Manual Deployment (if needed)

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

## Contributing

1. Create a new branch from `main`
2. Make your changes
3. Test locally with `npm start`
4. Build and test with `npm run build` and `npm run serve`
5. Submit a pull request

## Project Structure

```
learn/
├── docs/                 # Documentation files
├── src/                  # Custom React components and pages
├── static/               # Static assets (images, files, etc.)
├── docusaurus.config.js  # Docusaurus configuration
├── sidebars.js           # Sidebar navigation configuration
└── package.json          # Dependencies and scripts
```

## Links

- **Live Site**: [https://rubixchain.github.io/learn](https://rubixchain.github.io/learn)
- **Docusaurus Documentation**: [https://docusaurus.io/](https://docusaurus.io/)
- **Rubix Main Repository**: [https://github.com/rubixchain](https://github.com/rubixchain)