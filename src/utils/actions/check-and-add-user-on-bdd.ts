import { PrismaClient } from "@/src/generated/prisma/client";

const prisma = new PrismaClient();

/**
 * Checks if a user with the given email exists on the BDD.
 * If the user does not exist, creates a new user with the given email and name.
 * @param {string} email The email of the user to check or add.
 * @param {any} name The name of the user to add.
 * @throws {Error} An error occurred while checking or adding the user to the BDD.
 */
const checkAndAddUserOnBDD = async (email: string, name: any) => {
  if (!email) return;

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (!existingUser) {
      await prisma.user.create({ data: { email, name } });
    }
  } catch (error) {
    console.error("Error checking or adding user to BDD:", error);
    throw error;
  }
};

export default checkAndAddUserOnBDD;
