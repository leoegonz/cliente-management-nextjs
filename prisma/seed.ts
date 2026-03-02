import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Limpiar datos existentes
  await prisma.cliente.deleteMany();

  // Crear clientes de ejemplo
  const clientes = await prisma.cliente.createMany({
    data: [
      {
        nombre: 'Juan Pérez',
        email: 'juan.perez@example.com',
        estado: true,
      },
      {
        nombre: 'María González',
        email: 'maria.gonzalez@example.com',
        estado: true,
      },
      {
        nombre: 'Carlos Rodríguez',
        email: 'carlos.rodriguez@example.com',
        estado: false,
      },
      {
        nombre: 'Ana Martínez',
        email: 'ana.martinez@example.com',
        estado: true,
      },
      {
        nombre: 'Pedro López',
        email: 'pedro.lopez@example.com',
        estado: true,
      },
    ],
  });

  console.log(`✅ ${clientes.count} clientes creados exitosamente`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });