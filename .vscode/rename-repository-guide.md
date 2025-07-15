# 🔄 Guía de Renombrado de Repositorio GitHub

## 📋 Proceso Paso a Paso

### **1. Renombrar en GitHub (Web)**

1. **Ir al repositorio en GitHub:**
   ```
   https://github.com/GaweinNakaros/Comision-20015
   ```

2. **Acceder a Settings:**
   - Click en la pestaña "Settings"
   - Scroll hasta la sección "Repository name"

3. **Cambiar el nombre:**
   - Nombre actual: `Comision-20015`
   - Nombre nuevo: `ecommerce-tienda-web`
   - Click en "Rename"

4. **Confirmar el cambio:**
   - GitHub mostrará advertencia sobre links rotos
   - Confirmar el cambio

### **2. Actualizar Remote Local**

```bash
# Verificar remote actual
git remote -v

# Actualizar URL del remote
git remote set-url origin https://github.com/GaweinNakaros/ecommerce-tienda-web.git

# Verificar cambio
git remote -v
```

### **3. Actualizar Referencias**

#### **En archivos del proyecto:**
- [ ] README.md (links internos)
- [ ] package.json (si existe)
- [ ] Documentación (.vscode/*.md)

#### **En servicios externos:**
- [ ] Formspree (actualizar referencia)
- [ ] Deployment services
- [ ] CI/CD pipelines

### **4. Comunicar el Cambio**

#### **Crear Issue de Migración:**
```markdown
# 🔄 Repositorio Renombrado

Este repositorio ha sido renombrado de `Comision-20015` a `ecommerce-tienda-web` 
para reflejar mejor su propósito y mantener estándares profesionales.

## Nuevas URLs:
- **Repositorio:** https://github.com/GaweinNakaros/ecommerce-tienda-web
- **Clone:** `git clone https://github.com/GaweinNakaros/ecommerce-tienda-web.git`

## Para colaboradores:
Actualizar remote local:
\`\`\`bash
git remote set-url origin https://github.com/GaweinNakaros/ecommerce-tienda-web.git
\`\`\`
```

### **5. Verificar Integridad**

- [ ] Clone del repo con nuevo nombre funciona
- [ ] Todos los links del README funcionan
- [ ] Services externos apuntan al nuevo repo
- [ ] Tags y releases se preservaron

## 🎯 Beneficios Esperados

### **SEO y Descubrimiento:**
- ✅ Mejor posicionamiento en búsquedas GitHub
- ✅ Más claro para reclutadores
- ✅ Keywords relevantes (ecommerce, web)

### **Profesionalismo:**
- ✅ Nombre descriptivo y claro
- ✅ Sin referencias académicas
- ✅ Estándar de la industria

### **Portfolio:**
- ✅ Presentable a clientes
- ✅ Fácil de incluir en CV
- ✅ URL compartible

---
**⚠️ Importante:** GitHub automáticamente redirige URLs antiguas, pero es buena práctica actualizar todas las referencias.
