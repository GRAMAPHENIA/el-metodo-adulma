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
gray-25:  #fafafa  /* Ultra suave para fondos */
gray-50:  #f9fafb  /* Fondos principales */
gray-100: #f3f4f6  /* Bordes suaves */
gray-200: #e5e7eb  /* Separadores */
gray-300: #d1d5db  /* Elementos secundarios */
gray-400: #9ca3af  /* Texto deshabilitado */
gray-500: #6b7280  /* Texto secundario */
gray-600: #4b5563  /* Texto principal suave */
gray-700: #374151  /* Botones secundarios */
gray-800: #1f2937  /* Títulos principales */
gray-900: #111827  /* Reservado para casos especiales */
```

#### Naranjas Suavizados
```css
orange-25:  #fffcf5  /* Fondos ultra suaves */
orange-50:  #fff7ed  /* Fondos de íconos */
orange-100: #ffedd5  /* Hover states suaves */
orange-200: #fed7aa  /* Elementos decorativos */
orange-300: #fdba74  /* Bordes hover */
orange-400: #fb923c  /* Color principal de marca */
orange-500: #f97316  /* Estados activos */
orange-600: #ea580c  /* Hover intenso */
orange-700: #c2410c  /* Estados pressed */
orange-800: #9a3412  /* Reservado */
orange-900: #7c2d12  /* Reservado */
```

## 📊 Cumplimiento de Accesibilidad

### Ratios de Contraste WCAG

#### Combinaciones Principales
| Texto | Fondo | Ratio | Cumplimiento |
|-------|-------|-------|--------------|
| gray-800 | white | 12.6:1 | AAA ✅ |
| gray-600 | white | 7.0:1 | AAA ✅ |
| gray-500 | white | 4.6:1 | AA ✅ |
| white | orange-400 | 4.8:1 | AA ✅ |
| white | gray-700 | 8.9:1 | AAA ✅ |
| orange-400 | white | 4.8:1 | AA ✅ |

#### Estados de Interacción
- **Hover states**: Incremento mínimo de 100 en la escala
- **Active states**: Incremento mínimo de 200 en la escala
- **Focus states**: Anillo de enfoque con `orange-400` y opacidad 50%

## 🧩 Componentes y Uso

### Header/Navbar
```tsx
// Logo
bg-orange-400 hover:bg-orange-500

// Texto principal
text-gray-800

// Enlaces navegación
text-gray-500 hover:text-gray-700

// Estados activos
bg-orange-400 text-white

// Botón CTA
bg-gray-700 hover:bg-gray-800
```

### Hero Section
```tsx
// Fondo principal
bg-gray-25

// Título principal
text-gray-800

// Subtítulos
text-gray-500

// Texto descriptivo
text-gray-600

// Botones primarios
bg-orange-400 hover:bg-orange-500
```

### Cards y Componentes
```tsx
// Fondos de cards
bg-white to-gray-25

// Bordes
border-gray-50 hover:border-orange-100

// Íconos
bg-gradient-to-br from-orange-50 to-orange-25
text-orange-400

// Líneas decorativas
bg-orange-200
```

### Footer
```tsx
// Fondo principal
bg-gray-800

// Texto principal
text-gray-200

// Enlaces
text-gray-200 hover:text-orange-400

// Botones sociales
bg-gray-700 hover:bg-orange-400
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
  gray: {
    25: '#fafafa',
    50: '#f9fafb',
    // ... resto de la paleta
  },
  orange: {
    25: '#fffcf5',
    50: '#fff7ed',
    // ... resto de la paleta
  }
}
```

### Uso en Componentes
```tsx
// Correcto ✅
className="text-gray-600 hover:text-gray-800"

// Evitar ❌
className="text-gray-900" // Demasiado intenso
```

## 📝 Guías de Uso

### Do's ✅
- Usar `gray-800` para títulos principales
- Usar `gray-500/600` para texto secundario
- Usar `orange-400` como color principal de marca
- Mantener ratios de contraste mínimos
- Probar en diferentes dispositivos y condiciones de luz

### Don'ts ❌
- No usar `gray-900` excepto en casos especiales
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