# Ignite-Rockeseat
## Maratona Ignite

## React + Typescript (TSX = XML + Javascript)

# Criar projeto
### npm create vite@latest
### cd event-platform
### npm i
## Tailwindcss
### npm i tailwindcss postcss autoprefixer -D
### npx tailwindcss init -p
## Graphql
### npm i @apollo/client graphql
## Bibliotecas
### npm i phosphor-react
### npm i date-fns
### npm i @vime/core @vime/react
### npm i react-router-dom
### npm i classnames
## CodeGen
### npm i @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo -D
### npm i @graphql-codegen/cli -D

# CSS com o tailwind
## @tailwind base;
## @tailwind components;
## @tailwind utilities;

## body {
##  @apply bg-gray-900 text-zinc-100;
##  -webkit-font-smoothing: antialiased;
## }

# Editar tailwind.config.js
## content: ['./src/**/*.tsx'],

# Criar componente para imagem
## Copia como svg no figma
## Cola no site https://svg2jsx.com/
## Retira a função e cola no componente

# Colocar cores padrões no tailwind
## theme: {
##    extend: {
##      colors: {
##        green: {
##          300: '#00B37E',
##          500: '#00875F',
##          700: '#015F43'
##        },
##        blue: {
##          500: '#81D8F7'
##       },
##        orange: {
##          500: '#FBA94C'
##        },
##       red: {
##          500: '#F75A68'
##        },
##        gray: {
##          100: '#E1E1E6',
##          200: '#C4C4CC',
##          300: '#8D8D99',
##          500: '#323238',
##          600: '#29292E',
##          700: '#121214',
##          900: '#09090A'
##        }
##     }
##    }

# Colocar fonte padrão
## fontFamily: {
##        sans: 'Roboto, sans-serif'
##      },
