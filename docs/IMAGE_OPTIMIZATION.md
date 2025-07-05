# Optimización de Imágenes con Next.js

## ✅ Enfoque Recomendado: Next.js Nativo

**¿Por qué Next.js es suficiente?**
- ✅ **Cero configuración adicional** - Funciona automáticamente
- ✅ **Optimización automática** - WebP y AVIF según el navegador
- ✅ **Caché inteligente en Vercel** - Rendimiento optimizado
- ✅ **Responsive automático** - Tamaños según dispositivo
- ✅ **Lazy loading** - Carga solo cuando es necesario

## 🚀 Configuración Actual

### Next.js Config (`next.config.ts`)
```typescript
{
  images: {
    formats: ['image/avif', 'image/webp'], // Automático según navegador
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    minimumCacheTTL: 3600, // 1 hora de caché
  }
}
```

### Vercel Config (`vercel.json`)
```json
{
  "images": {
    "formats": ["image/avif", "image/webp"],
    "minimumCacheTTL": 31536000 // 1 año de caché
  }
}
```

## 📱 Componente Optimizado

### OptimizedImage
Mejora el componente nativo de Next.js con:
- Loading states suaves
- Error handling elegante
- Blur placeholder automático
- Sizes inteligentes

```tsx
import { OptimizedImage, ResponsiveImage } from '@/components/OptimizedImage'

// Imagen básica optimizada
<OptimizedImage
  src="/proyecto-camara-leis.webp"
  alt="Proyecto"
  width={800}
  height={600}
  priority={true} // Solo para imágenes above-the-fold
/>

// Imagen responsive con aspect ratio
<ResponsiveImage
  src="/vista-exterior.webp"
  alt="Vista"
  aspectRatio="video"
/>
```

## 🎯 Mejores Prácticas

### 1. Uso de Priority
```