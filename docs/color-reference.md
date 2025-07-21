# Referencia Rápida de Colores - El Método AdulMa

## 🎨 Paleta de Colores

### Grises
```css
/* Ultra suaves - Fondos */
bg-gray-25   /* #fafafa - Fondos principales */
bg-gray-50   /* #f9fafb - Cards y secciones */

/* Suaves - Bordes y separadores */
border-gray-50   /* Bordes ultra suaves */
border-gray-100  /* Bordes normales */
border-gray-200  /* Separadores */

/* Medios - Texto secundario */
text-gray-500  /* Texto secundario principal */
text-gray-600  /* Texto descriptivo */

/* Intensos - Texto principal */
text-gray-700  /* Botones secundarios */
text-gray-800  /* Títulos y texto principal */
```

### Naranjas
```css
/* Ultra suaves - Fondos */
bg-orange-25   /* #fffcf5 - Fondos de íconos */
bg-orange-50   /* #fff7ed - Hover states suaves */

/* Suaves - Elementos decorativos */
bg-orange-100  /* Fondos de íconos hover */
bg-orange-200  /* Líneas decorativas */

/* Principal - Marca */
bg-orange-400  /* Color principal de marca */
text-orange-400  /* Íconos y enlaces */

/* Intensos - Estados activos */
bg-orange-500  /* Hover states */
```

## 🧩 Componentes Comunes

### Botones
```tsx
// Primario
className="bg-orange-400 hover:bg-orange-500 text-white"

// Secundario
className="bg-gray-700 hover:bg-gray-800 text-white"

// Outline
className="border-2 border-gray-200 hover:border-orange-300 text-gray-600 hover:text-orange-500"
```

### Cards
```tsx
// Card básica
className="bg-white border border-gray-50 hover:border-orange-100"

// Card con gradiente
className="bg-gradient-to-b from-white to-gray-25"

// Ícono en card
className="bg-gradient-to-br from-orange-50 to-orange-25"
```

### Texto
```tsx
// Título principal
className="text-gray-800 font-bold"

// Subtítulo
className="text-gray-500"

// Texto descriptivo
className="text-gray-600"

// Enlaces
className="text-orange-400 hover:text-orange-500"
```

### Estados
```tsx
// Activo
className="bg-orange-400 text-white"

// Hover
className="hover:bg-gray-50"

// Focus
className="focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"

// Disabled
className="text-gray-400 cursor-not-allowed"
```

## ✅ Combinaciones Aprobadas

### Texto sobre Fondo Claro
```css
text-gray-800 + bg-white     /* 12.6:1 - AAA ✅ */
text-gray-600 + bg-white     /* 7.0:1 - AAA ✅ */
text-gray-500 + bg-white     /* 4.6:1 - AA ✅ */
text-orange-400 + bg-white   /* 4.8:1 - AA ✅ */
```

### Texto sobre Fondo Oscuro
```css
text-white + bg-orange-400   /* 4.8:1 - AA ✅ */
text-white + bg-gray-700     /* 8.9:1 - AAA ✅ */
text-white + bg-gray-800     /* 12.6:1 - AAA ✅ */
```

### Bordes y Separadores
```css
border-gray-50 + bg-white    /* Separación sutil */
border-gray-100 + bg-white   /* Separación normal */
border-orange-100 + bg-white /* Hover states */
```

## ❌ Combinaciones a Evitar

```css
/* Contraste insuficiente */
text-gray-400 + bg-white     /* 3.1:1 - Falla AA */
text-orange-200 + bg-white   /* 2.8:1 - Falla AA */

/* Demasiado intenso */
text-gray-900 + bg-white     /* Evitar - Muy agresivo */
bg-orange-600 + text-white   /* Evitar - Muy saturado */

/* Combinaciones problemáticas */
text-gray-500 + bg-gray-50   /* Contraste bajo */
text-orange-400 + bg-orange-50 /* Falta de contraste */
```

## 🔧 Utilidades Tailwind

### Gradientes
```css
/* Fondos suaves */
bg-gradient-to-b from-white to-gray-25
bg-gradient-to-br from-orange-50 to-orange-25

/* Overlays */
bg-gradient-to-t from-gray-800/80 to-transparent
```

### Sombras
```css
/* Suaves */
shadow-sm    /* Elementos sutiles */
shadow       /* Cards normales */
shadow-md    /* Elementos elevados (usar con moderación) */

/* Con color */
shadow-lg shadow-orange-100/20  /* Sombras con tinte */
```

### Opacidades
```css
/* Overlays */
bg-black/20   /* Backdrop móvil */
bg-white/95   /* Navbar con blur */

/* Estados */
hover:bg-orange-100/30  /* Hover sutil */
focus:ring-orange-400/50 /* Focus ring */
```

## 📱 Responsive

### Mobile First
```tsx
// Base (mobile)
className="text-gray-600"

// Tablet y desktop
className="text-gray-600 md:text-gray-500"
```

### Touch Targets
```tsx
// Mínimo 44px para touch
className="p-3 min-h-[44px] min-w-[44px]"

// Estados touch
className="active:bg-gray-100 touch:bg-gray-50"
```

## 🎯 Casos de Uso Específicos

### Header/Navbar
```tsx
// Fondo
className="bg-white/95 backdrop-blur-xl"

// Logo
className="bg-orange-400 hover:bg-orange-500"

// Enlaces
className="text-gray-500 hover:text-gray-700"

// Activo
className="bg-orange-400 text-white"
```

### Hero Section
```tsx
// Fondo
className="bg-gray-25"

// Título
className="text-gray-800"

// Subtítulo
className="text-gray-500"

// CTA
className="bg-orange-400 hover:bg-orange-500"
```

### Footer
```tsx
// Fondo
className="bg-gray-800"

// Texto
className="text-gray-200"

// Enlaces
className="text-gray-200 hover:text-orange-400"
```

---

**Versión**: 1.0  
**Última actualización**: Enero 2025  
**Uso**: Copiar y pegar clases según necesidad