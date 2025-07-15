# 🌿 Convenciones de Gestión de Ramas

## 📋 Estructura Estándar de Ramas

### **Ramas Principales**
- **`main`** - Rama principal estable, siempre deployable
- **`develop`** - Rama de desarrollo, integración de features

### **Ramas de Trabajo**
- **`feature/nombre-funcionalidad`** - Nuevas características
- **`fix/descripcion-error`** - Correcciones de bugs
- **`hotfix/descripcion-urgente`** - Correcciones críticas
- **`refactor/area-mejorada`** - Reestructuración de código
- **`docs/tema-documentado`** - Mejoras de documentación

### **Ramas Especiales del Proyecto**
- **`Proyecto_Final`** - 🔒 PROTEGIDA - Entrega académica
- **`Ampliacion_Web`** - Desarrollo y mejoras continuas

## 🎯 Reglas de Nomenclatura

### **Formato General:**
```
tipo/descripcion-breve-kebab-case
```

### **Ejemplos Correctos:**
- ✅ `feature/busqueda-productos`
- ✅ `fix/carousel-responsive`
- ✅ `refactor/carrito-modular`
- ✅ `docs/readme-installation`

### **Ejemplos Incorrectos:**
- ❌ `Esc` (sin contexto)
- ❌ `carrito-de-compras` (sin tipo)
- ❌ `Feature_Nueva` (CamelCase)
- ❌ `fix/error en formulario` (espacios)

## 🔄 Flujo de Trabajo con Ramas

### **1. Crear Nueva Rama:**
```bash
git checkout -b feature/nombre-funcionalidad
```

### **2. Trabajar y Commit:**
```bash
git add .
git commit -m "feat: implementar nueva funcionalidad"
```

### **3. Subir Rama:**
```bash
git push origin feature/nombre-funcionalidad
```

### **4. Crear Pull Request:**
- Desde GitHub o VS Code
- Revisar cambios
- Merge a rama principal

### **5. Limpiar Rama (Después del Merge):**
```bash
git branch -d feature/nombre-funcionalidad
git push origin --delete feature/nombre-funcionalidad
```

## 🏷️ Gestión de Tags

### **Tags de Versión:**
- `v1.0.0` - Versiones de release
- `v1.1.0` - Nuevas características
- `v1.0.1` - Correcciones de bugs

### **Tags Especiales:**
- `entrega-academica` - Versión final del curso
- `backup-pre-cleanup` - Respaldos antes de cambios grandes

## ✅ Checklist Antes de Crear Rama

- [ ] Nombre descriptivo y siguiendo convenciones
- [ ] Basada en la rama correcta (main/develop)
- [ ] Propósito claro y específico
- [ ] No duplica trabajo existente

---
**Última actualización:** 14 de julio de 2025
**Proyecto:** Comision-20015 - Ampliación Web
