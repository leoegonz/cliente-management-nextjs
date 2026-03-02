# Cliente Management - Next.js

Aplicación web full-stack para gestión de clientes construida con Next.js, TypeScript, PostgreSQL y Prisma ORM.

## Características

- CRUD completo de clientes
- Búsqueda en tiempo real por nombre o email
- Interfaz moderna y responsiva con Tailwind CSS
- API REST con validaciones
- Manejo de estados y errores
- Base de datos PostgreSQL con Prisma ORM

##  Tecnologías

- **Frontend:** Next.js 14, React, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes
- **Base de Datos:** PostgreSQL
- **ORM:** Prisma
- **Validaciones:** Validación de email, campos requeridos

## 📦 Instalación

### Prerequisitos

- Node.js 18+ 
- PostgreSQL 15+
- npm o yarn

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/TU_USUARIO/cliente-management-nextjs.git
cd cliente-management-nextjs
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**

Crea un archivo `.env` en la raíz del proyecto:
```env
DATABASE_URL="postgresql://postgres:tu_password@localhost:5433/clientes_db?schema=public"
```

Reemplaza `tu_password` con tu contraseña de PostgreSQL y ajusta el puerto si es necesario.

4. **Crear la base de datos**
```sql
CREATE DATABASE clientes_db;
```

5. **Ejecutar migraciones**
```bash
npx prisma migrate dev
```

6. **Insertar datos de prueba (opcional)**
```bash
npm run seed
```

7. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## API Endpoints

### Clientes

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/clientes` | Listar todos los clientes |
| GET | `/api/clientes?search=texto` | Buscar clientes por nombre o email |
| GET | `/api/clientes/:id` | Obtener un cliente específico |
| POST | `/api/clientes` | Crear nuevo cliente |
| PUT | `/api/clientes/:id` | Actualizar cliente |
| DELETE | `/api/clientes/:id` | Eliminar cliente |

### Ejemplo de Request Body (POST/PUT)
```json
{
  "nombre": "Juan Pérez",
  "email": "juan.perez@example.com",
  "estado": true
}
```

##  Postman Collection

Importa la colección `postman_collection.json` incluida en el repositorio para probar todos los endpoints.

## Estructura del Proyecto
```
cliente-management-nextjs/
├── app/
│   ├── api/
│   │   └── clientes/
│   │       ├── route.ts           # GET all, POST
│   │       └── [id]/
│   │           └── route.ts       # GET one, PUT, DELETE
│   ├── layout.tsx
│   ├── page.tsx                   # Página principal
│   └── globals.css
├── prisma/
│   ├── schema.prisma              # Esquema de la base de datos
│   ├── seed.ts                    # Datos de prueba
│   └── migrations/                # Historial de migraciones
├── .env                           # Variables de entorno
├── postman_collection.json        # Colección de Postman
└── README.md
```

## Funcionalidades de la Interfaz

- **Listado de clientes:** Tabla con información completa
- **Búsqueda:** Filtrado en tiempo real
- **Crear cliente:** Modal con formulario de validación
- **Editar cliente:** Modificar datos existentes
- **Eliminar cliente:** Confirmación antes de eliminar
- **Estados visuales:** Indicadores de activo/inactivo

## Validaciones

- Email único (no se permiten duplicados)
- Formato de email válido
- Nombre y email requeridos
- Manejo de errores con mensajes claros

## 📄 Licencia

MIT

## Autor

Sofia Espinola - [GitHub](https://github.com/leoegonz)