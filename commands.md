# Portfolio Workspace

Personal portfolio site built with Hugo.

## Local Development

Run these commands from the repository root.

### Sync Dependencies

Run this after changing Hugo modules, theme settings, or package dependencies.

```bash
hugo mod tidy
hugo mod npm pack
npm install
```

### Clean Build Artifacts

```bash
rm -rf public resources .hugo_build.lock .hugo_cache
```

### Production Build

```bash
hugo --gc --minify --logLevel warn --cacheDir "$(pwd)/.hugo_cache"
```

### Local Preview

```bash
hugo server -w --bind 127.0.0.1 --port 1313 --baseURL http://127.0.0.1:1313/ --cacheDir "$(pwd)/.hugo_cache"
```

Open:

```text
http://127.0.0.1:1313/
```

### If Port 1313 Is Already In Use

Stop an existing Hugo server:

```bash
pkill -f 'hugo server'
```

Or use another port:

```bash
hugo server -w --bind 127.0.0.1 --port 1314 --baseURL http://127.0.0.1:1314/ --cacheDir "$(pwd)/.hugo_cache"
```
