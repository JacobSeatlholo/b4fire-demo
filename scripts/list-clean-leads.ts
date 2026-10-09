import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function main() {
  const before = await db.lead.findMany({
    select: { id: true, ref: true, name: true, email: true, source: true, createdAt: true },
  });
  console.log("BEFORE:", JSON.stringify(before, null, 2));

  // keep only real leads from this verification round: "Demo Verify"
  const del = await db.lead.deleteMany({
    where: { name: { not: "Demo Verify" } },
  });
  console.log("deleted:", del.count);

  const after = await db.lead.findMany({ select: { ref: true, name: true, source: true } });
  console.log("AFTER:", JSON.stringify(after));
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
