# 🛍️ E-commerce Tienda Web

> **Aplicación web completa de comercio electrónico** desarrollada con HTML5, CSS3, JavaScript y APIs REST. Incluye carrito de compras, gestión de productos, formularios de contacto y diseño responsive.

[![Demo Live](https://img.shields.io/badge/Demo-Live-brightgreen)](link-al-demo)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

## 🎯 Características Principales

- **🛒 Carrito de Compras:** Funcionalidad completa con agregado, eliminación y cálculo de totales
- **📱 Diseño Responsive:** Optimizado para desktop, tablet y móvil
- **🔍 Catálogo de Productos:** Integración con FakeStore API para productos dinámicos
- **📧 Formulario de Contacto:** Integrado con Formspree para envío de mensajes
- **💾 Persistencia de Datos:** LocalStorage para mantener el carrito entre sesiones
- **🎨 Interfaz Moderna:** CSS Grid, Flexbox y animaciones CSS

## 🚀 Demo en Vivo

🔗 **[Ver Aplicación en Vivo](link-al-deployment)**

### Capturas de Pantalla

<div align="center">
  <img src="./docs/screenshots/homepage.png" alt="Página Principal" width="45%">
  <img src="./docs/screenshots/products.png" alt="Página de Productos" width="45%">
</div>

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con Grid y Flexbox
- **JavaScript ES6+** - Lógica de aplicación
- **Bootstrap 5** - Framework CSS para responsive design
- **Font Awesome** - Iconografía

### APIs & Servicios
- **FakeStore API** - Datos de productos
- **Formspree** - Gestión de formularios
- **LocalStorage** - Persistencia local

## 📦 Instalación y Configuración

### Prerrequisitos
- Navegador web moderno
- Servidor local (opcional, para desarrollo)

### Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/ecommerce-tienda-web.git
   cd ecommerce-tienda-web
   ```

2. **Abrir con Live Server (VS Code):**
   ```bash
   # Instalar Live Server extension en VS Code
   # Click derecho en index.html > "Open with Live Server"
   ```

3. **O abrir directamente:**
   ```bash
   # Abrir index.html en tu navegador
   open index.html
   ```

## 🏗️ Estructura del Proyecto

```
ecommerce-tienda-web/
├── 📁 css/
│   └── styles.css          # Estilos principales
├── 📁 html/
│   ├── productos.html      # Catálogo de productos
│   ├── contacto.html       # Formulario de contacto
│   ├── ubicacion.html      # Información de ubicación
│   └── compra.html         # Proceso de checkout
├── 📁 js/
│   ├── carousel.js         # Carrusel de productos
│   ├── carrito.js          # Lógica del carrito
│   ├── product_list.js     # Lista de productos
│   ├── compra.js           # Proceso de compra
│   └── vista_3d.js         # Efectos 3D
├── 📁 img/
│   ├── logo.webp           # Logo de la tienda
│   └── banner.jpg          # Banner principal
├── 📁 docs/
│   └── screenshots/        # Capturas de pantalla
├── 📁 .vscode/
│   ├── methodology.md      # Metodología de desarrollo
│   └── git-conventions.md  # Convenciones de Git
├── index.html              # Página principal
└── README.md               # Este archivo
```

## 🎯 Funcionalidades Implementadas

### ✅ Completadas
- [x] Diseño responsive con CSS Grid
- [x] Carrito de compras funcional
- [x] Integración con API externa
- [x] Formularios de contacto
- [x] Persistencia de datos local
- [x] Efectos visuales y animaciones
- [x] Navegación entre páginas

### 🚧 En Desarrollo
- [ ] Sistema de búsqueda de productos
- [ ] Filtros por categoría
- [ ] Autenticación de usuarios
- [ ] Panel de administración

### 💡 Futuras Mejoras
- [ ] PWA (Progressive Web App)
- [ ] Integración con pasarelas de pago
- [ ] Sistema de reviews/calificaciones
- [ ] Chat en tiempo real

## 🔧 Desarrollo

### Scripts de Desarrollo
```bash
# Iniciar servidor de desarrollo
npm run dev

# Ejecutar tests
npm run test

# Build para producción
npm run build
```

### Configuración del Entorno
1. Configurar VS Code con extensiones recomendadas
2. Seguir las convenciones de código establecidas
3. Usar la metodología de desarrollo documentada

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork del proyecto
2. Crear rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit de cambios (`git commit -m 'feat: agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request

### Convenciones de Código
- Seguir las convenciones establecidas en `.vscode/git-conventions.md`
- Código comentado y autodocumentado
- Tests para nuevas funcionalidades

## 📈 Métricas del Proyecto

- **Líneas de código:** ~2,000+
- **Archivos:** 15+
- **Commits:** 20+
- **Tiempo de desarrollo:** 4 semanas

## 🐛 Reportar Issues

Si encuentras algún problema:
1. Verificar que no esté reportado ya
2. Crear issue con descripción detallada
3. Incluir pasos para reproducir
4. Screenshots si aplica

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👨‍💻 Autor

**Matías** - [GitHub](https://github.com/tu-usuario) | [LinkedIn](https://linkedin.com/in/tu-perfil)

---

<div align="center">
  <p>⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!</p>
  
  [![GitHub followers](https://img.shields.io/github/followers/tu-usuario?label=Follow&style=social)](https://github.com/tu-usuario)
  [![GitHub stars](https://img.shields.io/github/stars/tu-usuario/ecommerce-tienda-web?style=social)](https://github.com/tu-usuario/ecommerce-tienda-web/stargazers)
</div>



