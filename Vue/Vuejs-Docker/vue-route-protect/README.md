# vue-route-protect
Rutas protegidas, agrega una propiedad meta para indicar que la ruta requiere autenticación (las rutas "Instaladas")

## index.ts
```
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import DashboardView from '@/views/DashboardView.vue'
...
  {
    path: '/dashboard',
    name: 'dash',
    component: DashboardView,
    meta: {
      requireAuth: true,
      role: 'admin'
    }
  }
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
