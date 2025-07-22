# Referencia Rápida de Colores - El Método AdulMa

## 🎨 Paleta de Colores

### Grises
```css
/* Ultra suaves - Fondos */
bg-zinc-25   /* #fafafa - Fondos principales */
bg-zinc-50   /* #f9fafb - Cards y secciones */

/* Suaves - Bordes y separadores */
border-zinc-50   /* Bordes ultra suaves */
border-zinc-100  /* Bordes normales */
border-zinc-200  /* Separadores */

/* Medios - Texto secundario */
text-zinc-500  /* Texto secundario principal */
text-zinc-600  /* Texto descriptivo */

/* Intensos - Texto principal */
text-zinc-700  /* Botones secundarios */
text-zinc-800  /* Títulos y texto principal */
```

### Naranjas
```css
/* Ultra suaves - Fondos */
bg-amber-25   /* #fffcf5 - Fondos de íconos */
bg-amber-50   /* #fff7ed - Hover states suaves */

/* Suaves - Elementos decorativos */
bg-amber-100  /* Fondos de íconos hover */
bg-amber-200  /* Líneas decorativas */

/* Principal - Marca */
bg-amber-400  /* Color principal de marca */
text-amber-400  /* Íconos y enlaces */

/* Intensos - Estados activos */
bg-amber-500  /* Hover states */
```

## 🧩 Componentes Comunes

### Botones
```tsx
// Primario
className="bg-amber-400 hover:bg-amber-500 text-white"

// Secundario
className="bg-zinc-700 hover:bg-zinc-800 text-white"

// Outline
className="border-2 border-zinc-200 hover:border-amber-300 text-zinc-600 hover:text-amber-500"
```

### Cards
```tsx
// Card básica
className="bg-white border border-zinc-50 hover:border-amber-100"

// Card con gradiente
className="bg-gradient-to-b from-white to-zinc-25"

// Ícono en card
className="bg-gradient-to-br from-amber-50 to-amber-25"
```

### Texto
```tsx
// Título principal
className="text-zinc-800 font-bold"

// Subtítulo
className="text-zinc-500"

// Texto descriptivo
className="text-zinc-600"

// Enlaces
className="text-amber-400 hover:text-amber-500"
```

### Estados
```tsx
// Activo
className="bg-amber-400 text-white"

// Hover
className="hover:bg-zinc-50"

// Focus
className="focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50"

// Disabled
className="text-zinc-400 cursor-not-allowed"
```

## ✅ Combinaciones Aprobadas

### Texto sobre Fondo Claro
```css
text-zinc-800 + bg-white     /* 12.6:1 - AAA ✅ */
text-zinc-600 + bg-white     /* 7.0:1 - AAA ✅ */
text-zinc-500 + bg-white     /* 4.6:1 - AA ✅ */
text-amber-400 + bg-white   /* 4.8:1 - AA ✅ */
```

### Texto sobre Fondo Oscuro
```css
text-white + bg-amber-400   /* 4.8:1 - AA ✅ */
text-white + bg-zinc-700     /* 8.9:1 - AAA ✅ */
text-white + bg-zinc-800     /* 12.6:1 - AAA ✅ */
```

### Bordes y Separadores
```css
border-zinc-50 + bg-white    /* Separación sutil */
border-zinc-100 + bg-white   /* Separación normal */
border-amber-100 + bg-white /* Hover states */
```

## ❌ Combinaciones a Evitar

```css
/* Contraste insuficiente */
text-zinc-400 + bg-white     /* 3.1:1 - Falla AA */
text-amber-200 + bg-white   /* 2.8:1 - Falla AA */

/* Demasiado intenso */
text-zinc-900 + bg-white     /* Evitar - Muy agresivo */
bg-amber-600 + text-white   /* Evitar - Muy saturado */

/* Combinaciones problemáticas */
text-zinc-500 + bg-zinc-50   /* Contraste bajo */
text-amber-400 + bg-amber-50 /* Falta de contraste */
```

## 🔧 Utilidades Tailwind

### Gradientes
```css
/* Fondos suaves */
bg-gradient-to-b from-white to-zinc-25
bg-gradient-to-br from-amber-50 to-amber-25

/* Overlays */
bg-gradient-to-t from-zinc-800/80 to-transparent
```

### Sombras
```css
/* Suaves */
shadow-sm    /* Elementos sutiles */
shadow       /* Cards normales */
shadow-md    /* Elementos elevados (usar con moderación) */

/* Con color */
shadow-lg shadow-amber-100/20  /* Sombras con tinte */
```

### Opacidades
```css
/* Overlays */
bg-black/20   /* Backdrop móvil */
bg-white/95   /* Navbar con blur */

/* Estados */
hover:bg-amber-100/30  /* Hover sutil */
focus:ring-amber-400/50 /* Focus ring */
```

## 📱 Responsive

### Mobile First
```tsx
// Base (mobile)
className="text-zinc-600"

// Tablet y desktop
className="text-zinc-600 md:text-zinc-500"
```

### Touch Targets
```tsx
// Mínimo 44px para touch
className="p-3 min-h-[44px] min-w-[44px]"

// Estados touch
className="active:bg-zinc-100 touch:bg-zinc-50"
```

## 🎯 Casos de Uso Específicos

### Header/Navbar
```tsx
// Fondo
className="bg-white/95 backdrop-blur-xl"

// Logo
className="bg-amber-400 hover:bg-amber-500"

// Enlaces
className="text-zinc-500 hover:text-zinc-700"

// Activo
className="bg-amber-400 text-white"
```

### Hero Section
```tsx
// Fondo
className="bg-zinc-25"

// Título
className="text-zinc-800"

// Subtítulo
className="text-zinc-500"

// CTA
className="bg-amber-400 hover:bg-amber-500"
```

### Footer
```tsx
// Fondo
className="bg-zinc-800"

// Texto
className="text-zinc-200"

// Enlaces
className="text-zinc-200 hover:text-amber-400"
```

---

**Versión**: 1.0  
**Última actualización**: Enero 2025  
**Uso**: Copiar y pegar clases según necesidad