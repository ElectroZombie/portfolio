# Portfolio - Eric Michel Villavicencio Reyes

## Descripción

Portafolio profesional moderno desarrollado con Angular 19, siguiendo las mejores prácticas de desarrollo web y arquitectura modular.

## Características

- 🎨 **Diseño Cyberpunk**: Tema visual moderno con colores rojo neón y cian
- 📱 **Responsive Design**: Optimizado para dispositivos móviles y desktop
- ⚡ **Alto Rendimiento**: Componentes standalone y lazy loading
- 🎯 **Arquitectura Modular**: Separación clara de responsabilidades
- 🔧 **TypeScript Strict**: Tipado fuerte para mayor seguridad
- 🎭 **Animaciones Suaves**: Transiciones elegantes y efectos visuales

## Estructura del Proyecto

```
src/
├── app/
│   ├── core/
│   │   ├── models/          # Modelos de datos
│   │   ├── services/        # Servicios centralizados
│   │   └── constants/       # Constantes de la aplicación
│   ├── features/            # Módulos feature
│   │   ├── home/
│   │   ├── about/
│   │   ├── skills/
│   │   ├── projects/
│   │   ├── experience/
│   │   └── contact/
│   ├── shared/
│   │   ├── components/      # Componentes reutilizables
│   │   ├── layouts/         # Layouts compartidos
│   │   └── pipes/           # Pipes personalizadas (futuro)
│   ├── styles/              # Estilos globales y variables
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
├── styles.scss              # Estilos globales
└── main.ts
```

## Instalación y Desarrollo

### Requisitos
- Node.js 18+
- npm 9+

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/ElectroZombie/portfolio.git
   cd portfolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm start
   ```
   La aplicación estará disponible en `http://localhost:4200/`

4. **Compilar para producción**
   ```bash
   npm run build
   ```

## Tecnologías Utilizadas

- **Framework**: Angular 19.2
- **Lenguaje**: TypeScript 5.7
- **Estilos**: SCSS
- **Componentes**: Standalone Components
- **Enrutamiento**: Angular Router
- **State Management**: RxJS Observables

## Mejores Prácticas Implementadas

✅ Componentes standalone
✅ Lazy loading de rutas
✅ Separación de responsabilidades
✅ Servicios centralizados (CvService)
✅ Modelos tipados fuertemente
✅ Constantes centralizadas
✅ Estilos modulares y reutilizables
✅ Reactive Programming con RxJS
✅ Estructura de carpetas clara
✅ Código limpio y bien documentado

## Scripts Disponibles

```bash
npm start          # Inicia el servidor de desarrollo
npm run build      # Compila para producción
npm run watch      # Compila en modo watch
npm test           # Ejecuta los tests unitarios
```

## Variables de Entorno

No requiere configuración especial de variables de entorno. Los datos se cargan desde `CV_DATA` en `core/constants/cv.constant.ts`.

## Customización

### Cambiar colores
Edita `src/app/styles/variables.scss`:
```scss
$neon-red: #ff0055;
$neon-cyan: #00d9ff;
```

### Agregar información personal
Modifica `src/app/core/constants/cv.constant.ts` con tus datos.

## Autor

**Eric Michel Villavicencio Reyes**
- 📧 [Email](mailto:daphniphyllum901@gmail.com)
- 🔗 [GitHub](https://github.com/ElectroZombie)
- 📱 +5354939174

## Licencia

Este proyecto está bajo la Licencia MIT.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para cambios importantes.
