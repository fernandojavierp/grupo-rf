# Grupo RF - Sitio Web

Sitio web profesional para Grupo RF, empresa de construcción y remodelación en Santiago de Chile.

## 🚀 Características Principales

### Página de Servicios Mejorada
- **Navegación Rápida**: Menú de acceso directo a todos los servicios
- **Sliders Interactivos**: Cada servicio tiene su propio carrusel de imágenes
- **Diseño Responsivo**: Optimizado para móviles, tablets y desktop
- **Navegación Suave**: Scroll automático a las secciones
- **Testimonios**: Sección de opiniones de clientes
- **Proceso de Trabajo**: Explicación clara del flujo de trabajo

### Servicios Incluidos
1. **Remodelaciones** - Transformación de espacios existentes
2. **Construcciones** - Proyectos residenciales y comerciales
3. **Diseño de Interiores** - Creación de espacios estéticos y funcionales
4. **Ampliaciones** - Expansión de espacios actuales
5. **Renovaciones** - Revitalización de espacios antiguos

### Componentes Creados
- `ServicesBanner` - Banner principal con slider automático
- `RemodelacionesSlider` - Carrusel de imágenes de remodelaciones
- `ConstruccionesSlider` - Carrusel de imágenes de construcciones
- `DisenoSlider` - Carrusel de imágenes de diseño
- `AmpliacionesSlider` - Carrusel de imágenes de ampliaciones
- `RenovacionesSlider` - Carrusel de imágenes de renovaciones

## 🛠️ Tecnologías Utilizadas

- **Next.js 15** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de estilos
- **Lucide React** - Iconos
- **React Slick** - Sliders (en HeroSlider)

## 📁 Estructura del Proyecto

```
grupo-rf/
├── app/
│   ├── services/
│   │   └── page.tsx          # Página de servicios mejorada
│   └── page.tsx              # Página principal
├── components/
│   ├── ServicesBanner.tsx    # Banner principal
│   ├── RemodelacionesSlider.tsx
│   ├── ConstruccionesSlider.tsx
│   ├── DisenoSlider.tsx
│   ├── AmpliacionesSlider.tsx
│   ├── RenovacionesSlider.tsx
│   ├── HeroSlider.tsx
│   └── footer.tsx
├── public/                   # Imágenes del proyecto
└── README.md
```

## 🎨 Características de Diseño

### Paleta de Colores
- **Azul Principal**: `blue-950`, `blue-900`, `blue-800`
- **Grises**: `gray-100`, `gray-300`, `gray-600`, `gray-800`
- **Blancos**: `white`, `gray-200`

### Tipografía
- **Títulos**: `font-bold`, tamaños `text-2xl` a `text-6xl`
- **Texto**: `text-lg`, `text-xl`
- **Descripciones**: `text-gray-600`, `text-gray-300`

### Responsividad
- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: `md:` (768px), `lg:` (1024px)
- **Grid System**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3/4/5`

## 🚀 Funcionalidades

### Sliders Interactivos
- **Autoplay**: Cambio automático cada 5 segundos
- **Navegación Manual**: Botones de anterior/siguiente
- **Indicadores**: Puntos de navegación
- **Touch Support**: Swipe en dispositivos móviles
- **Pausa en Interacción**: Se pausa al interactuar

### Navegación
- **Scroll Suave**: Navegación fluida entre secciones
- **Anclas**: Enlaces directos a cada servicio
- **Menú Rápido**: Acceso inmediato desde el banner

### Optimización
- **Lazy Loading**: Carga diferida de imágenes
- **Priority Loading**: Imágenes críticas cargan primero
- **SEO Optimized**: Meta tags y estructura semántica

## 📱 Experiencia de Usuario

### Accesibilidad
- **ARIA Labels**: Etiquetas para lectores de pantalla
- **Focus Management**: Navegación por teclado
- **Contraste**: Colores con buen contraste
- **Alt Text**: Descripciones de imágenes

### Performance
- **Build Optimizado**: Sin errores de linting
- **Imágenes Optimizadas**: Formato WebP
- **Componentes Eficientes**: Re-renderizado optimizado

## 🔧 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## 📸 Imágenes Incluidas

El proyecto incluye imágenes reales de proyectos:
- Remodelaciones de baños
- Construcciones residenciales
- Proyectos de diseño
- Ampliaciones y renovaciones
- Vistas exteriores e interiores

## 🎯 Próximas Mejoras

- [ ] Galería de proyectos completa
- [ ] Formulario de contacto funcional
- [ ] Blog de consejos de construcción
- [ ] Calculadora de presupuestos
- [ ] Integración con redes sociales
- [ ] Chat en vivo
- [ ] Sistema de citas online

## 📞 Contacto

Para más información sobre el proyecto o solicitar modificaciones, contactar a Grupo RF.

---

**Desarrollado con ❤️ para Grupo RF**
