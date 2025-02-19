import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryNames = [
	"Cars and Vehicles",
	"Animals and Pets",
	"Art and Collectibles",
	"Baby and Child",
	"Books and Magazines",
	"Business and Industrial",
	"Cameras and Optics",
	"Cell Phones and Accessories",
	"Clothing, Shoes and Accessories",
	"Computers/Tablets and Networking",
	"Consumer Electronics",
	"Dolls and Accessories",
	"Electrical and Industrial",
	"Entertainment Collectibles",
	"Fashion",
	"Health and Beauty",
	"Home and Garden",
	"Jewelry and Watches",
	"Music and Instruments",
	"Office Supplies",
	"Outdoors and Sports",
	"Pet Supplies",
	"Real Estate",
	"Religious Items",
];

const seedCategories = async () => {
	try {
		await db.insert(categories).values(
			categoryNames.map((name) => ({
				name,
				description: `This is a description for ${name}`,
			}))
		);
		console.log("Categories seeded successfully");
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

async function main() {
	await seedCategories();
}

main();
