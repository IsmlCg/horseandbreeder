import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function ( ) {
    try {
      const apiResponse = await prisma.events.findMany();
      return {
        status: 200,
        body: JSON.stringify(apiResponse),
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        status: 500,
        body: JSON.stringify({ error: "Internal Server Error" }),
      };
    } finally {
      await prisma.$disconnect();
    }
  }