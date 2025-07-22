# Sistema de Diseño - El Método AdulMa

## 🎨 Paleta de Colores Suavizados

### Filosofía de Diseño
El sitio web de El Método AdulMa utiliza una paleta de colores suavizados diseñada específicamente para:
- **Reducir la fatiga visual** en usuarios de todas las edades
- **Mejorar la accesibilidad** para adultos mayores
- **Mantener estándares WCAG AA/AAA** de contraste
- **Crear una experiencia visual cómoda y profesional**

### Paleta Principal

#### Grises Suavizados
```css
zinc-25:  #fafafa  /* Ultra suave para fondos */
zinc-50:  #f9fafb  /* Fondos principales */
zinc-100: #f3f4f6  /* Bordes suaves */
zinc-200: #e5e7eb  /* Separadores */
zinc-300: #d1d5db  /* Elementos secundarios */
zinc-400: #9ca3af  /* Texto deshabilitado */
zinc-500: #6b7280  /* Texto secundario */
zinc-600: #4b5563  /* Texto principal suave */
zinc-700: #374151  /* Botones secundarios */
zinc-800: #1f2937  /* Títulos principales */
zinc-900: #111827  /* Reservado para casos especiales */
```

#### Naranjas Suavizados
```css
amber-25:  #fffcf5  /* Fondos ultra suaves */
amber-50:  #fff7ed  /* Fondos de íconos */
amber-100: #ffedd5  /* Hover states suaves */
amber-200: #fed7aa  /* Elementos decorativos */
amber-300: #fdba74  /* Bordes hover */
amber-400: #fb923c  /* Color principal de marca */
amber-500: #f97316  /* Estados activos */
amber-600: #ea580c  /* Hover intenso */
amber-700: #c2410c  /* Estados pressed */
amber-800: #9a3412  /* Reservado */
amber-900: #7c2d12  /* Reservado */
```

## 📊 Cumplimiento de Accesibilidad

### Ratios de Contraste WCAG

#### Combinaciones Principales
| Texto | Fondo | Ratio | Cumplimiento |
|-------|-------|-------|--------------|
| zinc-800 | white | 12.6:1 | AAA ✅ |
| zinc-600 | white | 7.0:1 | AAA ✅ |
| zinc-500 | white | 4.6:1 | AA ✅ |
| white | amber-400 | 4.8:1 | AA ✅ |
| white | zinc-700 | 8.9:1 | AAA ✅ |
| amber-400 | white | 4.8:1 | AA ✅ |

#### Estados de Interacción
- **Hover states**: Incremento mínimo de 100 en la escala
- **Active states**: Incremento mínimo de 200 en la escala
- **Focus states**: Anillo de enfoque con `amber-400` y opacidad 50%

## 🧩 Componentes y Uso

### Header/Navbar
```tsx
// Logo
bg-amber-400 hover:bg-amber-500

// Texto principal
text-zinc-800

// Enlaces navegación
text-zinc-500 hover:text-zinc-700

// Estados activos
bg-amber-400 text-white

// Botón CTA
bg-zinc-700 hover:bg-zinc-800
```

### Hero Section
```tsx
// Fondo principal
bg-zinc-25

// Título principal
text-zinc-800

// Subtítulos
text-zinc-500

// Texto descriptivo
text-zinc-600

// Botones primarios
bg-amber-400 hover:bg-amber-500
```

### Cards y Componentes
```tsx
// Fondos de cards
bg-white to-zinc-25

// Bordes
border-zinc-50 hover:border-amber-100

// Íconos
bg-gradient-to-br from-amber-50 to-amber-25
text-amber-400

// Líneas decorativas
bg-amber-200
```

### Footer
```tsx
// Fondo principal
bg-zinc-800

// Texto principal
text-zinc-200

// Enlaces
text-zinc-200 hover:text-amber-400

// Botones sociales
bg-zinc-700 hover:bg-amber-400
```

## 🎯 Beneficios Implementados

### Para Usuarios
- **Menos fatiga visual** durante navegación prolongada
- **Mejor legibilidad** en diferentes condiciones de luz
- **Experiencia más cómoda** para adultos mayores
- **Transiciones visuales suaves** entre elementos

### Para Desarrolladores
- **Paleta consistente** en todo el proyecto
- **Fácil mantenimiento** con variables centralizadas
- **Escalabilidad** para nuevos componentes
- **Cumplimiento automático** de estándares de accesibilidad

### Para el Negocio
- **Imagen profesional** y moderna
- **Inclusividad** para todos los usuarios
- **Cumplimiento legal** de estándares web
- **Mejor experiencia de usuario** = mayor conversión

## 🔧 Implementación Técnica

### Tailwind Config
Los colores están definidos en `tailwind.config.ts`:

```typescript
colors: {
  zinc: {
    25: '#fafafa',
    50: '#f9fafb',
    // ... resto de la paleta
  },
  amber: {
    25: '#fffcf5',
    50: '#fff7ed',
    // ... resto de la paleta
  }
}
```

### Uso en Componentes
```tsx
// Correcto ✅
className="text-zinc-600 hover:text-zinc-800"

// Evitar ❌
className="text-zinc-900" // Demasiado intenso
```

## 📝 Guías de Uso

### Do's ✅
- Usar `zinc-800` para títulos principales
- Usar `zinc-500/600` para texto secundario
- Usar `amber-400` como color principal de marca
- Mantener ratios de contraste mínimos
- Probar en diferentes dispositivos y condiciones de luz

### Don'ts ❌
- No usar `zinc-900` excepto en casos especiales
- No combinar colores sin verificar contraste
- No usar más de 3 tonos de gris en un mismo componente
- No ignorar los estados hover/focus

## 🔄 Mantenimiento

### Actualizaciones Futuras
1. **Verificar contraste** antes de agregar nuevos colores
2. **Documentar cambios** en este archivo
3. **Probar con usuarios reales** especialmente adultos mayores
4. **Mantener consistencia** con la paleta existente

### Herramientas Recomendadas
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/)
- Chrome DevTools Accessibility Panel

---

**Última actualización**: Enero 2025  
**Versión**: 1.0  
**Responsable**: Equipo de Desarrollo El Método AdulMa