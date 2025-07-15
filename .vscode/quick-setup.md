# ⚙️ Guía de Configuración Rápida - Copilot Mentor Mode

## 🚀 Activación Inmediata

### **Opción 1: Comando Rápido**
```
@workspace Activar modo mentor siguiendo copilot-context.md
```

### **Opción 2: Comando Completo**
```
@workspace Aplicar contexto de copilot-context.md. Modo mentor colaborativo activado. Seguir metodología establecida: Análisis → Explicación → Propuesta → Autorización → Implementación → Validación → Documentación. Solicitar permiso antes de modificar código.
```

### **Opción 3: Configuración Manual**
En el chat de Copilot, escribir:
```
Actúa como mentor técnico colaborativo:
- Explica QUÉ, POR QUÉ y CÓMO en cada implementación
- Solicita autorización antes de modificar código
- Comenta exhaustivamente el código
- Enseña buenas prácticas actuales
- Sigue metodología: Análisis → Explicación → Propuesta → Autorización → Implementación

Contexto del proyecto: E-commerce web con HTML5, CSS3, JavaScript, Bootstrap, API REST. Usuario nivel principiante-intermedio buscando aprendizaje aplicado y empleabilidad.
```

## 🔧 Configuraciones Adicionales

### **VS Code Settings (Copilot):**
1. **Command Palette** (Ctrl+Shift+P)
2. **"GitHub Copilot: Configure"**
3. **Activar configuraciones:**
   - ✅ Enable Copilot
   - ✅ Enable Chat
   - ✅ Enable Completions
   - ✅ Enable in comments

### **Workspace Configuration:**
- ✅ Archivo `.code-workspace` configurado
- ✅ Settings específicos del proyecto
- ✅ Extensiones recomendadas
- ✅ Configuración de Git

## 📱 Uso en Dispositivos/Sesiones

### **Nueva Máquina:**
1. Clonar repositorio
2. Abrir workspace (`.code-workspace`)
3. Instalar extensiones recomendadas
4. Usar comando de activación

### **Nueva Sesión:**
1. Abrir proyecto
2. Activar contexto con comando
3. Verificar que responde en modo mentor

### **Colaboradores:**
1. Compartir archivo `copilot-context.md`
2. Instruir en uso del comando de activación
3. Verificar metodología aplicada

## 🎯 Validación del Contexto

### **✅ Copilot está en modo mentor si:**
- Explica conceptos antes de implementar
- Solicita autorización para cambios
- Comenta código exhaustivamente
- Proporciona alternativas
- Enseña buenas prácticas

### **❌ Reactivar contexto si:**
- Implementa sin explicación
- No solicita permisos
- Código sin comentarios
- Respuestas muy cortas
- No enseña conceptos

## 📋 Checklist de Configuración

### **Configuración Inicial:**
- [ ] Archivo `copilot-context.md` creado
- [ ] Workspace configurado
- [ ] Extensiones instaladas
- [ ] GitHub Copilot activado

### **Configuración de Sesión:**
- [ ] Comando de activación ejecutado
- [ ] Contexto validado con pregunta test
- [ ] Metodología confirmada
- [ ] Modo mentor activo

### **Configuración de Proyecto:**
- [ ] Metodología documentada
- [ ] Convenciones establecidas
- [ ] Templates preparados
- [ ] Referencias actualizadas

---

## 🚀 Comando de Test

**Para verificar que el contexto está activo:**
```
Explícame cómo implementarías una función de búsqueda siguiendo nuestra metodología
```

**Respuesta esperada:**
- Análisis detallado del requerimiento
- Explicación de conceptos involucrados
- Propuesta con alternativas
- Solicitud de autorización
- Plan de implementación paso a paso

---

**💡 Tip:** Guarda este archivo en favoritos para acceso rápido en futuras sesiones.
