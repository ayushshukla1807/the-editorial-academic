import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const prisma = new PrismaClient();

async function main() {
    try {
        // Read the residency data
        const residencyData = JSON.parse(
            fs.readFileSync(join(__dirname, 'data', 'Residency.json'), 'utf-8')
        );

        console.log('Starting to seed database...');

        // Get unique emails
        const uniqueEmails = [...new Set(residencyData.map(r => r.userEmail))];

        // Create all users
        console.log('Creating users...');
        for (const email of uniqueEmails) {
            await prisma.user.create({
                data: {
                    email,
                    name: email.split('@')[0],
                },
            });
            console.log(`✓ Created user: ${email}`);
        }

        console.log(`\n✅ Created ${uniqueEmails.length} users\n`);

        // Create all residencies
        console.log('Creating residencies...');
        let count = 0;
        for (const residency of residencyData) {
            await prisma.residency.create({
                data: {
                    title: residency.title,
                    description: residency.description,
                    price: residency.price,
                    address: residency.address,
                    city: residency.city,
                    country: residency.country,
                    image: residency.image,
                    facilities: residency.facilities,
                    userEmail: residency.userEmail,
                },
            });
            count++;
            console.log(`✓ Added: ${residency.title}`);
        }

        console.log(`\n✅ Successfully seeded ${count} residencies!`);
    } catch (error) {
        console.error('❌ Error seeding database:', error.message);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();
