# Read Me

### Run Docs
```
npm run dev
```

### Deploying to Github Pages
```
npm run build
npm run gh-deploy
```

The above are scripts for:

- vitepress build
- gh-pages -d .vitepress/dist

### Creating docs
- docs > category > create .md file i.e. docs > development > 'training.md'

### Add file to config
- .vitepress > config.mjs
```
{
        text: 'Development',
        items: [
          { text: 'Guidelines', link: '/docs/development/guidelines' },
          { text: 'Architecture', link: '/docs/development/architecture' },
          // example
          { text: 'Training', link: '/docs/development/training' },
        ]
      },
```