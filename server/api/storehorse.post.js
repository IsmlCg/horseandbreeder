import { PrismaClient } from "@prisma/client";
// import { VercelRequest, VercelResponse } from "@vercel/node";

const prisma = new PrismaClient();
// @ts-ignore
export default defineEventHandler(async (event) => {
  try {
    // @ts-ignore1
    const query = getQuery(event);
    const apiResponse = await prisma.storehorse.findMany({
      skip: Number(query.offset), // Skip the first 9 rows (positions 1 to 5)
      take: Number(query.limit), // Take the next 6 rows (positions 6 to 10)
      where: {
        birthyear: {
          lt: Number(query.id),
        },
      },
    });
    // res.status(200).json({ message: 'Post request successful', data: apiResponse });
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
});
